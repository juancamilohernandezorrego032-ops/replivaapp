import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/philosophy" element={<Philosophy />} />
          <Route path="/pages/gallery" element={<Gallery />} />
          <Route path="/pages/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;