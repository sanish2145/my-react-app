import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://blog-hqx2.onrender.com/blog/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError("Failed to fetch blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-12 rounded-lg shadow-md">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{blog.content}</p>
      <p className="text-sm text-gray-500 mb-4">By {blog.author?.name || "Unknown Author"}</p>
      <Link
        to="/blogs"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
