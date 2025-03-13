import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductListing from "@/components/Products/Listing/ProductListing";
import React from "react";

const page = () => {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="mt-5">
        <ProductListing />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
