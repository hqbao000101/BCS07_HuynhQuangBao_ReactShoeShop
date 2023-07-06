import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  formatPrice = (currentPrice) => {
    const arrPrice = currentPrice.toString().split("");
    let count = 1;
    for (let i = arrPrice.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && i !== 0) {
        arrPrice[i] = `.${arrPrice[i]}`;
      }
      count++;
    }
    return arrPrice.join("");
  };

  render() {
    return (
      <>
        <table className="table text-center my-5">
          <thead>
            <tr className="fw-bold">
              <td>ID</td>
              <td>Image</td>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((item, index) => {
              return (
                <tr key={index}>
                  <td valign="middle">{index + 1}</td>
                  <td valign="middle">
                    <img
                      src={item.image}
                      alt={`Shoe Pic ${item.id}`}
                      width={200}
                    />
                  </td>
                  <td valign="middle">{item.name}</td>
                  <td id="product-desc" valign="middle">
                    {item.description}
                  </td>
                  <td valign="middle">
                    $ {this.formatPrice(item.price * item.quantity)}.00
                  </td>
                  <td valign="middle">
                    <i
                      className="fa-regular fa-square-minus me-3"
                      onClick={() => {
                        const action = {
                          type: "DECREASEQUANTITY",
                          payload: { ...item },
                        };
                        this.props.dispatch(action);
                      }}
                    ></i>
                    {item.quantity}
                    <i
                      className="fa-regular fa-square-plus ms-3"
                      onClick={() => {
                        const action = {
                          type: "ADDQUANTITY",
                          payload: { ...item },
                        };
                        this.props.dispatch(action);
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
            {this.props.product.length ? (
              <tr style={{ backgroundColor: "#f1f2f6" }}>
                <td></td>
                <td></td>
                <td></td>
                <td className="fw-bold py-4 text-end">Total Payment: </td>
                <td className="py-4" style={{ color: "#e67e22" }}>
                  ${" "}
                  {this.formatPrice(
                    this.props.product.reduce((accumulator, currentValue) => {
                      const currentPrice =
                        currentValue.price * currentValue.quantity;
                      return currentPrice + accumulator;
                    }, 0)
                  )}
                  .00
                </td>
                <td valign="middle">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const action = {
                        type: "REMOVEALL",
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Remove All
                  </button>
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.arrCart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
