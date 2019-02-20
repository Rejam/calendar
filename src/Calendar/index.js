import React from 'react'
import events from './eventsData'
import s from './styles'

const HOURS = Array(24).fill(0).map((num, i) => i < 10 ? `0${i}` : i)
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar = () => {
  const rows = `[Day] 50px ${HOURS.map(hr => `[r${hr}] 100px`).join(' ')} [r${HOURS.length}]`
  const cols = `${DAYS.map(d => `[${d}] 2fr`).join(' ')} [Time] 1fr`
  return (
    <div style={s.calendarStyle(cols, rows)}>
      {
        DAYS.map(d => (
          HOURS.map(h => (
            <div style={s.hourStyle(d, h)} />
          ))
        ))
      }
      { DAYS.map((day, i) => (
        <div key={i} style={s.dayStyle(day)}>
          {day}
        </div>
      ))}
      { events.map((ev, i) => (
        <div key={i} style={s.eventStyle(ev)}>
          <div>{ev.name}</div>
        </div>
      ))}
      { HOURS.map((hr, i) =>(
        <div key={i} style={s.timeStyle(hr)}>
          <div>{hr}:00</div>
        </div>
      ))}
    </div>
  )
}

export default Calendar
