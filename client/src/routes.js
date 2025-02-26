import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Books from "./pages/BookList";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

export default function RoutesList() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/new" element={<NewBook />} />
        <Route path="/book/new/:bookId" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
