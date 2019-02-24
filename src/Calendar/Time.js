import React from "react"
import { dayStyle, timeStyle, timeLineStyle } from "./styles"
import { HOURS, ROWS, parseTime } from "./helpers"

class Time extends React.Component {
  componentDidMount() {
    const { dayStart } = this.props
    const start = document.querySelector(`#time${dayStart}`)
    window.scrollTo(0, start.offsetTop - 100)
  }

  render() {
    const pad = num => (num < 10 ? `0${num}` : `${num}`)
    const [hr, min] = parseTime(Date())
    const roundedMin = parseInt(min, 10) - (parseInt(min, 10) % 5)
    const time = [pad(hr), pad(roundedMin)].join("")

    const TimeColumn = () =>
      HOURS.map(hr => (
        <div id={`time${hr}`} style={timeStyle(hr)}>
          {hr}:00
        </div>
      ))
    const TimeLine = ({ time }) => <div style={timeLineStyle(time)} />
    return (
      <div style={dayStyle(ROWS)}>
        <TimeLine time={time} />
        <TimeColumn />
      </div>
    )
  }
}

export default Time
