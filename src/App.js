import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element = {<Home />} />
      <Route path="/about" element ={<About />} />
      <Route path="/contact" element ={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;