import { category } from "../../data/data";
import CategoryCard from "../designs/cards/CategoryCard";
import Container from "../layout/Container";

function Category() {
  return (
    <>
      <div className="w-full  border-[3rem] border-white">
        <Container className="text-center rounded-xl  bg-green-200 py-16 ">
          <h2>
            Let your <span className="font-bold">Learning Journey</span> begin
          </h2>
          <p>
            Go to the section of your choice to study on any topic on any
            subject.
          </p>

          <div className="flex items-start justify-center flex-wrap gap-4 mt-8">
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
