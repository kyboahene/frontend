import React from "react";
import { Link } from "react-router-dom";

function SignedOutLinks(props) {
  return (
    <div
      className="dropdown-menu dropdown-menu-left dropdown-default mt-2"
      aria-labelledby="navbarDropdownMenuLink-333"
    >
      <Link className="dropdown-item dd-link" to="#">
        Yaw Boahene
      </Link>
      <Link className="dropdown-item dd-link" to="">
        Submit Videos
      </Link>
      <Link className="dropdown-item dd-link" to="/logout">
        Logout
      </Link>
    </div>
  );
}

export default SignedOutLinks;
