import React, { useContext, useState, useEffect } from 'react';
import defaultPfp from '../../../assets/images/defaultPfp.jpg';
import {
  StyledContainer,
  ProfileInfo,
  InfoBox,
  StyledPfp,
  StyledButton,
  InputField,
  MoneyField,
  BalanceBox,
  BalanceInfo,
} from '../style';
import { toast } from 'react-toastify';
import AuthContext from '../../../context/AuthContext';
import { useParams } from 'react-router';
import Button from '../../../components/Button/Button';
import USDT from '../../../USDT.json';
import * as ethers from 'ethers';
import * as BigNumber from 'big-number';
import Request from '../../../utils/Request';
import ClipLoader from 'react-spinners/ClipLoader';

const USDT_ABI = USDT;
const USDT_ADDRESS = '0x9FE7b16A0532f3B6FD3512df12A5B981fF9C2Da2';
const CONTRACT_ADDRESS = '0x827E8AA9E0f73229AEd872D4a12AE5102fc5Fe0a';

const MainView = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: 'loading...',
    lastName: 'loading...',
    email: 'loading...',
    address: 'loading...',
    balance: 'loading...',
    photo: {},
    cv: {},
  });
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [fund, setFund] = useState(0);
  const [updatedExtra, setUpdatedExtra] = useState(false);
  const { authToken, userID, setUserFirstName } = useContext(AuthContext);
  const { id } = useParams();

  const fetchBalance = () => {
    fetch(`/api/users/balance/`, Request('GET', '', authToken))
      .then(async (res) => {
        if (res.ok) return res.json();
        return Promise.reject(res.status);
      })
      .then((data) => {
        console.log(data);
        setUserDetails((userDetails) => {
          return {
            ...userDetails,
            balance: data.balance,
          };
        });
      })
      .catch((e) => {
        if (e === 401) toast.error('You are not authorized to view the balance');
        else toast.error(`We could not retrive your balance: error code ${e}`);
      });
  };

  useEffect(() => {
    let errorOccured = false;
    fetch(`/api/users/balance/`, Request('GET', '', authToken))
      .then(async (res) => {
        if (res.ok) return res.json();
        return Promise.reject(res.status);
      })
      .then((data) => {
        console.log(data);
        setUserDetails((userDetails) => {
          return {
            ...userDetails,
            balance: data.balance,
          };
        });
      })
      .catch((e) => {
        if (errorOccured) return;
        errorOccured = true;
        if (e === 401) toast.error('You are not authorized to view the balance');
        else toast.error(`We could not retrive your balance: error code ${e}`);
      });
    fetch(`/api/users/${id}/`, Request('GET', '', authToken))
      .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then((data) => {
        console.log(data);
        setUserDetails((userDetails) => {
          return {
            ...userDetails,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.username,
            address: data.wallet_address ? data.wallet_address : 'Please connect to metamask',
          };
        });
        if (data.profile_image) {
          fetch(data.profile_image, Request('GET', '', authToken));
          fetch(data.profile_cv, Request('GET', '', authToken));
          setUserDetails((userDetails) => {
            return { ...userDetails, photo: { preview: data.profile_image, data: '' } };
          });
        } else
          setUserDetails((userDetails) => {
            return { ...userDetails, photo: { preview: defaultPfp, data: '' } };
          });
        if (data.profile_cv) {
          fetch(data.profile_cv, Request('GET', '', authToken));
          setUserDetails((userDetails) => {
            return { ...userDetails, cv: { preview: data.profile_cv, data: '' } };
          });
        }
      })
      .catch((e) => {
        if (errorOccured) return;
        errorOccured = true;
        if (e === 401) toast.error('Not authorized, please log in');
        else toast.error(`We could not retrive your balance: error code ${e}`);
      });
  }, [id, authToken]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        setUserDetails({ ...userDetails, address: await signer.getAddress() });
        const formData = new FormData();
        formData.append('wallet_address', await signer.getAddress());

        const req = {
          method: 'PUT',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `token ${authToken}`,
            'ngrok-skip-browser-warning': 'true',
          },
          body: formData,
        };
        fetch(`/api/users/${id}/update/extra-details/`, req)
          .then(async (response) => {
            if (response.ok) return response.json();
            else {
              const e = await response.json();
              throw new Error(e);
            }
          })
          .then((data) => {
            if (data instanceof Array && data.includes('Address already exists.')) {
              toast.error('This address is already in use, please try another address');
            } else {
              toast('Updated address successfully');
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error('An Error Occurred, please try again');
          });
      } catch (e) {
        if (e.code === 4001) {
          toast.error('User rejected transaction');
        } else {
          toast.error('Unknow error');
        }
      }
    } else {
      toast.error('Please install MetaMask wallet to continue');
    }
  };

  const addFunds = async () => {
    fetch('/api/users/deposit/', Request('GET', '', authToken))
      .then((res) => {
        if (res.ok) return res.json();
        else return Promise.reject(res.status);
      })
      .then(async () => {
        let tx = null;
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
          const signer = provider.getSigner();
          const USDT_CONTRACT = new ethers.Contract(USDT_ADDRESS, USDT_ABI, signer);
          const pow = BigNumber(10).pow(18);
          console.log(pow);
          const value = BigNumber(fund).mult(pow);
          tx = await USDT_CONTRACT.transfer(CONTRACT_ADDRESS, value.toString());
        } catch (e) {
          if (e.toString().includes('amount exceeds balance')) {
            toast.error('You do not have enough balance');
          } else {
            toast.error('Error, please try again');
          }
          console.log(e);
        }
        if (tx == null) {
          throw new Error('Unable to handle the transaction');
        }
        const formData = new FormData();
        console.log(tx.hash);
        formData.append('transaction_hash', tx.hash);
        const req = {
          method: 'PUT',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `token ${authToken}`,
            'ngrok-skip-browser-warning': 'true',
          },
          body: formData,
        };
        const res = await fetch(`/api/users/${id}/update/extra-details/`, req);
        if (res.ok) {
          toast(
            'Got your request, you will be able to see your balance when we verify your transaction',
          );
        } else {
          return Promise.reject(res.status);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('profile_image', userDetails.photo.data);
    formData.append('profile_cv', userDetails.cv.data);

    const req = {
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `token ${authToken}`,
        'ngrok-skip-browser-warning': 'true',
      },
      body: formData,
    };
    fetch(
      `/api/users/${id}/update/`,
      Request(
        'PUT',
        {
          first_name: userDetails.firstName,
          last_name: userDetails.lastName,
        },
        authToken,
      ),
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw Error(response);
      })
      .then((data) => {
        toast('Account updated successfully');
        console.log(data);
        setUserDetails({ ...userDetails, firstName: data.first_name, lastName: data.last_name });
        localStorage.removeItem('userFirstName');
        localStorage.setItem('userFirstName', JSON.stringify(data.first_name));
        setUserFirstName(data.first_name);
      })
      .catch((error) => {
        console.log(error);
        toast.error('An Error Occurred, please try again');
      });
    if (updatedExtra)
      fetch(`/api/users/${id}/update/extra-details/`, req)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          toast('Profile photo updated successfully');
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('An Error Occurred, please try again');
        });
  };

  const handlePhotoChange = (e) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        photo: {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        },
      };
    });
  };

  const handleCVchange = (e) => {
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        cv: {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        },
      };
    });
  };
  const [loading, setLoading] = useState(false);
  const withdraw = () => {
    console.log('here');
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `token ${authToken}`,
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify({ amount: withdrawValue }),
    };
    console.log(req);
    setLoading(true);
    toast('Please wait until we verify the transaction');
    fetch(`/api/users/withdraw/`, req)
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        fetchBalance();
        toast('Withdraw request confirmed ');
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <>
      <StyledContainer>
        <section>
          <ProfileInfo>
            <h2>Profile Info:</h2>

            <label htmlFor='fname'>First name</label>
            {userID.toString() === id ? (
              <InputField
                type='text'
                id='fname'
                value={userDetails.firstName}
                onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
              />
            ) : (
              <InfoBox>{userDetails.firstName}</InfoBox>
            )}

            <label htmlFor='lname'>Last name</label>
            {userID.toString() === id ? (
              <InputField
                type='text'
                id='lname'
                value={userDetails.lastName}
                onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
              />
            ) : (
              <InfoBox>{userDetails.lastName}</InfoBox>
            )}

            {userID.toString() === id && (
              <>
                <label htmlFor='email'>Email</label>
                <InfoBox>{userDetails.email}</InfoBox>
              </>
            )}
            <label htmlFor='cv'>CV</label>
            {userID.toString() === id ? (
              userDetails.cv.preview ? (
                <>
                  <div className='download-file'>
                    <a href={userDetails.cv.preview} download>
                      <i className='fas fa-file-download'></i>
                      Download
                    </a>
                  </div>
                  <input
                    type='file'
                    id='cv'
                    name='cv'
                    src={userDetails.cv.preview}
                    onChange={(e) => {
                      handleCVchange(e);
                      setUpdatedExtra(true);
                    }}
                  />
                  <label className='update-file' htmlFor='cv'>
                    Update CV
                  </label>
                </>
              ) : (
                <>
                  <input
                    type='file'
                    id='cv'
                    name='cv'
                    src={userDetails.cv.preview}
                    onChange={(e) => {
                      handleCVchange(e);
                      setUpdatedExtra(true);
                    }}
                  />
                  <label className='update-file' htmlFor='cv'>
                    Update CV
                  </label>
                </>
              )
            ) : (
              <>
                {userDetails.cv.preview ? (
                  <div className='download-file'>
                    <a href={userDetails.cv.preview} download>
                      <i className='fas fa-file-download'></i>
                      Download
                    </a>
                  </div>
                ) : (
                  <InfoBox>Empty</InfoBox>
                )}
              </>
            )}

            {userID.toString() === id && <StyledButton onClick={handleUpdate}>Save</StyledButton>}
          </ProfileInfo>
          <StyledPfp>
            <img src={userDetails.photo.preview} alt='' />
            {userID.toString() === id && (
              <div className='update-photo-container'>
                <input
                  type='file'
                  id='photo'
                  name='photo'
                  accept='image/*'
                  src={userDetails.photo.preview}
                  onChange={(e) => {
                    handlePhotoChange(e);
                    setUpdatedExtra(true);
                  }}
                />
                <label className='update-photo' htmlFor='photo'>
                  Update Photo
                </label>
              </div>
            )}
          </StyledPfp>
        </section>
        {userID.toString() === id && (
          <BalanceInfo>
            <h2>Balance Info:</h2>
            <div id='money-container'>
              <div id='wallet-box'>
                <label htmlFor='wallet'>Wallet Address</label>
                <InfoBox>{userDetails.address}</InfoBox>
                <Button onClick={connectWallet}>
                  Connect wallet
                  <i style={{ paddingLeft: '0.5rem' }} className='fab fa-ethereum fa-l'></i>
                </Button>
              </div>
              <div id='balance-amount'>
                <label htmlFor='balance' style={{ display: 'block' }}>
                  Balance
                  {loading && (
                    <div style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
                      <ClipLoader size={20} />
                    </div>
                  )}
                </label>
                <BalanceBox name='balance'>{userDetails.balance}</BalanceBox>
              </div>
            </div>
            <div id='withdraw-deposit'>
              <div id='withdraw-box'>
                <label htmlFor='balance' style={{ display: 'block' }}>
                  Withdraw amount
                </label>
                <MoneyField
                  type='number'
                  id='fund'
                  name='withdraw'
                  value={withdrawValue}
                  onChange={(e) => setWithdrawValue(e.target.value)}
                />
                <div id='withdrawButton'>
                  <Button onClick={withdraw}>Withdraw</Button>
                </div>
              </div>
              <div id='deposit-box'>
                <label htmlFor='fund' style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Deposit funds
                </label>
                <MoneyField
                  type='number'
                  id='fund'
                  name='fund'
                  value={fund}
                  onChange={(e) => setFund(e.target.value)}
                />
                <div id='depositButton'>
                  <Button onClick={addFunds}>Deposit</Button>
                </div>
              </div>
            </div>
          </BalanceInfo>
        )}
      </StyledContainer>
    </>
  );
};

export default MainView;
