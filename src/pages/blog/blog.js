import { Link, Outlet, Route, Routes } from "react-router-dom";
import MyNavbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Blog() {
  return (
    <>
      <section>
        <MyNavbar />
        <div className="flex flex-col py-16 max-w-6xl mx-auto">
          {/* links */}
          <div className="flex gap-6 items-center justify-center">
            <Link
              to={"react"}
              className="md:text-xl capitalize text-orange-800 p-2 border-2 border-orange-800 rounded-md hover:bg-orange-50"
            >
              react.js course
            </Link>
            <Link
              to={"javaScript"}
              className="md:text-xl capitalize text-orange-800 p-2 border-2 border-orange-800 rounded-md hover:bg-orange-50"
            >
              javaScript course
            </Link>
            <Link
              to={"nextjs"}
              className="md:text-xl capitalize text-orange-800 p-2 border-2 border-orange-800 rounded-md hover:bg-orange-50"
            >
              next.js course
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </section>
    </>
  );
}
