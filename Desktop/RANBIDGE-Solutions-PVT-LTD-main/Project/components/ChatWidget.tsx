import React, { useState, useEffect } from "react";
import { MessageCircle, Send, CheckCircle, X, Minus, MessageSquare, Bot, AlertCircle } from "lucide-react";

/**
 * Custom hook to handle typing effect that can be reset
 */
const useChatTypingEffect = (text: string, trigger: boolean) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
};

// Validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[\s\-+]/g, "");
  return /^\d{10}$/.test(cleanPhone) || /^\d{12}$/.test(cleanPhone);
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const greetingText = "Hi! 👋 Welcome to Ranbidge Solutions. Drop your details below, and we'll send them directly to our team for a quick response!";
  const animatedGreeting = useChatTypingEffect(greetingText, isOpen && !submitted);

  const setQuickMessage = (msg: string) => {
    setMessage(msg);
  };

  const openChatbot = () => {
    window.open(
      "https://chatgpt.com/g/g-69a489876fd4819187a332f593e4342c-ranbidge-assistant",
      "_self"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {

    if (!name || !contact || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const trimmedContact = contact.trim();
    const isEmail = trimmedContact.includes("@");
    
    if (isEmail) {
      if (!isValidEmail(trimmedContact)) {
        setError("Please enter a valid email address (e.g., example@gmail.com)");
        return;
      }
    } else {
      if (!isValidPhone(trimmedContact)) {
        setError("Please enter a valid phone number (10 digits, e.g., 8247392437)");
        return;
      }
    }

    const formData = {
      name,
      contact: trimmedContact,
      message,
      _subject: `New Chatbot Inquiry from ${name}`,
    };

    try {
      const response = await fetch("https://formspree.io/f/xwvbgprg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Open WhatsApp to target number with user's info
        const cleanPhone = trimmedContact.replace(/[\s\-+]/g, "");
        const whatsappMsg = encodeURIComponent(`Hello! I received an inquiry from ${name} (${isEmail ? trimmedContact : cleanPhone}): ${message}`);
        window.open(`https://wa.me/918247392437?text=${whatsappMsg}`, "_blank");
      } else {
        throw new Error("Formspree error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send. Please try WhatsApp directly.");
    }

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setContact("");
      setMessage("");
      setError("");
      setIsOpen(false);
    }, 4000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* 💬 Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-center
          w-16 h-16 rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)]
          transition-all duration-500 ease-out
          ${isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'bg-blue-600 hover:bg-blue-500 hover:scale-110'}
          text-white
        `}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {/* Red dot removed as requested */}
      </button>

      {/* 🧠 Chat Box */}
      {isOpen && (
        <div
          className="
            absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-32px)]
            bg-slate-950/95 backdrop-blur-2xl border border-slate-800
            rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-500
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/10 via-slate-900/10 to-transparent px-5 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <Bot size={22} />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-[3px] border-slate-950"></div>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm leading-tight">Ranbidge</h4>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open("https://chatgpt.com/g/g-69a489876fd4819187a332f593e4342c-ranbidge-assistant", "_blank")}
                className="p-2.5 text-slate-500 hover:text-white transition-colors"
                title="ChatGPT Assistant"
              >
                <Bot size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-500 hover:text-white transition-colors"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          <div className="p-5 max-h-[430px] overflow-y-auto custom-scrollbar">
            {!submitted ? (
              <div className="space-y-4">
                {/* Bot Message */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-400 border border-slate-700">
                    <Bot size={14} />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-none text-[13px] text-slate-200 shadow-sm leading-relaxed">
                    {animatedGreeting}
                    <span className="inline-block w-1 h-3.5 ml-1 bg-blue-500 animate-pulse align-middle" />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-xs">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Internship Details",
                    "Custom Software",
                    "Contact Team"
                  ].map((label) => (
                    <button
                      key={label}
                      onClick={() => setQuickMessage(label)}
                      className="text-[11px] font-bold bg-slate-900 text-slate-400 border border-slate-800 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-2.5 pt-1.5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-800 px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Email or Phone (e.g., 8247392437)"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-800 px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                  <textarea
                    placeholder="How can we help you?"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-800 px-4 py-3.5 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    className="
                      w-full bg-blue-600 text-white font-bold py-4 rounded-xl
                      hover:bg-blue-700 active:scale-95 transition-all
                      flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 mt-4
                    "
                  >
                    <Send size={18} /> Send Inquiry
                  </button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-slate-600"><span className="bg-slate-950 px-2 tracking-[0.3em] font-black">OR</span></div>
                  </div>

                  <a
                    href="https://wa.me/918247392437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full bg-green-600/10 text-green-500 border border-green-500/20 font-bold py-4 rounded-xl
                      hover:bg-green-600 hover:text-white transition-all
                      flex items-center justify-center gap-2
                    "
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </form>
              </div>
            ) : (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <CheckCircle size={40} />
                </div>
                <h5 className="text-white font-black text-xl mb-2 italic">Success!</h5>
                <p className="text-sm text-slate-400">
                  Thanks <b>{name}</b>. Your message has been received. We'll be in touch!
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-8 text-xs text-blue-500 font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Close Chat
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
