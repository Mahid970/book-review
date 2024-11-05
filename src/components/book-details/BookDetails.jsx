import { useLoaderData, useParams } from "react-router-dom";
import { setItemToLocalStorage } from "../../localstorage/localStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();
  const book = books.find((book) => book.bookId === id);
  const {
    bookId,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;
  console.log(book);
  return (
    <div className="flex gap-24 my-12 items-center  mx-16">
      <div className=" shadow-xl py-12  flex ">
        <img src={image} alt="" className="min-w-96 mx-auto" />
      </div>
      <div className="w-1/2 grid gap-4">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-xl font-semibold">By : {author}</p>
        <hr />
        <p className="text-xl font-semibold">{category}</p>
        <hr />
        <p>
          <span className="font-bold">review:</span> {review}
        </p>
        <div className="flex gap-6 font-bold">
          <p>Tag :</p>
          {tags.map((tag, idx) => (
            <p
              className="bg-gray-200 py-1  rounded-full px-6 text-green-500"
              key={idx}
            >
              #{tag}
            </p>
          ))}
        </div>
        <hr />
        <p>
          Number of Pages: <span className="font-bold">{totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-bold">{publisher}</span>
        </p>
        <p>
          Year of Publishing:{" "}
          <span className="font-bold">{yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{rating}</span>
        </p>
        <div className="gap-8 flex">
          <button
            onClick={() => {
              setItemToLocalStorage(bookId, "read-list");
            }}
            className="py-2 px-6 border-2 hover:bg-gray-200 rounded font-bold"
          >
            Read
          </button>
          <button
            onClick={() => {
              setItemToLocalStorage(bookId, "wish-list");
            }}
            className="py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold"
          >
            Wishlist
          </button>
          <ToastContainer autoClose={2000} theme="dark" />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
