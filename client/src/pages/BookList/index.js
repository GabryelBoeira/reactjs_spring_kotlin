import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import getTranslation from "../../i18n.js";
import { useHistory } from "react-router-dom";
import api from "../../services/api.js";

export default function Books() {
  const [books, setBooks] = useState([]);

  const history = useHistory();
  const username = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
  const authorization = { headers: { Authorization: `Bearer ${accessToken}` } };

  useEffect(() => {
    api
      .get("/api/book/v1?page=0&limit=4&direction=asc", authorization)
      .then((response) => {
        setBooks(response.data._embedded.bookVOes);
      });
  }, [accessToken]);

  async function handleDeleteBook(id) {
    try {
      await api.delete(`api/book/v1/${id}`, authorization);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      alert(getTranslation("delete-book-failed"));
    }
  }

  async function handleEditBook(id) {
    try {
      history.push(`/book/new/${id}`);
    } catch (err) {
      alert(getTranslation("edit-book-failed"));
    }
  }

  async function handleLogout() {
    try {
      localStorage.clear();
      history.push("/");
    } catch (err) {
      alert(getTranslation("logout-failed"));
    }
  }

  return (
    <div className="book-container">
      <header>
        <img src={logo} alt="logo" />
        <span>
          {getTranslation("welcome")} <strong>{username.toUpperCase()}</strong>!
        </span>
        <Link className="button" to="book/new/0">
          {getTranslation("add-book")}
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#251fc5" />
        </button>
      </header>

      <h1>{getTranslation("book-list-register")}</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{getTranslation("title")}:</strong>
            <p>{book.title}</p>
            <strong>{getTranslation("author")}:</strong>
            <p>{book.author}</p>
            <strong>{getTranslation("price")}:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(book.price)}
            </p>
            <strong>{getTranslation("release-date")}:</strong>
            <p>
              {Intl.DateTimeFormat("pt-BR").format(new Date(book.launchDate))}
            </p>
            <button type="button" onClick={() => handleEditBook(book.id)}>
              <FiEdit size={20} color="#251fc5" />
            </button>
            <button type="button" onClick={() => handleDeleteBook(book.id)}>
              <FiTrash2 size={20} color="#251fc5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
