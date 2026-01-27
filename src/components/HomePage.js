import React from 'react';
import './HomePage.css';

function HomePage() {
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
            <div className="timer-display" id="countdown-timer">
              <div className="time-unit">
                <span id="days">30</span>
                <span className="unit-label">DAYS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span id="hours">00</span>
                <span className="unit-label">HOURS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span id="minutes">00</span>
                <span className="unit-label">MINS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-unit">
                <span id="seconds">00</span>
                <span className="unit-label">SECS</span>
              </div>
            </div>
          </div>
          
          <h1 className="main-title"></h1>
          
          
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
      
      <script dangerouslySetInnerHTML={{__html: `
        // Set the date we're counting down to (30 days from now)
        var countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 30);
        
        // Update the count down every 1 second
        var x = setInterval(function() {
          
          // Get today's date and time
          var now = new Date().getTime();
          
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
          
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          // Format the display with leading zeros
          var formattedDays = days.toString().padStart(2, '0');
          var formattedHours = hours.toString().padStart(2, '0');
          var formattedMinutes = minutes.toString().padStart(2, '0');
          var formattedSeconds = seconds.toString().padStart(2, '0');
          
          // Update each time unit individually
          document.getElementById("days").textContent = formattedDays;
          document.getElementById("hours").textContent = formattedHours;
          document.getElementById("minutes").textContent = formattedMinutes;
          document.getElementById("seconds").textContent = formattedSeconds;
          
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
          }
        }, 1000);
      `}} />
    </div>
  );
}

export default HomePage;