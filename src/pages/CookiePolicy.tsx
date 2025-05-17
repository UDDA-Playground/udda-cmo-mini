
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const CookiePolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: May 15, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            This Cookie Policy explains how UDDA TRANSLATION AB ("Company," "we," "our," or "us") uses cookies and similar technologies 
            to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your 
            rights to control our use of them.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely 
            used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Do We Use Cookies?</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems.</li>
            <li><strong>Performance cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
            <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
            <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How Can You Control Cookies?</h2>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our 
            website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse 
            cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          <p>The specific types of cookies served through our website and the purposes they perform include:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Session cookies:</strong> These are temporary cookies that are deleted when you close your browser.</li>
            <li><strong>Persistent cookies:</strong> These remain on your device until they expire or you delete them.</li>
            <li><strong>First-party cookies:</strong> These are set by the website you're visiting.</li>
            <li><strong>Third-party cookies:</strong> These are set by a domain other than the one you're visiting.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other 
            operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us through our <a href="/contact" className="text-udda-primary hover:underline">contact form</a>.
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default CookiePolicy;
