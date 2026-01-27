import React, { useState, useRef, useEffect } from 'react';
import './AIChatAssistant.css';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome! I'm here to help you understand ArbiGrow and answer your questions about our upcoming platform. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What is ArbiGrow?",
    "When will the platform launch?",
    "Is investment active now?",
    "Why is this site minimal?"
  ];

  const handleQuickQuestionClick = (question) => {
    setShowQuickQuestions(false);
    setHasInteracted(true);
    handleSendMessage(question);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Calculate dynamic time remaining until launch (30 days from now)
  const getLaunchTimeRemaining = () => {
    const now = new Date();
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const distance = launchDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, distance };
  };

  // Format time remaining into readable text
  const formatTimeRemaining = (language = 'english') => {
    const { days, hours, minutes, seconds } = getLaunchTimeRemaining();
    
    if (language === 'bangla') {
      if (days > 1) {
        return `আজ থেকে ${days} দিন ${hours} ঘন্টা ${minutes} মিনিট এবং ${seconds} সেকেন্ড পরে`;
      } else if (days === 1) {
        return `আগামীকাল, আরো ${hours} ঘন্টা ${minutes} মিনিট এবং ${seconds} সেকেন্ড পরে`;
      } else {
        return `আজ, আর মাত্র ${hours} ঘন্টা ${minutes} মিনিট এবং ${seconds} সেকেন্ড বাকি`;
      }
    } else {
      if (days > 1) {
        return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds from now`;
      } else if (days === 1) {
        return `tomorrow, exactly ${hours} hours, ${minutes} minutes, and ${seconds} seconds from now`;
      } else {
        return `today, in ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
      }
    }
  };

  // Knowledge base for responses with demo information
  const knowledgeBase = {
    english: {
      // Core Introduction
      whatIsArbiGrow: "ArbiGrow is a structured digital investment platform currently under development. The system is designed around predefined packages, automated tracking, and transparent dashboards. This is our coming soon preview page.",
      
      // Countdown Timer Awareness
      countdown: "This timer shows the remaining time until ArbiGrow officially launches. It's a live countdown automatically updating in real-time with clear indicators - DAYS, HOURS, MINUTES, and SECONDS labels for easy reading until our official launch.",
      timer: "The countdown timer is actively counting down from 30 days. It shows Days, Hours, Minutes, and Seconds with clear labels for easy reading until our platform officially goes live.",
      
      // Launch Date
      launch: "Our platform will launch when the countdown timer reaches zero. This live countdown automatically updates every second showing the exact time remaining.",
      whenLaunch: "The platform launches when the countdown timer reaches zero. It's a 30-day countdown from today, showing Days, Hours, Minutes, and Seconds remaining.",
      launchDate: "When the countdown timer reaches zero, that's when ArbiGrow officially launches. The timer shows the live countdown in Days, Hours, Minutes, and Seconds.",
      
      // Platform Status
      registration: "Registration features will be available only after the official launch. This is currently a coming soon preview page.",
      login: "Login functionality will activate after the official launch. This page is a preview of our upcoming platform.",
      deposit: "Investment features will be available after launch. For now, this is a coming soon preview page.",
      withdrawal: "Withdrawal options will be accessible after the platform officially launches.",
      investment: "Active investment features will be available after launch. This is currently a preview page showing our upcoming platform.",
      
      // Profit Information
      profit: "Our platform offers competitive returns through structured investment packages. Specific profit details and ROI percentages will be available after launch when you can review all package options.",
      returns: "Return rates vary by investment package and duration. Detailed return structures will be visible in your dashboard after the platform launches.",
      roi: "ROI information is part of our package details that will be accessible after launch. We offer transparent reporting on all investment performance.",
      guaranteedProfit: "We provide structured returns based on package selections. Specific guaranteed amounts and timeframes will be shown in your investment dashboard after launch.",
      earnings: "Earnings potential depends on your chosen investment package. All earning projections and actual performance tracking will be available in your account after launch.",
      
      // Design & UI Awareness
      whyMinimal: "We've kept this preview page minimal to focus on transparency and clear communication about our upcoming platform. The design is intentionally simple to avoid confusion.",
      design: "The homepage uses a dedicated hero background image (heroimage.png) to create a focused and premium first impression. The minimal design helps visitors understand what's coming without distraction.",
      background: "The homepage features a dedicated hero background image (heroimage.png) that creates a focused, premium visual experience. This helps visitors understand our platform clearly.",
      
      // Mobile Experience
      mobileChat: "The chat interface is being optimized for better usability on mobile devices. We prioritize a clean, comfortable experience for thumb typing and easy reading.",
      
      // General Information
      platformStatus: "This is a Coming Soon / Preview page. No registration, login, or investment features are active yet. Everything will be available after the official launch.",
      isReal: "Yes, ArbiGrow is a real investment platform currently in development. We follow strict security protocols and compliance standards.",
      isSafe: "We prioritize security and transparency. The platform undergoes comprehensive testing and security audits before launch.",
      
      // Default response
      default: "I'm here to help you understand ArbiGrow and our upcoming platform. Feel free to ask about what you see on this page - the countdown timer, our platform features, or launch details. How can I help you today?"
    },
    bangla: {
      // Core Introduction
      whatIsArbiGrow: "ArbiGrow একটি গঠনমূলক ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম যা বর্তমানে উন্নয়নাধীন। সিস্টেমটি পূর্ব-নির্ধারিত প্যাকেজ, স্বয়ংক্রিয় ট্র্যাকিং এবং স্বচ্ছ ড্যাশবোর্ডের উপর ভিত্তি করে ডিজাইন করা হয়েছে। এটি আমাদের শীঘ্রই আসছে প্রিভিউ পৃষ্ঠা।",
      
      // Countdown Timer Awareness
      countdown: "এই টাইমারটি ArbiGrow অফিসিয়ালভাবে লঞ্চ হওয়ার আগে অবশিষ্ট সময় দেখায়। এটি একটি লাইভ কাউন্টডাউন যা প্রতি সেকেন্ডে আপডেট হয় - সহজে পড়ার জন্য স্পষ্ট লেবেল সহ দিন, ঘন্টা, মিনিট এবং সেকেন্ড আমাদের অফিসিয়াল লঞ্চ পর্যন্ত।",
      timer: "কাউন্টডাউন টাইমার 30 দিন থেকে কাউন্ট করছে। এটি সহজে পড়ার জন্য স্পষ্ট লেবেল সহ দিন, ঘন্টা, মিনিট এবং সেকেন্ড অবশিষ্ট সময় দেখায় আমাদের প্ল্যাটফর্ম অফিসিয়ালভাবে লাইভ হওয়ার জন্য।",
      
      // Launch Date
      launch: "আমাদের প্ল্যাটফর্ম লঞ্চ হবে যখন কাউন্টডাউন টাইমার শূন্য পৌঁছাবে। এটি একটি লাইভ কাউন্টডাউন যা প্রতি সেকেন্ডে আপডেট হয় অবশিষ্ট সঠিক সময় দেখিয়ে।",
      whenLaunch: "প্ল্যাটফর্ম লঞ্চ হবে যখন কাউন্টডাউন টাইমার শূন্য পৌঁছাবে। এটি আজ থেকে 30 দিনের কাউন্টডাউন, দিন, ঘন্টা, মিনিট এবং সেকেন্ড অবশিষ্ট সময় দেখাচ্ছে।",
      launchDate: "যখন কাউন্টডাউন টাইমার শূন্য পৌঁছাবে, তখনই ArbiGrow অফিসিয়ালভাবে লঞ্চ হবে। টাইমারটি লাইভ কাউন্টডাউন দেখায় দিন, ঘন্টা, মিনিট এবং সেকেন্ডে।",
      
      // Platform Status
      registration: "রেজিস্ট্রেশন ফিচার অফিসিয়াল লঞ্চের পর উপলব্ধ হবে। এটি বর্তমানে একটি শীঘ্রই আসছে প্রিভিউ পৃষ্ঠা।",
      login: "লগইন ফাংশনালিটি অফিসিয়াল লঞ্চের পর সক্রিয় হবে। এই পৃষ্ঠাটি আমাদের আসন্ন প্ল্যাটফর্মের প্রিভিউ।",
      deposit: "বিনিয়োগ ফিচার লঞ্চের পর উপলব্ধ হবে। এখন পর্যন্ত, এটি একটি শীঘ্রই আসছে প্রিভিউ পৃষ্ঠা।",
      withdrawal: "উত্তোলন বিকল্পগুলি প্ল্যাটফর্ম অফিসিয়ালভাবে লঞ্চ হওয়ার পর অ্যাক্সেসযোগ্য হবে।",
      investment: "সক্রিয় বিনিয়োগ ফিচার লঞ্চের পর উপলব্ধ হবে। এটি বর্তমানে একটি প্রিভিউ পৃষ্ঠা আমাদের আসন্ন প্ল্যাটফর্ম দেখাচ্ছে।",
      
      // General Information
      platformStatus: "এটি একটি শীঘ্রই আসছে / প্রিভিউ পৃষ্ঠা। এখনও কোন রেজিস্ট্রেশন, লগইন বা বিনিয়োগ ফিচার সক্রিয় নয়। সবকিছু অফিসিয়াল লঞ্চের পর উপলব্ধ হবে।",
      isReal: "হ্যাঁ, ArbiGrow একটি বাস্তব বিনিয়োগ প্ল্যাটফর্ম যা বর্তমানে উন্নয়নাধীন। আমরা কঠোর নিরাপত্তা প্রোটোকল এবং কমপ্লায়েন্স মানদণ্ড অনুসরণ করি।",
      isSafe: "আমরা নিরাপত্তা এবং স্বচ্ছতাকে অগ্রাধিকার দিই। প্ল্যাটফর্মটি লঞ্চের আগে বিস্তারিত পরীক্ষা এবং নিরাপত্তা অডিট করে।",
      
      // Default response
      default: "আমি এখানে ArbiGrow এবং আমাদের আসন্ন প্ল্যাটফর্ম সম্পর্কে আপনাকে সাহায্য করার জন্য। এই পৃষ্ঠায় আপনি যা দেখছেন সে সম্পর্কে জিজ্ঞাসা করুন - কাউন্টডাউন টাইমার, আমাদের প্ল্যাটফর্ম ফিচার, বা লঞ্চ বিবরণ। আজকে আমি কীভাবে আপনাকে সাহায্য করতে পারি?"
    }
  };

  // Detect language (simple detection)
  const detectLanguage = (text) => {
    // Simple heuristic: if text contains Bangla characters, assume Bangla
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text) ? 'bangla' : 'english';
  };

  // Generate AI response with dynamic launch date
  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const language = detectLanguage(userMessage);
    const kb = knowledgeBase[language];

    // Launch date and countdown related - DYNAMIC RESPONSE
    if (lowerMessage.includes('launch') || lowerMessage.includes('date') || lowerMessage.includes('when') || 
        lowerMessage.includes('লঞ্চ') || lowerMessage.includes('তারিখ') || lowerMessage.includes('কখন') ||
        lowerMessage.includes('open') || lowerMessage.includes('start') || lowerMessage.includes('live') ||
        lowerMessage.includes('খোলা') || lowerMessage.includes('শুরু') || lowerMessage.includes('লাইভ') ||
        lowerMessage.includes('tomorrow') || lowerMessage.includes('আগামীকাল') ||
        lowerMessage.includes('today') || lowerMessage.includes('আজ') ||
        lowerMessage.includes('timer') || lowerMessage.includes('কাউন্টডাউন') ||
        lowerMessage.includes('countdown') || lowerMessage.includes('টাইমার')) {
      
      const timeRemaining = formatTimeRemaining(language);
      
      if (language === 'bangla') {
        return `আমাদের প্ল্যাটফর্ম ${timeRemaining} লঞ্চ হবে। হোমপেজের কাউন্টডাউন টাইমার সঠিক সময় দেখাচ্ছে যা প্রতি সেকেন্ডে আপডেট হয় - দিন, ঘন্টা, মিনিট এবং সেকেন্ড। এটি একটি লাইভ কাউন্টডাউন যা আমাদের অফিসিয়াল লঞ্চ পর্যন্ত সময় দেখায়।`;
      } else {
        return `Our platform will launch ${timeRemaining}. The countdown timer on the homepage shows the exact time remaining, updating every second - Days, Hours, Minutes, and Seconds. This is a live countdown showing time until our official launch.`;
      }
    }

    // Company related
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('কোম্পানি') || lowerMessage.includes('সম্পর্কে')) {
      return kb.company;
    }

    // Profit related
    if (lowerMessage.includes('profit') || lowerMessage.includes('earn') || lowerMessage.includes('return') || 
        lowerMessage.includes('লাভ') || lowerMessage.includes('আয়') || lowerMessage.includes('রিটার্ন') || 
        lowerMessage.includes('earnings') || lowerMessage.includes('roi')) {
      return kb.profit;
    }

    // Registration related
    if (lowerMessage.includes('register') || lowerMessage.includes('signup') || lowerMessage.includes('sign up') || 
        lowerMessage.includes('রেজিস্ট্রেশন') || lowerMessage.includes('সাইন আপ')) {
      return kb.registration;
    }

    // Login related
    if (lowerMessage.includes('login') || lowerMessage.includes('log in') || lowerMessage.includes('লগইন') || lowerMessage.includes('লগ ইন')) {
      return kb.login;
    }

    // Deposit related
    if (lowerMessage.includes('deposit') || lowerMessage.includes('invest') || lowerMessage.includes('payment') || 
        lowerMessage.includes('জমা') || lowerMessage.includes('বিনিয়োগ')) {
      return kb.deposit;
    }

    // Withdrawal related
    if (lowerMessage.includes('withdraw') || lowerMessage.includes('withdrawal') || lowerMessage.includes('উত্তোলন')) {
      return kb.withdrawal;
    }

    // Profit activation related
    if (lowerMessage.includes('activate') || lowerMessage.includes('activation') || lowerMessage.includes('সক্রিয়')) {
      return kb.profitActivation;
    }

    // What is ArbiGrow
    if (lowerMessage.includes('what is') || lowerMessage.includes('what\'s') || lowerMessage.includes('কি') || 
        lowerMessage.includes('কী') || lowerMessage.includes('আরবিগ্রো কি')) {
      return kb.whatIsArbiGrow;
    }

    // Platform status
    if (lowerMessage.includes('status') || lowerMessage.includes('অবস্থা')) {
      return kb.platformStatus;
    }

    // Why minimal design
    if (lowerMessage.includes('why') && (lowerMessage.includes('simple') || lowerMessage.includes('minimal') || 
        lowerMessage.includes('কেন') || lowerMessage.includes('সাদামাটা'))) {
      return kb.whyMinimal;
    }

    // Is it real/safe
    if ((lowerMessage.includes('real') || lowerMessage.includes('fake') || lowerMessage.includes('legit') || 
         lowerMessage.includes('বাস্তব') || lowerMessage.includes('প্রকৃত')) ||
        (lowerMessage.includes('safe') || lowerMessage.includes('secure') || lowerMessage.includes('risk') || 
         lowerMessage.includes('নিরাপদ') || lowerMessage.includes('সুরক্ষিত'))) {
      return kb.isReal;
    }

    // Countdown
    if (lowerMessage.includes('countdown') || lowerMessage.includes('timer') || lowerMessage.includes('কাউন্টডাউন') || lowerMessage.includes('টাইমার')) {
      return kb.countdown;
    }

    // Mobile experience
    if (lowerMessage.includes('mobile') || lowerMessage.includes('mobile chat') || lowerMessage.includes('typing') || 
        lowerMessage.includes('thumb') || lowerMessage.includes('comfortable') || lowerMessage.includes('layout') ||
        lowerMessage.includes('মোবাইল') || lowerMessage.includes('টাইপিং') || lowerMessage.includes('আঙ্গুল') ||
        lowerMessage.includes('আরাম') || lowerMessage.includes('লেআউট')) {
      return kb.mobileChat;
    }

    // Guaranteed profit
    if (lowerMessage.includes('guarantee') || lowerMessage.includes('assured') || lowerMessage.includes('fixed') || 
        lowerMessage.includes('নিশ্চিত') || lowerMessage.includes('আশ্বাস')) {
      return kb.guaranteedProfit;
    }

    // Default response
    const defaultResponses = {
      english: kb.default,
      bangla: kb.default
    };
    
    return defaultResponses[language];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Hide quick questions after first interaction
    if (showQuickQuestions) {
      setShowQuickQuestions(false);
      setHasInteracted(true);
    }

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Hide quick questions after first interaction
    setShowQuickQuestions(false);
    setHasInteracted(true);
    
    // Automatically send the question
    setTimeout(() => {
      const userMessage = {
        id: messages.length + 1,
        text: question,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: generateResponse(question),
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }, 100);
  };

  return (
    <div className="ai-chat-container">
      {/* Chat toggle button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat assistant"
      >
        <div className="toggle-content">
          <div className="ai-avatar-pulse">
            <span className="ai-icon">🤖</span>
            <div className="pulse-ring"></div>
          </div>
          {!isOpen && (
            <div className="toggle-text">
              <span className="toggle-label">Ask me for Details</span>
              <span className="toggle-subtitle">AI Assistant</span>
            </div>
          )}
        </div>
        {!isOpen && <span className="notification-badge">Live</span>}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={`chat-window ${isOpen ? 'fully-open' : ''}`}>
          <div className="chat-header">
            <div className="header-content">
              <div className="avatar-glow">
                <span className="ai-icon-header">🤖</span>
              </div>
              <div className="chat-title">
                <h3>ArbiGrow AI Assistant</h3>
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <p>Online now</p>
                </div>
              </div>
            </div>
            <div className="header-controls">
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="chat-main">
            <div className="chat-messages">
              <div className="welcome-banner">
                <span className="welcome-icon">👋</span>
                <h4>Welcome to ArbiGrow!</h4>
                <p>Ask me about our company, profit structure, or launch timeline</p>
              </div>

              {/* Quick Questions Panel - First-time user experience */}
              {showQuickQuestions && !hasInteracted && (
                <div className="quick-questions-panel">
                  <div className="quick-questions-header">
                    <span className="quick-icon">💡</span>
                    <h5>Quick Questions</h5>
                    <p>Click any question to get started</p>
                  </div>
                  <div className="quick-questions-grid">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        className="quick-question-btn"
                        onClick={() => handleQuickQuestionClick(question)}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender}`}
                >
                  {message.sender === 'ai' && (
                    <div className="message-avatar">
                      <div className="avatar-small">🤖</div>
                    </div>
                  )}
                  <div className="message-content-wrapper">
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="timestamp">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="message-status">
                      <span className="status-check">✓✓</span>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="message ai">
                  <div className="message-avatar">
                    <div className="avatar-small">🤖</div>
                  </div>
                  <div className="message-content-wrapper">
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="quick-questions">
              <p className="suggestions-label">Quick Questions:</p>
              <div className="suggestions-grid">
                <button 
                  className="suggestion-chip"
                  onClick={() => handleQuickQuestion("When will ArbiGrow launch?")}
                >
                  🚀 Launch Date?
                </button>
                <button 
                  className="suggestion-chip"
                  onClick={() => handleQuickQuestion("What are the profit returns?")}
                >
                  💰 Profit Returns?
                </button>
                <button 
                  className="suggestion-chip"
                  onClick={() => handleQuickQuestion("Tell me about your company")}
                >
                  🏢 About Company
                </button>
                <button 
                  className="suggestion-chip"
                  onClick={() => handleQuickQuestion("Is ArbiGrow safe and secure?")}
                >
                  🛡️ Safety & Security
                </button>
              </div>
            </div>

            <div className="chat-input-area">
              <div className="input-container">
                <div className="input-wrapper">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    rows="1"
                    className="chat-input"
                  />
                </div>
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`send-button ${inputValue.trim() && !isTyping ? 'active' : 'disabled'}`}
                  aria-label="Send message"
                >
                  {isTyping ? (
                    <div className="sending-spinner"></div>
                  ) : (
                    <span>➤</span>
                  )}
                </button>
              </div>
              <div className="input-footer">
                <span className="language-tag">EN / বাংলা</span>
                <p className="input-hint">Press Enter to send</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;