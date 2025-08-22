import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { MessageSquare, TrendingUp, Cog, FileSearch, Users, BarChart3, Shield, Clock, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import IndustryFilter from '@/components/use-cases/IndustryFilter';

const UseCases = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const useCases = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Customer Support",
      description: "AI-powered chatbots and support systems that provide 24/7 customer assistance with human-like interactions",
      benefits: ["24/7 availability", "Instant responses", "Cost reduction", "Scalable support"],
      industries: ["Retail", "Banking", "SaaS", "E-commerce"],
      complexity: "Medium",
      roi: "200-300%"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Predictive Analytics",
      description: "Forecast business trends, customer behavior, and market demands using advanced machine learning algorithms",
      benefits: ["Better forecasting", "Risk reduction", "Informed decisions", "Competitive advantage"],
      industries: ["Finance", "Retail", "Manufacturing", "Healthcare"],
      complexity: "High",
      roi: "200-400%"
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-400" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error",
      benefits: ["Efficiency gains", "Error reduction", "Cost savings", "Employee satisfaction"],
      industries: ["Manufacturing", "Finance", "HR", "Legal"],
      complexity: "Low",
      roi: "150-250%"
    },
    {
      icon: <FileSearch className="w-8 h-8 text-purple-400" />,
      title: "Document Intelligence",
      description: "Extract, analyze, and process information from documents automatically using AI-powered OCR and NLP",
      benefits: ["Faster processing", "Accuracy improvement", "Compliance automation", "Data extraction"],
      industries: ["Legal", "Healthcare", "Finance", "Insurance"],
      complexity: "Medium",
      roi: "250-350%"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Personalization Engines",
      description: "Deliver personalized experiences to customers through AI-driven recommendation systems",
      benefits: ["Higher engagement", "Increased sales", "Customer loyalty", "Better targeting"],
      industries: ["E-commerce", "Media", "Education", "Marketing"],
      complexity: "High",
      roi: "200-400%"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics and reporting",
      benefits: ["Data-driven decisions", "Performance insights", "Trend identification", "Strategic planning"],
      industries: ["All Industries", "Consulting", "Retail", "Finance"],
      complexity: "Medium",
      roi: "180-300%"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Fraud Detection",
      description: "Identify and prevent fraudulent activities in real-time using machine learning algorithms",
      benefits: ["Risk reduction", "Real-time detection", "Cost prevention", "Compliance"],
      industries: ["Banking", "Insurance", "E-commerce", "Finance"],
      complexity: "High",
      roi: "300-400%"
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Predictive Maintenance",
      description: "Predict equipment failures before they happen to minimize downtime and maintenance costs",
      benefits: ["Reduced downtime", "Cost savings", "Extended equipment life", "Safety improvement"],
      industries: ["Manufacturing", "Energy", "Transportation", "Construction"],
      complexity: "High",
      roi: "250-400%"
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: "Content Generation",
      description: "Automatically create high-quality content for marketing, documentation, and communications",
      benefits: ["Content at scale", "Consistency", "Time savings", "Creative assistance"],
      industries: ["Marketing", "Media", "Education", "Publishing"],
      complexity: "Medium",
      roi: "200-350%"
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Smart Workflow Optimization",
      description: "Optimize business workflows and resource allocation using AI-driven insights and automation",
      benefits: ["Efficiency improvement", "Resource optimization", "Bottleneck identification", "Performance boost"],
      industries: ["Operations", "Logistics", "HR", "Project Management"],
      complexity: "Medium",
      roi: "150-300%"
    }
  ];

  // Get unique industries from all use cases
  const availableIndustries = useMemo(() => {
    const industries = new Set<string>();
    useCases.forEach(useCase => {
      useCase.industries.forEach(industry => industries.add(industry));
    });
    return Array.from(industries).sort();
  }, []);

  // Filter use cases by selected industry
  const filteredUseCases = useMemo(() => {
    if (selectedIndustry === 'all') {
      return useCases;
    }
    return useCases.filter(useCase => 
      useCase.industries.includes(selectedIndustry)
    );
  }, [selectedIndustry]);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'bg-green-600/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30';
      case 'High': return 'bg-red-600/20 text-red-300 border-red-500/30';
      default: return 'bg-slate-600/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <Layout
      title="AI Use Cases | Real-World AI Applications | Githaf Consulting"
      description="Explore 10 proven AI use cases across industries. From customer support to predictive analytics, discover how AI can transform your business operations."
    >
      <div className="min-h-screen bg-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Proven AI <span className="text-purple-400">Use Cases</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover 10 real-world AI applications that are transforming businesses today. From automation to intelligence, find the perfect AI solution for your needs.
              </p>
              
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="#use-cases">Explore Use Cases</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Use Cases That Drive Results
                </h2>
                <p className="text-xl text-slate-300">
                  Real-world applications with proven ROI and measurable impact
                </p>
              </div>

              {/* Industry Filter */}
              <IndustryFilter
                selectedIndustry={selectedIndustry}
                onIndustryChange={setSelectedIndustry}
                availableIndustries={availableIndustries}
              />

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-sm text-slate-400">
                  Showing {filteredUseCases.length} use case{filteredUseCases.length !== 1 ? 's' : ''}
                  {selectedIndustry !== 'all' && ` for ${selectedIndustry}`}
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredUseCases.map((useCase, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {useCase.icon}
                          <div>
                            <CardTitle className="text-white text-xl">{useCase.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={getComplexityColor(useCase.complexity)}>
                                {useCase.complexity} Complexity
                              </Badge>
                              <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                                {useCase.roi} ROI
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-slate-300 text-base leading-relaxed">
                        {useCase.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Key Benefits:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="text-sm text-slate-300 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Relevant Industries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {useCase.industries.map((industry, industryIndex) => (
                            <Badge key={industryIndex} variant="outline" className="border-slate-600 text-slate-300">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default UseCases;