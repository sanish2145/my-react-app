import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://blog-hqx2.onrender.com/blog/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <p className="text-sm text-gray-500">By {blog.author?.name}</p>
    </div>
  );
};

export default BlogDetail;
