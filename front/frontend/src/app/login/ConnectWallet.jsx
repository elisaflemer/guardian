'use client'

import Link from 'next/link';
import { redirect } from 'next/navigation'
import WalletContext from "@/context/WalletContext";
import { useContext } from "react";

const ConnectWallet = () => {
  const {walletAddress, setWalletAddress, walletIsConnected, setWalletIsConnected} = useContext(WalletContext)

  const connect = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Install Metamask");
    } else {
      if (!walletIsConnected) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setWalletIsConnected(true);
      }
    }
  };

  return (
      <button
        type="button"
        className="button-blue-guardians py-1 px-2 w-4/5 mb-5"
        onClick={connect}
      >
        {walletIsConnected ? redirect('/feed') : "Connect wallet"}
      </button>
  );
};

export default ConnectWallet;
