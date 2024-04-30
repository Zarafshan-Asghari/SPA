import { Link } from "react-router-dom";
import Button from "./button";
// import courseImg from "../pages/home/logo.png";
function Courseitem({
  id = 1,
  img,
  text = "ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea .",
  title = "next.js",
}) {
  return (
    <div className="flex w-full lg:w-1/4 flex-col rounded-md shadow-md  hover:border border-[#fffad6] transition hover:scale-105 duration-200">
      <img
        src={img}
        className="w-full h-[70%] bg-[#001219] bg-opacity-10 rounded-t-lg "
        alt=""
      />
      <div className="flex flex-col p-4 gap-4 ">
        <h4 className="text-2xl capitalize text-[#9b2226]">{title} </h4>
        <p className="text-sm font-thin">{text}</p>
        <span>
          <Button btnText="buy">
            <Link to={`/course/${id}`}></Link>
          </Button>
        </span>
      </div>
    </div>
  );
}
export default Courseitem;
