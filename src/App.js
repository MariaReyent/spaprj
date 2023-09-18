import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import{Home} from "./pages/Home";
import{Contact} from "./pages/Contact";
import{About} from "./pages/About";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
    <Header/>
    <main className="container content">
    
     <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route  path="*" element={<NotFound/>}/>
     </Routes>
    
    </main>
   <Footer/>
    </>
  );
}

export default App;
