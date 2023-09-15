import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components";
import {Footer} from "./components";

import{Home} from "./pages/Home";
import{Contact} from "./pages/Contact";
import{About} from "./pages/About";

function App() {
  return (
    <>
    <Header/>
    <main classname="container content">
     <Router>
         <Route path="/" element={Home} />
         <Route path="/about" element={About} />
         <Route path="/contact" element={Contact} />
     </Router>
    </main>
   <Footer/>
    </>
  );
}

export default App;
