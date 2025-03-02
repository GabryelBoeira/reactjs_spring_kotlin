import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import getTranslation from "../../i18n.js";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";

export default function UserDetail() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
  const authorization = { headers: { Authorization: `Bearer ${accessToken}` } };

  async function handleBooks() {
    try {
      navigate("/books");
    } catch (err) {
      alert(getTranslation("user-failed"));
    }
  }

  return (
    <div className="user-container">
      <header>
        <h1>
          User Page Detail - <strong>{username}</strong>
        </h1>
        <button className="button" type="button" onClick={handleBooks}>
          <FiPower size={18} color="#251fc5" />
        </button>
      </header>
    </div>
  );
}
