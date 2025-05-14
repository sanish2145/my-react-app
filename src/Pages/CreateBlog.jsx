import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      if (values.image) {
        formData.append("image", values.image);
      }
      formData.append("author", user?._id);

      await axios.post("https://blog-hqx2.onrender.com/blog/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">
        Create a New Blog
      </h2>
      <Formik
        initialValues={{ title: "", content: "", image: null }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className="flex flex-col gap-6">
            <label
              htmlFor="title"
              className="text-white font-semibold text-lg"
            >
              Title
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              placeholder="Enter blog title"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <label
              htmlFor="content"
              className="text-white font-semibold text-lg"
            >
              Content
            </label>
            <Field
              id="content"
              name="content"
              as="textarea"
              placeholder="Enter blog content"
              rows="6"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              required
            />

            <div>
              <label
                htmlFor="image"
                className="text-white font-semibold text-lg"
              >
                Upload Blog Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className="mt-2 block w-full text-sm text-gray-900 bg-white rounded-md border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {values.image && (
                <p className="mt-2 text-sm text-white">
                  Selected file: {values.image.name}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 rounded-lg transition-colors duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Blog"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlog;