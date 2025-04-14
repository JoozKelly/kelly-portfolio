import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home, About, Projects, Thesis, WA, CE, OE, Contact, Legal, } from "./pages";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/WA" element={<WA />} />
          <Route path="/CE" element={<CE />} />
          <Route path="/OE" element={<OE />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App