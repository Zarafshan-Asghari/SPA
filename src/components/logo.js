import logo from "../pages/home/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link path="/">
      <img src={logo} alt="" className="w-14 h-14 md:w-20 md:h-20 z-40" />
    </Link>
  );
}
