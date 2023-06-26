import React from "react";
import { NavLink } from "react-router-dom";

const AuthBtn = () => {
  const auth = () => {
    const user = localStorage.getItem("User");
    if (user) return true;
    else return false;
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload()
  };

  const btnForHeader = () => {
    if (auth()) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Narmin
          </button>
          <ul className="dropdown-menu">
            <li onClick={logOut}>
              <a className="dropdown-item" >
                LogOut
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return <NavLink to="/login">Login</NavLink>;
    }
  };

  return <div>{btnForHeader()}</div>;
};

export default AuthBtn;
