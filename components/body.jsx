import { useState, useEffect } from "react";
import Aboutme from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Contact from "./contact";

export default function Body() {
  const [page, setPage] = useState('About');
  const [animationClass, setAnimationClass] = useState('');

  // Trigger animation when the page changes
  useEffect(() => {
    setAnimationClass('fade-in'); // Add animation class
    const timer = setTimeout(() => {
      setAnimationClass(''); // Remove the class after animation completes
    }, 800); // Match the animation duration

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [page]);

  return (
    <>
      <div className="body-container">
        {/* Navbar */}
        <nav className="header-bar">
          <ul>
            <button onClick={() => setPage('About')}>About</button>
            <button onClick={() => setPage('Resume')}>Resume</button>
            <button onClick={() => setPage('Portfolio')}>Portfolio</button>
            <button onClick={() => setPage('Blog')}>Blog</button>
            <button onClick={() => setPage('Contact')}>Contact</button>
          </ul>
        </nav>

        {/* Body */}
        <div className={animationClass}>
          {page === 'About' && <Aboutme />}
          {page === 'Resume' && <Resume />}
          {page === 'Portfolio' && <Portfolio />}
          {page === 'Blog' && <Blog />}
          {page === 'Contact' && <Contact />}
        </div>

                {/* footer */}

            </div>
        </>
    )
}

// 1a75cf