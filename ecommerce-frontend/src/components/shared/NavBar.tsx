import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { Badge } from "@mui/material";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <div className="sticky top-0 z-50 flex h-[70px] items-center bg-custom-gradient text-white">
      <div className="flex w-full justify-between px-4 sm:px-8 lg:px-14">
        <Link to={"/"} className="flex items-center text-2xl font-bold">
          <FaStore className="mr-2 text-3xl" />
          <span className="font-[Poppins]">E-shop</span>
        </Link>

        <ul
          className={`absolute left-0 top-[70px] flex gap-4 text-slate-800 shadow-md sm:static sm:items-center sm:gap-10 sm:shadow-none ${navbarOpen ? "h-fit pb-5 sm:pb-0" : "h-0 overflow-hidden"} w-full flex-col bg-custom-gradient px-4 text-white transition-all duration-100 sm:h-fit sm:w-fit sm:flex-row sm:bg-none sm:px-0`}
        >
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/"}
              className={`${
                path === "/" ? "font-semibold text-white" : "text-gray-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/products"}
              className={`${
                path === "/products"
                  ? "font-semibold text-white"
                  : "text-gray-300"
              }`}
            >
              Product
            </Link>
          </li>
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/about"}
              className={`${
                path === "/about" ? "font-semibold text-white" : "text-gray-300"
              }`}
            >
              About
            </Link>
          </li>
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/contact"}
              className={`${
                path === "/contact"
                  ? "font-semibold text-white"
                  : "text-gray-300"
              }`}
            >
              Contact
            </Link>
          </li>
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/cart"}
              className={`${
                path === "/cart" ? "font-semibold text-white" : "text-gray-300"
              }`}
            >
              <Badge
                showZero
                badgeContent={0}
                color="primary"
                overlap="circular"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <FaShoppingCart size={25} />
              </Badge>
            </Link>
          </li>
          <li className="transitio n-all font-[500] duration-150 hover:text-gray-200">
            <Link
              to={"/login"}
              className="flex transform items-center space-x-2 rounded-md bg-gradient-to-r from-blue-800 to-blue-400 px-4 py-[6px] font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:from-blue-700 hover:to-blue-300"
            >
              <FaSignInAlt size={25} />
              <span>Login</span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="mt-2 flex items-center sm:mt-0 sm:hidden"
        >
          {navbarOpen ? (
            <RxCross2 className="text-3xl text-white" />
          ) : (
            <IoMenu className="text-3xl text-white" />
          )}
        </button>
      </div>
    </div>
  );
};
