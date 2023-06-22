import React, { Component } from "react";
import "../index";

export default class ProductItem extends Component {
  render() {
    let { id, name, price, image } = this.props.item;
    return (
      <>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="item__container border border-3 p-4">
            <div className="item__image text-center">
              <img src={image} alt={`Shoe Pic ${id}`} className="img-fluid" />
            </div>
            <div className="item__content mt-4">
              <h3
                data-bs-toggle="modal"
                data-bs-target="#shoeDetailModal"
                onClick={() => {
                  this.props.setStateModal(this.props.item);
                }}
              >
                {name}
              </h3>
              <p className="fs-5">
                <span className="fw-bold">$</span> {price.toFixed(2)}
              </p>
              <button className="btn btn-dark text-white rounded-1 px-4 py-3 mt-2 mb-3">
                Add to carts <i className="fa-solid fa-cart-shopping ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
