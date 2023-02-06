import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

function App() {
  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
    />
  );
}

export default App;
