import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MdDelete } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`/api/blogs?userId=${user._id}`);
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, [user._id]);

  const deleteBlogs = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold mb-4'>My Blogs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {blogs.map((blog) => (
          <div key={blog._id} className='border p-4 rounded shadow'>
            <h2 className='font-bold text-xl mb-2'>{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className='h-72 w-full object-cover mb-2' />
            <p className='text-gray-600 font-semibold mb-4'>{blog.content}</p>
            <div className='flex gap-4'>
              <button
                className='text-red-500 text-2xl'
                onClick={() => deleteBlogs(blog._id)}
              >
                <MdDelete />
              </button>
              <Link to={`/editBlogs/${blog._id}`} state={{ blog }}>
                <button className='text-green-500 text-2xl'>
                  <RxUpdate />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
