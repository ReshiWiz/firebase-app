import React from "react";
import Home from "./Home";
import SignUp from "../SignUp";
import Login from "./Login";
import Main from "./Main";
import NavBar from "./NavBar";
import UserFile from "../Home/userData/UserFile";
import ErrorPage from "../ErrorPage";
import EditUser from "./userData/actions/EditUser";
// import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function Auth() {
  return (
    <div>
      <NavBar />
      <Router>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/login"} Login></Link>
        <Link to={"/signup"}>signup</Link>
        <Link to={"/main"}>main</Link> */}

        {/* local Router path to send the link to path */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/userinfo" element={<UserFile />}></Route>
          <Route path="/warning" element={<ErrorPage />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
          <Route
            path="*"
            element={
              <h1
                style={{
                  textAlign: "center",
                  border: "2px solid #000",
                  backgroundColor: "#FF00FF",
                }}
              >
                {" "}
                Page not found
              </h1>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

// /edit/${elem._id}  :id
