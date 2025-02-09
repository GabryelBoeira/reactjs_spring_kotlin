import React from "react";

//utilizando props para ler objetos
export default function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

//Recupera valor informado dentro da tag do compomente
function Header2({ children }) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
