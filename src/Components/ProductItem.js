import React, { Component } from "react";
import "../index";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProductItem extends Component {
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
              <button
                className="btn btn-dark text-white rounded-1 px-4 py-3 mt-2 mb-3"
                onClick={() => {
                  const action = {
                    type: "ADDTOCART",
                    payload: { ...this.props.item },
                  };
                  this.props.dispatch(action);
                  toast.success("Added to the Cart !", {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                  });
                }}
              >
                Add to carts <i className="fa-solid fa-cart-shopping ms-2"></i>
              </button>
            </div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.arrCart,
  };
};

export default connect(mapStateToProps)(ProductItem);
