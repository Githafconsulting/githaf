
import React from 'react';
import { MessagesSetter, BooleanSetter, EmailSetter } from '../types';
import {
  handleContactQuery,
  handleLeadCaptureQuery,
  handleAIExplanationQuery,
  handlePricingQuery,
  handleServicesQuery,
  handleAIAgentQuery,
  handleBookingQuery,
  handleCaseStudyQuery,
  handleROIQuery,
  handleFallbackQuery
} from './responseHandlers';

export const generateResponse = (
  query: string,
  setMessages: MessagesSetter,
  email: string,
  setEmail: EmailSetter,
  setLeadCapture: BooleanSetter
): React.ReactNode => {
  const lowerQuery = query.toLowerCase();

  // Check for intent to provide contact information
  if (lowerQuery.includes('email') && lowerQuery.includes('my') ||
    lowerQuery.includes('contact me') ||
    lowerQuery.includes('get in touch') ||
    lowerQuery.includes('talk to someone') ||
    lowerQuery.includes('speak to a human')) {
    return handleLeadCaptureQuery(email, setEmail, setLeadCapture, setMessages);
  }

  // AI-focused responses
  if (lowerQuery.includes('what is ai') || lowerQuery.includes('artificial intelligence') ||
    lowerQuery.includes('ai capabilities') || lowerQuery.includes('machine learning')) {
    return handleAIExplanationQuery();
  }

  // Lead generation focused responses
  if (lowerQuery.includes('pricing') || lowerQuery.includes('cost') || lowerQuery.includes('how much') ||
    lowerQuery.includes('investment') || lowerQuery.includes('package')) {
    return handlePricingQuery(setMessages);
  }

  if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('solution') ||
    lowerQuery.includes('help') || lowerQuery.includes('what do you do')) {
    return handleServicesQuery();
  }

  if (lowerQuery.includes('ai agent') || lowerQuery.includes('chatbot') || lowerQuery.includes('automation') ||
    lowerQuery.includes('virtual assistant') || lowerQuery.includes('bot')) {
    return handleAIAgentQuery();
  }

  if (lowerQuery.includes('book') || lowerQuery.includes('appointment') || lowerQuery.includes('schedule') ||
    lowerQuery.includes('consultation') || lowerQuery.includes('meeting')) {
    return handleBookingQuery();
  }

  if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('call') ||
    lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    return handleContactQuery();
  }

  if (lowerQuery.includes('case study') || lowerQuery.includes('example') || lowerQuery.includes('success story') ||
    lowerQuery.includes('portfolio') || lowerQuery.includes('previous work')) {
    return handleCaseStudyQuery();
  }

  // ROI questions
  if (lowerQuery.includes('roi') || lowerQuery.includes('return on investment') || lowerQuery.includes('benefits') ||
    lowerQuery.includes('value') || lowerQuery.includes('worth it')) {
    return handleROIQuery();
  }

  // Fallback response with lead generation intent
  return handleFallbackQuery(query, setMessages);
};
