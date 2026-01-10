import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Latestproducts from "../components/Latestproducts";
import Layout from "../components/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Latestproducts />
    </Layout>
  );
};

export default Home;
