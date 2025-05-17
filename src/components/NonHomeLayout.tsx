
import React from 'react';
import { Link } from 'react-router-dom';

type NonHomeLayoutProps = {
  children: React.ReactNode;
};

const NonHomeLayout = ({ children }: NonHomeLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 font-rubik relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-udda-primary/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-udda-cta/15 blur-3xl"></div>
      </div>
      
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e1681008-d3d8-49f3-b325-85568a551641.png" 
              alt="UDDA Logo" 
              className="h-8" 
            />
          </Link>
          <nav className="flex space-x-6">
            <Link to="/contact" className="text-udda-primary hover:text-udda-primary/80 transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="text-udda-primary hover:text-udda-primary/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-udda-primary hover:text-udda-primary/80 transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookie-policy" className="text-udda-primary hover:text-udda-primary/80 transition-colors">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center mt-20">
        <div className="text-udda-lightGray text-xs flex flex-wrap justify-center gap-4 items-center">
          <span className="flex items-center">
            © 2025 UDDA
          </span>
        </div>
      </footer>
    </div>
  );
};

export default NonHomeLayout;
