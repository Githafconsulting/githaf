import React from 'react';
import Layout from '@/components/Layout';
import { MapPin, CheckCircle, ArrowRight, Building, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIConsultingLondon = () => {
  const localBenefits = [
    "Face-to-face consultations in Central London",
    "Understanding of UK business regulations and compliance",
    "Local case studies and success stories",
    "Same-timezone support and communication",
    "Knowledge of London's competitive landscape",
    "Connections with local AI talent and resources"
  ];

  const londonSectors = [
    {
      icon: <Building className="w-8 h-8 text-blue-400" />,
      title: "Financial Services",
      description: "AI solutions for banks, fintech, and investment firms in the City of London"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Professional Services",
      description: "Automation and AI for law firms, consultancies, and accounting practices"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: "Tech Startups",
      description: "AI integration for London's thriving startup ecosystem in Shoreditch and beyond"
    }
  ];

  const meetingLocations = [
    "Our office in Canary Wharf",
    "Client offices across Greater London",
    "Co-working spaces in Shoreditch and King's Cross",
    "Professional meeting rooms in the City",
    "Video consultations for initial discussions"
  ];

  return (
    <Layout
      title="AI Consulting London | Local AI Implementation Services | Githaf Consulting"
      description="Expert AI consulting services in London. Face-to-face consultations, local expertise, and AI implementation for London businesses across all sectors."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Local AI Consulting</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Consulting Services in <span className="text-blue-400">London</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your London business with expert AI consulting. Local expertise, face-to-face meetings, and deep understanding of the UK market and regulations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book London Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-600/10">
                  View Local Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Local AI Consulting?
                </h2>
                <p className="text-xl text-slate-300">
                  The advantages of working with London-based AI experts
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* London Sectors Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Solutions for London's Key Sectors
                </h2>
                <p className="text-xl text-slate-300">
                  Specialized expertise for London's diverse business landscape
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {londonSectors.map((sector, index) => (
                  <Card key={index} className="bg-white/5 border-white/10">
                    <CardHeader>
                      <div className="mb-4">{sector.icon}</div>
                      <CardTitle className="text-white">{sector.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">
                        {sector.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Locations Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Flexible Meeting Options Across London
                </h2>
                <p className="text-xl text-slate-300">
                  We come to you or meet at convenient locations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {meetingLocations.map((location, index) => (
                  <div key={index} className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-lg">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Success Stories */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  London Success Stories
                </h2>
                <p className="text-xl text-slate-300">
                  Real results for London businesses
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Fintech Startup - Canary Wharf</CardTitle>
                    <CardDescription className="text-slate-300">
                      Payment Processing Automation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Implemented AI-powered fraud detection system that reduced false positives by 60% and saved £2M annually in manual review costs.
                    </p>
                    <div className="text-green-400 font-semibold">
                      Results: 60% efficiency gain, £2M annual savings
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Law Firm - City of London</CardTitle>
                    <CardDescription className="text-slate-300">
                      Document Analysis Automation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Deployed AI document review system that processes contracts 10x faster, reducing junior associate hours by 40%.
                    </p>
                    <div className="text-green-400 font-semibold">
                      Results: 10x faster processing, 40% cost reduction
                    </div>
                  </CardContent>
                </Card>
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
                  Ready to Meet for Coffee and Discuss Your AI Strategy?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Book a face-to-face consultation at a convenient London location
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Schedule London Meeting
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-500 text-blue-300 hover:bg-blue-600/10">
                    Call: +44 20 7xxx xxxx
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

export default AIConsultingLondon;