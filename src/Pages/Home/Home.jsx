import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import PopularClass from "../../Components/HomeComponents/PopularClass/PopularClass";
import PopularInstructor from "../../Components/HomeComponents/PopularInstructor/PopularInstructor";
import Stat from "../../Components/HomeComponents/Stat/Stat";
import About from "../../Components/HomeComponents/About/About";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <PopularClass />
      <PopularInstructor />
      <Stat />
    </div>
  );
};

export default Home;
