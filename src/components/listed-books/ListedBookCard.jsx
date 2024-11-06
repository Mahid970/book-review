import PropTypes from "prop-types";
import { BsPeopleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ListedBookCard = ({ book }) => {
  const {
    bookId,
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
    <div className="flex gap-12 bg-gray-100 p-6">
      <div className="bg-white p-6">
        <img className="w-48 h-56" src={image} alt="" />
      </div>
      <div className="grid gap-4">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <p className="font-semibold text-xl">By: {author}</p>
        <div className="flex items-center gap-6">
          <h3 className="font-bold flex gap-6">
            Tag:{" "}
            {tags.map((tag, idx) => (
              <span
                className="font-bold  bg-gray-200 py-1 px-6 rounded-full text-green-500"
                key={idx}
              >
                #{tag}
              </span>
            ))}
          </h3>
          <p className="font-semibold ">
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-12">
          <p className="flex items-center gap-2">
            {" "}
            <BsPeopleFill /> Publisher:{" "}
            <span className="font-semibold">{publisher}</span>
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <FaBookOpen />
            Page: <span className="font-semibold">{totalPages}</span>
          </p>
        </div>
        <hr />
        <div className="flex gap-6">
          <p className="font-bold bg-blue-200 py-2 px-6 rounded-full text-blue-500">
            Category: {category}
          </p>
          <p className="font-bold bg-orange-200 py-2 px-6 rounded-full text-orange-500">
            Rating: {rating}
          </p>
          <Link to={`/books/${bookId}`}>
            {" "}
            <button className="font-bold bg-green-500 py-2 px-6 rounded-full text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ListedBookCard.propTypes = {
  book: PropTypes.object,
};
export default ListedBookCard;
