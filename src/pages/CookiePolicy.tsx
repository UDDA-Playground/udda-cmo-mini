
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const CookiePolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 17, 2025</p>
          
          <p>
            This Cookie Policy explains how UDDA uses cookies and similar technologies on our website and within the AI Voice Assistant portal.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
          <p>
            Small text files placed on your device to store preferences and track usage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Essential: Required for basic functionality (e.g., session management).</li>
            <li>Performance & Analytics: To measure and improve site performance.</li>
            <li>Functional: To remember your preferences.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Your Choices</h2>
          <p>
            You can disable non-essential cookies via your browser settings or through our consent banner. Disabling essential cookies may affect Service functionality.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Retention</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Session Cookies: Deleted when you close your browser.</li>
            <li>Persistent Cookies: Remain up to their individual expiry dates (typically 30–90 days).</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes</h2>
          <p>
            We may update this Cookie Policy at https://udda.ai/legal/cookie-policy; changes take effect upon posting.
          </p>
          
          <p className="mt-8">
            If you have any questions or wish to exercise your data-subject rights, please contact hello@udda.ai.
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
