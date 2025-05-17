
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const TermsOfUse = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Terms of Use</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: May 15, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            Welcome to UDDA TRANSLATION AB ("Company," "we," "our," or "us"). These Terms of Use govern your access to and use of our 
            website and services. Please read these Terms carefully before using our services.
          </p>
          <p>
            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
            please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
          <p>Our services are provided for your personal, non-commercial use, unless otherwise agreed. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding 
            your account and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your 
            account or any other breach of security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            The content, features, and functionality of our services are owned by the Company, its licensors, or other providers and are 
            protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            In no event shall the Company, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, 
            special, or consequential damages arising out of, or in any way connected with, your use of our services, whether based on contract, 
            tort, strict liability, or other legal theory.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Sweden, without regard to its conflict of law principles.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If we make material changes, we will notify you by updating 
            the date at the top of these Terms or by providing other notification as required by applicable law. Your continued use of our 
            services after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-udda-primary hover:underline">contact form</a>.
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default TermsOfUse;
