import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import getTranslation from "../../i18n.js";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewBook() {
  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logo} alt="logo" />
          <h1>{getTranslation("register-new-book")}</h1>
          <p>{getTranslation("add-new-book-message")}</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5" /> {getTranslation("back")}
          </Link>
        </section>
        <form>
          <input placeholder={getTranslation("title")} />
          <input placeholder={getTranslation("author")} />
          <input placeholder={getTranslation("price")} />
          <input placeholder={getTranslation("release-date")} type="date" />
          <button className="button" type="submit">
            {getTranslation("register")}
          </button>
        </form>
      </div>
    </div>
  );
}
