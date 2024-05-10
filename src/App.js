import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.js'
import About from './Pages/about.js'
import Services from './Pages/services.js';
import Layout from './Pages/layout.js';
import Contact from './Pages/contact.js';




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
          
      </Route>
    </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
