import React from "react"
import SingleOccurrence from "./SingleOccurrence"
import MultiOccurrence from "./MultiOccurrence"
import { dayStyle, dayHeaderStyle, hourStyle } from "./styles"
import { HOURS, ROWS } from "./helpers"

const Day = ({ events = [], day }) => {
  const getTime = date => new Date(date).getTime()
  const orderByStartTime = (ev1, ev2) => getTime(ev1.start) - getTime(ev2.start)

  function stackEvents(stackedEvents, event) {
    const haveSameStartAndEnd = (ev1, ev2) =>
      getTime(ev1.start) === getTime(ev2.start) &&
      getTime(ev1.end) === getTime(ev2.end)
    // check if start and end match any stacked events
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
    // check if started bewteen start and end of earlier events
    allEvents.slice(0, i).forEach(prevEvent => {
      event.offset =
        getTime(prevEvent.end) > getTime(event.start)
          ? prevEvent.offset + 1
          : event.offset
    })
    return event
  }

  const stackedEvents = events
    .sort(orderByStartTime)
    .reduce(stackEvents, [])
    .map(addOffset)

  const DayHeader = ({ day }) => (
    <div style={dayHeaderStyle}>
      <h5>{day}</h5>
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

  return (
    <div style={dayStyle(ROWS)}>
      <DayHeader day={day} />
      <HourMarkers />
      <Events events={stackedEvents} />
    </div>
  )
}

export default Day
