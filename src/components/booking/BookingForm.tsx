
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarCheck } from 'lucide-react';
import { CONSULTATION_TYPES } from './constants';
import { BookingFormProps } from './types';

const BookingForm: React.FC<BookingFormProps> = ({
  formData,
  handleChange,
  selectedType,
  setSelectedType,
  handleSubmit,
  selectedDate,
  selectedTime
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-background rounded-xl border p-6">
      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1">
          Consultation Type
        </label>
        <Select onValueChange={setSelectedType} value={selectedType}>
          <SelectTrigger>
            <SelectValue placeholder="Select consultation type" />
          </SelectTrigger>
          <SelectContent>
            {CONSULTATION_TYPES.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name} ({type.duration} min)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="ABC Corporation"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Additional Information
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business needs or any specific questions you have."
          rows={4}
        />
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full"
          disabled={!selectedDate || !selectedTime || !selectedType || !formData.name || !formData.email}
        >
          <CalendarCheck className="mr-2 h-5 w-5" />
          Book Consultation
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
