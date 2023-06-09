import React from "react";
import Header from "../../Components/HomeComponents/Header/Header";
import PopularClass from "../../Components/HomeComponents/PopularClass/PopularClass";
import PopularInstructor from "../../Components/HomeComponents/PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Home;
