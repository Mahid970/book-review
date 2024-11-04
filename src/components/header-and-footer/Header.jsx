import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar mt-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" gap-4 grid menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/listed-books"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                    : ""
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"pages-to-read"}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                    : ""
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-3xl font-bold">
          <Link to={"/"}>Book Vibe</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" gap-6 font-semibold menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/listed-books"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                  : ""
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"pages-to-read"}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 border p-2 px-3 font-bold rounded border-green-500"
                  : ""
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="bg-green-500 text-white font-bold py-3 px-6 rounded">
          Sign In
        </button>
        <button className="bg-blue-400 text-white font-bold py-3 px-6 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
