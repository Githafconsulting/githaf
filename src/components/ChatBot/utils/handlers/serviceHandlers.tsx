
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessagesSetter } from '../../types';

// Services information handler
export const handleServicesQuery = () => {
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
};

// AI agent information handler
export const handleAIAgentQuery = () => {
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
};

// Pricing information handler
export const handlePricingQuery = (setMessages: MessagesSetter) => {
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
};
