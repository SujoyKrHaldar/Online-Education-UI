import Container from "../layout/Container";
import Link from "next/link";
import BlogCard from "../designs/cards/BlogCard";
import { blogs } from "../../data/data";

function Blog() {
  return (
    <>
      <div id="blogs" className="w-full py-28">
        <Container>
          <h2 className="font-bold">Blogs & Articles</h2>

          <div className="flex items-start justify-between flex-wrap gap-4 mt-8">
            {blogs.map((data, index) => (
              <BlogCard key={index} data={data} />
            ))}
          </div>

          <Link href="/">
            <a className="inline-block px-6 py-3 bg-green-500 text-white mt-4">
              View all blogs
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Blog;
