import React from "react"
import SingleOccurrence from "./SingleOccurrence"
import MultiOccurrence from "./MultiOccurrence"
import { dayStyle, dayHeaderStyle, hourStyle } from "./styles"
import { HOURS, ROWS } from "./helpers"

const Day = ({ events = [], day }) => {
  const getTime = date => new Date(date).getTime()
  const byOrderByStartTime = (ev1, ev2) =>
    getTime(ev1.start) - getTime(ev2.start)

  function stackEvents(stackedEvents, event) {
    const haveSameStartAndEnd = (ev1, ev2) =>
      getTime(ev1.start) === getTime(ev2.start) &&
      getTime(ev1.end) === getTime(ev2.end)
    const matchedStackIndex = stackedEvents.findIndex(ev =>
      haveSameStartAndEnd(ev, event)
    )
    function addToExistingStack(stacked, ev, i) {
      stacked[i].stack.push(ev)
      return stacked
    }
    function addNewStack(stacked, ev) {
      const { start, end } = ev
      return [...stacked, { start, end, stack: [ev] }]
    }
    return matchedStackIndex >= 0
      ? addToExistingStack(stackedEvents, event, matchedStackIndex)
      : addNewStack(stackedEvents, event)
  }

  function addOffset(event, i, allEvents) {
    event.offset = 0
    allEvents.slice(0, i).forEach(prevEvent => {
      event.offset =
        getTime(prevEvent.end) > getTime(event.start)
          ? prevEvent.offset + 1
          : event.offset
    })
    return event
  }

  const byAllDay = (filteredEvents, ev) =>
    ev.allDay
      ? [[...filteredEvents[0], ev], filteredEvents[1]]
      : [filteredEvents[0], [...filteredEvents[1], ev]]

  const DayHeader = ({ day, events }) => (
    <div style={dayHeaderStyle} className="dayHeader">
      <h5>{day}</h5>
      {events.map(ev => (
        <h6 style={{ margin: 0 }}>{ev.name}</h6>
      ))}
    </div>
  )
  const HourMarkers = () => HOURS.map((hr, i) => <div style={hourStyle(hr)} />)
  const Events = ({ events }) =>
    events.map((ev, i) =>
      ev.stack.length > 1 ? (
        <MultiOccurrence events={ev} />
      ) : (
        <SingleOccurrence event={ev} />
      )
    )

  const [allDayEvents, regularEvents] = events.reduce(byAllDay, [[], []])
  const stackedEvents = regularEvents
    .sort(byOrderByStartTime)
    .reduce(stackEvents, [])
    .map(addOffset)

  return (
    <div style={dayStyle(ROWS)}>
      <DayHeader day={day} events={allDayEvents} />
      <HourMarkers />
      <Events events={stackedEvents} />
    </div>
  )
}

export default Day
