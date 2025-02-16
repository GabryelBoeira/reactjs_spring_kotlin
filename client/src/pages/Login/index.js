import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";

export default function login() {
  return (
    <div className="login-container">
      <section className="from">
        <img src={logo} alt="logo" />
        <form>
          <h1>Access your Account</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </section>
      <img src={padlock} alt="padlock" />
    </div>
  );
}
