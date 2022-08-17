import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Conversion from "./Pages/Conversion";
import Mint from "./Pages/Mint";
import Decode from "./Pages/Decode";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/conversion' element={<Conversion />} />
        <Route path='/mint' element={<Mint />} />
        <Route path='/decode' element={<Decode />} />
        </Routes>
    </div>
  );
}

export default App;
