import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";
import getTranslation from "../../i18n.js";

export default function Login() {
  return (
    <div className="login-container">
      <section className="from">
        <img src={logo} alt="logo" />
        <form>
          <h1>{getTranslation("access-app")}</h1>
          <input type="text" placeholder={getTranslation("username")} />
          <input type="password" placeholder={getTranslation("password")} />
          <button className="button" type="submit">
            {getTranslation("login")}
          </button>
        </form>
      </section>
      <img src={padlock} alt="padlock" />
    </div>
  );
}
