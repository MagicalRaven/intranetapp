import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarPage = () => {
  const events = [
    { title: 'Reunión de equipo', date: '2024-08-20' },
    { title: 'Capacitación interna', date: '2024-08-25' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        selectable={true}
      />
    </div>
  );
};

export default CalendarPage;
