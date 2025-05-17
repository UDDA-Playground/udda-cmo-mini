
import React, { useState, useEffect } from 'react';
import { Mic, Mail, Info, Copyright, Play, ArrowRight, Lightbulb, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceChat from '@/components/VoiceChat';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [showVideoDialog, setShowVideoDialog] = useState(false);

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
  
  const openVideoDialog = () => {
    setShowVideoDialog(true);
  };

  const closeVideoDialog = () => {
    setShowVideoDialog(false);
  };

  return <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 font-rubik relative overflow-hidden">
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
            <img src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" alt="UDDA Logo" className="h-8 sm:h-10" />
          </div>
          <p className="text-sm sm:text-base mb-2 text-udda-text max-w-xl mx-auto">
            Overwhelmed by marketing options? Not sure what actually works?<br className="hidden md:block" />
          </p>
          <p className="text-xl sm:text-3xl md:text-4xl font-medium mb-8 text-udda-text max-w-xl mx-auto">
            Get a focused action plan in a free voice chat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button id="mic-cta" onClick={openVoiceChat} className="bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90 px-8 py-6 rounded-xl text-lg mic-button-hover font-medium">
              <Mic className="mr-2 h-5 w-5" />
              Ask UDDA Now
            </Button>
            <Button onClick={openVideoDialog} className="bg-white text-udda-primary hover:bg-gray-100 border border-udda-primary px-6 py-6 rounded-xl text-lg font-medium">
              <Play className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div>
          <p className="text-udda-lightGray text-sm mt-2">
            Conversations are recorded &amp; transcribed per our <Link to="#" className="underline hover:text-udda-primary">Privacy Policy</Link>.
          </p>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <ArrowDown className="h-8 w-8 text-udda-primary animate-bounce" />
        </div>
      </section>

      {/* Scroll Hint */}
      <section id="more-info" className={`py-8 transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'} relative z-10`}>
        <div className="text-center">
          <p className="text-udda-muted text-base">
            ↓ scroll for features, testimonials, and FAQ ↓
          </p>
        </div>
      </section>

      {/* Three Arguments Section */}
      <section className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-udda-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-udda-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Understand your customers</h3>
                <p className="text-udda-muted text-sm">Get a clear picture of your ideal customer and their needs</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-udda-accent/10 p-3 rounded-full mb-4">
                  <Target className="h-6 w-6 text-udda-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Solve real problems</h3>
                <p className="text-udda-muted text-sm">Identify the specific pain points your product addresses</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-udda-cta/10 p-3 rounded-full mb-4">
                  <Lightbulb className="h-6 w-6 text-udda-cta" />
                </div>
                <h3 className="font-bold text-lg mb-2">Find your unique angle</h3>
                <p className="text-udda-muted text-sm">Stand out with a distinctive approach and distribution</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto opacity-30" />

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

      {/* Video Dialog */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="sm:max-w-[720px]">
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-2">Video Placeholder</h3>
              <p className="text-udda-muted mb-4">This is where your product demo video will appear.</p>
              <p className="text-sm text-udda-lightGray">Embed your video here or link to a video hosting service.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};

export default Index;
