
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const CookiePolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 15, 2025</p>
          
          <p>
            This Cookie Policy describes how UDDA uses cookies and similar technologies on our website and across the Services, 
            including browser extensions and add-ins.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
          <p>
            Small text files stored on your device to recognize you and remember your preferences.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Essential: Session management, user authentication.</li>
            <li>Performance: Analytics to improve site speed and reliability.</li>
            <li>Functional: Remember language and display settings.</li>
            <li>Marketing: Deliver targeted ads and measure campaign effectiveness.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
          <p>
            We may allow third-party providers (e.g., Google Analytics, ad networks) to set cookies. 
            Their practices are governed by their privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Choices</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Browser Settings: You can disable or delete cookies via your browser (see https://www.allaboutcookies.org).</li>
            <li>Consent Banner: Opt out of non-essential cookies at any time.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Retention</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Session Cookies: Deleted when you close your browser.</li>
            <li>Persistent Cookies: Remain until manually deleted or expire.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes</h2>
          <p>
            We may update this policy at https://udda.ai/legal/cookie-policy. Changes take effect immediately upon posting.
          </p>
          
          <p className="mt-8">
            <strong>Contact:</strong> hello@udda.ai | Johannes Plan 5, c/o Carlsson, 111 38 Stockholm, Sweden
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default CookiePolicy;
