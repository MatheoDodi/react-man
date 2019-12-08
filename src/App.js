import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import Main from "./components/Main";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Carousel />
    </>
  );
}

export default App;
