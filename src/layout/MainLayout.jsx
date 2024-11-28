'use client'

// MainLayout.jsx
import Header from './Header';
import Footer from './Footer';
import BgBackdrop from '../props/BgBackdrop';
import RightOffCanvas from '../props/RightOffCanvas';
import ScrollTo from '../props/ScrollTo';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';

function MainLayout({ children }) {

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.5,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  

  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const toggleOffCanvas = () => {
    setOffCanvasOpen(prev => !prev);
  };

  return (
    <>
        <Header onToggleOffCanvas={toggleOffCanvas} />
          {children}
          <RightOffCanvas isOpen={isOffCanvasOpen} onClose={() => setOffCanvasOpen(false)} />
        <Footer onToggleOffCanvas={toggleOffCanvas} />
        <ScrollTo />
        <BgBackdrop/>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
  
