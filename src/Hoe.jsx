import React from "react";
import Navbar from "./Navbar.jsx";
import Slide from "./Slide.jsx";
import AutoPlay from "./AutoPlay.jsx";
import Cards4 from "./Cards4.jsx";
import Cards6 from "./Cards6.jsx";
import Cards7 from "./Cards7.jsx";
import Cards8 from "./Cards8.jsx";
import Cards9 from "./Cards9.jsx";
import Bar from "./Bar.jsx";
import Cards10 from "./Cards10.jsx";
import Cards11 from "./Cards11.jsx";
import Footer from "./Footer.jsx";
import Popup from "./Popup.jsx";
import Cards3 from "./Cards3.jsx";
import Imege from "./Imege.jsx";
import Image1 from "./Image1.jsx";
import Card from "./Card.jsx";
import Cards5 from "./Cards5.jsx";
import Footer2 from "./Footer2.jsx";
import Login from "./Login.jsx";

const App = ({ list }) => {
  return (
    <div className="bg-[#f1f3f6]  pb-[140px] md:pb-0">
      <Popup />
      <Slide />
      <AutoPlay />
      <Card />
      <Imege />
      <Cards3 />
      <Cards4 />
      <Cards5 />
      <Cards6 />
      <Image1 />
      <Cards7 />
      <Cards8 />
      <Cards9 />
      <Bar />
      <Cards11 list={list} />
      <Cards10 />
      <Footer2 />
    </div>
  );
};

export default App;
