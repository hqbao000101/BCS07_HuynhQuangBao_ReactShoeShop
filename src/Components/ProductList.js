import React, { Component } from "react";
import ShoeData from "./data.json";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default class ProductList extends Component {
  state = {
    shoeItem: {
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
    },
  };

  setStateModal = (item) => {
    this.setState({
      shoeItem: item,
    });
  };

  render() {
    return (
      <>
        <div className="row">
          {ShoeData.map((product, index) => {
            return (
              <ProductItem
                key={index}
                item={product}
                setStateModal={this.setStateModal}
              />
            );
          })}
        </div>
        <Modal content={this.state.shoeItem} />
      </>
    );
  }
}
