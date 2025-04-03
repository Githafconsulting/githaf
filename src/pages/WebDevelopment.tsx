
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, MessageSquare, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebDevelopment = () => {
  const webDevProducts = [
    {
      id: 1,
      title: 'AI Voice Agent',
      description: 'Intelligent voice agents that can handle customer inquiries, provide information, and assist with tasks through natural conversation.',
      icon: <Bot className="h-10 w-10 text-primary" />,
      link: '#',
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'Smart chatbots that engage with website visitors, answer questions, and provide support 24/7 without human intervention.',
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      link: '#',
    },
    {
      id: 3,
      title: 'Website Audit',
      description: 'Comprehensive analysis of your website\'s performance, SEO, user experience, and technical health to identify improvement areas.',
      icon: <Search className="h-10 w-10 text-primary" />,
      link: '/website-audit',
    },
  ];

  return (
    <Layout 
      title="Web Development Services | Githaf Consulting"
      description="Explore our web development services including AI Voice Agents, Chatbots, and Website Audits."
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge web development solutions powered by AI to enhance your online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webDevProducts.map((product) => (
            <Card key={product.id} className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Link to={product.link} className="w-full">
                  <Button variant="default" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WebDevelopment;
