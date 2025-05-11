import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://blog-hqx2.onrender.com/blog")
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="grid gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content.slice(0, 100)}...</p>
            <Link to={`/blog/${blog._id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
