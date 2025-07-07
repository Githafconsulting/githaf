import React from 'react';
import Layout from '@/components/Layout';
import { Zap, CheckCircle, ArrowRight, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIForStartups = () => {
  const benefits = [
    "Budget-friendly AI implementation plans",
    "Simple, non-technical AI solutions", 
    "Quick ROI with minimal upfront investment",
    "Scalable solutions that grow with your startup",
    "Expert guidance without enterprise complexity",
    "Proven startup-specific AI use cases"
  ];

  const startupChallenges = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Limited Budget",
      description: "Get maximum AI impact with minimal investment using our startup-friendly pricing"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Fast Implementation",
      description: "Deploy AI solutions in weeks, not months, to accelerate your growth"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Small Team Support", 
      description: "AI tools that your small team can actually use and maintain effectively"
    }
  ];

  const aiUseCases = [
    "Customer service chatbots for 24/7 support",
    "Automated lead qualification and scoring",
    "Content generation for marketing campaigns", 
    "Predictive analytics for business planning",
    "Process automation for repetitive tasks",
    "Intelligent data analysis and reporting"
  ];

  return (
    <Layout
      title="AI Consulting for Startups | Affordable AI Implementation | Githaf Consulting"
      description="Affordable AI consulting services designed specifically for startups and growing businesses. Simple AI implementation with quick ROI and budget-friendly solutions."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 mb-8">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">AI for Startups</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-green-400">Affordable AI</span> for Growing Startups
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your startup with simple, budget-friendly AI solutions. Get the competitive edge of AI without the enterprise complexity or cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started - From $997/month
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-green-500 text-green-300 hover:bg-green-600/10">
                  Free AI Readiness Check
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Challenges Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Solutions Built for Startup Realities
                </h2>
                <p className="text-xl text-slate-300">
                  We understand the unique challenges startups face
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {startupChallenges.map((challenge, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardHeader>
                      <div className="mb-4">{challenge.icon}</div>
                      <CardTitle className="text-white">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {challenge.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
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
                  Why Startups Choose Our AI Services
                </h2>
                <p className="text-xl text-slate-300">
                  Simple, affordable, and effective AI implementation
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

        {/* AI Use Cases Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Popular AI Use Cases for Startups
                </h2>
                <p className="text-xl text-slate-300">
                  Real AI applications that drive startup growth
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {aiUseCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20">
                    <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-lg">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Give Your Startup the AI Advantage?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Join 100+ startups already using AI to accelerate growth and reduce costs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Your AI Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-500 text-green-300 hover:bg-green-600/10">
                    Calculate Your AI ROI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIForStartups;