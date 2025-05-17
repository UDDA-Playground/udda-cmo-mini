
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const TermsOfUse = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last Updated: May 15, 2025</p>
          
          <p>
            These Terms of Service ("Terms") govern your access to and use of UDDA Translation AB's services ("UDDA," "we," "us," or "our"), including:
          </p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Our website (https://udda.ai)</li>
            <li>Gmail Chrome extension and Google Add-ons</li>
            <li>Microsoft Outlook add-ins</li>
            <li>The new AI Voice Assistant (powered by ElevenLabs Conversational AI using Google Gemini, hosted on AWS Frankfurt, Vercel, and MongoDB Atlas)</li>
            <li>All related APIs, integrations, applications, and features (collectively, the "Services")</li>
          </ul>
          
          <p>
            By accessing or using the Services, you agree to these Terms (including any future modifications). If you do not agree, discontinue use immediately.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Definitions</h2>
          <p>"User Content" means any data, voice recordings, transcripts, messages, or other material you submit to the Services.</p>
          <p>"Voice Assistant" means the AI-driven voice chat feature that records and processes your speech to provide conversational responses.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility & Account</h2>
          <p>You must be at least 18 years old and capable of forming binding contracts.</p>
          <p>If using on behalf of an organization, you represent you have authority to bind that organization.</p>
          <p>You must provide accurate, up-to-date information when creating an account and maintain the confidentiality of your credentials.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. License & Use</h2>
          <p>3.1 License. We grant you a limited, revocable, non-exclusive, non-transferable license to use the Services in compliance with these Terms.</p>
          
          <p>3.2 Prohibited Uses. You agree not to:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Violate any applicable laws or third-party rights;</li>
            <li>Reverse-engineer the Services or attempt to extract source code;</li>
            <li>Circumvent rate limits or usage controls;</li>
            <li>Use the Voice Assistant for diagnosis or treatment of medical or mental health conditions;</li>
            <li>Submit content that is unlawful, harmful, harassing, or deceptive;</li>
            <li>Use the Services to process sensitive personal data (e.g., health data) without explicit consent and proper safeguards.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Mental Health & Therapy Disclaimer</h2>
          <p>
            The Voice Assistant may offer general informational insights but is not a substitute for professional medical or mental health care. 
            It does not provide clinical diagnosis, therapy, or emergency care. If you or someone else is in crisis or requires immediate medical 
            attention, call your local emergency number or contact a qualified professional. The Services are programmed to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Recommend professional help for users indicating self-harm, suicidal ideation, or severe distress.</li>
            <li>Decline to engage in any form of crisis counseling or treatment planning.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Privacy & GDPR</h2>
          <p>
            We aim to comply with the EU General Data Protection Regulation (GDPR) but cannot guarantee absolute compliance.
          </p>
          <p>
            Our roles: as Data Controller for voice recordings, transcripts, metadata, and as Controller/Processor for Gmail/Outlook 
            integration data; ElevenLabs and Google Gemini act as Processors/Sub-processors; AWS, Vercel, and MongoDB Atlas are Processors
          </p>
          <p>
            Please review our Privacy Policy and Data Processing Addendum for details on lawful bases, data subject rights, international 
            transfers, and security measures.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Integrations</h2>
          <p>
            Our Voice Assistant and extensions integrate with third-party services (ElevenLabs, Google Gemini, AWS, Vercel, MongoDB, 
            Anthropic for email AI). Use of these integrations is subject to both these Terms and the third party's policies. 
            Violations of third-party terms may lead to suspension of your access.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            All intellectual property rights in the Services, UI, code, and content are owned by UDDA or our licensors. You retain 
            ownership of your User Content but grant UDDA a non-exclusive, royalty-free license to process it to provide the Services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>UDDA is not liable for indirect, incidental, or consequential damages.</li>
            <li>UDDA does not guarantee uninterrupted or error-free operation of the Voice Assistant or any other Service.</li>
            <li>UDDA disclaims any liability for misuse of the Services resulting in harm or loss.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
          <p>By UDDA: We may suspend or terminate your access immediately for breach of these Terms or poses security risks.</p>
          <p>By You: You may discontinue use at any time. To delete your account, contact hello@udda.ai.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law & Dispute Resolution</h2>
          <p>These Terms are governed by Swedish law. Disputes will be resolved in the courts of Sweden.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We may update these Terms. We will post updates at https://udda.ai/legal/terms-of-use and notify you of material changes. 
            Continued use after posting constitutes acceptance.
          </p>
          
          <p className="mt-8">
            <strong>Contact:</strong> hello@udda.ai | Johannes Plan 5, c/o Carlsson, 111 38 Stockholm, Sweden
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default TermsOfUse;
