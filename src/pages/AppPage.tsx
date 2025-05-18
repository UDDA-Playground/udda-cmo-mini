import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, ArrowRight, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const AppPage = () => {
  return <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 font-rubik relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-udda-primary/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-udda-cta/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-udda-accent/10 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" alt="UDDA Logo" className="h-8" />
          </Link>
          <nav className="flex space-x-4 items-center">
            <Link to="/" className="text-udda-primary hover:underline">Home</Link>
            <Link to="/contact" className="text-udda-primary hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-udda-text">
            Your AI Marketing Assistant
          </h1>
          <p className="text-lg md:text-xl mb-8 text-udda-text max-w-3xl mx-auto">
            UDDA helps you create effective marketing strategies tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button id="mic-cta" className="bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90 px-8 py-6 rounded-xl text-lg mic-button-hover font-medium">
              <Mic className="mr-2 h-5 w-5" />
              Start Voice Chat
            </Button>
            <Button className="bg-white text-udda-primary hover:bg-gray-100 border border-udda-primary px-6 py-6 rounded-xl text-lg font-medium">
              <User className="mr-2 h-5 w-5" />
              Create Account
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-xl mb-3 text-udda-text font-semibold">Customer Analysis</h3>
              <p className="text-udda-muted">Understand your target audience through comprehensive data analysis and insights.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-xl mb-3 text-udda-text font-semibold">Content Strategy</h3>
              <p className="text-udda-muted">Create content that resonates with your audience and drives engagement.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-bold text-xl mb-3 text-udda-text">Campaign Optimization</h3>
              <p className="text-udda-muted">Optimize your marketing campaigns for better performance and ROI.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-bold text-xl mb-3 text-udda-text">Competitor Analysis</h3>
              <p className="text-udda-muted">Stay ahead of the competition with detailed competitive analysis.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-bold text-xl mb-3 text-udda-text">Performance Tracking</h3>
              <p className="text-udda-muted">Track and analyze the performance of your marketing efforts.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-bold text-xl mb-3 text-udda-text">AI-Powered Insights</h3>
              <p className="text-udda-muted">Leverage artificial intelligence to gain deeper insights into your marketing data.</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-udda-text">How UDDA Works</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2 bg-udda-primary/5 rounded-2xl p-6 flex justify-center items-center">
                <div className="text-4xl font-bold text-udda-primary">1</div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2 text-udda-text">Start a Conversation</h3>
                <p className="text-udda-muted">Begin by telling UDDA about your business, goals, and marketing challenges.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <div className="md:w-1/2 bg-udda-accent/5 rounded-2xl p-6 flex justify-center items-center">
                <div className="text-4xl font-bold text-udda-accent">2</div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2 text-udda-text">Receive Personalized Analysis</h3>
                <p className="text-udda-muted">UDDA analyzes your inputs and provides tailored marketing recommendations.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2 bg-udda-cta/5 rounded-2xl p-6 flex justify-center items-center">
                <div className="text-4xl font-bold text-udda-cta">3</div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2 text-udda-text">Implement Strategy</h3>
                <p className="text-udda-muted">Apply UDDA's actionable insights to improve your marketing efforts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-udda-primary/10 to-udda-cta/10 rounded-2xl p-8 md:p-12 text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-udda-text">Ready to Transform Your Marketing?</h2>
          <p className="text-lg mb-8 text-udda-text max-w-2xl mx-auto">
            Start using UDDA today and see the difference AI-powered marketing insights can make for your business.
          </p>
          <Button className="bg-udda-cta text-udda-ctaText hover:bg-udda-cta/90 px-8 py-6 rounded-xl text-lg mic-button-hover font-medium">
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-udda-text">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <p className="italic mb-4 text-udda-muted">"UDDA helped us refine our marketing strategy and target the right audience. Our conversion rates have increased by 40% since implementing their recommendations."</p>
                <div className="font-semibold">Sarah J.</div>
                <div className="text-sm text-udda-lightGray">Marketing Director, TechFlow Inc</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <p className="italic mb-4 text-udda-muted">"The insights provided by UDDA were game-changing for our small business. We now have a clear direction for our marketing efforts."</p>
                <div className="font-semibold">Michael T.</div>
                <div className="text-sm text-udda-lightGray">Founder, GreenLeaf Boutique</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Separator className="max-w-4xl mx-auto opacity-30" />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" alt="UDDA Logo" className="h-8" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-udda-lightGray">
            <Link to="/" className="hover:text-udda-primary">Home</Link>
            <Link to="/contact" className="hover:text-udda-primary">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-udda-primary">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-udda-primary">Terms of Use</Link>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-udda-lightGray">
          © 2025 UDDA. All rights reserved.
        </div>
      </footer>
    </div>;
};
export default AppPage;