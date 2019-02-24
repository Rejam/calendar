import { parseTime } from "./helpers"

export const calendarStyle = cols => ({
  display: "grid",
  gridTemplateColumns: cols,

  background: "#f8f8f8"
})

export const dayStyle = (rows, isTimeCol) => ({
  display: "grid",
  gridTemplateRows: rows,
  gridTemplateColumns: "repeat(5, 1fr)",

  borderRight: "1px solid #eee",
  background: "#fff"
})

export const dayHeaderStyle = {
  gridColumn: "1 / span 5",
  position: "sticky",
  top: "0px",

  background: "#fff",
  borderBottom: "2px solid #ddd"
}

export const hourStyle = h => ({
  gridColumn: "1 / span 5",
  gridRow: `r${h}00 / span 12`,

  borderBottom: "1px solid #eee"
})

export const singleEventStyle = ev => ({
  borderTop: `3px solid ${["", "red", "blue", "green", "yellow"][ev.type]}`
})

export const eventStyle = (ev, offset = 0) => ({
  gridColumn: `${1 + offset > 5 ? 5 : 1 + offset} / 6`,
  gridRow: `r${parseTime(ev.start).join("")} / r${parseTime(ev.end).join("")}`,

  overflow: "hidden",
  background: "#fff",
  padding: "5px",
  boxShadow: "0 1px 5px #ccc",
  textAlign: "left"
})

export const timeStyle = hr => ({
  gridRow: `r${hr}00 / span 12`,
  gridColumn: "1 / span 5",

  background: "#fff",
  zIndex: 20
})

export const timeLineStyle = time => ({
  gridRow: `r${time}`,
  gridColumn: 1,
  height: "1px",
  background: "indigo",
  transformOrigin: "100%",
  transform: "scaleX(100)"
})
