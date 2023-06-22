import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { name, price, description, quantity, image } = this.props.content;
    return (
      <>
        <div className="modal fade" id="shoeDetailModal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h2 className="modal-title text-uppercase text-white">
                  Shoe Details
                </h2>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <img src={image} alt="" className="img-fluid border border-3" />
                  </div>
                  <div className="col-8">
                    <h4 className="fw-bold">{name}</h4>
                    <p className="fw-bold">$ {price.toFixed(2)}</p>
                    <p>{description}</p>
                    <p className="text-success fw-bold">
                      <span className="me-2 fw-bolder text-black">
                        Quantity:
                      </span>
                      {quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
