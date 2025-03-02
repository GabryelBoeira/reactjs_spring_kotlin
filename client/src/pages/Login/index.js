import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";
import logo from "../../assets/logo.svg";
import padlock from "../../assets/padlock.png";
import getTranslation from "../../i18n.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const response = await api.post("/auth/signin", data);
      localStorage.setItem("username", username);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      navigate("/books");
    } catch (err) {
      alert(getTranslation("login-failed"));
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="logo" />
        <form onSubmit={handleLogin}>
          <h1>{getTranslation("access-app")}</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={getTranslation("username")}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={getTranslation("password")}
          />
          <button className="button-action" type="submit">
            {getTranslation("login")}
          </button>
        </form>
      </section>
      <img src={padlock} alt="padlock" />
    </div>
  );
}
