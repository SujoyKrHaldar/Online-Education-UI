import Link from "next/link";
import CourseCard from "../designs/cards/CourseCard";
import Container from "../layout/Container";
import { courses } from "../../data/Courses";

function Courses() {
  return (
    <>
      <div id="courses" className="w-full  py-36 bg-slate-100">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2>
              Our <span className="font-bold">Top Courses</span>
            </h2>

            <Link href="/">
              <a className="px-6 py-3 bg-white inline-block">
                View all courses.
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {courses.map((data, index) => (
              <CourseCard key={index} data={data} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Courses;
