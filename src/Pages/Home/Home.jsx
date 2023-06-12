import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import PopularClass from "../../Components/HomeComponents/PopularClass/PopularClass";
import PopularInstructor from "../../Components/HomeComponents/PopularInstructor/PopularInstructor";
import Stat from "../../Components/HomeComponents/Stat/Stat";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularClass />
      <PopularInstructor />
      <Stat />
    </div>
  );
};

export default Home;
