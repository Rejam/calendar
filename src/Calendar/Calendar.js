import React from "react"
import moment from "moment"
import Day from "./Day"
import Time from "./Time"
import { calendarStyle } from "./styles"
import { COLS, DAYS } from "./helpers"

const Calendar = ({ events }) => {
  const sortEventsByDay = (obj, ev) => {
    const day = moment(ev.start, "yyyy MMM DD HH:mm").format("dddd")
    return !obj[day]
      ? { ...obj, [day]: [ev] }
      : { ...obj, [day]: [...obj[day], ev] }
  }
  const eventsByDay = events.reduce(sortEventsByDay, {})

  const Days = ({ events }) =>
    DAYS.map(day => <Day day={day} events={events[day]} />)

  return (
    <div className="calendar" style={calendarStyle(COLS)}>
      <Days events={eventsByDay} />
      <Time dayStart="09" />
    </div>
  )
}

export default Calendar
