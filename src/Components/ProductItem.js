import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { id, name, price, image } = this.props.item;
    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="item__container border border-3 p-3">
            <div className="item__image text-center">
              <img src={image} alt={`Shoe Pic ${id}`} className="img-fluid" />
            </div>
            <div className="item__content mt-4">
              <h3>{name}</h3>
              <p>${price}</p>
              <button className="btn btn-dark text-white rounded-0">
                Add to carts <i className="fa-solid fa-cart-shopping ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
