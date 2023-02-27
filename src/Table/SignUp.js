import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../service/Api";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    email_password: "",
    age: "",
    state: "",
    city: "",
    zip: "",
    company: "",
    web: "",
  });

  // const formHandle = (e) => {
  //   e.preventDefault();
  //   // console.log(userInfo);
  //   if ((!userInfo.email, !userInfo.email_password)) {
  //     alert("please fill all the inputs");
  //   } else {
  //     console.log([userInfo]);
  //   }
  // };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const addUserInfo = async (e) => {
    e.preventDefault();
    await addUser(userInfo);
    navigate("/userinfo");
    console.log(userInfo);
  };
  // console.log(userInfo);

  return (
    <div className="wrapper">
      <div className="App">
        <form>
          {/* <div className="form-row  justify-content-center align-items-center h-100"> */}
          <h2>User Register place </h2>

          <div className="form-group col-md-10 justify-content-center  h-100">
            <label htmlFor="name">first name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter firstName"
              name="firstName"
              value={userInfo.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10 justify-content-center  h-100">
            <label htmlFor="inputEmail4">last name</label>
            <input
              type="text"
              className="form-control"
              id="first_last"
              name="lastName"
              value={userInfo.lastName}
              placeholder="Enter first Last"
              onChange={(e) => handleChange(e)}
              // value={userInfo._firstName}
            />
          </div>

          <div className="form-group col-md-10 justify-content-center  h-100">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
              // value={userInfo._firstName}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              value={userInfo.email_password}
              name="email_password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="age"> Enter age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={userInfo.age}
              placeholder=" Enter age"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="state"> Enter state</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={userInfo.state}
              placeholder=" Enter state"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="city"> Enter city</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={userInfo.city}
              placeholder=" Enter city"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="company"> Enter company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={userInfo.company}
              placeholder=" Enter company"
              onChange={(e) => handleChange(e)}
            /> 
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="zip"> Enter zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              value={userInfo.zip}
              placeholder=" Enter zip"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group col-md-10">
            <label htmlFor="web"> Enter web</label>
            <input
              type="text"
              className="form-control"
              id="web"
              name="web"
              value={userInfo.web}
              placeholder=" Enter web"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            type="submit"
            className="submit"
            onClick={(e) => addUserInfo(e)}
          >
            Register
          </button>
          <div className="m-1">
            <h6>Add the info view in dataBase </h6>
            <Link className="pt-3" to={"/"}>
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
