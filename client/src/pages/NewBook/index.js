import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import getTranslation from "../../i18n.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api.js";

export default function NewBook() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const authorization = { headers: { Authorization: `Bearer ${accessToken}` } };
  const { bookId } = useParams();

  useEffect(() => {
    if (bookId === "0") return;
    else loadBooks();
  });

  const loadBooks = async () => {
    try {
      const response = await api.get(`api/book/v1/${bookId}`, authorization);
      let adjustedDate = response.data.launchDate.split("T", 10)[0];

      setId(response.data.id);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPrice(response.data.price);
      setLaunchDate(adjustedDate);
    } catch (err) {
      alert(getTranslation("update-book-failed"));
      navigate("/books");
    }
  };

  async function createNewBook(e) {
    e.preventDefault();

    const data = {
      id,
      author,
      launchDate,
      price,
      title,
    };

    try {
      if (bookId === "0") await api.post("/api/book/v1", data, authorization);
      else {
        data.id = bookId;
        await api.put("/api/book/v1", data, authorization);
      }
    } catch (err) {
      alert(getTranslation("new-book-failed"));
    }
    navigate("/books");
  }

  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logo} alt="logo" />
          <h1>
            {bookId === "0"
              ? getTranslation("register-new-book")
              : getTranslation("edit-book")}
          </h1>
          <p>
            {bookId === "0"
              ? getTranslation("add-new-book-message")
              : getTranslation("edit-book-message")}
          </p>
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
