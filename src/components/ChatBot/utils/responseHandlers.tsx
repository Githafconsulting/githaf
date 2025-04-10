
import { MessagesSetter, BooleanSetter, EmailSetter } from '../types';

// Re-export all handlers from their respective files
export { handleContactQuery, handleLeadCaptureQuery } from './handlers/contactHandlers';
export { handleAIExplanationQuery, handleROIQuery } from './handlers/educationHandlers';
export { handleServicesQuery, handleAIAgentQuery, handlePricingQuery } from './handlers/serviceHandlers';
export { handleBookingQuery } from './handlers/bookingHandlers';
export { handleCaseStudyQuery } from './handlers/caseStudyHandlers';
export { handleFallbackQuery } from './handlers/fallbackHandlers';
