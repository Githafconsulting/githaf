
import React, { useState, useMemo } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash } from 'lucide-react';
import { Service, SelectedService } from './use-quote-generator';

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
  const [isOpen, setIsOpen] = useState(false);

  // Calculate agents summary data
  const selectedAgentsCount = useMemo(() => {
    return selectedAgents.filter(agent => agent.selected).length;
  }, [selectedAgents]);

  const totalAgentsPrice = useMemo(() => {
    return selectedAgents
      .filter(agent => agent.selected)
      .reduce((sum, agent) => sum + agent.price, 0);
  }, [selectedAgents]);

  return (
    <div className="mt-6 border rounded-lg overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-accent/30 p-4">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between cursor-pointer w-full">
              <div>
                <h3 className="text-lg font-medium">AI Agents</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedAgentsCount} agents selected
                  {selectedAgentsCount > 0 && ` ($${totalAgentsPrice.toLocaleString()} total)`}
                </p>
              </div>
              <Button variant="ghost" size="sm">
                {isOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </Button>
            </div>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <div className="overflow-auto p-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[120px]">Price ($)</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent) => {
                  const selectedAgent = selectedAgents.find(a => a.id === agent.id);
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
                        <Textarea
                          value={selectedAgent?.notes || ''}
                          onChange={(e) => onNoteChange(agent.id, e.target.value)}
                          placeholder="Optional notes..."
                          className="min-h-[60px] text-sm"
                          disabled={!isSelected}
                        />
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
