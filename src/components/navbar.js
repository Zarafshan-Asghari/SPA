import { NavLink } from "react-router-dom";
import Logo from "./logo";
import Button from "./button";
import { useState } from "react";
import isLogin from "../utilities";

export default function Navbar() {
  const [loginState, setLoginState] = useState(isLogin ? "logout" : "login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutfun = () => {
    document.cookie = "username=admin; expire:2022/1/1 path:'/'";
    setLoginState("login");
  };

  const toggleMenuAndNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#fefae0]  p-2 md:py-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between text-[#001219] max-w-6xl mx-auto p-2">
        <div className="flex items-center justify-between pb-2">
          <Logo />
          <span
            className="flex md:hidden cursor-pointer text-[#bb3e03]"
            onClick={toggleMenuAndNav}
          >
            <ion-icon
              name={isMenuOpen ? "close" : "menu"}
              className="w-14 h-14 menu"
            />
          </span>
        </div>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center gap-10 py-10 md:py-0`}
        >
          <li>
            <NavLink
              to="/"
              className="capitalize group hover:text-[#bb3e03] font-semibold tracking-wide transition-all duration-150 pb-2  hover:border-b-2 border-[#bb3e03]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="capitalize group hover:text-[#bb3e03] font-semibold tracking-wide transition-all duration-150 pb-2  hover:border-b-2 border-[#bb3e03]"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="capitalize group hover:text-[#bb3e03] font-semibold tracking-wide transition-all duration-150 pb-2  hover:border-b-2 border-[#bb3e03]"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className="capitalize group hover:text-[#bb3e03] font-semibold tracking-wide transition-all duration-150 pb-2  hover:border-b-2 border-[#bb3e03]"
            >
              Panel
            </NavLink>
          </li>
          <li>
            {isLogin ? (
              <NavLink to="/login" onClick={logoutfun}>
                <Button btnText={loginState} />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button btnText={loginState} />
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
