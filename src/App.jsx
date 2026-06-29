import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Chatbot from './components/Chatbot.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

// Scroll restoration helper on route changes
function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top on page navigation
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, scroll to the element after a short timeout to let the DOM render
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <ScrollToTopButton />
    </>
  );
}

export default App;
