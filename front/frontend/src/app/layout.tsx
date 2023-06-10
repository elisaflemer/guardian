"use client";

import "./globals.css";
import WalletContext from "@/context/WalletContext";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inder&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <WalletContext.Provider
        value={{
          walletAddress,
          setWalletAddress,
          walletIsConnected,
          setWalletIsConnected,
        }}
      >
        <body className="bg-white text-zinc-700 font-lato"> {children}</body>
      </WalletContext.Provider>
    </html>
  );
}
