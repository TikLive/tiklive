import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/style.css';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/script.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <article>
          <div className="hero has-before" id="home">
            <div className="container">
              <p className="section-subtitle">Enjoy The Games</p>
              <h1 className="h1 title hero-title">Epic Interactive Games Made<br />For True Gamers!</h1>
              <a href="#" className="btn" data-btn>Join With Us</a>
              <div className="hero-banner">
                <img src="/assets/images/hero-banner.png" width="850" height="414" alt="hero banner" className="w-100" />
                <img src="/assets/images/hero-banner-bg.png" alt="" className="hero-banner-bg" />
              </div>
            </div>
          </div>
          {/* Agrega el contenido adicional aquí */}
        </article>
      </main>
    </div>
  );
};

export default Home;