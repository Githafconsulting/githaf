import React from 'react';
import Layout from '@/components/Layout';
import ConsultationForm from '@/components/ConsultationForm';
import { Database, CheckCircle, ArrowRight, Bot, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIConsulting = () => {
  const benefits = [
    "Strategic AI roadmap development",
    "Opportunity identification and ROI analysis",
    "Technology stack recommendations",
    "Implementation planning and timeline",
    "Risk assessment and mitigation",
    "Change management support"
  ];

  const processSteps = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Discovery & Assessment",
      description: "We analyze your current processes and identify AI opportunities"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Strategy Development",
      description: "Create a comprehensive AI roadmap aligned with your business goals"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-400" />,
      title: "Implementation Support",
      description: "Guide you through the implementation process with expert support"
    }
  ];

  return (
    <Layout
      title="AI Consulting Services | Strategic AI Implementation | Githaf Consulting"
      description="Expert AI consulting services to help businesses identify opportunities, develop AI roadmaps, and implement intelligent solutions that drive growth and operational efficiency."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8">
                <Database className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">AI Consulting Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                Strategic <span className="text-purple-400">AI Consulting</span> for Business Growth
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your business with expert AI consulting. We help you identify opportunities, develop strategic roadmaps, and implement intelligent solutions that drive measurable results.
              </p>
              
              <div className="flex justify-center">
                <ConsultationForm 
                  triggerClassName="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                >
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get AI Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </ConsultationForm>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our AI Consulting?
                </h2>
                <p className="text-xl text-slate-300">
                  Comprehensive AI strategy and implementation support
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our AI Consulting Process
                </h2>
                <p className="text-xl text-slate-300">
                  A proven methodology for AI transformation success
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardHeader>
                      <div className="mb-4">{step.icon}</div>
                      <CardTitle className="text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Get a free AI assessment and discover how artificial intelligence can accelerate your growth
                </p>
                <ConsultationForm>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </ConsultationForm>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIConsulting;