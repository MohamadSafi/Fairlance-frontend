import { useAccount } from 'wagmi';
import Button from '../../../components/Button/Button';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import Fairlance from '../../../contract-artifacts/Fairlance.json';
import { ethers } from 'ethers';

const Withdraw = ({ amount }) => {
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: '0xA0345116b3b0bdCE341A4176402Dc670c8b638A4',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    args: [amount],
    account: address,
    functionName: 'withdraw',
    chainId: 420,
    onSuccess (data) {
      console.log('Success', data);
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <Button disabled={!write} onClick={() => write?.()}>
      withdraw
    </Button>
  );
};
export default Withdraw;
