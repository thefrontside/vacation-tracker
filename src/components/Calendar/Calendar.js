import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.values(BigCalendar.Views);

const Calendar = ({ events, date, onNavigate }) => {
  return (
    <div
      className="calendar-container"
      style={{height: "600px"}}
      data-test-calendar
    >
      <BigCalendar
        localizer={localizer}
        events={events}
        views={allViews}
        defaultDate={date}
        onNavigate={onNavigate}
      />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.date,
  events: PropTypes.arrayOf(PropTypes.object),
  onNavigate: PropTypes.func
};

export default Calendar;