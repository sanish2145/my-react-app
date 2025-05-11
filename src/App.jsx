import './App.css';
import CreateBlog from './Pages/CreateBlog';
import BlogList from './Pages/BlogList';
import BlogDetail from './Pages/BlogDetail'
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="bg-red-400 text-2xl">
        <Routes>
          <Route path="/NavBar" element={<NavBar />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
            <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
