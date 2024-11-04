import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex mx-12 bg-gray-100 items-center rounded px-24 py-12 my-12 gap-12">
      <div className="">
        <h1 className="text-6xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <Link to={"/listed-books"}>
          {" "}
          <button className="bg-green-500 text-white font-bold mt-16 py-4 px-12 hover:bg-green-600 rounded">
            View The List
          </button>
        </Link>
      </div>
      <div className=" ">
        <img
          className="w-96"
          src="https://i.ibb.co.com/tLwLVTn/hero-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
