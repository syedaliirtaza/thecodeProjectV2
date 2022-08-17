import react from "react"
import ConversionAbout from "../components/ConversionAbout";
import ConversionHeader from "../components/ConversionHeader/ConversionHeader";
import ConversionHex from "../components/ConversionHex";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import "./Conversion.css";

function Conversion() {
  return (
    <div className="conversion">
    <ConversionHeader />
    <div className="conversionContainer">
      <ConversionAbout />
      <ConversionHex />
      <Socials />
      <Footer />
    </div>
  </div>
  )
}

export default Conversion