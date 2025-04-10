
import React from 'react';

// Case studies handler
export const handleCaseStudyQuery = () => {
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
};
