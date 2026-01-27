import React, { useState, useRef, useEffect } from 'react';
import './AIChatAssistant.css';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to provide details about ArbiGrow. You can ask me about our company, profit structure, or launch date. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for responses with demo information
  const knowledgeBase = {
    english: {
      // Company Information
      company: "ArbiGrow is a digital investment platform being developed by a team of financial technology experts. Our company focuses on creating secure, transparent investment opportunities using automated systems. We aim to provide accessible investment solutions with clear reporting and structured packages.",
      aboutCompany: "Our company specializes in blockchain-based investment solutions. We have a team of experienced developers and financial analysts working to build a reliable platform for digital asset management.",
      
      // Profit Information
      profit: "Our platform offers structured investment packages with potential returns based on market performance. Profit generation is automated through our smart tracking system. Typical monthly returns range from 8-15% depending on the selected package and market conditions.",
      returns: "We offer various investment packages with different return structures. Our basic package targets 8-10% monthly returns, while premium packages may offer 12-15% monthly returns based on higher investment amounts.",
      earnings: "Users can expect daily profit distributions through our automated system. Profits are calculated based on package performance and distributed automatically to user accounts.",
      
      // Launch Date Information
      launch: "Our platform is scheduled to launch in 30 days from today. The exact launch date is when the countdown timer reaches zero. We're conducting final security checks and system optimizations before going live.",
      launchDate: "The official launch date is set for 30 days from now. We want to ensure all systems are thoroughly tested and secure before opening to the public.",
      whenLaunch: "We're targeting a launch date approximately 30 days from today. The countdown timer on our homepage shows the exact time remaining.",
      
      // Other Information
      whatIsArbiGrow: "ArbiGrow is a structured digital investment platform currently under development. The system is designed around predefined packages, automated tracking, and transparent dashboards.",
      platformStatus: "ArbiGrow is currently in its pre-launch phase. This website is a preview showcasing our upcoming platform features.",
      registration: "Registration will be available after the official launch. Currently, this page is for information purposes only.",
      login: "User login functionality will be activated after the official platform launch.",
      deposit: "Investment deposit features will be available after launch. Users can then select from our various investment packages.",
      withdrawal: "Fund withdrawal options will be accessible through user accounts after the platform goes live.",
      profitActivation: "Profit distribution system will be operational after the official launch date.",
      whyMinimal: "We've kept this preview page simple to focus on transparency and provide clear information about our upcoming platform.",
      whenLive: "The platform will go live when the countdown timer reaches zero, approximately 30 days from today.",
      isReal: "Yes, ArbiGrow is a real investment platform currently in development. We follow strict security protocols and compliance standards.",
      isSafe: "We prioritize security and transparency. The platform undergoes comprehensive testing and security audits before launch.",
      countdown: "The countdown shows our target launch date, 30 days from today. Our team is working on final preparations before going live.",
      guaranteedProfit: "While we offer structured packages with target returns, investment outcomes depend on market conditions and cannot be guaranteed.",
      roi: "Our investment packages have target return ranges from 8-15% monthly. Actual returns may vary based on market performance and selected package type."
    },
    bangla: {
      // Company Information
      company: "ArbiGrow হল একটি ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম যা আর্থিক প্রযুক্তি বিশেষজ্ঞদের একটি দল দ্বারা উন্নয়ন করা হচ্ছে। আমাদের কোম্পানি স্বয়ংক্রিয় সিস্টেম ব্যবহার করে নিরাপদ, স্বচ্ছ বিনিয়োগের সুযোগ তৈরির উপর ফোকাস করে। আমরা স্পষ্ট রিপোর্টিং এবং গঠনমূলক প্যাকেজের সাথে অ্যাক্সেসযোগ্য বিনিয়োগ সমাধান প্রদানের লক্ষ্যে কাজ করছি।",
      aboutCompany: "আমাদের কোম্পানি ব্লকচেইন-ভিত্তিক বিনিয়োগ সমাধানে বিশেষজ্ঞ। আমাদের অভিজ্ঞ ডেভেলপার এবং আর্থিক বিশ্লেষকদের একটি দল ডিজিটাল সম্পদ পরিচালনার জন্য একটি নির্ভরযোগ্য প্ল্যাটফর্ম তৈরির জন্য কাজ করছে।",
      
      // Profit Information
      profit: "আমাদের প্ল্যাটফর্ম বাজারের কার্যক্ষমতার উপর ভিত্তি করে সম্ভাব্য রিটার্ন সহ গঠনমূলক বিনিয়োগ প্যাকেজ অফার করে। লাভ উৎপাদন আমাদের স্মার্ট ট্র্যাকিং সিস্টেমের মাধ্যমে স্বয়ংক্রিয়। প্রতি মাসে 8-15% রিটার্নের সম্ভাবনা রয়েছে নির্বাচিত প্যাকেজ এবং বাজারের অবস্থার উপর নির্ভর করে।",
      returns: "আমরা বিভিন্ন রিটার্ন গঠনের সাথে বিভিন্ন বিনিয়োগ প্যাকেজ অফার করি। আমাদের বেসিক প্যাকেজ 8-10% মাসিক রিটার্ন লক্ষ্য করে, যেখানে প্রিমিয়াম প্যাকেজগুলো 12-15% মাসিক রিটার্ন অফার করতে পারে বেশি বিনিয়োগ পরিমাণের উপর ভিত্তি করে।",
      earnings: "ব্যবহারকারীরা প্রতিদিন লাভ বন্টন আশা করতে পারেন আমাদের স্বয়ংক্রিয় সিস্টেমের মাধ্যমে। লাভ প্যাকেজ কার্যক্ষমতা এবং ব্যবহারকারী অ্যাকাউন্টগুলোতে স্বয়ংক্রিয়ভাবে বন্টন করা হয়।",
      
      // Launch Date Information
      launch: "আমাদের প্ল্যাটফর্ম 30 দিন পর লঞ্চের সময়সূচি দেওয়া হয়েছে। নির্দিষ্ট লঞ্চের তারিখ যখন কাউন্টডাউন টাইমার শূন্য পৌঁছাবে। পাবলিকের সামনে আসার আগে শেষ নিরাপত্তা চেক এবং সিস্টেম অপটিমাইজেশন করা হচ্ছে।",
      launchDate: "অফিসিয়াল লঞ্চের তারিখ আজকের 30 দিনের মধ্যে সেট করা আছে। জনসমক্ষে প্রদর্শন শুরু হওয়ার আগে প্রতিটি সিস্টেমে শ্রেয়তরতীসতটতজভইএাষ",
      
      "EesHs": "AmsI ekti bAstb pLAtfOrM uNnYonAdHIn. AmrA nIrApTtA-prThm pAdDhTi AnuSOrN kRi kOn prAthmik jmA CHhARa EbM kOn twRit lAnCH CHhARa.",
      
      // Other Information
      whatIsArbiGrow: "ArbiGrow একটি গঠনমূলক ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম যা বর্তমানে উন্নয়নাধীন। সিস্টেমটি পূর্ব-নির্ধারিত প্যাকেজ, স্বয়ংক্রিয় ট্র্যাকিং এবং স্বচ্ছ ড্যাশবোর্ডের উপর ভিত্তি করে ডিজাইন করা হয়েছে।",
      platformStatus: "ArbiGrow বর্তমানে এর প্রি-লঞ্চ পর্যায়ে। এই ওয়েবসাইটটি আমাদের আসন্ন প্ল্যাটফর্ম বৈশিষ্ট্যগুলি প্রদর্শন করে।",
      registration: "রেজিস্ট্রেশন অফিসিয়াল লঞ্চের পর উপলব্ধ হবে। বর্তমানে, এই পৃষ্ঠাটি শুধুমাত্র তথ্যের জন্য।",
      login: "ব্যবহারকারী লগইন ফাংশনালিটি অফিসিয়াল প্ল্যাটফর্ম লঞ্চের পর সক্রিয় হবে।",
      deposit: "বিনিয়োগ জমা বৈশিষ্ট্যগুলি লঞ্চের পর উপলব্ধ হবে। ব্যবহারকারীরা তখন আমাদের বিভিন্ন বিনিয়োগ প্যাকেজ থেকে নির্বাচন করতে পারবেন।",
      withdrawal: "তহবিল উত্তোলন বিকল্পগুলি প্ল্যাটফর্ম লাইভ হওয়ার পর ব্যবহারকারী অ্যাকাউন্টের মাধ্যমে অ্যাক্সেসযোগ্য হবে।",
      profitActivation: "লাভ বন্টন সিস্টেম অফিসিয়াল লঞ্চের তারিখের পর কার্যকর হবে।",
      whyMinimal: "আমরা স্বচ্ছতা বজায় রেখে এবং আমাদের আসন্ন প্ল্যাটফর্ম সম্পর্কে স্পষ্ট তথ্য প্রদানের জন্য এই প্রিভিউ পৃষ্ঠাটিকে সহজ রেখেছি।",
      whenLive: "প্ল্যাটফর্ম 30 দিন পর লাইভ হবে যখন কাউন্টডাউন টাইমার শূন্য পৌঁছাবে।",
      isReal: "হ্যাঁ, ArbiGrow একটি বাস্তব বিনিয়োগ প্ল্যাটফর্ম যা বর্তমানে উন্নয়নাধীন। আমরা কঠোর নিরাপত্তা প্রোটোকল এবং কমপ্লায়েন্স মানদণ্ড অনুসরণ করি।",
      isSafe: "আমরা নিরাপত্তা এবং স্বচ্ছতাকে অগ্রাধিকার দিই। প্ল্যাটফর্মটি লঞ্চের আগে বিস্তারিত পরীক্ষা এবং নিরাপত্তা অডিট করে।",
      countdown: "কাউন্টডাউনটি আমাদের 30 দিনের মধ্যে লক্ষ্য লঞ্চের তারিখ দেখায়। লাইভ হওয়ার আগে চূড়ান্ত প্রস্তুতি নেওয়া হচ্ছে।",
      guaranteedProfit: "যদিও আমরা লক্ষ্য রিটার্ন সহ গঠনমূলক প্যাকেজগুলি অফার করি, বিনিয়োগের ফলাফল বাজারের অবস্থার উপর নির্ভর করে এবং গ্যারান্টিযুক্ত করা যেতে পারে না।",
      roi: "আমাদের বিনিয়োগ প্যাকেজগুলির 8-15% মাসিক রিটার্নের লক্ষ্য রয়েছে। প্রকৃত রিটার্ন বাজারের কার্যক্ষমতা এবং নির্বাচিত প্যাকেজের ধরনের উপর নির্ভর করে পরিবর্তিত হতে পারে।"
    }
  };

  // Detect language (simple detection)
  const detectLanguage = (text) => {
    // Simple heuristic: if text contains Bangla characters, assume Bangla
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text) ? 'bangla' : 'english';
  };

  // Generate AI response
  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const language = detectLanguage(userMessage);
    const kb = knowledgeBase[language];

    // Company related
    if (lowerMessage.includes('company') || lowerMessage.includes('about') || lowerMessage.includes('কোম্পানি') || lowerMessage.includes('সম্পর্কে')) {
      return kb.company;
    }

    // Profit related
    if (lowerMessage.includes('profit') || lowerMessage.includes('earn') || lowerMessage.includes('return') || lowerMessage.includes('লাভ') || lowerMessage.includes('আয়') || lowerMessage.includes('রিটার্ন') || lowerMessage.includes('earnings')) {
      return kb.profit;
    }

    // Launch date related
    if (lowerMessage.includes('launch') || lowerMessage.includes('date') || lowerMessage.includes('when') || lowerMessage.includes('লঞ্চ') || lowerMessage.includes('তারিখ') || lowerMessage.includes('কখন')) {
      if (lowerMessage.includes('date') || lowerMessage.includes('তারিখ')) {
        return kb.launchDate;
      }
      return kb.launch;
    }

    // Registration related
    if (lowerMessage.includes('register') || lowerMessage.includes('signup') || lowerMessage.includes('sign up') || lowerMessage.includes('রেজিস্ট্রেশন') || lowerMessage.includes('সাইন আপ')) {
      return kb.registration;
    }

    // Login related
    if (lowerMessage.includes('login') || lowerMessage.includes('log in') || lowerMessage.includes('লগইন') || lowerMessage.includes('লগ ইন')) {
      return kb.login;
    }

    // Deposit related
    if (lowerMessage.includes('deposit') || lowerMessage.includes('invest') || lowerMessage.includes('payment') || lowerMessage.includes('জমা') || lowerMessage.includes('বিনিয়োগ')) {
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
    if (lowerMessage.includes('what is') || lowerMessage.includes('what\'s') || lowerMessage.includes('কি') || lowerMessage.includes('কী') || lowerMessage.includes('আরবিগ্রো কি')) {
      return kb.whatIsArbiGrow;
    }

    // Platform status
    if (lowerMessage.includes('live') || lowerMessage.includes('open') || lowerMessage.includes('লাইভ') || lowerMessage.includes('খোলা')) {
      return kb.platformStatus;
    }

    // Why minimal design
    if (lowerMessage.includes('why') && (lowerMessage.includes('simple') || lowerMessage.includes('minimal') || lowerMessage.includes('কেন') || lowerMessage.includes('সাদামাটা'))) {
      return kb.whyMinimal;
    }

    // When live
    if ((lowerMessage.includes('when') || lowerMessage.includes('কখন')) && (lowerMessage.includes('live') || lowerMessage.includes('start') || lowerMessage.includes('use'))) {
      return kb.whenLive;
    }

    // Is it real/safe
    if ((lowerMessage.includes('real') || lowerMessage.includes('fake') || lowerMessage.includes('legit') || lowerMessage.includes('বাস্তব') || lowerMessage.includes('প্রকৃত')) ||
        (lowerMessage.includes('safe') || lowerMessage.includes('secure') || lowerMessage.includes('risk') || lowerMessage.includes('নিরাপদ') || lowerMessage.includes('সুরক্ষিত'))) {
      return kb.isReal;
    }

    // Countdown
    if (lowerMessage.includes('countdown') || lowerMessage.includes('timer') || lowerMessage.includes('কাউন্টডাউন') || lowerMessage.includes('টাইমার')) {
      return kb.countdown;
    }

    // Guaranteed profit/ROI
    if (lowerMessage.includes('guarantee') || lowerMessage.includes('assured') || lowerMessage.includes('fixed') || lowerMessage.includes('নিশ্চিত') || lowerMessage.includes('আশ্বাস') || lowerMessage.includes('roi')) {
      return kb.guaranteedProfit;
    }

    // Default response
    const defaultResponses = {
      english: "I understand you're interested in ArbiGrow. The platform is currently in development and will launch soon. Is there something specific you'd like to know about our upcoming investment platform?",
      bangla: "আমি বুঝতে পারছি আপনি ArbiGrow নিয়ে আগ্রহী। প্ল্যাটফর্মটি বর্তমানে উন্নয়নাধীন এবং শীঘ্রই লঞ্চ হবে। আমাদের আসন্ন বিনিয়োগ প্ল্যাটফর্ম সম্পর্কে কিছু নির্দিষ্ট জানতে চান কি?"
    };
    
    return defaultResponses[language];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

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

  return (
    <div className="ai-chat-container">
      {/* Chat toggle button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat assistant"
      >
        <span className="chat-icon">🤖</span>
        {!isOpen && <span className="chat-label">Ask me for Details</span>}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="ai-avatar">
              <span>🤖</span>
            </div>
            <div className="chat-title">
              <h3>ArbiGrow AI Assistant</h3>
              <p>Here to help with your questions</p>
            </div>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="timestamp">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message ai typing">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <div className="input-container">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                rows="1"
                className="chat-input"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="send-button"
                aria-label="Send message"
              >
                <span>➤</span>
              </button>
            </div>
            <p className="input-hint">
              I can answer questions about ArbiGrow in English or Bangla
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;