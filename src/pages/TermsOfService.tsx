
import React from 'react';
import Layout from '@/components/Layout';

const TermsOfService = () => {
  return (
    <Layout
      title="Terms of Service | Githaf Consulting"
      description="Githaf Consulting's Terms of Service outlines the terms and conditions for using our services."
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                Welcome to Githaf Consulting. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
              <p>
                Our services are intended for business and professional use. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="mt-4">
                You are prohibited from:
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2">
                <li>Using our services in any way that violates any applicable laws or regulations.</li>
                <li>Attempting to interfere with or disrupt the operation of our services.</li>
                <li>Impersonating or attempting to impersonate Githaf Consulting or its employees.</li>
                <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of our services.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p>
                Our website and its entire contents, features, and functionality are owned by Githaf Consulting and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Githaf Consulting be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them.
              </p>
              <p className="mt-4">
                Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
