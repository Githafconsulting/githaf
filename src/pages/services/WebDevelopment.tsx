import React from 'react';
import Layout from '@/components/Layout';
import { Code, CheckCircle, ArrowRight, Smartphone, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevelopment = () => {
  const features = [
    "AI-powered responsive design",
    "Mobile-first development approach",
    "High-performance optimization",
    "SEO and accessibility built-in",
    "Modern frameworks and technologies",
    "Ongoing maintenance and support"
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Custom Websites",
      description: "Bespoke websites built with modern frameworks, optimized for performance and user experience"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      title: "Mobile Applications",
      description: "Native and progressive web apps that work seamlessly across all devices and platforms"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "AI Integration",
      description: "Intelligent features powered by AI to enhance user engagement and business automation"
    }
  ];

  return (
    <Layout
      title="AI-Powered Web Development | Custom Websites & Mobile Apps | Githaf Consulting"
      description="High-performance, responsive websites and custom mobile apps enhanced with AI features. Modern web development that drives business growth and user engagement."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Web & Mobile Development</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-blue-400">Web Development</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Create stunning, high-performance websites and mobile applications enhanced with AI features that engage users and drive business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-600/10">
                  View Portfolio
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
                  Why Choose Our Development Services?
                </h2>
                <p className="text-xl text-slate-300">
                  Modern technology stack with AI-enhanced capabilities
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

        {/* Services Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Development Services
                </h2>
                <p className="text-xl text-slate-300">
                  Comprehensive web and mobile solutions for modern businesses
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Modern Technology Stack
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Frontend Technologies</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• React, Vue.js, Angular</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Tailwind CSS & Styled Components</li>
                    <li>• Progressive Web Apps (PWA)</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Backend & AI Integration</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Node.js, Python, PHP</li>
                    <li>• AI/ML APIs and Services</li>
                    <li>• Database Design & Management</li>
                    <li>• Cloud Deployment & Scaling</li>
                  </ul>
                </div>
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
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Let's discuss your project and create a digital solution that exceeds expectations
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Project
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

export default WebDevelopment;