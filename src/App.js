import './App.css';
import { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

function App() {
  
  const {views, ...otherProps} = useMemo(() => ({
    views: {
        month: true
    }
}), [])
  function selectSlot(slotInfo) {
    console.log(slotInfo)
    const startDateTime = moment(slotInfo.start).local().format('YYYY-MM-DD HH:mm:ss');
    const endDateTime = moment(slotInfo.end).local().format('YYYY-MM-DD HH:mm:ss');
    alert(`${startDateTime}, ${endDateTime}`);
  }

  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      selectable
      onSelectSlot={(slotInfo) => selectSlot(slotInfo)}
      step={45} //time in minutes
      views={views}
    />
  );
}

export default App;
