import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import Compare from './components/Compare';
import Buy from './components/Buy';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'iPhone 15 Pro - Apple Clone';
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <Compare />
      <Buy />
      <Footer />
    </main>
  );
}

export default App;