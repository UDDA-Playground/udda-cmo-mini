
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { FileText } from 'lucide-react';

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
              src="/lovable-uploads/8b8e6c8e-8ca3-4b4f-a93e-60a91e574411.png" 
              alt="UDDA Logo" 
              className="h-8" 
            />
          </Link>
          <nav className="flex space-x-6 items-center">
            <Link to="/contact" className="text-udda-primary hover:text-udda-primary/80 transition-colors">
              Contact
            </Link>
            
            {/* Legal Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-udda-primary hover:text-udda-primary/80 transition-colors flex items-center">
                Legal <FileText className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/privacy-policy" className="w-full cursor-pointer">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms-of-use" className="w-full cursor-pointer">Terms of Use</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cookie-policy" className="w-full cursor-pointer">Cookie Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
