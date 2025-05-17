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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-udda-text">
            UDDA
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-udda-text max-w-xl mx-auto">
            Just say the word—get expert marketing strategy now.
          </p>
          <Button
            id="mic-cta"
            onClick={openVoiceChat}
            className="bg-udda-primary hover:bg-udda-primary/90 text-white px-8 py-6 rounded-full text-lg mic-button-hover"
          >
            <Mic className="mr-2 h-5 w-5" />
            Ask UDDA Now
          </Button>
          <p className="text-udda-lightGray text-sm mt-4">
            Free. No sign-up needed.
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
