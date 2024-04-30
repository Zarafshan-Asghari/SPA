import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { CourseData } from "../../components/data";

export default function Course() {
  const courseId = useParams().courseId;
  const courseInfo = CourseData.find((course) => course.id == courseId);
  console.log(courseInfo);
  console.log(courseId);

  return (
    <>
      <Navbar></Navbar>;
      <h2 className="text-3xl uppercase text-blue-800">course</h2>
    </>
  );
}
