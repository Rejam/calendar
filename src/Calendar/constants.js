const pad = num => (num < 10 ? `0${num}` : `${num}`)
const INTERVAL = 5 // minutes
const MINS = [...Array(60 / INTERVAL)].map((_, i) => pad(i * INTERVAL))
export const HOURS = [...Array(24)].map((num, i) => pad(i))

// generate grid-rows-template: row every {INTERVAL} mins and named by time e.g. 13:05 = r1305
export const ROWS = `[Day] 50px ${HOURS.map(hr =>
  MINS.map(min => `[r${hr}${min}] 8px`).join(" ")
).join(" ")}`

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]
export const COLS = `${DAYS.map(d => `[${d}] 2fr`).join(" ")} [Time] 1fr`
