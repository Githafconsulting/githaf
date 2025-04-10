
import React from 'react';
import { MessagesSetter } from '../../types';

// AI explanation handler
export const handleAIExplanationQuery = () => {
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
};

// ROI information handler
export const handleROIQuery = () => {
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
};
