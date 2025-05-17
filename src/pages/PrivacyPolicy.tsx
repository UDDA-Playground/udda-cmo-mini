
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const PrivacyPolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 15, 2025</p>
          
          <p>
            UDDA Translation AB ("UDDA," "we," "us," or "our") is committed to protecting your privacy in compliance with GDPR, 
            Google and Microsoft API policies, and other applicable laws. This Privacy Policy explains how we collect, use, 
            share, and protect your personal data when you use our Services, including the AI Voice Assistant, Gmail and 
            Outlook integrations, website, and related applications.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data We Collect</h2>
          <p>1.1 Information You Provide:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Account Data: Name, email, password.</li>
            <li>User Content: Voice recordings, transcripts, messages, attachments.</li>
            <li>Feedback: Ratings and comments on AI responses.</li>
          </ul>
          
          <p>1.2 Automatically Collected:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Device & Usage Data: IP address, device type, browser, interaction logs.</li>
          </ul>
          
          <p>1.3 Sensitive Data:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Voice recordings may be considered biometric or sensitive under GDPR; we process these only with explicit consent.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Legal Bases for Processing</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Consent: For voice recordings, emotion/sentiment analysis, and Chrome/Outlook API access.</li>
            <li>Contractual Necessity: To deliver the Services you request.</li>
            <li>Legitimate Interests: To improve service security and functionality, after a balancing test.</li>
            <li>Legal Obligations: To comply with laws.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Data</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Service Delivery: Process voice/text to generate AI responses.</li>
            <li>Personalization: Tailor suggestions based on past interactions.</li>
            <li>Security & Compliance: Protect against fraud and meet regulatory obligations.</li>
            <li>Research & Improvement: Only for UDDA-specific service enhancements; we do not train vendor-wide AI models on your data without separate consent.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Processors: ElevenLabs, Google Gemini, AWS, Vercel, MongoDB Atlas—each bound by EU-standard DPAs.</li>
            <li>Service Providers: Entities assisting us in operations (analytics, support).</li>
            <li>Legal Authorities: When required by law.</li>
          </ul>
          <p>We do not sell your personal data for advertising.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. International Transfers</h2>
          <p>Data may be transferred outside the EEA (e.g., to the US) under:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>EU-US Data Privacy Framework certifications, and/or</li>
            <li>Standard Contractual Clauses with supplementary measures, after conducting Transfer Impact Assessments.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention & Deletion</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Retention: Only as long as necessary for the purpose or as required by law.</li>
            <li>Deletion: User-initiated deletion requests completed across all systems (including backups) within six months.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict processing, object, and portability of your data. 
            To exercise these rights, contact hello@udda.ai or lodge a complaint with IMY: https://www.imy.se
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Security Measures</h2>
          <p>
            We employ AES-256 encryption at rest, TLS 1.2+ in transit, role-based access controls, regular SOC-2/ISO audits, 
            and secure data centers in Sweden and Germany.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p>Not for use by individuals under 18. If we learn we have collected data from a child, we will delete it promptly.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy at https://udda.ai/legal/privacy. Significant changes will be communicated via email or in-app notices.
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
