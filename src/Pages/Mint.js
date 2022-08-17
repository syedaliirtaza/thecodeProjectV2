import React from "react"
import ConversionHeader from "../components/ConversionHeader/ConversionHeader";
import Footer from "../components/Footer";
import MintMain from "../components/MintMain";
import Socials from "../components/Socials";
import "./Mint.css";

function Mint() {
  return (
    <div className="mint">
    <ConversionHeader />
    <div className="mintContainer">
      <MintMain />
    </div>
  </div>
  )
}

export default Mint