// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
function App() {
  // const [count, setCount] = useState(0);
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe /> <Products />
      </div>
    </>
  );
}

export default App;
