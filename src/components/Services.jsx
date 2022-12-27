import React from 'react';
import {AiOutlineDown} from "react-icons/ai";

const Services = () => {
  return (
    <div id='services' className='bg2'>
        <div className='min-h-screen'>
        <div className='flex md:flex  justify-center items-center px-8 py-32'>
        <div className="grid gap-4 md:grid-cols-3 grid-rows-2">
        <div className='px-2 blue-glassmorphism'>
          <h1 className="w-full text-[#d2cfdd] text-2xl py-2">DeFi (Decentralized Finance)</h1>
          <p className='text-white py-2 px-2'>DeFi is a financial system built on blockchain technology that allows for financial transactions and activities to be conducted in a decentralized manner. DeFi has the potential to disrupt traditional financial systems by providing a more efficient, accessible, and transparent alternative.</p>
        </div>
        <div className='px-2 blue-glassmorphism'>
          <h3 className="w-full text-[#d2cfdd] text-2xl py-2">DAO (Decentralized Autonomous Organization)</h3>
          <p className='text-white py-2 px-2'>DAO is a digital organization that operates on blockchain technology and is governed by its members through a voting process. DAOs are often created to pursue a specific purpose or mission and are run by rules encoded into smart contracts. DAOs have the potential to revolutionize the way organizations are structured and run.</p>
        </div>
        <div className='px-2 blue-glassmorphism'>
          <h3 className="w-full text-[#d2cfdd] text-2xl py-2">NFT (Non-Fungible Token)</h3>
          <p className='text-white py-2 px-2'>NFT is a digital asset that represents ownership of a unique item or asset. Built on blockchain technology, NFTs are unique and verifiable and can be used to represent a wide range of assets. NFTs have gained significant attention due to their potential to revolutionize the way digital assets are bought, sold, and collected.</p>
        </div>
        <div className='px-2 blue-glassmorphism'>
          <h3 className="w-full text-[#d2cfdd] text-2xl py-2">dApp (Decentralized Application)</h3>
          <p className='text-white py-2 px-2'>DApp is a software application that runs on a decentralized network, such as a blockchain. dApps are built on decentralized protocols and can be used for a wide range of purposes, including social networking, gaming, finance, and more. dApps have the potential to revolutionize the way applications are built and used.</p>
        </div>
        <div className='px-2 blue-glassmorphism'>
          <h3 className="w-full text-[#d2cfdd] text-2xl py-2">Crypto Tokens</h3>
          <p className='text-white py-2 px-2'>Cryptocurrency tokens are digital assets that are built on blockchain technology and used to represent a wide range of assets and functions. Cryptocurrency tokens can be used for a variety of purposes, including representing a stake in a company, providing access to a network or service, or enabling the creation and exchange of other assets.</p>
        </div>
        <div className='px-2 blue-glassmorphism'>
          <h3 className="w-full text-[#d2cfdd] text-2xl py-2">Smart Contracts</h3>
          <p className='text-white py-2 px-2'>Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. Smart contracts allow for the automation of contract execution and have the potential to revolutionize the way contracts are created and executed.</p>
        </div>
        </div>
        <a className='button-down' href='#works' ><AiOutlineDown/></a>
    </div>
        </div>
    </div>
  );
}

export default Services;
