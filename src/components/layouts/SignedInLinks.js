import React from "react";
import { Link } from "react-router-dom";

function SignedInLinks(props) {
  return (
    <div
      className="dropdown-menu dropdown-menu-left dropdown-default mt-2"
      aria-labelledby="navbarDropdownMenuLink-333"
    >
      <Link className="dropdown-item dd-link" to="/signin">
        Yaw Boahene
      </Link>
      <Link className="dropdown-item dd-link" to="/signup">
        Submit Videos
      </Link>
      <Link className="dropdown-item dd-link" to="">
        Logout
      </Link>
    </div>
  );
}

export default SignedInLinks;
