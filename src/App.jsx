import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import SingleItem from "./components/SingleItem";

function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SingleItem" element={<SingleItem />} />
        </Routes>
        <Sidebar />
        <Footer />
      </div>
    </main>
  );
}

export default App;
