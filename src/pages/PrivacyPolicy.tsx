import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout
      title="Privacy Policy | Githaf Consulting"
      description="Githaf Consulting's Privacy Policy explains how we collect, use, and protect your personal information."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Githaf Consulting ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address, telephone numbers, and physical address.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              </ul>
              <p>
                We do not collect any Special Categories of Personal Data about you (this includes details about your race, ethnicity, religious beliefs, etc.).
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>To provide you with the services you have requested.</li>
                <li>To respond to your inquiries or requests for information.</li>
                <li>To send you marketing communications if you have opted in to receive them.</li>
                <li>To improve our website and services.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way. We also limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:info@githafconsulting.com" className="text-primary">info@githafconsulting.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
