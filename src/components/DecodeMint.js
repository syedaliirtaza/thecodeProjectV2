import React, { useEffect, useState } from 'react'
import "./DecodeMain.css";
import Nftcard from './Nftcard';
import { ethers } from 'ethers';

function DecodeMint() {
    const [erorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [isConnecting, setIsConnecting] = useState("Connect")

  const authenticate = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        console.log(accounts[0])
        setDefaultAccount(accounts[0])
        setIsConnecting("Connected")

        const options = {method: 'GET', headers: {Accept: 'application/json'}};

        const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${window.userAddress}&order_direction=desc&offset=0&limit=50`, options)
    console.log(response.status)

    // const data = await response.json();
    // console.log(data)

    } else {
          setErrorMessage("Please Install MetaMask")
      }
  }

//   const getNftData = async () => {
//       if(!defaultAccount) return;

//     const response = await fetch(`https://api.opensea.io/api/v1/assets`)
//     console.log(response.status)

//     const data = await response.json();
//     console.log(data)
//   }

//   useEffect=(()=>{
//       getNftData();
//   },[defaultAccount])


    return (
    <div className='decodeContainer'>
        <div className='decodeConnect'>
            {erorMessage && (
                <p>{erorMessage}</p>
            )}
            {defaultAccount && (
                <p>{defaultAccount}</p>
            )}
            <button onClick={()=>authenticate()}>{isConnecting}</button>
        </div>
        
    </div>
  )
}

export default DecodeMint;