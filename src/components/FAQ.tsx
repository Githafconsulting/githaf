import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is AI consulting and how can it help my business?",
      answer: "AI consulting involves strategic guidance on implementing artificial intelligence solutions to solve business problems. We help identify opportunities, develop AI roadmaps, and implement solutions that automate processes, improve efficiency, and drive growth. Our consultants assess your current operations and recommend AI technologies that provide measurable ROI."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary based on complexity. Simple AI agents can be deployed in 1-2 weeks, while comprehensive AI transformations typically take 3-6 months. We start with quick wins and gradually implement more complex solutions. Our phased approach ensures you see benefits early while building toward larger transformation goals."
    },
    {
      question: "What's the typical ROI of AI implementation?",
      answer: "Most businesses see 200-400% ROI within the first year through cost savings, increased efficiency, and revenue growth. AI agents can reduce operational costs by 30-70%, while automated processes increase productivity by 40-60%. We provide detailed ROI projections during the consultation phase and track metrics throughout implementation."
    },
    {
      question: "Do I need technical expertise to use AI solutions?",
      answer: "No technical expertise required. We design user-friendly AI solutions and provide comprehensive training for your team. Our AI agents work seamlessly with your existing systems, and we offer ongoing support. We handle all technical complexity while ensuring your team can easily manage and benefit from the AI tools."
    },
    {
      question: "What types of AI agents do you develop?",
      answer: "We develop various AI agents including customer service chatbots, lead generation and qualification bots, voice AI for phone support, data analytics assistants, social media managers, appointment schedulers, and process automation agents. Each agent is customized to your specific business needs and integrates with your existing workflows."
    },
    {
      question: "How do you ensure AI solutions are secure and compliant?",
      answer: "Security and compliance are our top priorities. We implement enterprise-grade security measures, data encryption, and access controls. Our solutions comply with GDPR, industry-specific regulations, and data protection standards. We conduct security audits and provide ongoing monitoring to ensure your AI systems remain secure and compliant."
    },
    {
      question: "Can AI solutions integrate with my existing software?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with popular business software including CRMs (Salesforce, HubSpot), helpdesk systems (Zendesk, Intercom), accounting software (Xero, QuickBooks), and custom applications. We use APIs and webhooks to ensure smooth data flow and unified workflows across all your tools."
    },
    {
      question: "What ongoing support do you provide after implementation?",
      answer: "We provide comprehensive ongoing support including performance monitoring, optimization recommendations, regular updates, troubleshooting assistance, and training for new team members. Our support packages include monthly performance reviews, priority technical support, and continuous improvement recommendations to maximize your AI investment."
    },
    {
      question: "How much does AI consulting cost?",
      answer: "Our pricing is transparent and project-based. Starter consultations begin at £2,500, professional implementations at £7,500, and enterprise solutions are custom quoted. We offer flexible payment plans and our pricing includes strategy development, implementation, training, and initial support. Contact us for a detailed quote based on your specific needs."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across multiple industries including financial services, healthcare, retail, manufacturing, professional services, and technology companies. Our AI solutions are adaptable to any industry that wants to automate processes, improve customer service, or gain competitive advantages through intelligent automation."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Know About <span className="text-purple-400">AI Consulting</span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Get answers to common questions about AI implementation and our consulting services
            </p>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg bg-white/5 px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-purple-300 text-lg font-medium py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 text-base leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-slate-300 mb-6">
                Schedule a free consultation to discuss your specific AI needs and get personalized answers
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #9333ea 100%)'
                }}
              >
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;