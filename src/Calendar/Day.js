import React from "react"
import SingleOccurrence from "./SingleOccurrence"
import MultiOccurrence from "./MultiOccurrence"
import { dayStyle, dayHeaderStyle, hourStyle } from "./styles"
import { HOURS, ROWS } from "./constants"

const Day = ({ events = [], day }) => {
  const getTime = date => new Date(date).getTime()

  const orderByStartTime = (ev1, ev2) => getTime(ev1.start) - getTime(ev2.start)

  const stackEvents = (stackedEvents, event) => {
    // check if starts and ends same as any later events
    const { start, end } = event
    const timesMatch = (t1, t2) => getTime(t1) === getTime(t2)
    const haveSameStartAndEnd = (ev1, ev2) =>
      timesMatch(ev1.start, ev2.start) && timesMatch(ev1.end, ev2.end)
    const matchingStackExists = (acc, event) =>
      acc.some(ev => haveSameStartAndEnd(event, ev))
    const addToExistingStack = (stacked, e) => {
      stacked.find(ev => haveSameStartAndEnd(e, ev)).stack.push(e)
      return stacked
    }
    const newStack = {
      start,
      end,
      stack: [event]
    }

    return matchingStackExists(stackedEvents, event)
      ? addToExistingStack(stackedEvents, event)
      : [...stackedEvents, newStack]
  }

  const addOffset = (event, i, allEvents) => {
    event.offset = 0
    // check if started bewteen start and end of any prev events
    const prevEvents = allEvents.slice(0, i)
    prevEvents.forEach(prevEvent => {
      event.offset =
        getTime(prevEvent.end) > getTime(event.start)
          ? event.offset + 1
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
  const HourPanels = () => HOURS.map((hr, i) => <div style={hourStyle(hr)} />)
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
      <HourPanels />
      <Events events={stackedEvents} />
    </div>
  )
}

export default Day
