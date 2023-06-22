import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../index";

export default class ShoeStore extends Component {
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
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-10">
              <h1 className="text-center py-3 my-3 text-white bg-dark">Shoes Shop</h1>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
}
