import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", textAlign: "center", marginTop: "3rem" }}>
        oops... Error something went wrong...!
      </h1>
      <h2 style={{ textAlign: "center" }}>Go to home page</h2>
      <p style={{ textAlign: "center" }}>
        "Server 404 something went wrong...!"
        <Link style={{ textAlign: "center" }} to={"/"}>
          Home{" "}
        </Link>
      </p>
    </div>
  );
}
