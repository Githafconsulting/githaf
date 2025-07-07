import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Calculator, TrendingUp, ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AIROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: '',
    avgSalary: '',
    hoursPerWeek: '',
    aiInvestment: '',
    efficiencyGain: '20',
    projectType: ''
  });

  const [results, setResults] = useState<{
    annualSavings: number;
    roi: number;
    paybackMonths: number;
    fiveYearValue: number;
  } | null>(null);

  const calculateROI = () => {
    const employees = parseInt(inputs.employees) || 0;
    const avgSalary = parseInt(inputs.avgSalary) || 0;
    const hoursPerWeek = parseInt(inputs.hoursPerWeek) || 0;
    const aiInvestment = parseInt(inputs.aiInvestment) || 0;
    const efficiencyGain = parseInt(inputs.efficiencyGain) || 0;

    if (employees && avgSalary && hoursPerWeek && aiInvestment) {
      const hourlyRate = avgSalary / (52 * 40); // Assuming 40-hour work week
      const hoursPerYear = hoursPerWeek * 52;
      const timeSaved = (hoursPerYear * efficiencyGain) / 100;
      const annualSavings = employees * timeSaved * hourlyRate;
      const roi = ((annualSavings - aiInvestment) / aiInvestment) * 100;
      const paybackMonths = (aiInvestment / (annualSavings / 12));
      const fiveYearValue = (annualSavings * 5) - aiInvestment;

      setResults({
        annualSavings: Math.round(annualSavings),
        roi: Math.round(roi),
        paybackMonths: Math.round(paybackMonths * 10) / 10,
        fiveYearValue: Math.round(fiveYearValue)
      });
    }
  };

  return (
    <Layout
      title="AI ROI Calculator | Calculate Your AI Investment Returns | Githaf Consulting"
      description="Free AI ROI calculator to determine the return on investment for your AI implementation. Calculate cost savings, efficiency gains, and payback period."
    >
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8">
                <Calculator className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Free AI ROI Calculator</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Calculate Your <span className="text-blue-400">AI Investment</span> Returns
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Discover how much money AI can save your business with our free ROI calculator. Get instant projections for cost savings and payback period.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Enter Your Business Details</CardTitle>
                    <CardDescription className="text-slate-300">
                      Provide some basic information about your business to calculate potential AI savings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees" className="text-white">Number of Employees</Label>
                      <Input
                        id="employees"
                        type="number"
                        placeholder="e.g., 25"
                        value={inputs.employees}
                        onChange={(e) => setInputs({...inputs, employees: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="avgSalary" className="text-white">Average Annual Salary ($)</Label>
                      <Input
                        id="avgSalary"
                        type="number"
                        placeholder="e.g., 60000"
                        value={inputs.avgSalary}
                        onChange={(e) => setInputs({...inputs, avgSalary: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hoursPerWeek" className="text-white">Hours Per Week on Repetitive Tasks</Label>
                      <Input
                        id="hoursPerWeek"
                        type="number"
                        placeholder="e.g., 10"
                        value={inputs.hoursPerWeek}
                        onChange={(e) => setInputs({...inputs, hoursPerWeek: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aiInvestment" className="text-white">AI Implementation Investment ($)</Label>
                      <Input
                        id="aiInvestment"
                        type="number"
                        placeholder="e.g., 50000"
                        value={inputs.aiInvestment}
                        onChange={(e) => setInputs({...inputs, aiInvestment: e.target.value})}
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="efficiencyGain" className="text-white">Expected Efficiency Gain (%)</Label>
                      <Select value={inputs.efficiencyGain} onValueChange={(value) => setInputs({...inputs, efficiencyGain: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select efficiency gain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10% - Conservative</SelectItem>
                          <SelectItem value="20">20% - Moderate</SelectItem>
                          <SelectItem value="30">30% - Aggressive</SelectItem>
                          <SelectItem value="50">50% - Transformative</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      onClick={calculateROI}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      Calculate ROI
                      <Calculator className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Your AI ROI Projection</CardTitle>
                    <CardDescription className="text-slate-300">
                      Estimated returns based on your inputs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {results ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 p-4 rounded-lg border border-green-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <DollarSign className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-green-300">Annual Savings</span>
                            </div>
                            <div className="text-2xl font-bold text-white">
                              ${results.annualSavings.toLocaleString()}
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 p-4 rounded-lg border border-blue-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-blue-400" />
                              <span className="text-sm text-blue-300">ROI</span>
                            </div>
                            <div className="text-2xl font-bold text-white">
                              {results.roi}%
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 p-4 rounded-lg border border-purple-500/30">
                            <div className="text-sm text-purple-300 mb-2">Payback Period</div>
                            <div className="text-2xl font-bold text-white">
                              {results.paybackMonths} months
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 p-4 rounded-lg border border-orange-500/30">
                            <div className="text-sm text-orange-300 mb-2">5-Year Value</div>
                            <div className="text-2xl font-bold text-white">
                              ${results.fiveYearValue.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            size="lg"
                          >
                            Get Detailed AI Implementation Plan
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Calculator className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400">
                          Fill out the form to see your AI ROI projection
                        </p>
                      </div>
                    )}
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
                  Ready to Turn These Projections into Reality?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Let's discuss how to implement AI solutions that deliver these results for your business
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Strategy Session
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

export default AIROICalculator;