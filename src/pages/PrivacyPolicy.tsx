
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const PrivacyPolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 17, 2025</p>
          
          <p>
            UDDA Translation AB ("UDDA," "we," "us," or "our") is committed to protecting your privacy in compliance with GDPR and other applicable laws. This Privacy Policy explains how we collect, use, share, and protect your personal data when you use our AI Voice Assistant.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data We Collect</h2>
          <p>Account Information: Name, email, password.</p>
          <p>User Content: Voice recordings and transcripts of your conversations.</p>
          <p>Usage Data: IP address, device type, logs of Service interactions.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Legal Bases for Processing</h2>
          <p>We process your data on the following bases:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Consent: You explicitly consent when you activate the Service.</li>
            <li>Contractual Necessity: To deliver the Service you request.</li>
            <li>Legitimate Interests: For security, fraud prevention, and service improvement, balanced against your rights.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Retention & Deletion</h2>
          <p>Maximum Retention: All personal data (voice recordings, transcripts) is stored for no more than 30 days and then permanently deleted.</p>
          <p>User-Requested Deletion: You may request earlier deletion of your data by contacting hello@udda.ai.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
          <p>Service Processors: ElevenLabs, Google Gemini, AWS, Vercel, MongoDB Atlas—all bound by EU-standard DPAs.</p>
          <p>Legal Requirements: We may disclose data to comply with lawful requests by public authorities.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. International Transfers</h2>
          <p>Data may be transferred outside the EEA under:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>EU-US Data Privacy Framework, and/or</li>
            <li>Standard Contractual Clauses with supplementary measures.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Subject Rights</h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict processing, object, and data portability. To exercise these, contact hello@udda.ai or file a complaint with IMY: https://www.imy.se.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Security</h2>
          <p>
            We implement appropriate technical and organizational measures (encryption in transit and at rest, access controls, regular security audits) to protect your data.
          </p>
          
          <p className="mt-8">
            <strong>Contact:</strong> hello@udda.ai | Johannes Plan 5, c/o Carlsson, 111 38 Stockholm, Sweden
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default PrivacyPolicy;
