import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404: Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      {/* <img src="/images/404.png" alt="404" /> Adicione uma imagem */}
      <Link to="/">Voltar para a página inicial</Link> {/* Adicione um link */}
    </div>
  );
}
