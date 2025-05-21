"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image";

export default function PaymentsPage() {
  const [wallet, setWallet] = useState({
    address: "",
    balance: "",
    connected: false,
  });

  const [ethAmount, setEthAmount] = useState("");
  const [farmerAddress, setFarmerAddress] = useState(
    "0xFARMER_ETH_ADDRESS_HERE"
  );
  const [status, setStatus] = useState({ text: "", link: "", type: "" });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
      (window as any).ethereum.on("chainChanged", () =>
        window.location.reload()
      );
    }
  }, []);

  function handleAccountsChanged(accounts: string[]) {
    if (accounts.length === 0) {
      setWallet({ address: "", balance: "", connected: false });
    }
  }

  async function connectWallet() {
    if (!(window as any).ethereum) {
      // alert("MetaMask not installed");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceBigInt = await provider.getBalance(address);
      const balance = parseFloat(ethers.formatEther(balanceBigInt)).toFixed(4);

      setWallet({ address, balance, connected: true });
    } catch (err) {
      console.error(err);
      alert("Connection error");
    }
  }

  async function sendPayment() {
    if (!wallet.connected) {
      // alert("Connect wallet first.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: farmerAddress,
        value: ethers.parseEther(ethAmount),
      });

      setStatus({
        text: "Transaction submitted",
        link: `https://etherscan.io/tx/${tx.hash}`,
        type: "pending",
      });

      await tx.wait();

      setStatus({
        text: "Payment successful!",
        link: `https://etherscan.io/tx/${tx.hash}`,
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setStatus({ text: "Transaction failed", link: "", type: "error" });
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6">
        {/* ✅ Logo Section */}
        {/* <div className="flex flex-col items-center space-y-2">
          <Image
            src="/Logo.jpg" // ✅ Ensure the file exists in public/logo.png
            alt="App Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-green-700">
            Farmer Payment Portal
          </h1>
        </div> */}
        <div className="flex items-center space-x-4 justify-center">
          <Image
            src="/Logo.jpg" // ✅ Make sure the image exists in /public
            alt="App Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold text-green-700">
            Farmer Payment Portal
          </h1>
        </div>

        {!wallet.connected ? (
          <button
            onClick={connectWallet}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2.5 rounded w-full"
          >
            Connect MetaMask Wallet
          </button>
        ) : (
          <div className="bg-gray-100 p-3 rounded text-sm">
            <p>Wallet: {wallet.address}</p>
            <p>Balance: {wallet.balance} ETH</p>
          </div>
        )}

        <div>
          <label className="block font-medium mb-1">Farmer ETH Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={farmerAddress}
            onChange={(e) => setFarmerAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Amount (ETH)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
          />
        </div>

        <button
          onClick={sendPayment}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded w-full"
        >
          Send Payment
        </button>

        {status.text && (
          <div className="bg-gray-50 p-3 rounded mt-4 text-center">
            <p className="font-medium text-sm">{status.text}</p>
            {status.link && (
              <a
                href={status.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-xs underline"
              >
                View on Etherscan
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
