
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Calendar as CalendarIcon, Clock, CalendarCheck } from 'lucide-react';
import { format, addDays, startOfDay, setHours, setMinutes } from 'date-fns';

const CONSULTATION_TYPES = [
  { id: 'initial', name: 'Initial Consultation', duration: 30 },
  { id: 'followup', name: 'Follow-up Meeting', duration: 45 },
  { id: 'strategy', name: 'Strategy Session', duration: 60 },
  { id: 'assessment', name: 'AI Assessment', duration: 90 },
];

// Available time slots
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedType) {
      toast.error("Please select a date, time, and consultation type");
      return;
    }
    
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and email");
      return;
    }
    
    // Open confirmation dialog before final submission
    setConfirmationOpen(true);
  };
  
  const confirmBooking = async () => {
    setIsSubmitting(true);
    
    try {
      // Get the selected consultation type details
      const consultationType = CONSULTATION_TYPES.find(type => type.id === selectedType);
      
      // Format date and time for the email
      const formattedDate = selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : '';
      
      // Calculate event start and end time for Google Calendar link
      const startDateTime = selectedDate && selectedTime 
        ? formatForGoogleCalendar(selectedDate, selectedTime)
        : '';
      
      // Calculate end time by adding duration minutes
      const endDateTime = selectedDate && selectedTime && consultationType
        ? formatForGoogleCalendar(selectedDate, selectedTime, consultationType.duration)
        : '';
      
      // Create Google Calendar event link
      const calendarLink = createGoogleCalendarLink({
        title: `Consultation with ${formData.name} - ${consultationType?.name}`,
        description: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Phone: ${formData.phone || 'N/A'}

Additional Information:
${formData.message || 'None provided'}
        `,
        startDateTime,
        endDateTime,
        location: 'Online Meeting',
      });
      
      // Construct the email body with booking details and calendar link
      const subject = encodeURIComponent(`Consultation Booking from ${formData.name}`);
      const body = encodeURIComponent(
        `Booking Details:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'N/A'}\n` +
        `Phone: ${formData.phone || 'N/A'}\n\n` +
        `Consultation Type: ${consultationType?.name}\n` +
        `Date: ${formattedDate}\n` +
        `Time: ${selectedTime}\n` +
        `Duration: ${consultationType?.duration} minutes\n\n` +
        `Additional Information:\n${formData.message || 'None provided'}\n\n` +
        `Google Calendar Link: ${calendarLink}\n\n` +
        `Click the Google Calendar Link above to add this event to your calendar, or copy and paste it into your browser.`
      );
      
      // Open the mailto link to gravitasitconsulting@gmail.com
      window.open(`mailto:gravitasitconsulting@gmail.com?subject=${subject}&body=${body}`);
      
      // Also open the Google Calendar event in a new tab
      window.open(calendarLink, '_blank');
      
      // Show success message
      toast.success("Your booking request has been sent! We'll confirm your appointment shortly.", {
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setSelectedType(undefined);
      setConfirmationOpen(false);
      
      console.log('Booking submitted:', {
        ...formData,
        date: selectedDate,
        time: selectedTime,
        consultationType: consultationType?.name,
        calendarLink
      });
    } catch (error) {
      console.error('Error processing booking:', error);
      toast.error("There was an issue processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to format date and time for Google Calendar URL
  const formatForGoogleCalendar = (date: Date, timeStr: string, addMinutes = 0) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const eventDate = new Date(date);
    eventDate.setHours(hours, minutes, 0, 0);
    
    if (addMinutes) {
      eventDate.setMinutes(eventDate.getMinutes() + addMinutes);
    }
    
    // Format to 'YYYYMMDDTHHmmssZ' format
    return eventDate.toISOString().replace(/-|:|\.\d+/g, '');
  };

  // Helper to create Google Calendar link
  const createGoogleCalendarLink = (
    { title, description, startDateTime, endDateTime, location }:
    { title: string, description: string, startDateTime: string, endDateTime: string, location: string }
  ) => {
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      dates: `${startDateTime}/${endDateTime}`,
      location: location,
      add: 'gravitasitconsulting@gmail.com',
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Calculate available dates (next 30 days, excluding weekends)
  const today = startOfDay(new Date());
  const disabledDates = {
    before: today,
    after: addDays(today, 30),
    // Disable weekends
    dayOfWeek: [0, 6], // Sunday and Saturday
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 reveal">
      {/* Calendar section */}
      <div className="md:col-span-2 bg-background rounded-xl border p-6">
        <div className="mb-4 flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Select a Date</h3>
        </div>
        
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={disabledDates}
          className="rounded-md border shadow p-3 pointer-events-auto"
        />
        
        {selectedDate && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Select a Time</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className="justify-center"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Booking form section */}
      <div className="md:col-span-3">
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
      </div>
      
      {/* Confirmation Dialog */}
      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Booking</DialogTitle>
            <DialogDescription>
              Please review your booking details before confirming.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">Date:</div>
              <div>{selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''}</div>
              
              <div className="font-medium">Time:</div>
              <div>{selectedTime}</div>
              
              <div className="font-medium">Type:</div>
              <div>{CONSULTATION_TYPES.find(type => type.id === selectedType)?.name}</div>
              
              <div className="font-medium">Name:</div>
              <div>{formData.name}</div>
              
              <div className="font-medium">Email:</div>
              <div>{formData.email}</div>
              
              {formData.company && (
                <>
                  <div className="font-medium">Company:</div>
                  <div>{formData.company}</div>
                </>
              )}
              
              {formData.phone && (
                <>
                  <div className="font-medium">Phone:</div>
                  <div>{formData.phone}</div>
                </>
              )}
            </div>
            
            {formData.message && (
              <div className="text-sm">
                <div className="font-medium mb-1">Additional Information:</div>
                <div className="bg-muted p-2 rounded">{formData.message}</div>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmationOpen(false)}>
              Edit Details
            </Button>
            <Button onClick={confirmBooking} disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingSystem;
