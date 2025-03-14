import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductDetails from "@/components/Products/Details/ProductDetails";
import React from "react";

const page = () => {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="mt-5">
        <ProductDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
