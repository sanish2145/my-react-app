import './App.css';
import CreateBlog from './Pages/CreateBlog';
import BlogList from './Pages/BlogList';
import BlogDetail from './Pages/BlogDetail';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Pages/HeroSection';

function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar is visible on all pages */}
      <main className="bg-red-400 text-2xl">
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/" element={<Login />} />

          
          <Route path="/" element={<CreateBlog />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/" element={<BlogDetail />} />
          <Route path="/" element={<BlogDetail />} />
           <Route path="/" element={<HeroSection/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
