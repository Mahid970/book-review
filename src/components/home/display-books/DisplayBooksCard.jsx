import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
const DisplayBooksCard = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div className=" bg-base-200 p-6 shadow-xl">
      <figure className="flex justify-center  bg-white  py-10">
        <img src={image} alt={bookName} className="min-w-36 max-h-44" />
      </figure>
      <div className="flex gap-6">
        {tags.map((tag, idx) => (
          <p
            className="font-bold mt-4 bg-gray-200 py-1 px-6 rounded-full text-green-500"
            key={idx}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className=" items-center font-semibold grid gap-3 my-3 ">
        <h2 className="text-2xl ">{bookName}</h2>
        <p>By : {author}</p>
        <hr />
        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex gap-2 items-center">
            <p>{rating}</p> <FaStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
DisplayBooksCard.propTypes = {
  book: PropTypes.object,
};
export default DisplayBooksCard;
