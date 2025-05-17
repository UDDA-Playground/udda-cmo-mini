
import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceChat from '@/components/VoiceChat';

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
    <div className="min-h-screen bg-white font-rubik">
      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-end z-10">
        <a href="#" className="text-udda-primary hover:underline">Login</a>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/33f0c7eb-e835-47fe-9d9c-77fb46200c29.png" 
              alt="UDDA Logo" 
              className="h-12 sm:h-16" 
            />
          </div>
          <p className="text-xl sm:text-2xl mb-8 text-udda-text max-w-xl mx-auto">
            Just say the word—get expert marketing strategy now.
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
            Conversations are recorded &amp; transcribed per our <a href="https://udda.ai/legal/privacy" className="underline hover:text-udda-primary">Privacy Policy</a>.
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
        }`}
      >
        <div className="text-center">
          <p className="text-udda-muted text-base">
            ↓ scroll for features, testimonials, and FAQ ↓
          </p>
        </div>
      </section>

      {/* Voice Chat Modal */}
      {showVoiceChat && <VoiceChat onClose={closeVoiceChat} />}
    </div>
  );
};

export default Index;
