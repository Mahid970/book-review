import { useState } from "react";
import DisplayBooksCard from "./DisplayBooksCard";

const DisplayBooks = () => {
  const [books, setBooks] = useState([]);
  fetch("/public/books.json")
    .then((res) => res.json())
    .then((books) => setBooks(books));
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mx-24">Books</h1>
      <div className="grid grid-cols-3 gap-6 mx-20 my-8">
        {books.map((book) => (
          <DisplayBooksCard key={book.bookId} book={book}></DisplayBooksCard>
        ))}
      </div>
    </div>
  );
};

export default DisplayBooks;
