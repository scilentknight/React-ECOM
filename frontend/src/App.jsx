// import { useState } from "react";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-80 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Welcome to MERN stack project</h2>
        <p className="text-sm">This is a real world ecommerce project that will develop on MERN. We will build everything step by step.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
