
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash, FileText } from 'lucide-react';
import { Service, SelectedService } from './types';

interface CollapsibleAgentsProps {
  agents: Service[];
  selectedAgents: SelectedService[];
  onToggle: (agentId: string) => void;
  onPriceChange: (agentId: string, price: number) => void;
  onNoteChange: (agentId: string, notes: string) => void;
  onRemove: (agentId: string) => void;
}

export const CollapsibleAgents: React.FC<CollapsibleAgentsProps> = ({
  agents,
  selectedAgents,
  onToggle,
  onPriceChange,
  onNoteChange,
  onRemove,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {agents.map((agent) => {
        const selectedAgent = selectedAgents.find(a => a.id === agent.id);
        const isSelected = selectedAgent?.selected || false;

        return (
          <AccordionItem key={agent.id} value={agent.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center space-x-4">
                <Checkbox 
                  id={`agent-${agent.id}`}
                  checked={isSelected}
                  onCheckedChange={() => onToggle(agent.id)}
                  onClick={(e) => e.stopPropagation()}
                />
                <label htmlFor={`agent-${agent.id}`} className="cursor-pointer" onClick={(e) => e.stopPropagation()}>
                  {agent.name}
                </label>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4 px-2">
                <p className="text-sm text-muted-foreground">{agent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`price-${agent.id}`} className="text-sm font-medium mb-1 block">
                      Monthly Price ($)
                    </label>
                    <Input
                      id={`price-${agent.id}`}
                      type="number"
                      min={0}
                      value={selectedAgent?.price || agent.defaultPrice}
                      onChange={(e) => onPriceChange(agent.id, parseFloat(e.target.value) || 0)}
                      disabled={!isSelected}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Notes</label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={`w-full ${selectedAgent?.notes ? 'text-primary' : ''}`}
                          disabled={!isSelected}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          {selectedAgent?.notes ? 'View/Edit Notes' : 'Add Notes'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Notes for {agent.name}</DialogTitle>
                        </DialogHeader>
                        <Textarea
                          value={selectedAgent?.notes || ''}
                          onChange={(e) => onNoteChange(agent.id, e.target.value)}
                          placeholder="Enter your notes here..."
                          className="min-h-[150px]"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <div className="flex justify-end pt-2">
                  {isSelected && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onRemove(agent.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  )}
                  {!isSelected && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => onToggle(agent.id)}
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      Add to Quote
                    </Button>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
