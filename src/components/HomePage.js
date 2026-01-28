import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to (30 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      
      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      <header className="homepage-header">
        {/* Floating particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        <div className="content-wrapper">
          {/* Hero Image Section */}
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="hero-icon">🌱</div>
              <div className="hero-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
          </div>
          <h2 className="subtitle">Digital Investment Platform</h2>
          <div className="countdown-section">
            <p className="countdown-title">Launch Countdown Timer</p>
            <div className="timer-display">
              <div className="time-unit">
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="unit-label">DAYS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="unit-label">HOURS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="unit-label">MINS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="unit-label">SECS</span>
              </div>
            </div>
          </div>
          
          <h1 className="main-title">ArbiGrow</h1>
          
          <p className="description">
            Coming Soon<br />
            Launch Preview
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3 className="feature-title">Automated Tracking</h3>
              <p className="feature-desc">Smart monitoring of investments with real-time updates and performance analytics</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3 className="feature-title">Transparent System</h3>
              <p className="feature-desc">Full visibility into all transactions and platform operations for complete trust</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💼</span>
              <h3 className="feature-title">Structured Packages</h3>
              <p className="feature-desc">Predefined investment options designed for different risk appetites and goals</p>
            </div>
          </div>
          
          <div className="info-section">
            <p className="info-text">
              This is a preview of the upcoming ArbiGrow platform.<br />
              Official features will be available after launch.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;