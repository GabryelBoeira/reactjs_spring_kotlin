import React from "react";

//utilizando props para ler objetos
function Header2(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

//Recupera valor informado dentro da tag do compomente
export default function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
