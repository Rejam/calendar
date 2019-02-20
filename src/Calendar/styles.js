export default {
  calendarStyle: (cols, rows) => ({
    display: 'grid',
    gridTemplateColumns: cols,
    gridTemplateRows: rows,
    gridGap: '2px',
    background: '#eee'
  }),
  hourStyle: (d, h) => ({
    gridColumn: `${d} / span 1`,
    gridRow: `r${h} / span 1`,
    background: 'green'
  }),
  dayStyle: (day) => ({
    gridColumn: `${day} / span 1`,
    gridRow: `Day / span 1`,
    background: 'lightblue'
  }),
  eventStyle: (ev) => ({
    gridColumn: `${ev.date} / span 1`,
    gridRow: `r${ev.start} / r${ev.end}`,
    background: 'orange'
  }),
  timeStyle: (hr) => ({
    gridColumn: 'Time / span 1',
    gridRow: `r${hr} / span 1`,
  })
}