import { category } from "../../data/data";
import CategoryCard from "../designs/cards/CategoryCard";
import Container from "../layout/Container";

function Category() {
  return (
    <>
      <div id="catagory" className="w-full">
        <div className="w-full absolute -bottom-1 h-auto left-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f1f5f9"
              fillOpacity="1"
              d="M0,64L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <Container className="bg-green-200 sm:bg-transparent py-28 lg:text-center">
          <h2>
            Let your <span className="font-bold">Learning Journey</span> begin
          </h2>
          <p>
            Go to the section of your choice to study on any topic on any
            subject.
          </p>

          <div className="grid grid-cols-4 gap-4 mt-8 max-w-[836px] mx-auto">
            {category.map((data, index) => (
              <CategoryCard data={data} key={index} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Category;
