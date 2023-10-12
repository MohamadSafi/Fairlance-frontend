import { useAccount } from 'wagmi';
import Button from '../../../components/Button/Button';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import Fairlance from '../../../contract-artifacts/Fairlance.json';
import { ethers } from 'ethers';
import Withdraw from './Withdraw';

const Balance = () => {
  const { address } = useAccount();
  const etherAmount = ethers.utils.parseEther('0.001');

  const balancesReadResponse = useContractRead({
    address: '0xA0345116b3b0bdCE341A4176402Dc670c8b638A4',
    functionName: 'balances',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'balances',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    args: [address],
  });

  const onHoldBalanceReadResponse = useContractRead({
    address: '0xA0345116b3b0bdCE341A4176402Dc670c8b638A4',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'balances',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'onholdBalances',
    args: [address],
  });

  const { config } = usePrepareContractWrite({
    address: '0xA0345116b3b0bdCE341A4176402Dc670c8b638A4',
    abi: [
      {
        inputs: [],
        name: 'deposit',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    account: address,
    functionName: 'deposit',
    chainId: 420,
    value: etherAmount.toBigInt(),
    onSuccess (data) {
      console.log('Success', data);
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      {!onHoldBalanceReadResponse.isSuccess && (
        <main
          style={{
            marginTop: 100,
            marginBottom: 100,
            width: '100%',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              width: '60%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 20,
            }}
          >
            <h2 style={{ marginTop: 10 }}>Your Account:</h2>
            <h4 style={{ color: '#00e64d', marginTop: 5 }}>{address}</h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 100,
                gap: 100,
              }}
            >
              <h3 style={{ display: 'flex', gap: 5 }}>
                Your Balance:{' '}
                <h4 style={{ color: '#00e64d' }}>
                  {ethers.utils.formatEther(balancesReadResponse.data) || 0} ETH
                </h4>
              </h3>
              <h3 style={{ display: 'flex', gap: 5 }}>
                On Hold Balance:{' '}
                <h4 style={{ color: '#e60000' }}>
                  {ethers.utils.formatEther(onHoldBalanceReadResponse.data || 0) || 0} ETH
                </h4>
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 100,
                marginBottom: 100,
                gap: 100,
              }}
            >
              <Button disabled={!write} onClick={() => write?.()}>
                Deposit
              </Button>

              <Withdraw amount={balancesReadResponse.data} />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Balance;
