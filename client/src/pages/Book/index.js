import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

export default function Book() {
  return (
    <div className="book-container">
      <header>
        <img src={logo} alt="logo" />
        <span>
          Welcome <strong>Usuario</strong>!
        </span>
        <Link className="button" to="book/new">
          Add New Book
        </Link>
        <button type="button">
          <FiPower size={18} color="#251fc5" />
        </button>
      </header>
    </div>
  );
}
