import React from 'react';
import Layout from '@/components/Layout';
import { Bot, CheckCircle, ArrowRight, MessageSquare, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIAgents = () => {
  const capabilities = [
    "24/7 customer service chatbots",
    "Automated lead generation and qualification",
    "Voice AI agents for phone support",
    "Personal assistant automation",
    "Data analytics and reporting",
    "Social media management"
  ];

  const agentTypes = [
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: "Customer Service Bots",
      description: "Handle customer inquiries, resolve issues, and provide instant support"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Lead Generation Agents",
      description: "Qualify prospects, schedule meetings, and nurture leads automatically"
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-400" />,
      title: "Analytics Assistants",
      description: "Generate reports, analyze data, and provide business insights"
    }
  ];

  return (
    <Layout
      title="AI Agents | Automated Business Processes | Githaf Consulting"
      description="Implement AI agents to automate repetitive tasks, streamline business processes, and keep your business running 24/7 with chatbots, lead generation, and more."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 mb-8">
                <Bot className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">AI Agents</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Intelligent <span className="text-green-400">AI Agents</span> for Business Automation
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Deploy AI agents that work 24/7 to automate repetitive tasks, streamline processes, and handle customer interactions while you focus on growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Deploy AI Agents
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-green-500 text-green-300 hover:bg-green-600/10">
                  See Demos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Agent Capabilities
                </h2>
                <p className="text-xl text-slate-300">
                  Comprehensive automation solutions for every business need
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agent Types Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Types of AI Agents
                </h2>
                <p className="text-xl text-slate-300">
                  Specialized agents for different business functions
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {agentTypes.map((agent, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="mb-4">{agent.icon}</div>
                      <CardTitle className="text-white">{agent.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {agent.description}
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Businesses Choose Our AI Agents
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Reduce Operational Costs</h3>
                  <p className="text-slate-300">Cut labor costs by up to 70% while maintaining quality service delivery around the clock.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Improve Response Times</h3>
                  <p className="text-slate-300">Provide instant responses to customer inquiries and lead qualification 24/7.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Scale Effortlessly</h3>
                  <p className="text-slate-300">Handle unlimited conversations and tasks without hiring additional staff.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Consistent Quality</h3>
                  <p className="text-slate-300">Ensure every interaction follows your brand guidelines and quality standards.</p>
                </div>
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
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Get your first AI agent deployed in just 7 days and start seeing results immediately
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAgents;