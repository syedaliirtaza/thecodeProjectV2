import react from "react"
import ConversionAbout from "../components/ConversionAbout";
import ConversionHeader from "../components/ConversionHeader/ConversionHeader";
import ConversionHex from "../components/ConversionHex";
import DecodeMain from "../components/DecodeMain";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import "./Decode.css";
import DecodeMint from "../components/DecodeMint";

function Conversion() {
  return (
    <div className="decode">
    <ConversionHeader />
    <div className="decodeContainer">
    <DecodeMain />
    {/* <DecodeMint /> */}
    </div>
  </div>
  )
}

export default Conversion