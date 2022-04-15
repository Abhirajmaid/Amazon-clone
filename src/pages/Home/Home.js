import React from "react";
import "./Home.css";
import Product from "./components/ProductCard/Product";
import { Data } from "./Data/ProductData";

function Home() {
  const product = Data.map((item) => {
    return <Product key={item.id} product={item} />;
  });
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB658235929_.jpg"
          alt="prime Banner"
        />
        <div className="product__container">
          <div className="home__row">{product}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
