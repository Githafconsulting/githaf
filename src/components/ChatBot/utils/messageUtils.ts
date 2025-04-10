
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Calendar, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const generateResponse = (query: string, setMessages: React.Dispatch<React.SetStateAction<any[]>>, email: string, setLeadCapture: React.Dispatch<React.SetStateAction<boolean>>): React.ReactNode => {
  const lowerQuery = query.toLowerCase();
  
  // Check for intent to provide contact information
  if (lowerQuery.includes('email') && lowerQuery.includes('my') || 
      lowerQuery.includes('contact me') || 
      lowerQuery.includes('get in touch') ||
      lowerQuery.includes('talk to someone') ||
      lowerQuery.includes('speak to a human')) {
    return (
      <div className="space-y-3">
        <p>I'd be happy to have one of our AI consultants reach out to you. Could you share your email address so we can get in touch?</p>
        
        <div className="mt-2 space-y-2">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full p-2 border rounded text-sm"
          />
          <Button 
            size="sm" 
            className="w-full" 
            onClick={() => {
              if (email && email.includes('@')) {
                toast.success("Thank you! Our team will contact you shortly.");
                setLeadCapture(true);
                setMessages(prev => [...prev, { 
                  id: prev.length + 1, 
                  content: <p>Thanks for your interest! One of our AI specialists will reach out to you at <strong>{email}</strong> within 24 hours. In the meantime, you might want to <Link to="/booking" className="text-primary font-medium hover:underline">book a consultation</Link> to discuss your specific business needs.</p>, 
                  isBot: true 
                }]);
              } else {
                toast.error("Please enter a valid email address");
              }
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
  
  // AI-focused responses
  if (lowerQuery.includes('what is ai') || lowerQuery.includes('artificial intelligence') || 
      lowerQuery.includes('ai capabilities') || lowerQuery.includes('machine learning')) {
    return (
      <div className="space-y-2">
        <p>Artificial Intelligence (AI) encompasses technologies that enable machines to perform tasks that typically require human intelligence. At Githaf Consulting, we specialize in:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generative AI for content creation and customer engagement</li>
          <li>Predictive analytics to forecast business trends</li>
          <li>Automation solutions that reduce operational costs</li>
          <li>Natural language processing for improved customer interactions</li>
          <li>Computer vision for visual data analysis</li>
        </ul>
        <p className="mt-2">How are you looking to implement AI in your business?</p>
      </div>
    );
  }
  
  // Lead generation focused responses
  if (lowerQuery.includes('pricing') || lowerQuery.includes('cost') || lowerQuery.includes('how much') || 
      lowerQuery.includes('investment') || lowerQuery.includes('package')) {
    return (
      <div className="space-y-2">
        <p>Our AI implementation solutions are custom-priced based on your specific business requirements, project scope, and long-term objectives. We focus on delivering ROI-positive implementations tailored to your industry and use case.</p>
        <p>Typical AI projects can range from:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Small automation solutions (starting ~$5,000)</li>
          <li>Mid-size AI integrations ($10,000-$30,000)</li>
          <li>Enterprise-scale transformations ($30,000+)</li>
        </ul>
        <p className="mt-2">The best way to get an accurate quote is to:</p>
        <div className="flex flex-col gap-2 mt-1">
          <Button variant="outline" size="sm" asChild>
            <Link to="/booking" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book a free consultation
            </Link>
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            setMessages(prev => [...prev, { 
              id: prev.length + 1, 
              content: "I'd be happy to have one of our consultants provide you with a custom quote. Could you share your email address?", 
              isBot: true 
            }]);
          }}>
            <Mail className="mr-2 h-4 w-4" />
            Request a custom quote
          </Button>
        </div>
      </div>
    );
  }
  
  if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('solution') || 
      lowerQuery.includes('help') || lowerQuery.includes('what do you do')) {
    return (
      <div className="space-y-2">
        <p>At Githaf Consulting, we specialize in transforming businesses through AI and digital solutions:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Custom AI Agents</strong> - Automating customer service, data processing, and operational tasks</li>
          <li><strong>AI Strategy Development</strong> - Creating roadmaps for AI implementation</li>
          <li><strong>Mobile & Web Applications</strong> - Building AI-enhanced digital platforms</li>
          <li><strong>Payment & Fintech Solutions</strong> - Implementing secure, intelligent financial systems</li>
          <li><strong>Digital Marketing with AI</strong> - Using AI for personalized customer engagement</li>
        </ul>
        <p className="mt-2">Which area would you like to explore for your business?</p>
      </div>
    );
  }
  
  if (lowerQuery.includes('ai agent') || lowerQuery.includes('chatbot') || lowerQuery.includes('automation') || 
      lowerQuery.includes('virtual assistant') || lowerQuery.includes('bot')) {
    return (
      <div className="space-y-2">
        <p>Our AI agents and automation solutions can revolutionize your business operations by:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Providing 24/7 customer support with natural conversations</li>
          <li>Automating repetitive tasks and workflows</li>
          <li>Processing and analyzing documents intelligently</li>
          <li>Generating personalized content and recommendations</li>
          <li>Integrating with your existing business systems</li>
        </ul>
        <p className="mt-2">For example, we've helped clients:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reduce customer service costs by 40% with AI chatbots</li>
          <li>Save 30+ hours weekly on administrative tasks</li>
          <li>Increase lead conversion rates by 25% with personalized engagement</li>
        </ul>
        <p className="mt-2">Would you like to discuss how AI agents could benefit your specific business?</p>
      </div>
    );
  }
  
  if (lowerQuery.includes('book') || lowerQuery.includes('appointment') || lowerQuery.includes('schedule') || 
      lowerQuery.includes('consultation') || lowerQuery.includes('meeting')) {
    return (
      <div className="space-y-2">
        <p>I'd be happy to help you schedule a consultation with our AI transformation experts!</p>
        <p>Our consultations typically cover:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Assessment of your current business processes</li>
          <li>Identification of AI implementation opportunities</li>
          <li>Discussion of potential solutions and approaches</li>
          <li>Preliminary timeline and investment estimates</li>
        </ul>
        <div className="flex justify-center mt-3">
          <Button asChild>
            <Link to="/booking" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('call') || 
      lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    return (
      <div className="space-y-2">
        <p>You can connect with our AI transformation team through these channels:</p>
        <div className="space-y-2">
          <p className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+971562078508" className="text-primary hover:underline">+971 562078508</a> (UAE)
          </p>
          <p className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+447530551944" className="text-primary hover:underline">+44 7530551944</a> (UK)
          </p>
          <p className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:gravitasitconsulting@gmail.com" className="text-primary hover:underline">gravitasitconsulting@gmail.com</a>
          </p>
        </div>
        <p className="mt-2">Would you prefer that an AI specialist contact you directly?</p>
      </div>
    );
  }
  
  if (lowerQuery.includes('case study') || lowerQuery.includes('example') || lowerQuery.includes('success story') || 
      lowerQuery.includes('portfolio') || lowerQuery.includes('previous work')) {
    return (
      <div className="space-y-2">
        <p>We've successfully implemented AI solutions across multiple industries. Here are some examples:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Financial Services:</strong> Built an AI-powered customer service system that reduced response times by 80% and improved satisfaction scores by 35%
          </li>
          <li>
            <strong>Retail:</strong> Developed a personalization engine that increased average order value by 22% through smart product recommendations
          </li>
          <li>
            <strong>Healthcare:</strong> Created an automated appointment scheduling system that reduced no-shows by 40% using predictive analytics
          </li>
          <li>
            <strong>Manufacturing:</strong> Implemented predictive maintenance AI that reduced downtime by 30% and extended equipment life
          </li>
        </ul>
        <p className="mt-2">Would you like to discuss a specific industry or use case that's relevant to your business?</p>
      </div>
    );
  }
  
  // ROI questions
  if (lowerQuery.includes('roi') || lowerQuery.includes('return on investment') || lowerQuery.includes('benefits') || 
      lowerQuery.includes('value') || lowerQuery.includes('worth it')) {
    return (
      <div className="space-y-2">
        <p>The ROI of AI implementations can be substantial across various metrics:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cost Reduction:</strong> 20-40% decrease in operational costs through automation</li>
          <li><strong>Revenue Growth:</strong> 10-30% increase through personalization and improved customer experience</li>
          <li><strong>Time Savings:</strong> 50-70% reduction in time spent on routine tasks</li>
          <li><strong>Error Reduction:</strong> 30-60% fewer errors in processes with AI oversight</li>
          <li><strong>Customer Satisfaction:</strong> 15-40% improvement in satisfaction scores</li>
        </ul>
        <p className="mt-2">Our approach focuses on identifying high-impact areas where AI can deliver measurable returns specifically for your business. Would you like to explore potential ROI areas for your industry?</p>
      </div>
    );
  }
  
  // Fallback response with lead generation intent
  return (
    <div className="space-y-2">
      <p>That's an interesting question about {query.length > 30 ? query.substring(0, 30) + "..." : query}. To provide you with the most accurate and helpful information tailored to your business needs, our AI specialists would love to learn more about your specific situation and objectives.</p>
      <p>We specialize in crafting custom AI solutions that address your unique challenges and opportunities. Would you like to:</p>
      <div className="flex flex-col gap-2 mt-2">
        <Button variant="outline" size="sm" asChild>
          <Link to="/booking" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a free AI consultation
          </Link>
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          setMessages(prev => [...prev, { 
            id: prev.length + 1, 
            content: "I'd be happy to have one of our AI specialists reach out to you with more information. Could you share your email address?", 
            isBot: true 
          }]);
        }}>
          <Mail className="mr-2 h-4 w-4" />
          Request more information
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          setMessages(prev => [...prev, { 
            id: prev.length + 1, 
            content: "Is there something specific about our AI solutions you'd like to know more about?", 
            isBot: true 
          }]);
        }}>
          <Bot className="mr-2 h-4 w-4" />
          Ask another question
        </Button>
      </div>
    </div>
  );
};
