import React from "react"
import { singleEventStyle } from "./styles"

const parseTime = date =>
  new Date(date)
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join(":")

const SingleOccurrence = ({ event }) => {
  const [ev] = event.stack
  return (
    <div style={singleEventStyle(ev, event.offset)}>
      {ev.name}
      <br />
      {parseTime(ev.start)}
      <br />
      {ev.location}
    </div>
  )
}

export default SingleOccurrence
