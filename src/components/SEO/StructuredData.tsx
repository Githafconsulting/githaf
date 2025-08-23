import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type?: 'organization' | 'faq' | 'service';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Githaf Consulting",
          "description": "Expert AI consulting and digital transformation services helping businesses implement AI solutions and automate operations globally.",
          "url": "https://www.githafconsulting.com",
          "logo": "https://www.githafconsulting.com/logo.svg",
          "foundingDate": "2020",
          "areaServed": "Global",
          "sameAs": [
            "https://www.linkedin.com/company/githaf-consulting",
            "https://twitter.com/githafconsulting"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-20-1234-5678",
            "contactType": "Customer Service",
            "availableLanguage": ["English"],
            "areaServed": "Global"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Global Operations",
            "addressCountry": "GB"
          },
          "service": [
            {
              "@type": "Service",
              "name": "AI Consulting",
              "description": "Strategic AI implementation and business transformation consulting"
            },
            {
              "@type": "Service", 
              "name": "Digital Transformation",
              "description": "End-to-end digital transformation and technology implementation"
            },
            {
              "@type": "Service",
              "name": "AI Agent Development", 
              "description": "Custom AI chatbots and automation solutions"
            },
            {
              "@type": "Service",
              "name": "Strategy & Change Management",
              "description": "Business strategy consulting and organizational change management"
            }
          ]
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "AI Consulting Services",
          "description": data?.description || "Professional AI consulting and implementation services",
          "provider": {
            "@type": "Organization",
            "name": "Githaf Consulting"
          },
          "areaServed": "Global",
          "serviceType": "Consulting"
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;