import { Link } from 'react-router-dom';
const NavBar = () => {

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Sanish.
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-500 font-medium">
              Projects
            </Link>
            <Link to="/skills" className="text-gray-700 hover:text-blue-500 font-medium">
              Skills
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-500 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
              Contact
            </Link>
          </div>

      </div>
  </div>

    </nav>
  );
};

export default NavBar;
