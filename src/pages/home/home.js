import { useState } from "react";
import Button from "../../components/button";
import Courseitem from "../../components/courseitem";
import MyNavbar from "../../components/navbar";
import heroImg from "./hero3.png";
import Footer from "../../components/footer";
// import ali from "./../../../public/assets/images/hero.svg";
import { CourseData } from "../../components/data";

export default function Home() {
  // courses information array
  const [courses, setCourses] = useState(CourseData);
  return (
    <div className="">
      <MyNavbar />
      <section className="py-20 ">
        <div className="flex flex-col-reverse items-center md:flex-row gap-10 md:gap-6  max-w-6xl mx-auto">
          {/* contents */}
          <div className="flex flex-col gap-6 p-6 lg:p-4">
            <h2 className="text-3xl lg:text-5xl capitalize font-semibold text-[#001219]">
              Unlock Your Potential
            </h2>
            <p className="max-w-2xl font-thin text-justify text-[#001219] font-sans">
              Dive into the World of Code with Our Online Classes! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Laborum, saepe
              excepturi nesciunt aspernatur repellat voluptate eum sunt et
              repellendus, quod fugit ipsam dicta atque voluptatibus, culpa
              adipisci! Eligendi, porro possimus.it ipsam dicta atque
              voluptatibus, culpa adipisci! Eligendi, porro possimus.
            </p>

            {/* hero btn */}
            <div className="">
              <Button btnText="get started"></Button>
            </div>
          </div>
          {/* img */}
          <img
            className="w-full md:w-[40%] lg:w-[50%] p-4"
            src={heroImg}
            alt="hero image"
          />
        </div>
      </section>

      {/* coursee items */}
      <section className=" max-w-6xl mx-auto mb-20 p-6">
        <h2 className="text-3xl lg:text-4xl capitalize font-semibold text-[#001219] mb-8">
          courses
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-10 md:gap-8">
          {courses.map((course) => {
            return <Courseitem key={course.id} {...course} />;
          })}
        </div>
      </section>
      <footer>
        <Footer
          text="  Lorem ipsum dolor sit amet consectetur adipisicing illum ab eos!
            Dolores dolore harum corrupti"
        ></Footer>
      </footer>
    </div>
  );
}
// colors
// bb3e03 dark-orange
// 94d2bd light-blue
// 001219 light-black
// 9b2226 dark red
