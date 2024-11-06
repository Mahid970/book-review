import { useEffect, useState } from "react";
import { getetItemsFromLocalStorage } from "../../localstorage/localStorage";
import ListedBookCard from "./ListedBookCard";
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const readList = getetItemsFromLocalStorage("read-list");

    const wishlist = getetItemsFromLocalStorage("wish-list");
    if (readList.length > 0) {
      const readListBooks = books.filter((book) =>
        readList.includes(book.bookId)
      );
      setReadList(readListBooks);
    }
    if (wishlist.length > 0) {
      const wishlistBooks = books.filter((book) =>
        wishlist.includes(book.bookId)
      );
      setWishlist(wishlistBooks);
    }
  }, [books]);
  console.log(readList, wishlist);

  return (
    <div>
      <div className="bg-gray-200 p-4 rounded my-8">
        <h1 className="text-4xl font-bold text-center">Book</h1>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />

        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid gap-6">
            {readList.map((book) => (
              <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
            ))}
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid gap-6">
            {wishlist.map((book) => (
              <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
