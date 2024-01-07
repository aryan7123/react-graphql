import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
