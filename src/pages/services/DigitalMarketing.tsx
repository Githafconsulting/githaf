import React from 'react';
import Layout from '@/components/Layout';
import { Globe, CheckCircle, ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DigitalMarketing = () => {
  const services = [
    "Google Ads & PPC Management",
    "Facebook & Social Media Advertising", 
    "SEO Optimization & Content Strategy",
    "Email Marketing Campaigns",
    "Conversion Funnel Optimization",
    "Analytics & Performance Tracking"
  ];

  const marketingTypes = [
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Paid Advertising",
      description: "Strategic Google Ads and social media campaigns that maximize ROI and drive qualified leads"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "SEO & Content",
      description: "Organic growth through optimized content, keyword strategy, and search engine visibility"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Lead Generation",
      description: "Conversion-focused funnels and automation systems that turn visitors into customers"
    }
  ];

  return (
    <Layout
      title="Digital Marketing Services | PPC, SEO, Social Media | Githaf Consulting"
      description="Comprehensive digital marketing services including Google Ads, Facebook advertising, SEO optimization, email campaigns, and conversion funnel building to maximize ROI."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-8">
                <Globe className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium text-red-300">Digital Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data-Driven <span className="text-red-400">Digital Marketing</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Accelerate your growth with strategic digital marketing campaigns that deliver measurable results and maximize your return on investment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Get Marketing Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-red-500 text-red-300 hover:bg-red-600/10">
                  View Case Studies
                </Button>
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
                  Marketing Services We Offer
                </h2>
                <p className="text-xl text-slate-300">
                  Comprehensive digital marketing solutions for business growth
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Types Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Marketing Specializations
                </h2>
                <p className="text-xl text-slate-300">
                  Targeted strategies for maximum impact and growth
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {marketingTypes.map((type, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="mb-4">{type.icon}</div>
                      <CardTitle className="text-white">{type.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {type.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                Proven Marketing Results
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">300%</div>
                  <div className="text-slate-300">Average ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">150%</div>
                  <div className="text-slate-300">Lead Generation Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-slate-300">Client Retention Rate</div>
                </div>
              </div>

              <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Marketing Process</h3>
                <div className="grid md:grid-cols-4 gap-6 text-left">
                  <div>
                    <div className="text-red-400 font-bold text-lg mb-2">1. Audit</div>
                    <p className="text-slate-300 text-sm">Comprehensive analysis of current marketing performance</p>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-lg mb-2">2. Strategy</div>
                    <p className="text-slate-300 text-sm">Data-driven marketing plan tailored to your goals</p>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-lg mb-2">3. Execute</div>
                    <p className="text-slate-300 text-sm">Implementation of campaigns across all channels</p>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-lg mb-2">4. Optimize</div>
                    <p className="text-slate-300 text-sm">Continuous improvement based on performance data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Accelerate Your Growth?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Get a free marketing audit and discover opportunities to increase your ROI
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Get Free Marketing Audit
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

export default DigitalMarketing;