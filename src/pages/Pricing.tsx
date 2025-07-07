import React from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, ArrowRight, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      price: "£2,500",
      period: "one-time",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "AI strategy consultation (2 sessions)",
        "Business process analysis",
        "AI opportunity assessment",
        "Implementation roadmap",
        "Basic AI tool recommendations",
        "Email support for 30 days"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      price: "£7,500",
      period: "project",
      description: "Comprehensive AI implementation for growing businesses",
      features: [
        "Everything in Starter",
        "Custom AI solution development",
        "AI agent implementation (1-2 agents)",
        "Staff training and onboarding",
        "3 months of support and optimization",
        "Performance monitoring and reporting",
        "Priority support"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-8 h-8 text-gold-400" />,
      price: "Custom",
      period: "quote",
      description: "Full-scale AI transformation for large organizations",
      features: [
        "Everything in Professional",
        "Multiple AI agent deployment",
        "Custom AI SaaS development",
        "Enterprise-grade integrations",
        "Ongoing optimization and scaling",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "Additional AI Agent",
      price: "£1,500",
      description: "Deploy extra AI agents for specific business functions"
    },
    {
      name: "Advanced Analytics Dashboard",
      price: "£2,000",
      description: "Custom reporting and performance tracking dashboard"
    },
    {
      name: "Staff Training Program",
      price: "£500/person",
      description: "Comprehensive AI literacy training for your team"
    },
    {
      name: "Monthly Optimization",
      price: "£800/month",
      description: "Ongoing performance monitoring and improvements"
    }
  ];

  return (
    <Layout
      title="AI Consulting Pricing | Transparent AI Implementation Costs | Githaf Consulting"
      description="Transparent pricing for AI consulting services. From starter packages to enterprise solutions, find the right AI implementation plan for your business budget."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-purple-400">AI Pricing</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Choose the perfect AI implementation package for your business. No hidden fees, clear deliverables, guaranteed results.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`relative bg-white/5 border-white/10 ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <div className="mb-4 flex justify-center">{pkg.icon}</div>
                      <CardTitle className="text-white text-2xl">{pkg.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">{pkg.price}</span>
                        {pkg.period && <span className="text-slate-400 ml-2">/{pkg.period}</span>}
                      </div>
                      <CardDescription className="text-slate-300">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-slate-700 hover:bg-slate-600'}`}
                        size="lg"
                      >
                        {pkg.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Optional Add-Ons
                </h2>
                <p className="text-xl text-slate-300">
                  Enhance your AI implementation with additional services
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white">{addon.name}</CardTitle>
                        <span className="text-purple-400 font-bold">{addon.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {addon.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Pricing FAQ
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in the consultation?</h3>
                  <p className="text-slate-300">Each consultation includes business analysis, AI opportunity identification, ROI projections, and a detailed implementation roadmap tailored to your specific needs.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer payment plans?</h3>
                  <p className="text-slate-300">Yes, we offer flexible payment plans for Professional and Enterprise packages. You can split payments across project milestones.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What if I need ongoing support?</h3>
                  <p className="text-slate-300">All packages include support periods. For ongoing needs, we offer monthly optimization services and dedicated support contracts.</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I upgrade my package later?</h3>
                  <p className="text-slate-300">Absolutely! You can upgrade at any time, and we'll credit your previous investment toward the higher-tier package.</p>
                </div>
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
                  Ready to Start Your AI Journey?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Book a free consultation to discuss your needs and get a custom quote
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-purple-500 text-purple-300 hover:bg-purple-600/10">
                    Contact Sales Team
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

export default Pricing;