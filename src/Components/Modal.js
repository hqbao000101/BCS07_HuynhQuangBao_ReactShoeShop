import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { id, name, price, description, quantity, image } = this.props.content;
    return (
      <>
        <div className="modal fade" id="shoeDetailModal" tabIndex={-1}>
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "40vw" }}
          >
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h2 className="modal-title text-uppercase text-white">
                  Shoe Details
                </h2>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-5">
                    <img
                      src={image}
                      alt={`Shoe Pic ${id}`}
                      className="img-fluid border border-3"
                    />
                  </div>
                  <div className="col-7 d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="fw-bold fs-4">{name}</h4>
                      <p className="fw-semibold fs-5">$ {price.toFixed(2)}</p>
                      <p className="fs-5">{description}</p>
                    </div>
                    <p className="text-success fw-semibold fs-5 mb-1">
                      <span className="me-2 text-black">
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
