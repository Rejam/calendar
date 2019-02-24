import React from "react"
import { eventStyle } from "./styles"

const MultiOccurrence = ({ events }) => (
  <div style={eventStyle(events, events.offset)}>{events.stack.length}</div>
)

export default MultiOccurrence
