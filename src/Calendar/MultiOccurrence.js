import React from "react"
import { multiEventStyle } from "./styles"

const MultiOccurrence = ({ events }) => (
  <div style={multiEventStyle(events, events.offset)}>
    {events.stack.length}
  </div>
)

export default MultiOccurrence
