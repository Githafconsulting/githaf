import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Building2, Heart, Banknote, ShoppingCart, Factory, GraduationCap, Plane, Home, Truck, Gamepad2, Briefcase, Users, FileText, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Industries = () => {
  const industries = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Healthcare",
      description: "AI-powered diagnostics, patient management, and medical automation",
      applications: ["Medical imaging analysis", "Patient data management", "Drug discovery automation"]
    },
    {
      icon: <Banknote className="w-8 h-8 text-green-400" />,
      title: "Banking & Finance",
      description: "Fraud detection, risk assessment, and automated trading solutions",
      applications: ["Fraud detection systems", "Credit risk assessment", "Algorithmic trading"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      title: "Retail & E-commerce",
      description: "Personalized recommendations, inventory optimization, and customer analytics",
      applications: ["Product recommendations", "Inventory management", "Customer behavior analysis"]
    },
    {
      icon: <Factory className="w-8 h-8 text-orange-400" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      applications: ["Predictive maintenance", "Quality assurance", "Production optimization"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
      title: "Education",
      description: "Personalized learning, automated grading, and student analytics",
      applications: ["Adaptive learning platforms", "Automated assessment", "Student performance tracking"]
    },
    {
      icon: <Plane className="w-8 h-8 text-cyan-400" />,
      title: "Transportation",
      description: "Route optimization, autonomous systems, and traffic management",
      applications: ["Route optimization", "Fleet management", "Autonomous vehicle systems"]
    },
    {
      icon: <Home className="w-8 h-8 text-yellow-400" />,
      title: "Real Estate",
      description: "Property valuation, market analysis, and smart building management",
      applications: ["Property price prediction", "Market trend analysis", "Smart building automation"]
    },
    {
      icon: <Truck className="w-8 h-8 text-indigo-400" />,
      title: "Logistics",
      description: "Supply chain optimization, warehouse automation, and delivery tracking",
      applications: ["Supply chain optimization", "Warehouse automation", "Delivery route planning"]
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-pink-400" />,
      title: "Entertainment",
      description: "Content recommendation, game AI, and audience analytics",
      applications: ["Content personalization", "Game AI development", "Audience engagement analytics"]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-teal-400" />,
      title: "Professional Services",
      description: "Document automation, client management, and process optimization",
      applications: ["Document processing", "Client relationship management", "Service optimization"]
    },
    {
      icon: <Users className="w-8 h-8 text-lime-400" />,
      title: "Human Resources",
      description: "Talent acquisition, performance analysis, and workforce planning",
      applications: ["Resume screening", "Performance evaluation", "Workforce analytics"]
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-400" />,
      title: "Legal",
      description: "Contract analysis, legal research, and compliance monitoring",
      applications: ["Contract review", "Legal document analysis", "Compliance tracking"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Security",
      description: "Threat detection, surveillance systems, and cybersecurity automation",
      applications: ["Threat detection", "Security monitoring", "Incident response automation"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Energy & Utilities",
      description: "Smart grid management, consumption optimization, and predictive maintenance",
      applications: ["Smart grid optimization", "Energy consumption analysis", "Equipment maintenance"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-slate-400" />,
      title: "Construction",
      description: "Project management, safety monitoring, and resource optimization",
      applications: ["Project planning automation", "Safety compliance monitoring", "Resource allocation"]
    }
  ];

  return (
    <Layout
      title="AI Solutions by Industry | Industry-Specific AI Implementation | Githaf Consulting"
      description="Discover how AI transforms 15+ industries. From healthcare to finance, manufacturing to retail - explore industry-specific AI solutions and implementations."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Solutions for <span className="text-blue-400">Every Industry</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover how artificial intelligence is transforming businesses across 15+ industries. From healthcare to finance, we deliver tailored AI solutions for your sector.
              </p>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Find Your Industry Solution
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Industries We Serve
                </h2>
                <p className="text-xl text-slate-300">
                  Specialized AI implementations for your industry's unique challenges
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4">{industry.icon}</div>
                      <CardTitle className="text-white text-xl">{industry.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Key Applications:</h4>
                        <ul className="space-y-1">
                          {industry.applications.map((app, appIndex) => (
                            <li key={appIndex} className="text-sm text-slate-300 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
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
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Get a customized AI strategy consultation for your specific industry needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/booking">Book Industry Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-600/10" asChild>
                    <Link to="/use-cases">View Use Cases</Link>
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

export default Industries;