import React from 'react';
import { Building2, Heart, Banknote, ShoppingCart, Factory, GraduationCap, Plane, Home, Truck, Search, Briefcase, Users, FileText, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Briefcase className="w-8 h-8 text-teal-400" />,
      title: "Professional Services",
      description: "Document automation, client management, and process optimization",
      applications: ["Document processing", "Client relationship management", "Service optimization"]
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-400" />,
      title: "Legal",
      description: "Contract analysis, legal research, and compliance monitoring",
      applications: ["Contract review", "Legal document analysis", "Compliance tracking"]
    },
    {
      icon: <Banknote className="w-8 h-8 text-green-400" />,
      title: "Banking & Finance",
      description: "Fraud detection, risk assessment, and automated trading solutions",
      applications: ["Fraud detection systems", "Credit risk assessment", "Algorithmic trading"]
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Healthcare",
      description: "AI-powered diagnostics, patient management, and medical automation",
      applications: ["Medical imaging analysis", "Patient data management", "Drug discovery automation"]
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
      icon: <Search className="w-8 h-8 text-pink-400" />,
      title: "Recruitment AI Solutions",
      description: "Advanced AI-powered recruitment and candidate assessment tools",
      applications: ["Predictive analysis", "Anomaly detection", "OCR and AI Parsing"]
    },
    {
      icon: <Users className="w-8 h-8 text-lime-400" />,
      title: "Human Resources",
      description: "Talent acquisition, performance analysis, and workforce planning",
      applications: ["Resume screening", "Performance evaluation", "Workforce analytics"]
    }
  ];

  return (
    <section id="industries" className="py-16 relative bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-purple-400">Serve</span>
            </h2>
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
                  <div className="space-y-2 hidden">
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
  );
};

export default IndustriesSection;