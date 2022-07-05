import Link from "next/link";
import CourseCard from "../designs/cards/CourseCard";
import Container from "../layout/Container";
import { courses } from "../../data/data";

function Courses() {
  return (
    <>
      <div id="courses" className="w-full  py-28 bg-slate-100">
        <Container>
          <p className="px-3 py-1 mb-2 bg-white inline-block font-bold">
            Courses
          </p>
          <h2>
            Discover <span className="font-bold">Lifelong Learning</span>
          </h2>

          <div className="flex items-start justify-between flex-wrap gap-4 mt-8">
            {courses.map((data, index) => (
              <CourseCard key={index} data={data} />
            ))}
          </div>

          <Link href="/">
            <a className="text-sm font-medium px-5 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md">
              View all courses
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Courses;
