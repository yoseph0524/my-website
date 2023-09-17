import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import MyProfile from "./routes/MyProfile";
import Projects from "./routes/Projects";
import Courses from "./routes/Courses";
import Contacts from "./routes/Contacts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
