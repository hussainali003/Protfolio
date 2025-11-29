import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// pages
import Home from './pages/Home';
import About from "./pages/about";
import NoPage from "./pages/NoPage";
// import Projects from "./pages/Project";

// components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full m-14 overflow-hidden bg-secondary text-white font-mono relative  border border-line rounded-sm ">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
