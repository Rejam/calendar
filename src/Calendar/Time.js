import React from "react"
import { dayStyle, timeStyle, timeLineStyle } from "./styles"
import { HOURS, ROWS } from "./constants"

class Time extends React.Component {
  componentDidMount() {
    const { dayStart } = this.props
    const start = document.querySelector(`#time${dayStart}`)
    window.scrollTo(0, start.offsetTop - 100)
  }

  render() {
    const TimeColumn = () =>
      HOURS.map(hr => (
        <div id={`time${hr}`} style={timeStyle(hr)}>
          {hr}:00
        </div>
      ))

    let [hr, min] = new Date()
      .toLocaleTimeString()
      .split(":")
      .slice(0, 2)
    min = parseInt(min, 10) - (parseInt(min, 10) % 5)
    const pad = num => (num < 10 ? `0${num}` : `${num}`)

    const TimeLine = ({ time }) => <div style={timeLineStyle(time)} />
    const time = [pad(hr), pad(min)].join("")
    return (
      <div style={dayStyle(ROWS)}>
        <TimeLine time={time} />
        <TimeColumn />
      </div>
    )
  }
}

export default Time
