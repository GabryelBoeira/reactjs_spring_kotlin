import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import getTranslation from "../../i18n.js";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api.js";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [launchDate, setLaunchDate] = useState("");
  const history = useHistory();
  const accessToken = localStorage.getItem("accessToken");
  const authorization = { headers: { Authorization: `Bearer ${accessToken}` } };

  async function createNewBook(e) {
    e.preventDefault();

    const data = {
      author,
      launchDate,
      price,
      title,
    };

    try {
      await api.post("/api/book/v1", data, authorization);
      history.push("/books");
    } catch (err) {
      alert(getTranslation("login-failed"));
    }
  }

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
        <form onSubmit={createNewBook}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={getTranslation("title")}
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={getTranslation("author")}
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={getTranslation("price")}
          />
          <input
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            placeholder={getTranslation("release-date")}
            type="date"
          />
          <button className="button" type="submit">
            {getTranslation("register")}
          </button>
        </form>
      </div>
    </div>
  );
}
