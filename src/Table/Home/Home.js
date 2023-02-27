import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // About the application && just some info about
  return (
    <div className="home-page">
      <div className="home-wrapper">
        <h1> About page</h1>
        <p>This is MERN application </p>
        <h2>Thank you for logging in my application !</h2>
        <h3> Add the input felid to view in DB </h3>
        {/* <div className="link-container"> */}
        <Link to={"/signup"}>Add User</Link> <br />
        <Link to={"/login"}>login</Link>
        {/* </div> */}
      </div>
    </div>
  );
}
