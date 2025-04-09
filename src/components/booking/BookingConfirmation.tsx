
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarCheck, ArrowLeft } from 'lucide-react';

interface BookingConfirmationProps {
  details: {
    name: string;
    email: string;
    date: string;
    time: string;
    type: string;
    calendarLink: string;
  };
  onReset: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ details, onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CalendarCheck className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          <CardDescription>
            Thank you for booking a consultation with us. We look forward to speaking with you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Name:</div>
                <div>{details.name}</div>
                
                <div className="font-medium">Email:</div>
                <div>{details.email}</div>
                
                <div className="font-medium">Date:</div>
                <div>{details.date}</div>
                
                <div className="font-medium">Time:</div>
                <div>{details.time}</div>
                
                <div className="font-medium">Consultation Type:</div>
                <div>{details.type}</div>
              </div>
            </div>
            
            <div className="text-sm text-center text-muted-foreground">
              <p>A confirmation email has been sent to your email address.</p>
              <p>You can also add this appointment to your calendar using the link below.</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button 
            className="w-full" 
            onClick={() => window.open(details.calendarLink, '_blank')}
          >
            <CalendarCheck className="mr-2 h-4 w-4" />
            Add to Google Calendar
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={onReset}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Book Another Consultation
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingConfirmation;
