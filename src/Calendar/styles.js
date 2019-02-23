const parseTime = date =>
  new Date(date)
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join("")

export const calendarStyle = cols => ({
  display: "grid",
  gridTemplateColumns: cols,

  // not important for function
  background: "#f8f8f8"
})

export const dayStyle = (rows, isTimeCol) => ({
  display: "grid",
  gridTemplateRows: rows,
  gridTemplateColumns: "repeat(5, 1fr)",

  // not important for function
  borderRight: "1px solid #eee",
  background: "#fff"
})

export const dayHeaderStyle = {
  gridColumn: "1 / span 5",
  position: "sticky",
  top: "0px",

  // not important for function
  background: "#fff",
  borderBottom: "2px solid #ddd"
}

export const hourStyle = h => ({
  gridColumn: "1 / span 5",
  gridRow: `r${h}00 / span 12`,

  // not important for function
  borderBottom: "1px solid #eee"
})

export const singleEventStyle = (ev, offset = 0) => ({
  gridColumn: `${1 + offset > 5 ? 5 : 1 + offset} / 6`,
  gridRow: `r${parseTime(ev.start)} / r${parseTime(ev.end)}`,

  // not important for function
  overflow: "hidden",
  background: "#fff",
  padding: "5px",
  borderTop: `3px solid ${["", "red", "blue", "green", "yellow"][ev.type]}`,
  boxShadow: "0 1px 5px #ccc",
  textAlign: "left"
})

export const multiEventStyle = (ev, offset = 0) => ({
  gridColumn: `${1 + offset > 5 ? 5 : 1 + offset} / 6`,
  gridRow: `r${parseTime(ev.start)} / r${parseTime(ev.end)}`,

  // not important for function
  background: "#fff",
  padding: "5px",
  boxShadow: "0 1px 5px #ccc",
  textAlign: "left"
})

export const timeStyle = hr => ({
  gridRow: `r${hr}00 / span 12`,
  gridColumn: "1 / span 5",

  // not important for function
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
