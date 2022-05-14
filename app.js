function getCountDown(timer) {
  const total = Date.parse(timer) - Date.parse(new Date())
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60)) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const seconds = Math.floor((total / 1000) % 24)

  // return the variables
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  }
}

// create a callback function that initializes clock
function initializeClock(id, endtime) {
  const timer = document.getElementById(id)
  const days = timer.querySelector('.days')
  const hours = timer.querySelector('.hours')
  const minutes = timer.querySelector('.minutes')
  const seconds = timer.querySelector('.seconds')

  function updateClock() {
    const timeRemaining = getCountDown(endtime)

    days.innerHTML = timeRemaining.days
    hours.innerHTML = ('0' + timeRemaining.hours).slice(-2)
    minutes.innerHTML = ('0' + timeRemaining.minutes).slice(-2)
    seconds.innerHTML = ('0' + timeRemaining.seconds).slice(-2)

    if (timer.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  const timeinterval = setInterval(updateClock, 1000)
}

const countdown = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000)
initializeClock('timer-format', countdown)

// console.log(updateClock)
// console.log(timer)
// initializeClock('timer-format', countdown)
