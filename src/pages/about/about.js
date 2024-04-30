import MyNavbar from "../../components/navbar";
import img from "../home/hero.svg";
import Teme from "../temeMember";
import { useState } from "react";
import person1 from "../../images/ben.jpg";
import person2 from "../../images/customer-1.jpg";
import person3 from "../../images/customer-2.jpg";
import person4 from "../../images/customer-3.jpg";
import Footer from "../../components/footer";
export default function About() {
  const [temes, setTemes] = useState([
    { fname: "ali", id: 1, role: "front end ", img: person1 },
    { fname: "bator", id: 2, role: "back end ", img: person3 },
    { fname: "sara", id: 3, role: "seo expert ", img: person2 },
    { fname: "zeba", id: 4, role: " expert in figma ", img: person4 },
  ]);
  return (
    <>
      <MyNavbar />
      <div className="max-w-6xl mx-auto">
        <section className="flex items-center justify-center flex-col py-12 my-10 px-6 bg-gray-100 ">
          <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">
            Grow Up Your learning Speed.
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi
            sint. <br />
            Ipsam molestias nemovel laboriosam consequatur, perferendis
            <br /> minima soluta? Natus necessitatibus autem suscipit{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="num-item bg-white rounded-lg shadow-lg p-6 text-center">
              <span className="block text-3xl font-bold text-gray-800">
                2,882 <br />
                Customers
              </span>
            </div>
            <div className="num-item bg-white rounded-lg shadow-lg p-6 text-center">
              <span className="block text-3xl font-bold text-gray-800">
                70% <br />
                Action Plans
              </span>
            </div>
            <div className="num-item bg-white rounded-lg shadow-lg p-6 text-center">
              <span className="block text-3xl font-bold text-gray-800">
                7,592 <br />
                Downloads
              </span>
            </div>
          </div>
        </section>

        <section id="goal" className="py-12 px-6 bg-gray-100">
          <div className="container mx-auto flex flex-col-reverse gap-8 md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Goal
              </h2>
              <p className="text-gray-600 mb-4">
                amet consectetur adipisicing elit. Labore omnis obcaecati
                incidunt asperiores, mollitia quibusdam velit at itaque sunt,
                culpa in pariatur quas, temporibus repellendus vitae! Vitae,
                illum asperiores.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src={img} alt="" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section id="our-Team" className="py-12 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Repeat this div for each team member */}
            {/* <Teme></Teme> */}
            {temes.map((person) => {
              return <Teme key={person.id} {...person} />;
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
