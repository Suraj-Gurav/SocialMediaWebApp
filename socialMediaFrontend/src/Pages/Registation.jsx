import React from "react";
import "./Registation.css";

const Registation = (props) => {
  return (
    <>
      <h1>Create an Account</h1>
      <div className="fullname">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <div className="fullname">
        <select className="dropdown">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
        <select className="dropdown">
            <option>Jan</option>
            <option>fri</option>
            <option>mar</option>
            <option>Apr</option>
        </select>
        <select className="dropdown">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </select>
      </div>
      <div className="fullname">
        <div className="radioBtn">
             <input type="radio" name="gender"  value="Male" />
             <label for="html" style={{marginLeft:10}}>Male</label>
       </div>
       <div className="radioBtn">
             <input type="radio" name="gender"  value="Female" />
             <label for="html" style={{marginLeft:10}}>Female</label>
       </div>
       <div className="radioBtn">
             <input type="radio"  name="gender" value="Custom" />
             <label for="html" style={{marginLeft:10}}>Custom</label>
       </div>
      </div>
      <input type="submit" className="registerSub" name="Sign Up" />
      <span style={{ color: "rgb(87, 87, 193)",fontWeight: "500", marginBottom:10}}>Already have an account?</span>
      <p>
        People who use our service may have uploaded your contact information to
        Facebook.
      </p>
    </>
  );
};

export default Registation;
