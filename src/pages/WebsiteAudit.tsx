
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { performWebsiteAudit, generateImprovementRecommendations, type AuditResult, type ImprovementData } from '@/services/auditService';

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

  return (
    <Layout
      title="Website Audit | Githaf Consulting"
      description="Get a comprehensive audit of your website's performance, SEO, accessibility, and best practices."
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Audit</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your website URL below to receive a comprehensive analysis of your site's performance, SEO, accessibility, and best practices.
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
              <p className="mt-4 text-lg">Analyzing your website...</p>
              <p className="text-muted-foreground">This may take a few minutes for a thorough analysis</p>
            </div>
          )}

          {auditResults && !showImprovements && (
            <div className="mt-8 reveal fade-in">
              <h2 className="text-2xl font-bold mb-6">Audit Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 border rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <div className="text-3xl font-bold">{auditResults.performance.score}/100</div>
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
                  <div className="text-3xl font-bold">{auditResults.seo.score}/100</div>
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
                  <div className="text-3xl font-bold">{auditResults.accessibility.score}/100</div>
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
                  <div className="text-3xl font-bold">{auditResults.bestPractices.score}/100</div>
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
