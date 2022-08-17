import React, { useState, useRef } from 'react'
import "./Nftcard.css";
import {motion} from "framer-motion";
// import {useMoralis, useWeb3ExecuteFunction} from "react-moralis";
// import Config from "../../public/config/config.json";

function Nftcard({ isDecodeClicked,isEncodeClicked,setIsDecodeClicked,setIsEncodeClicked,classifiedData, isLoading, isAutehticated}) {
  
  // const formRef = useRef();
  // const {Moralis} = useMoralis();
  // const contractProcessor = useWeb3ExecuteFunction();
  // Morails.enableWeb3()
  const [isOpen, setIsOpen] = useState(false);
  // const [isEncodeClicked, setIsEncodeClicked] = useState(false);
  // const [isDecodeClicked, setIsDecodeClicked] = useState(false);
  // const [isBusy, setIsBusy] = useState(false)
  // const [encodedTokenId, setEncodedTokenId] = useState("");
  // const [decodedTokenId, setDecodedTokenId] = useState("");
  // const [decodedTokenMessage, setDecodedTokenMessage] = useState("");
  // const [fault, setFault] = useState("");

  const toggle = index => {
    if (isOpen === index) {
      return setIsOpen(null);
    }

    setIsOpen(index);
  };
  

  // const handleDecode = async () => {
  //   await Moralis.enableWeb3()
  //   // isBusy(true)
  //   const abiResponse = await fetch("/config/abi.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const abi = await abiResponse.json();
  //   const configResponse = await fetch("/config/config.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const config = await configResponse.json();

  //   const options = {
  //     contractAddress: config.CONTRACT_ADDRESS,
  //     functionName: "mintDecodedMessage",
  //     abi: abi,
  //     params: {
  //       tokenId: decodedTokenId,
  //       DecodedMessage: decodedTokenMessage
  //     },
  //   }
  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       console.log("Approval Received");
  //       setFault("You have successfully decoded the message, please wait before changes has been applied or refresh your metadata on opensea")
  //     },
  //     onError: (error) => {
  //       if(Array.isArray(error)){
  //         console.log("error", error);
  //         console.log("error is in array form")
  //         setFault(error)
  //       } else {
  //         console.log("error", error);
  //         console.log("error is in object form")
  //         setFault("Message is already decoded ")
  //       }
  //     },
  //   });
  // }

  // const handleEncode = async() => {
  //   await Moralis.enableWeb3()
  //   // isBusy(true)
  //   const abiResponse = await fetch("/config/abi.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const abi = await abiResponse.json();
  //   const configResponse = await fetch("/config/config.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const config = await configResponse.json();

  //   const options = {
  //     contractAddress: config.CONTRACT_ADDRESS,
  //     functionName: "mintEncodedMessage",
  //     abi: abi,
  //     params: {
  //       tokenId: encodedTokenId,
  //     },
  //   }
  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       console.log("Approval Received");
  //       setFault("You have successfully Encoded the message, please wait before changes has been applied or refresh your metadata on opensea")
  //     },
  //     onError: (error) => {
  //       if(Array.isArray(error)){
  //         console.log("error", error);
  //         console.log("error is in array form")
  //         setFault(error)
  //       } else {
  //         console.log("error", error);
  //         console.log("error is in object form")
  //         setFault("Message is already encoded ")
  //       }
  //     },
  //   });
  // }

  return (
    <div className='cardborder'>
        <div className='align'>
        {isLoading ?  
        
        <p>Loading</p>
        
         :
         <>
          {
          classifiedData.map((item, key)=>{
            return(
              <motion.div key={key} className='card'>
                  <motion.div onClick={()=>toggle(key)} className='cardImage'>
                  <img src={item.image} alt='#' />
                </motion.div>
                <motion.div className='cardName'>
                  <p>{item.name}</p>
                </motion.div>
               
               {isOpen === key ? (
                 
                 <motion.div className='cardButtonContainer' >
                 <motion.div className='cardToken'>
                  <p>{`Token id: ${item.token_id}`}</p>
                </motion.div>
                <div className='bbb'>
                    <motion.div className='cardButton'>
                      <p onClick={()=>{
                        setIsDecodeClicked(!isDecodeClicked)
                        setIsEncodeClicked(false)
                        }}>Decode</p>
                    </motion.div>
                    <motion.div className='cardButton'>
                      <p onClick={()=>{
                        setIsDecodeClicked(false)
                        setIsEncodeClicked(!isEncodeClicked)
                        
                        }}>Encode</p>
                    </motion.div>
                    </div>
                 </motion.div>
               ) : null}
            </motion.div>
            )
          })}
          </>
        }
            {/* <div className='DecodeContainer'>
            {isEncodeClicked && (
              <div className='decode'>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setEncodedTokenId(e.target.value)}} default={encodedTokenId} required="ture" className="inputField"  placeholder='Enter the token id' type="number" />
                </div>
                <div className='button'>
                  <button onClick={()=>handleEncode()}>{isBusy ? "Busy" : "Encode"}</button>
                </div>
                {fault && (
                <p className='fault'>{fault}</p>
            )}
              </div>
            )}
            {isDecodeClicked && (
              <div className='decode'>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setDecodedTokenId(e.target.value)}} default={decodedTokenId} className="inputField"  placeholder='Enter the token id' type="number" />
                </div>
                <div className='decodeInput'>
                  <input onChange={(e)=>{setDecodedTokenMessage(e.target.value)}} default={decodedTokenMessage} className="inputField"  placeholder='Enter the decoded message' type="text" />
                </div>
                <div className='button'>
                  <button onClick={(e)=>handleDecode()}>{isBusy ? "Busy" : "Decode"}</button>
                </div>
                {fault && (
                <p className='fault'>{fault}</p>
            )}
              </div>
            )}
            </div> */}
        </div>
    </div>
  )
}

export default Nftcard