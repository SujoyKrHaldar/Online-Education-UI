import { category } from "../../data/data";
import CategoryCard from "../designs/cards/CategoryCard";
import Container from "../layout/Container";

function Category() {
  return (
    <>
      <div className="w-full py-8 ">
        <div className="w-full absolute -bottom-1 h-auto left-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f1f5f9"
              fillOpacity="1"
              d="M0,64L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <Container>
          <div className="sm:text-center rounded-xl bg-green-200 p-16 ">
            <p className="px-3 py-1 mb-2 bg-white inline-block font-bold">
              Category
            </p>
            <h2>
              Let your <span className="font-bold">Learning Journey</span> begin
            </h2>
            <p>
              Go to the section of your choice to study on any topic on any
              subject.
            </p>

            <div className="flex items-start justify-start sm:justify-center flex-wrap gap-4 mt-8">
              {category.map((data, index) => (
                <CategoryCard data={data} key={index} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Category;
