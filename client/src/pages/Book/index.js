import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import getTranslation from "../../i18n.js";

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

      <h1>{getTranslation("book-list-register")}</h1>
      <ul>
        <li>
          <strong>{getTranslation("title")}:</strong>
          <p>Titulo livro</p>
          <strong>{getTranslation("author")}:</strong>
          <p>Escritor de livro</p>
          <strong>{getTranslation("price")}:</strong>
          <p>10,90</p>
          <strong>{getTranslation("release-date")}:</strong>
          <p>10/10/2025</p>
          <button type="button">
            <FiEdit size={20} color="251fc5" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="251fc5" />
          </button>
        </li>

        <li>
          <strong>{getTranslation("title")}:</strong>
          <p>Titulo livro</p>
          <strong>{getTranslation("author")}:</strong>
          <p>Escritor de livro</p>
          <strong>{getTranslation("price")}:</strong>
          <p>10,90</p>
          <strong>{getTranslation("release-date")}:</strong>
          <p>10/10/2025</p>
          <button type="button">
            <FiEdit size={20} color="251fc5" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="251fc5" />
          </button>
        </li>
        <li>
          <strong>{getTranslation("title")}:</strong>
          <p>Titulo livro</p>
          <strong>{getTranslation("author")}:</strong>
          <p>Escritor de livro</p>
          <strong>{getTranslation("price")}:</strong>
          <p>10,90</p>
          <strong>{getTranslation("release-date")}:</strong>
          <p>10/10/2025</p>
          <button type="button">
            <FiEdit size={20} color="251fc5" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="251fc5" />
          </button>
        </li>
        <li>
          <strong>{getTranslation("title")}:</strong>
          <p>Titulo livro</p>
          <strong>{getTranslation("author")}:</strong>
          <p>Escritor de livro</p>
          <strong>{getTranslation("price")}:</strong>
          <p>10,90</p>
          <strong>{getTranslation("release-date")}:</strong>
          <p>10/10/2025</p>
          <button type="button">
            <FiEdit size={20} color="251fc5" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="251fc5" />
          </button>
        </li>
      </ul>
    </div>
  );
}
