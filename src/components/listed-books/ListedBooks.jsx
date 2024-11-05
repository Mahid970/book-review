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
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 1"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {readList.map((book) => (
          <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
        ))}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Tab 2"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        Wishlist Books {wishlist.length}
      </div>
    </div>
  );
};

export default ListedBooks;
