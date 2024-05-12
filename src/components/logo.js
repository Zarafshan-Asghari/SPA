import logo from "../pages/home/logo.png";
import { Link } from "react-router-dom";
import Home from "../pages/home/home";

export default function Logo() {
  return (
    <Link to="/" element={<Home />}>
      <img src={logo} alt="" className="w-14 h-14 md:w-20 md:h-20 z-40" />
    </Link>
  );
}
