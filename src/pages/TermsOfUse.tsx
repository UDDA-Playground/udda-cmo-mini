
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const TermsOfUse = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 17, 2025</p>
          
          <p>
            These Terms of Service ("Terms") govern your access to and use of UDDA Translation AB's AI Voice Assistant (the "Service"). By accessing or using the Service, you agree to these Terms. If you do not agree, please discontinue use immediately.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
          <p>Service: UDDA's AI-powered voice chat assistant, using ElevenLabs Conversational AI (with Google Gemini), hosted on AWS (Frankfurt), Vercel, and MongoDB Atlas.</p>
          <p>User Content: Any voice recordings, transcripts, or other materials you submit.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility & Account</h2>
          <p>You must be at least 18 years old and provide accurate information to create an account. Keep your credentials confidential and notify us promptly of any unauthorized access.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. License & Acceptable Use</h2>
          <p>3.1 License</p>
          <p>We grant you a limited, revocable, non-exclusive license to use the Service in compliance with these Terms.</p>
          
          <p>3.2 Prohibited Uses</p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Violate applicable laws or third-party rights.</li>
            <li>Reverse-engineer our technology.</li>
            <li>Use the Service for clinical diagnosis, treatment, or emergency care.</li>
            <li>Submit any unlawful, abusive, or deceptive content.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Mental Health & Therapy Disclaimer</h2>
          <p>
            The Service provides general information only and is not a substitute for professional medical, mental-health, or emergency services. If you or someone else is in crisis, contact your local emergency services or a qualified professional immediately. The Service will:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Prompt users expressing self-harm or suicidal thoughts to seek professional help.</li>
            <li>Refuse to engage in any form of clinical advice or crisis counseling.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Privacy & Retention</h2>
          <p>GDPR Storage Limitation: We retain all voice recordings and conversation transcripts for a maximum of 30 days. After 30 days, data is permanently deleted.</p>
          <p>Data Controller/Processor: UDDA is the Controller for personal data collected; ElevenLabs, Google Gemini, AWS, Vercel, and MongoDB Atlas act as Processors or Sub-processors under EU-standard DPAs.</p>
          <p>No Unlimited Retention: We do not retain personal data beyond 30 days, except as required by law.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Integrations</h2>
          <p>Your use of the Service is also subject to the terms of ElevenLabs and Google Gemini. Violations of their policies may result in suspension of your access.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
          <p>All rights to the Service and its content belong to UDDA or our licensors. You retain ownership of your User Content but grant us a license to process it to provide the Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, UDDA is not liable for indirect, incidental, or consequential damages arising from your use of (or inability to use) the Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
          <p>We may suspend or terminate your access for breach of these Terms or legal reasons. You may delete your account at any time by contacting hello@udda.ai.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>These Terms are governed by Swedish law. Disputes will be resolved in the courts of Sweden.</p>
          
          <p className="mt-8">
            <strong>Contact:</strong> hello@udda.ai | Johannes Plan 5, c/o Carlsson, 111 38 Stockholm, Sweden
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default TermsOfUse;
