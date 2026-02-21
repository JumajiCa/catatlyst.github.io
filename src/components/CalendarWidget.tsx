import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

/*
 * SETUP INSTRUCTIONS FOR OFFICERS:
 *
 * 1. Go to Google Calendar settings for the club calendar.
 * 2. Under "Access permissions", check "Make available to public".
 * 3. Copy the Calendar ID (looks like an email address) from
 *    "Integrate calendar" and paste it below as GOOGLE_CALENDAR_ID.
 * 4. Go to https://console.cloud.google.com, create a project,
 *    enable the Google Calendar API, and create an API key.
 * 5. Restrict the API key to "Google Calendar API" only.
 * 6. Paste the API key below as GOOGLE_API_KEY.
 */
const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE';
const GOOGLE_CALENDAR_ID = 'YOUR_CALENDAR_ID@group.calendar.google.com';

export default function CalendarWidget() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={GOOGLE_API_KEY}
        events={{ googleCalendarId: GOOGLE_CALENDAR_ID }}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        height="auto"
        eventColor="#2D6A4F"
        eventTextColor="#FFFFFF"
        dayMaxEvents={3}
        fixedWeekCount={false}
      />
    </div>
  );
}
