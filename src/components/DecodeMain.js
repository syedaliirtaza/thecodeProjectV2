import React, { useEffect, useState } from 'react'
import "./DecodeMain.css";
import {useMoralis, useMoralisWeb3Api,useWeb3ExecuteFunction} from "react-moralis"
import Nftcard from './Nftcard';
// import {useMoralis, useWeb3ExecuteFunction} from "react-moralis";

function DecodeMain() {
    const {Moralis,authenticate, isAuthenticated, authError, logout } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const [nftData, setNftData] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [classifiedData, setClassifiedData] = useState([]);
    const [erorrMessage, setErrorMessage] = useState("")
    
    const [isBusy, setIsBusy] = useState(false)
    const [isEncodeClicked, setIsEncodeClicked] = useState(false);
    const [isDecodeClicked, setIsDecodeClicked] = useState(false);
    const [fault, setFault] = useState("");
    const [encodedTokenId, setEncodedTokenId] = useState("");
  const [decodedTokenId, setDecodedTokenId] = useState("");
  const [decodedTokenMessage, setDecodedTokenMessage] = useState("");

  const contractProcessor = useWeb3ExecuteFunction();
  

  const handleDecode = async () => {
    await Moralis.enableWeb3()
    // isBusy(true)
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();

    const options = {
      contractAddress: config.CONTRACT_ADDRESS,
      functionName: "mintDecodedMessage",
      abi: abi,
      params: {
        tokenId: decodedTokenId,
        DecodedMessage: decodedTokenMessage
      },
    }
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("Approval Received");
        setFault("You have successfully decoded the message, please wait before changes has been applied or refresh your metadata on opensea")
      },
      onError: (error) => {
        if(Array.isArray(error)){
          console.log("error", error);
          console.log("error is in array form")
          setFault(error)
        } else {
          console.log("error", error);
          console.log("error is in object form")
          setFault("Message is already decoded ")
        }
      },
    });
  }

  const handleEncode = async() => {
    await Moralis.enableWeb3()
    // isBusy(true)
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();

    const options = {
      contractAddress: config.CONTRACT_ADDRESS,
      functionName: "mintEncodedMessage",
      abi: abi,
      params: {
        tokenId: encodedTokenId,
      },
    }
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("Approval Received");
        setFault("You have successfully Encoded the message, please wait before changes has been applied or refresh your metadata on opensea")
      },
      onError: (error) => {
        if(Array.isArray(error)){
          console.log("error", error);
          console.log("error is in array form")
          setFault(error)
        } else {
          console.log("error", error);
          console.log("error is in object form")
          setFault("Message is already encoded ")
        }
      },
    });
  }


    // const fixURL = (url) => {
    //         if(url.startsWith("ipfs")){
    //           return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://ipfs/").slice(-1)
    //         } else {
    //           return url+"?format=json"
    //         }
    //       }
    
    const fixMetaData = (meta) =>{
      const output = JSON.parse(meta)
      
      return output.image;
         }

    const fetchNftMetaData = async (NFTs) =>{
      let promises = [];
      for (let i = 0; i<NFTs.length; i++){
        let nft = NFTs[i];
        let nftName = nft.name;
        let fixableMetaData = nft.metadata;
        let image = fixMetaData(fixableMetaData);
        if(nftName === "The Code"){
          console.log("NFT FOUND...")
          promises.push({
            name: nft.name,
            token_id: nft.token_id,
            image: image 
          });
          setErrorMessage("NFTs Found...")
          setClassifiedData(promises);
          console.log(promises);
        } else {
          setClassifiedData([]);
          setErrorMessage("NFT Not Found")
        }
      }
    }

    const fetchNFTs = async () => {
        SetIsLoading(true);
        // get NFTs for current user on Mainnet
        const options = {
            chain: "rinkeby",
            limit: 3,
          };
          const ethNFTs = await Web3Api.account.getNFTs(options);
            let myNftData = await ethNFTs.result;
            console.log(myNftData)
            fetchNftMetaData(myNftData);
        SetIsLoading(false)
    }
     

    if(isAuthenticated){
        return(
            <div className='nContain'>
            <div className='NftContainer'>
                <Nftcard isDecodeClicked={isDecodeClicked} isEncodeClicked={isEncodeClicked} setIsEncodeClicked={setIsEncodeClicked} setIsDecodeClicked={setIsDecodeClicked} isAuthenticated={isAuthenticated} classifiedData={classifiedData} isLoading={isLoading} />
            </div>
            <div className='decodeInputContainer'>
            {isEncodeClicked && (
              <div className='decodeInputItems'>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setEncodedTokenId(e.target.value)}} default={encodedTokenId} required="ture" className="inputField"  placeholder='Enter the token id' type="number" />
                </div>
                <div className='decodeInputbutton'>
                  <button onClick={()=>handleEncode()}>{isBusy ? "Busy" : "Encode"}</button>
                </div>
                {fault && (
                <p className='fault'>{fault}</p>
            )}
              </div>
            )}
            {isDecodeClicked && (
              <div className='decodeInputItems'>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setDecodedTokenId(e.target.value)}} default={decodedTokenId} className="inputField"  placeholder='Enter the token id' type="number" />
                </div>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setDecodedTokenMessage(e.target.value)}} default={decodedTokenMessage} className="inputField"  placeholder='Enter the decoded message' type="text" />
                </div>
                <div className='decodeInputbutton'>
                  <button onClick={()=>handleDecode()}>{isBusy ? "Busy" : "Decode"}</button>
                </div>
                {fault && (
                <p className='fault'>{fault}</p>
            )}
              </div>
            )}
            </div>
            <div className='disconnectButton'>
                <button onClick={fetchNFTs}>Show NFTs</button> 
                <button onClick={()=>logout()}>Disconnect</button>
            </div>
            </div>
        )
    }

  return (
    <div className='decodeContainer'>
        <div className='decodeConnect'>
            {authError && (
                <p>{authError.message}</p>
            )}
            <p className='Error'>{erorrMessage}</p>
            <button onClick={()=>authenticate()}>Connect</button>
        </div>
        
    </div>
  )
}

export default DecodeMain;