import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <p>{title}</p>
      {blogs.map((blog) => {
        const { title, author } = blog;
        return (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{title}</h2>
              <p>Written by{author}</p>
              
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
