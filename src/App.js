import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PresaleSection from './components/PresaleSection';
import TokenomicsSection from './components/TokenomicsSection';
import Roadmap from './components/Roadmap';
import WhyGritSection from './components/WhyGritSection';
import Footer from './components/Footer';
import Notification from './components/Notification';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenType, setTokenType] = useState('USDT');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [notificationVisible, setNotificationVisible] = useState(false);
  const textRefs = useRef([]);
  const elementsRef = useRef([]);

  // Mouse movement effect for text and elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      textRefs.current.forEach((element) => {
        if (element && !element.closest('.notification')) {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            (e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2
          );
          const maxDistance = 150;
          const darkness = Math.max(0, 1 - distance / maxDistance);
          const grayValue = Math.floor(255 * (1 - darkness));
          element.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
        }
      });

      elementsRef.current.forEach((element) => {
        if (element) {
          const speed = element.dataset.speed || 0.1;
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
          element.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animation with Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    console.log('Sections found:', sections.length); // Debug: Check if sections are detected
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Entry:', entry.target.id, 'Intersecting:', entry.isIntersecting); // Debug: Log each section
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Increase to 20% visibility to ensure triggering
    );
  
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="app"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2) 0%, rgba(10, 10, 10, 1) 70%)`,
      }}
    >
      <ParticleCanvas />
      <div className="stars-background" />
      <Navbar scrollToSection={scrollToSection} />
      <PresaleSection
        walletConnected={walletConnected}
        setWalletConnected={setWalletConnected}
        tokenAmount={tokenAmount}
        setTokenAmount={setTokenAmount}
        tokenType={tokenType}
        setTokenType={setTokenType}
        setNotificationVisible={setNotificationVisible}
        textRefs={textRefs}
        elementsRef={elementsRef}
      />
      <TokenomicsSection textRefs={textRefs} elementsRef={elementsRef} />
      <Roadmap textRefs={textRefs} elementsRef={elementsRef} />
      <WhyGritSection textRefs={textRefs} elementsRef={elementsRef} />
      <Footer textRefs={textRefs} />
      {notificationVisible && (
        <Notification
          message="The number of tokens cannot be 0 or empty. Please enter a valid amount."
          setVisible={setNotificationVisible}
        />
      )}
            <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>$GRIT Presale</title>
  <meta name="description" content="Join the $GRIT presale on Solana blockchain" />
  <link rel="src/Logo-grit-token.jpg" href="" />
</head>
    </div>
  );
}

export default App;