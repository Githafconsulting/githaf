
import React from 'react';
import { QuoteServiceTable } from './quote-service-table';
import { QuoteSummary } from './quote-summary';
import { QuoteAdditionalFees } from './quote-additional-fees';
import { QuoteDiscounts } from './quote-discounts';
import { useQuoteGenerator } from './use-quote-generator';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const QuoteGenerator = () => {
  const {
    services,
    selectedServices,
    additionalFees,
    discount,
    totals,
    handleServiceToggle,
    handleServicePriceChange,
    handleServiceNoteChange,
    handleRemoveService,
    handleAdditionalFeeChange,
    handleDiscountChange,
    handleDiscountTypeChange,
    handleGenerateReport
  } = useQuoteGenerator();

  // Filter agents and services
  const agents = services.filter(service => service.type === 'agent');
  const standardServices = services.filter(service => service.type === 'service');
  
  // Get active agents count and total price
  const activeAgents = selectedServices.filter(s => s.selected && s.type === 'agent');
  const agentsCount = activeAgents.length;
  const agentsTotal = activeAgents.reduce((sum, agent) => sum + agent.price, 0);
  
  // State for agents section collapsible
  const [isAgentSectionOpen, setIsAgentSectionOpen] = React.useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <QuoteServiceTable 
              services={standardServices}
              selectedServices={selectedServices}
              onToggle={handleServiceToggle}
              onPriceChange={handleServicePriceChange}
              onNoteChange={handleServiceNoteChange}
              onRemove={handleRemoveService}
            />

            {/* Collapsible Agents Section */}
            <div className="mt-8">
              <Collapsible 
                open={isAgentSectionOpen} 
                onOpenChange={setIsAgentSectionOpen}
                className="w-full border rounded-md p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">Our Agents</h2>
                    {!isAgentSectionOpen && agentsCount > 0 && (
                      <p className="text-sm text-muted-foreground">
                        {agentsCount} agent{agentsCount !== 1 ? 's' : ''} selected 
                        (${agentsTotal.toLocaleString()})
                      </p>
                    )}
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${isAgentSectionOpen ? 'rotate-180' : ''}`} 
                      />
                      <span className="sr-only">Toggle agents</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">Select</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="w-[120px]">Price ($)</TableHead>
                          <TableHead className="w-[80px]">Notes</TableHead>
                          <TableHead className="w-[100px] text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {agents.map((agent) => {
                          const selectedAgent = selectedServices.find(s => s.id === agent.id);
                          const isSelected = selectedAgent?.selected || false;
                          
                          return (
                            <TableRow key={agent.id}>
                              <TableCell>
                                <Checkbox 
                                  id={`agent-${agent.id}`}
                                  checked={isSelected}
                                  onCheckedChange={() => handleServiceToggle(agent.id)}
                                />
                              </TableCell>
                              <TableCell className="font-medium">
                                <label 
                                  htmlFor={`agent-${agent.id}`}
                                  className="cursor-pointer"
                                >
                                  {agent.name}
                                </label>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm">
                                {agent.description}
                              </TableCell>
                              <TableCell>
                                <Input
                                  type="number"
                                  min={0}
                                  value={selectedAgent?.price || agent.defaultPrice}
                                  onChange={(e) => handleServicePriceChange(agent.id, parseFloat(e.target.value) || 0)}
                                  className="w-full"
                                />
                              </TableCell>
                              <TableCell>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      disabled={!isSelected}
                                      className={`${selectedAgent?.notes ? 'text-primary' : 'text-muted-foreground'}`}
                                    >
                                      <FileText className="h-4 w-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Add Notes for {agent.name}</DialogTitle>
                                    </DialogHeader>
                                    <Textarea
                                      value={selectedAgent?.notes || ''}
                                      onChange={(e) => handleServiceNoteChange(agent.id, e.target.value)}
                                      placeholder="Enter your notes here..."
                                      className="min-h-[150px]"
                                    />
                                  </DialogContent>
                                </Dialog>
                              </TableCell>
                              <TableCell className="text-right space-x-2">
                                {!isSelected ? (
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    onClick={() => handleServiceToggle(agent.id)}
                                    className="w-full"
                                  >
                                    <Plus className="mr-1 h-4 w-4" />
                                    Add
                                  </Button>
                                ) : (
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    onClick={() => handleRemoveService(agent.id)}
                                    className="w-full text-destructive hover:text-destructive"
                                  >
                                    <Trash className="mr-1 h-4 w-4" />
                                    Remove
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <QuoteAdditionalFees
                fees={additionalFees}
                onChange={handleAdditionalFeeChange}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <QuoteDiscounts
                discount={discount}
                onDiscountChange={handleDiscountChange}
                onDiscountTypeChange={handleDiscountTypeChange}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="lg:col-span-1">
        <QuoteSummary
          selectedServices={selectedServices}
          additionalFees={additionalFees}
          discount={discount}
          totals={totals}
          onGenerateReport={handleGenerateReport}
        />
      </div>
    </div>
  );
};

// Need to import these components as we're now using them directly instead of QuoteServiceTable
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash, FileText } from 'lucide-react';
