
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, AlertTriangle, CheckCircle, ArrowRight, BarChart, Users, Clock, TrendingUp, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { performWebsiteAudit, generateImprovementRecommendations, type AuditResult, type ImprovementData } from '@/services/auditService';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const WebsiteAudit = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditResult | null>(null);
  const [improvementsData, setImprovementsData] = useState<ImprovementData[]>([]);
  const [showImprovements, setShowImprovements] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }

    // Validate URL format
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL (e.g., example.com)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const results = await performWebsiteAudit(url);
      setAuditResults(results);
      
      // Generate improvement recommendations based on the audit results
      const improvements = generateImprovementRecommendations(results);
      setImprovementsData(improvements);
      
      setIsLoading(false);
      toast({
        title: "Audit Complete",
        description: "Your website audit has been completed successfully.",
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Audit Failed",
        description: "We couldn't complete the audit. Please try again later.",
        variant: "destructive",
      });
    }
  };

  // Helper function to render score color classes based on the score value
  const getScoreColorClass = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  // Format traffic numbers with comma separators
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <Layout
      title="Website Audit | Githaf Consulting"
      description="Get a comprehensive audit of your website's performance, SEO, accessibility, and best practices with competitor benchmarking."
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Audit & Competitor Analysis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your website URL below to receive a comprehensive analysis of your site's performance, SEO, accessibility, best practices, and how you compare to competitors.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleAudit} className="flex gap-2 mb-8">
            <Input
              type="text"
              placeholder="Enter website URL (e.g., example.com)"
              value={url}
              onChange={handleInputChange}
              className="flex-grow"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Analyzing..." : "Audit Site"}
              {!isLoading && <Search className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-lg">Analyzing your website and competitors...</p>
              <p className="text-muted-foreground">This comprehensive analysis may take a few minutes</p>
            </div>
          )}

          {auditResults && !showImprovements && (
            <div className="mt-8 reveal fade-in space-y-10">
              <h2 className="text-2xl font-bold mb-6">Audit Results</h2>
              
              {/* Main metrics grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.performance.score)}`}>
                    {auditResults.performance.score}/100
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {auditResults.performance.issues.map((issue, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {issue.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">SEO</h3>
                  <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.seo.score)}`}>
                    {auditResults.seo.score}/100
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {auditResults.seo.issues.map((issue, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {issue.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.accessibility.score)}`}>
                    {auditResults.accessibility.score}/100
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {auditResults.accessibility.issues.map((issue, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {issue.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                  <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.bestPractices.score)}`}>
                    {auditResults.bestPractices.score}/100
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    {auditResults.bestPractices.issues.map((issue, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                        {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {issue.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Traffic metrics section */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Traffic Analysis</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-500" />
                        Monthly Visits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{formatNumber(auditResults.traffic.monthlyVisits)}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                        Organic Traffic
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{formatNumber(auditResults.traffic.organicTraffic)}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <BarChart className="h-4 w-4 mr-2 text-yellow-500" />
                        Bounce Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{auditResults.traffic.bounceRate}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-purple-500" />
                        Avg. Session
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{auditResults.traffic.avgSessionDuration}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Competitor Analysis */}
              {auditResults.competitors && auditResults.competitors.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">Competitor Benchmark</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Website</TableHead>
                          <TableHead className="text-right">Performance</TableHead>
                          <TableHead className="text-right">SEO</TableHead>
                          <TableHead className="text-right">Accessibility</TableHead>
                          <TableHead className="text-right">Best Practices</TableHead>
                          <TableHead className="text-right">Monthly Traffic</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Your website */}
                        <TableRow className="font-medium bg-muted/50">
                          <TableCell>Your Website</TableCell>
                          <TableCell className={`text-right ${getScoreColorClass(auditResults.performance.score)}`}>
                            {auditResults.performance.score}
                          </TableCell>
                          <TableCell className={`text-right ${getScoreColorClass(auditResults.seo.score)}`}>
                            {auditResults.seo.score}
                          </TableCell>
                          <TableCell className={`text-right ${getScoreColorClass(auditResults.accessibility.score)}`}>
                            {auditResults.accessibility.score}
                          </TableCell>
                          <TableCell className={`text-right ${getScoreColorClass(auditResults.bestPractices.score)}`}>
                            {auditResults.bestPractices.score}
                          </TableCell>
                          <TableCell className="text-right">
                            {formatNumber(auditResults.traffic.monthlyVisits)}
                          </TableCell>
                        </TableRow>
                        
                        {/* Competitors */}
                        {auditResults.competitors.map((competitor, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <span className="font-medium">{competitor.url}</span>
                            </TableCell>
                            <TableCell className={`text-right ${getScoreColorClass(competitor.performance)}`}>
                              {competitor.performance}
                            </TableCell>
                            <TableCell className={`text-right ${getScoreColorClass(competitor.seo)}`}>
                              {competitor.seo}
                            </TableCell>
                            <TableCell className={`text-right ${getScoreColorClass(competitor.accessibility)}`}>
                              {competitor.accessibility}
                            </TableCell>
                            <TableCell className={`text-right ${getScoreColorClass(competitor.bestPractices)}`}>
                              {competitor.bestPractices}
                            </TableCell>
                            <TableCell className="text-right">
                              {formatNumber(competitor.traffic.monthlyVisits)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  {/* Competitor insights dialog */}
                  <div className="mt-4 text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                          View Competitive Insights
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Competitive Analysis</DialogTitle>
                          <DialogDescription>
                            Here's how you compare to your competitors in key areas.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {/* Calculate averages */}
                          {(() => {
                            const avgCompPerformance = auditResults.competitors.reduce((sum, comp) => sum + comp.performance, 0) / auditResults.competitors.length;
                            const avgCompSEO = auditResults.competitors.reduce((sum, comp) => sum + comp.seo, 0) / auditResults.competitors.length;
                            const avgCompAccess = auditResults.competitors.reduce((sum, comp) => sum + comp.accessibility, 0) / auditResults.competitors.length;
                            const avgCompBP = auditResults.competitors.reduce((sum, comp) => sum + comp.bestPractices, 0) / auditResults.competitors.length;
                            const avgCompTraffic = auditResults.competitors.reduce((sum, comp) => sum + comp.traffic.monthlyVisits, 0) / auditResults.competitors.length;
                            
                            return (
                              <>
                                <p className="text-sm">
                                  <strong>Performance:</strong> You are 
                                  <span className={auditResults.performance.score >= avgCompPerformance ? " text-green-500" : " text-red-500"}>
                                    {auditResults.performance.score >= avgCompPerformance ? " outperforming" : " underperforming"} the competition by 
                                    {Math.abs(auditResults.performance.score - avgCompPerformance).toFixed(1)} points
                                  </span>
                                </p>
                                
                                <p className="text-sm">
                                  <strong>SEO:</strong> You are 
                                  <span className={auditResults.seo.score >= avgCompSEO ? " text-green-500" : " text-red-500"}>
                                    {auditResults.seo.score >= avgCompSEO ? " outperforming" : " underperforming"} the competition by 
                                    {Math.abs(auditResults.seo.score - avgCompSEO).toFixed(1)} points
                                  </span>
                                </p>
                                
                                <p className="text-sm">
                                  <strong>Traffic:</strong> Your site gets 
                                  <span className={auditResults.traffic.monthlyVisits >= avgCompTraffic ? " text-green-500" : " text-red-500"}>
                                    {auditResults.traffic.monthlyVisits >= avgCompTraffic ? " more" : " less"} traffic than competitors by 
                                    {Math.abs(auditResults.traffic.monthlyVisits - avgCompTraffic).toLocaleString()} visits monthly
                                  </span>
                                </p>
                                
                                <p className="text-sm font-medium mt-4">Key Opportunities:</p>
                                <ul className="text-sm list-disc pl-5 space-y-1">
                                  {auditResults.performance.score < avgCompPerformance && 
                                    <li>Improve site performance to match competition</li>}
                                  {auditResults.seo.score < avgCompSEO && 
                                    <li>Enhance SEO strategy to rank better in search</li>}
                                  {auditResults.accessibility.score < avgCompAccess && 
                                    <li>Address accessibility issues to improve user experience</li>}
                                  {auditResults.traffic.monthlyVisits < avgCompTraffic && 
                                    <li>Implement traffic growth strategies to catch up to competitors</li>}
                                </ul>
                              </>
                            );
                          })()}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
              
              <div className="text-center mt-12">
                <Button onClick={() => setShowImprovements(true)} size="lg" className="px-8">
                  Improve My Site <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {showImprovements && (
            <div className="mt-8 reveal fade-in">
              <h2 className="text-2xl font-bold mb-6">Recommended Improvements</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">What Is Required</TableHead>
                      <TableHead className="w-1/3">Your Current Site</TableHead>
                      <TableHead className="w-1/3">What We Will Improve</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {improvementsData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.requirement}</TableCell>
                        <TableCell className="text-muted-foreground">{item.current}</TableCell>
                        <TableCell className="text-primary font-medium">{item.improvement}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="text-center mt-12">
                <Button onClick={() => setShowImprovements(false)} variant="outline" className="mr-4">
                  Back to Results
                </Button>
                <Button size="lg" className="px-8">
                  Get a Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WebsiteAudit;
