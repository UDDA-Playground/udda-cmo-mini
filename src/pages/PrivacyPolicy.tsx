
import React from 'react';
import NonHomeLayout from '@/components/NonHomeLayout';

const PrivacyPolicy = () => {
  return (
    <NonHomeLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-udda-text">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: May 15, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            UDDA TRANSLATION AB ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy informs you about how we collect, use, and process your personal information when you use our services 
            or visit our website, and tells you about your privacy rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username, or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address, telephone number, and postal address.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>To provide and maintain our service.</li>
            <li>To notify you about changes to our service.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our service.</li>
            <li>To monitor the usage of our service.</li>
            <li>To detect, prevent and address technical issues.</li>
            <li>To provide you with news, special offers and general information about our goods, services and events.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal 
            information we process. However, please note that no electronic transmission or storage of information can be entirely secure, 
            so we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-udda-primary hover:underline">contact form</a>.
          </p>
        </div>
      </div>
    </NonHomeLayout>
  );
};

export default PrivacyPolicy;
