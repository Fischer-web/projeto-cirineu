import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Help from '@/pages/Help';
import Contact from '@/pages/Contact';
import Shop from '@/pages/Shop';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-projeto" element={<About />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/ajude-nos" element={<Help />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/loja" element={<Shop />} />
        </Routes>
    </Router>
  );
}

export default App;
