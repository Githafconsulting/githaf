
// Helper to create Google Calendar link
export const createGoogleCalendarLink = (
  { title, description, start, end, location, attendees }:
  { 
    title: string, 
    description: string, 
    start: Date | null, 
    end: Date | null, 
    location: string,
    attendees: string[]
  }
) => {
  if (!start || !end) return '';
  
  const formatCalendarTime = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };
  
  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: description,
    dates: `${formatCalendarTime(start)}/${formatCalendarTime(end)}`,
    location: location,
  });
  
  // Add attendees
  attendees.forEach(email => {
    params.append('add', email);
  });
  
  return `${baseUrl}?${params.toString()}`;
};
