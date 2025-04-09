
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import BookingCalendar from './BookingCalendar';
import BookingForm from './BookingForm';
import ConfirmationDialog from './ConfirmationDialog';
import { CONSULTATION_TYPES } from './constants';
import { createGoogleCalendarLink } from './utils';
import { BookingFormData } from './types';

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Automatically show time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      setShowTimeSlots(true);
    }
  }, [selectedDate]);

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
      
      // Calculate event start and end time for Google Calendar
      const eventStartTime = selectedDate && selectedTime ? new Date(selectedDate) : null;
      if (eventStartTime && selectedTime) {
        const [hours, minutes] = selectedTime.split(':').map(Number);
        eventStartTime.setHours(hours, minutes, 0, 0);
      }
      
      // Calculate end time by adding duration minutes
      const eventEndTime = eventStartTime && consultationType ? new Date(eventStartTime) : null;
      if (eventEndTime && consultationType) {
        eventEndTime.setMinutes(eventEndTime.getMinutes() + consultationType.duration);
      }
      
      // Format times for display
      const formattedStartTime = eventStartTime ? format(eventStartTime, 'h:mm a') : '';
      const formattedEndTime = eventEndTime ? format(eventEndTime, 'h:mm a') : '';
      
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
        start: eventStartTime,
        end: eventEndTime,
        location: 'Online Meeting',
        attendees: [formData.email, 'gravitasitconsulting@gmail.com']
      });
      
      // Send booking information directly via email API
      const emailData = {
        to: 'gravitasitconsulting@gmail.com',
        subject: `Consultation Booking from ${formData.name}`,
        body: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${formattedStartTime} - ${formattedEndTime}</p>
          <p><strong>Consultation Type:</strong> ${consultationType?.name} (${consultationType?.duration} minutes)</p>
          <p><strong>Additional Information:</strong></p>
          <p>${formData.message || 'None provided'}</p>
        `,
        // In a real application, you would use a service like SendGrid, Mailgun, etc.
        // This is a simplified example that would be implemented with a proper backend
      };
      
      // Simulate sending email (would be replaced with actual API call)
      console.log('Sending email with data:', emailData);
      
      // Add to Google Calendar - this would normally be done via server-side API
      // For demo purposes, we'll open the calendar link in a new tab
      window.open(calendarLink, '_blank');
      
      // Show success message
      toast.success("Your booking has been confirmed!", {
        description: "You will receive a confirmation email shortly.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setSelectedDate(undefined);
      setSelectedTime(undefined);
      setSelectedType(undefined);
      setShowTimeSlots(false);
      setConfirmationOpen(false);
      
    } catch (error) {
      console.error('Error processing booking:', error);
      toast.error("There was an issue processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 reveal">
      {/* Calendar section */}
      <div className="md:col-span-2">
        <BookingCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          showTimeSlots={showTimeSlots}
        />
      </div>
      
      {/* Booking form section */}
      <div className="md:col-span-3">
        <BookingForm
          formData={formData}
          handleChange={handleChange}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          handleSubmit={handleSubmit}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      </div>
      
      {/* Confirmation Dialog */}
      <ConfirmationDialog
        open={confirmationOpen}
        setOpen={setConfirmationOpen}
        formData={formData}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedType={selectedType}
        onConfirm={confirmBooking}
        isSubmitting={isSubmitting}
        consultationTypes={CONSULTATION_TYPES}
      />
    </div>
  );
};

export default BookingSystem;
