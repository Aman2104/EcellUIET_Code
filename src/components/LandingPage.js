import React, { useState, useEffect, useRef } from 'react';
import Particles from 'particles-bg';
import '../styles/Landingpage.css';

const LandingPage = () => {
  const [numParticles, setNumParticles] = useState(50);
  const [scrollDirection, setScrollDirection] = useState('');
  const [scrollY, setScrollY] = useState(0);
  // const scrollRef = useRef(null);
  const container = useRef(null);
  const anchor = useRef(null);
  const scrollRef = useRef(null);
  // const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log(currentScrollY, scrollY)
    if (currentScrollY > scrollY) {
      setScrollDirection('down');
      console.log(scrollDirection);
    } else {
      setScrollDirection('up');
      // console.log(scrollDirection);
    }
    setScrollY(currentScrollY);
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumParticles(20);
      } else {
        setNumParticles(50);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    width: '100%',
    animation: scrollDirection === 'down' ? 'scrollUp 2s both' : 'scrollDown 2s both',

  }
  const addAnimation = {
    width: '100%',
    animation: scrollDirection === 'down' ? 'swipeLeft 2s both' : 'swipeRight 2s both',

  }
  return (

    <div ref={scrollRef} onScroll={handleScroll} style={{ backgroundColor: '#000000', position: "relative", height: '200vh', width:"100%", overflow:"hidden", }}>
      <Particles
        color='#FFFFFF'
        num={numParticles}
        type='cobweb'
        particleSpeed={0.5}

      />
      <div className='text-container'>
          <div className="spantags" style={addAnimation}>
            <span>Ideate</span>
            <span>Innovate</span>
            <span>Incubate</span>
          </div>
        <div ref={container} className="container" style={styles}>
          <h1>The Entrepreneurship Cell</h1>
          <h2 style={{ color: '#ffffff' , fontWeight: "bold"}}>UIET Kurukshetra</h2>
          <p>"IDENTIFY YOUR PROBLEMS AND PUT IN ENERGY TO ACCOMPLISH SOLUTIONS."</p>
          <a ref={anchor} href="/" className="glowingbtn">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
