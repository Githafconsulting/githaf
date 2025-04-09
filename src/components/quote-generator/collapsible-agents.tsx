
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash, ChevronDown } from 'lucide-react';
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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-2xl font-semibold mb-4">Our Agents</h2>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent>
        <Accordion type="single" collapsible className="w-full">
          {agents.map((agent) => {
            const selectedAgent = selectedAgents.find(a => a.id === agent.id);
            const isSelected = selectedAgent?.selected || false;

            return (
              <AccordionItem key={agent.id} value={agent.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                      <Checkbox 
                        id={`agent-${agent.id}`}
                        checked={isSelected}
                        onCheckedChange={() => onToggle(agent.id)}
                        className="mr-2"
                      />
                      <label 
                        htmlFor={`agent-${agent.id}`} 
                        className="cursor-pointer" 
                      >
                        {agent.name}
                      </label>
                    </div>
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
                        <label htmlFor={`notes-${agent.id}`} className="text-sm font-medium mb-1 block">
                          Notes
                        </label>
                        <Textarea
                          id={`notes-${agent.id}`}
                          placeholder="Add notes here..."
                          value={selectedAgent?.notes || ''}
                          onChange={(e) => onNoteChange(agent.id, e.target.value)}
                          disabled={!isSelected}
                          className="min-h-[80px]"
                        />
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
      </CollapsibleContent>
    </Collapsible>
  );
};
