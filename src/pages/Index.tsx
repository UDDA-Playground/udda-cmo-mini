import React, { useState, useEffect } from 'react';
import { Mic, Mail, Info, Copyright } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceChat from '@/components/VoiceChat';
import { Link } from 'react-router-dom';

const Index = () => {
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  // Show scroll hint once user has scrolled a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.2) {
        setShowScrollHint(true);
      } else {
        setShowScrollHint(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openVoiceChat = () => {
    setShowVoiceChat(true);
  };

  const closeVoiceChat = () => {
    setShowVoiceChat(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 font-rubik relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-udda-primary/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-udda-cta/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-udda-accent/10 blur-3xl"></div>
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-end z-10">
        <Link to="/contact" className="text-udda-primary hover:underline">Login</Link>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-10">
            <img 
              src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" 
              alt="UDDA Logo" 
              className="h-8 sm:h-10" 
            />
          </div>
          <p className="text-xl sm:text-2xl mb-8 text-udda-text max-w-xl mx-auto">
            Overwhelmed by marketing options? Not sure what actually works?<br className="hidden md:block" />
            Get a focused action plan in a free voice chat.
          </p>
          <Button
            id="mic-cta"
            onClick={openVoiceChat}
            className="bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90 px-8 py-6 rounded-xl text-lg mic-button-hover"
          >
            <Mic className="mr-2 h-5 w-5" />
            Ask UDDA Now
          </Button>
          <p className="text-udda-lightGray text-sm mt-4">
            Conversations are recorded &amp; transcribed per our <Link to="#" className="underline hover:text-udda-primary">Privacy Policy</Link>.
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <Mic className="h-8 w-8 text-udda-primary animate-pulse" />
        </div>
      </section>

      {/* Scroll Hint */}
      <section 
        id="more-info" 
        className={`py-8 transition-opacity duration-500 ${
          showScrollHint ? 'opacity-100' : 'opacity-0'
        } relative z-10`}
      >
        <div className="text-center">
          <p className="text-udda-muted text-base">
            ↓ scroll for features, testimonials, and FAQ ↓
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center z-10">
        <div className="text-udda-lightGray text-xs flex flex-wrap justify-center gap-4 items-center">
          <Link to="/contact" className="hover:text-udda-primary flex items-center">
            <Mail className="w-3 h-3 mr-1" />
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:text-udda-primary flex items-center">
            <Info className="w-3 h-3 mr-1" />
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="hover:text-udda-primary flex items-center">
            <Info className="w-3 h-3 mr-1" />
            Terms of Use
          </Link>
          <Link to="/cookie-policy" className="hover:text-udda-primary flex items-center">
            <Info className="w-3 h-3 mr-1" />
            Cookie Policy
          </Link>
          <span className="flex items-center">
            <Copyright className="w-3 h-3 mr-1" />
            2025 UDDA
          </span>
        </div>
      </footer>

      {/* Voice Chat Modal */}
      {showVoiceChat && <VoiceChat onClose={closeVoiceChat} />}
    </div>
  );
};

export default Index;
