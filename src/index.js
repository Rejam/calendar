import React from "react"
import ReactDOM from "react-dom"
import "./main.css"
import Calendar from "./Calendar/Calendar"
import events from "./eventsData"

ReactDOM.render(<Calendar events={events} />, document.getElementById("root"))

/* TODO
Round event times for placement on grid i.e. 13:07, 10:51*
  - round down to closest 15mins (5mins?)
All day events
  - space always there?
  - multiple alldays make space expand or all inline?
Events that span midnight
  - Split event at calendar level and pass to relevant day*

could create new *display* properties to
  - show on correct day
  - align on grid
without overwriting original properties (need real values for modal)
*/
