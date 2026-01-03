import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Latestproducts from "../components/Latestproducts";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Latestproducts />
      <Footer />
    </>
  );
};

export default Home;
