import React, { Component } from "react";
import ShoeData from "./data.json";
import ProductItem from "./ProductItem";

export default class ShoeStore extends Component {
  state = {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  };

  render() {
    return (
      <>
        <div className="navigation">
          <nav>
            <ul>
              <li>Home</li>
              <li>Shop</li>
            </ul>
          </nav>
        </div>
        <h1 className="text-center my-5">Shoe Shop</h1>
        <div className="container">
          <div className="row">
            {ShoeData.map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
