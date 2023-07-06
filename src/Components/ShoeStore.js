import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../index";
import { connect } from "react-redux";

class ShoeStore extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 sidebar">
              <div className="navigation">
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        style={({ isActive }) =>
                          isActive ? { color: "#e67e22" } : {}
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="mt-3">
                      <NavLink
                        to="/shop"
                        style={({ isActive }) =>
                          isActive ? { color: "#e67e22" } : {}
                        }
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li className="mt-3">
                      <NavLink
                        to="/cart"
                        style={({ isActive }) =>
                          isActive ? { color: "#e67e22" } : {}
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-10">
              <div className="position-relative">
                <h1 className="text-center py-3 my-3 text-white bg-dark">
                  Shoes Shop
                </h1>
                <NavLink id="cart-wrapper" to="/cart">
                  <i id="cart-icon" className="fa-solid fa-cart-shopping"></i>
                  {this.props.product.length ? (
                    <div id="cart-quantity">
                      {this.props.product.reduce((accumulator, currentItem) => {
                        const currentQuantity = currentItem.quantity;
                        return accumulator + currentQuantity;
                      }, 0)}
                    </div>
                  ) : (
                    ""
                  )}
                </NavLink>
              </div>
              <Outlet />
            </div>
          </div>
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

export default connect(mapStateToProps)(ShoeStore);
