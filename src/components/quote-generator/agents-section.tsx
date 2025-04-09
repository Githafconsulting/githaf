
import React from 'react';
import { SelectedService } from './types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Plus, Trash, FileText, Save } from 'lucide-react';
import { toast } from 'sonner';

interface AgentsSectionProps {
  agents: SelectedService[];
  selectedServices: SelectedService[];
  onToggle: (id: string) => void;
  onPriceChange: (id: string, price: number) => void;
  onNoteChange: (id: string, note: string) => void;
  onRemove: (id: string) => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({
  agents,
  selectedServices,
  onToggle,
  onPriceChange,
  onNoteChange,
  onRemove,
}) => {
  const [isAgentSectionOpen, setIsAgentSectionOpen] = React.useState(false);
  
  // Get active agents count and total price
  const activeAgents = selectedServices.filter(s => s.selected && s.type === 'agent');
  const agentsCount = activeAgents.length;
  const agentsTotal = activeAgents.reduce((sum, agent) => sum + agent.price, 0);

  return (
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
                          onCheckedChange={() => onToggle(agent.id)}
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
                          onChange={(e) => onPriceChange(agent.id, parseFloat(e.target.value) || 0)}
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
                            <div className="space-y-4">
                              <Textarea
                                value={selectedAgent?.notes || ''}
                                onChange={(e) => onNoteChange(agent.id, e.target.value)}
                                placeholder="Enter your notes here..."
                                className="min-h-[150px]"
                              />
                              <Button 
                                onClick={() => {
                                  toast.success("Notes saved successfully");
                                }}
                                className="w-full"
                              >
                                <Save className="mr-2 h-4 w-4" />
                                Save Notes
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        {!isSelected ? (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => onToggle(agent.id)}
                            className="w-full"
                          >
                            <Plus className="mr-1 h-4 w-4" />
                            Add
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => onRemove(agent.id)}
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
  );
};
