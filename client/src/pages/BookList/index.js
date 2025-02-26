import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import getTranslation from "../../i18n.js";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
  const authorization = { headers: { Authorization: `Bearer ${accessToken}` } };

  useEffect(() => {
    async function initialLoad() {
      setLoading(true); // Define o estado de carregamento como verdadeiro
      const response = await api.get(
        `/api/book/v1?page=${page}&limit=4&direction=asc`,
        authorization,
      );

      if (
        response.data._embedded &&
        response.data._embedded.bookVOes.length > 0
      ) {
        setBooks(response.data._embedded.bookVOes);
        setPage(page + 1);
      } else {
        setHasMore(false); // Define hasMore como falso se não houver mais livros
      }
      setLoading(false); // Define o estado de carregamento como falso
    }
    initialLoad();
  }, []);

  async function loadMoreBooks() {
    if (!hasMore || loading) return;

    setLoading(true); // Define o estado de carregamento como verdadeiro
    try {
      const response = await api.get(
        `/api/book/v1?page=${page}&limit=4&direction=asc`,
        authorization,
      );

      if (
        response.data._embedded &&
        response.data._embedded.bookVOes.length > 0
      ) {
        setBooks([...books, ...response.data._embedded.bookVOes]);
        setPage(page + 1);
      } else {
        setHasMore(false); // Define hasMore como falso se não houver mais livros
      }
    } catch (error) {
      console.error("Erro ao carregar mais livros:", error);
      // Trate o erro de forma apropriada, como exibir uma mensagem para o usuário
    } finally {
      setLoading(false); // Define o estado de carregamento como falso, independentemente do resultado da requisição
    }
  }

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
      navigate(`/book/new/${id}`);
    } catch (err) {
      alert(getTranslation("edit-book-failed"));
    }
  }

  async function handleLogout() {
    try {
      localStorage.clear();
      navigate("/");
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
        <Link className="button" to="/book/new/0">
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
      <footer>
        {
          <button
            type="button"
            className="button"
            disabled={!hasMore}
            onClick={loadMoreBooks}
          >
            {loading
              ? getTranslation("loading-book")
              : hasMore
              ? getTranslation("load-more")
              : getTranslation("no-more-books")}
          </button>
        }
      </footer>
    </div>
  );
}
