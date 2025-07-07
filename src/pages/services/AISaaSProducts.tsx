import React from 'react';
import Layout from '@/components/Layout';
import { Rocket, CheckCircle, ArrowRight, Zap, Cloud, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AISaaSProducts = () => {
  const features = [
    "Rapid deployment in days, not months",
    "Pre-built AI models and workflows",
    "Scalable cloud infrastructure",
    "Built-in security and compliance",
    "Real-time analytics and insights",
    "24/7 support and maintenance"
  ];

  const products = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Business Intelligence AI",
      description: "Automated data analysis and reporting with predictive insights"
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Process Automation Suite",
      description: "End-to-end workflow automation with AI-powered decision making"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "AI Security Platform",
      description: "Advanced threat detection and response with machine learning"
    }
  ];

  return (
    <Layout
      title="AI SaaS Products | Ready-to-Deploy AI Solutions | Githaf Consulting"
      description="Ready-to-deploy AI software solutions that help businesses scale operations, automate processes, and gain competitive advantages with minimal setup time."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8">
                <Rocket className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">AI SaaS Products</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready-to-Deploy <span className="text-blue-400">AI Solutions</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Get up and running with powerful AI tools in days, not months. Our pre-built AI SaaS products help you scale operations and automate processes instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-600/10">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our AI SaaS Products?
                </h2>
                <p className="text-xl text-slate-300">
                  Enterprise-grade AI solutions with consumer-simple deployment
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our AI Product Suite
                </h2>
                <p className="text-xl text-slate-300">
                  Powerful AI tools designed for immediate business impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="mb-4">{product.icon}</div>
                      <CardTitle className="text-white">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {product.description}
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
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Scale with AI?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Start your free trial today and see the power of ready-to-deploy AI solutions
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
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

export default AISaaSProducts;