
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock } from 'lucide-react';
import { addDays, startOfDay } from 'date-fns';
import { TIME_SLOTS } from './constants';
import { BookingCalendarProps } from './types';

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  showTimeSlots
}) => {
  // Calculate available dates (next 30 days, excluding weekends)
  const today = startOfDay(new Date());
  const disabledDates = {
    before: today,
    after: addDays(today, 30),
    // Disable weekends
    dayOfWeek: [0, 6], // Sunday and Saturday
  };

  return (
    <div className="bg-background rounded-xl border p-6">
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
      
      {showTimeSlots && (
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
  );
};

export default BookingCalendar;
