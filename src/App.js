import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";


export default function App() {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </div>
    );
}


