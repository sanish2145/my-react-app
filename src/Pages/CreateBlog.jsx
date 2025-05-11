import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blog-hqx2.onrender.com/blog");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      const newBlog = {
        title,
        content,
        image,
        author: { name: author }
      };

      await axios.post("https://blog-hqx2.onrender.com/blog", newBlog);
      setTitle('');
      setContent('');
      setImage('');
      setAuthor('');
      setShowForm(false);
      fetchBlogs();
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
          <button
            onClick={toggleForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
          >
            {showForm ? 'Cancel' : 'Create Blog'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleCreateBlog} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">New Blog</h2>

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            ></textarea>
            <input
              type="text"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium"
            >
              Submit Blog
            </button>
          </form>
        )}

        {/* Blog List */}
        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading blogs...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 mt-2 line-clamp-3">{blog.content}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>Author: {blog.author?.name}</p>
                    <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateBlog;
