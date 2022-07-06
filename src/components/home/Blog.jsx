import Container from "../layout/Container";
import Link from "next/link";
import BlogCard from "../designs/cards/BlogCard";
import { blogs } from "../../data/data";

function Blog() {
  return (
    <>
      <div id="blogs" className="w-full py-28">
        <Container>
          <p className="px-3 py-1 mb-2 bg-green-100 inline-block font-bold">
            Blogs & Articles
          </p>
          <h2>
            Take a look at the{" "}
            <span className="font-bold">Latest Articles</span>
          </h2>

          <div className="flex items-start justify-between flex-wrap gap-4 mt-8">
            {blogs.map((data, index) => (
              <BlogCard key={index} data={data} />
            ))}
          </div>

          <Link href="/">
            <a className="text-sm font-medium px-5 py-2 bg-green-500 hover:bg-green-800 text-white rounded-md mt-8">
              View all blogs
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Blog;
