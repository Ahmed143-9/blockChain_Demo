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
          <div className="countdown-section">
            <p className="countdown-title">Launch Countdown Timer</p>
            <div className="timer-display" id="countdown-timer">30:00:00:00</div>
          </div>
          
          <h1 className="main-title">ArbiGrow</h1>
          <h2 className="subtitle">Digital Investment Platform</h2>
          
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
          
          // Output the result in the element with id="countdown-timer"
          document.getElementById("countdown-timer").innerHTML = formattedDays + ":" + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
          
          // If the count down is over, write some text 
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "00:00:00:00";
          }
        }, 1000);
      `}} />
    </div>
  );
}

export default HomePage;