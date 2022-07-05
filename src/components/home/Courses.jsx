import Link from "next/link";
import CourseCard from "../designs/cards/CourseCard";
import Container from "../layout/Container";
import { courses } from "../../data/data";

function Courses() {
  return (
    <>
      <div id="courses" className="w-full  py-28 bg-slate-100">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2>
              Our <span className="font-bold">Top Courses</span>
            </h2>

            <Link href="/">
              <a className="hidden px-6 py-3 bg-green-500 text-white sm:inline-block">
                View all courses.
              </a>
            </Link>
          </div>

          <div className="flex items-start justify-between flex-wrap gap-4 mt-8">
            {courses.map((data, index) => (
              <CourseCard key={index} data={data} />
            ))}
          </div>

          <Link href="/">
            <a className="inline-block sm:hidden px-6 py-3 bg-green-500 text-white mt-4">
              View all courses.
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Courses;
