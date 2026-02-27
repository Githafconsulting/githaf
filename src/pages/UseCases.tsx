import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import { MessageSquare, TrendingUp, Cog, FileSearch, Users, BarChart3, Shield, Clock, Brain, Zap, Bot, Workflow, Eye, Mic, Sparkles, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import IndustryFilter from '@/components/use-cases/IndustryFilter';

const UseCases = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const useCases = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: "Autonomous AI Agents",
      description: "Deploy intelligent agents that autonomously handle complex multi-step tasks — from research and data gathering to decision-making and execution",
      benefits: ["End-to-end task automation", "Multi-tool orchestration", "Adaptive decision-making", "Human-in-the-loop oversight"],
      industries: ["Finance", "Legal", "Operations", "Consulting"],
      complexity: "High",
      tag: "Agentic AI"
    },
    {
      icon: <Workflow className="w-8 h-8 text-violet-400" />,
      title: "Agentic Workflow Automation",
      description: "Build AI-driven workflows where agents collaborate, delegate tasks, and adapt in real-time to accomplish business objectives",
      benefits: ["Cross-system orchestration", "Self-healing workflows", "Dynamic task routing", "Scalable operations"],
      industries: ["Manufacturing", "Logistics", "HR", "SaaS"],
      complexity: "High",
      tag: "Agentic AI"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: "Generative Content & Copywriting",
      description: "Produce high-quality marketing copy, blog posts, product descriptions, and brand content at scale using generative AI models",
      benefits: ["Content at scale", "Brand consistency", "Multilingual output", "Rapid iteration"],
      industries: ["Marketing", "Media", "E-commerce", "Publishing"],
      complexity: "Medium",
      tag: "Gen AI"
    },
    {
      icon: <Eye className="w-8 h-8 text-emerald-400" />,
      title: "AI-Powered Visual Generation",
      description: "Generate product images, design mockups, marketing visuals, and creative assets using state-of-the-art image generation models",
      benefits: ["Rapid prototyping", "Cost-effective design", "Personalised visuals", "A/B creative testing"],
      industries: ["Retail", "E-commerce", "Marketing", "Media"],
      complexity: "Medium",
      tag: "Gen AI"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "Intelligent Customer Support",
      description: "AI-powered chatbots and support systems that provide 24/7 customer assistance with human-like interactions",
      benefits: ["24/7 availability", "Instant responses", "Cost reduction", "Scalable support"],
      industries: ["Retail", "Banking", "SaaS", "E-commerce"],
      complexity: "Medium"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Predictive Analytics",
      description: "Forecast business trends, customer behavior, and market demands using advanced machine learning algorithms",
      benefits: ["Better forecasting", "Risk reduction", "Informed decisions", "Competitive advantage"],
      industries: ["Finance", "Retail", "Manufacturing", "Healthcare"],
      complexity: "High"
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-400" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error",
      benefits: ["Efficiency gains", "Error reduction", "Cost savings", "Employee satisfaction"],
      industries: ["Manufacturing", "Finance", "HR", "Legal"],
      complexity: "Low"
    },
    {
      icon: <FileSearch className="w-8 h-8 text-purple-400" />,
      title: "Document Intelligence",
      description: "Extract, analyze, and process information from documents automatically using AI-powered OCR and NLP",
      benefits: ["Faster processing", "Accuracy improvement", "Compliance automation", "Data extraction"],
      industries: ["Legal", "Healthcare", "Finance", "Insurance"],
      complexity: "Medium"
    },
    {
      icon: <Mic className="w-8 h-8 text-rose-400" />,
      title: "Conversational AI & Voice Agents",
      description: "Build natural-language voice and chat agents that handle sales calls, bookings, and customer queries autonomously",
      benefits: ["Natural conversations", "Reduced call centre load", "24/7 voice support", "Lead qualification"],
      industries: ["Healthcare", "Banking", "Retail", "Insurance"],
      complexity: "High",
      tag: "Agentic AI"
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-400" />,
      title: "RAG & Knowledge Assistants",
      description: "Deploy retrieval-augmented generation systems that answer questions from your proprietary data with source-grounded accuracy",
      benefits: ["Enterprise knowledge search", "Source-cited answers", "Reduced hallucination", "Secure data access"],
      industries: ["Legal", "Consulting", "Education", "Finance"],
      complexity: "Medium",
      tag: "Gen AI"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Personalization Engines",
      description: "Deliver personalized experiences to customers through AI-driven recommendation systems",
      benefits: ["Higher engagement", "Increased sales", "Customer loyalty", "Better targeting"],
      industries: ["E-commerce", "Media", "Education", "Marketing"],
      complexity: "High"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Fraud Detection",
      description: "Identify and prevent fraudulent activities in real-time using machine learning algorithms",
      benefits: ["Risk reduction", "Real-time detection", "Cost prevention", "Compliance"],
      industries: ["Banking", "Insurance", "E-commerce", "Finance"],
      complexity: "High"
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Predictive Maintenance",
      description: "Predict equipment failures before they happen to minimize downtime and maintenance costs",
      benefits: ["Reduced downtime", "Cost savings", "Extended equipment life", "Safety improvement"],
      industries: ["Manufacturing", "Energy", "Transportation", "Construction"],
      complexity: "High"
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      title: "Smart Workflow Optimization",
      description: "Optimize business workflows and resource allocation using AI-driven insights and automation",
      benefits: ["Efficiency improvement", "Resource optimization", "Bottleneck identification", "Performance boost"],
      industries: ["Operations", "Logistics", "HR", "Project Management"],
      complexity: "Medium"
    }
  ];

  const availableIndustries = useMemo(() => {
    const industries = new Set<string>();
    useCases.forEach(useCase => {
      useCase.industries.forEach(industry => industries.add(industry));
    });
    return Array.from(industries).sort();
  }, []);

  const filteredUseCases = useMemo(() => {
    if (selectedIndustry === 'all') return useCases;
    return useCases.filter(useCase => useCase.industries.includes(selectedIndustry));
  }, [selectedIndustry]);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'bg-green-600/20 text-green-300 border-green-500/30';
      case 'Medium': return 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30';
      case 'High': return 'bg-red-600/20 text-red-300 border-red-500/30';
      default: return 'bg-slate-600/20 text-slate-300 border-slate-500/30';
    }
  };

  const getTagColor = (tag?: string) => {
    switch (tag) {
      case 'Gen AI': return 'bg-amber-600/20 text-amber-300 border-amber-500/30';
      case 'Agentic AI': return 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30';
      default: return '';
    }
  };

  return (
    <Layout
      title="AI Use Cases | Real-World AI Applications | Githaf Consulting"
      description="Explore proven AI use cases across industries including Generative AI and Agentic AI. Discover how AI can transform your business operations."
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
                Discover real-world AI applications — from Generative AI and Agentic systems to predictive analytics — that are transforming businesses today.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="#use-cases">Explore Use Cases</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section id="use-cases" className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Use Cases That Drive Results
                </h2>
                <p className="text-xl text-slate-300">
                  Real-world applications transforming businesses across industries
                </p>
              </div>

              <IndustryFilter
                selectedIndustry={selectedIndustry}
                onIndustryChange={setSelectedIndustry}
                availableIndustries={availableIndustries}
              />

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
                              {useCase.tag && (
                                <Badge className={getTagColor(useCase.tag)}>
                                  {useCase.tag}
                                </Badge>
                              )}
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
