import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main-Page/Main.jsx";
import PageAbout from "./seperate-pages/about/PageAbout.jsx";
import PageProjects from "./seperate-pages/projects/PageProjects.jsx";
import PageEducation from "./seperate-pages/education/PageEducation.jsx";
import PageContact from "./seperate-pages/contact/PageContact.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<PageAbout />} />
        <Route path="/Projects" element={<PageProjects />} />
        <Route path="/Education" element={<PageEducation />} />
        <Route path="/Contact" element={<PageContact />} />
      </Routes>
    </Router>
  );
}

export default App;
