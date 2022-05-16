# JavaScript Countdown Timer

A simple JavaScript countdown clock without any dependencies that uses the setInterval method to calls a function at specific times.

This projects was first see as a design shot on dribble by <a href="https://dribbble.com/shots/13953334--DailyUI-Day-14-Countdown-Timer">Jonathan</a> 

![Jonathan](./images/countdown-clock-dribble.png)

# Completed Screen

Here's the completed project

<img src="./images/countdown-clock-completed.png">

## How I did this project...

* I started by declaring the valid end date using one of Javascrip Date.parse methods
* 
* To calculate the remaining time left before the countdown ends... 
I wrote a function that takes the strings we just declared and calculates the difference between that time and the current time
also, converts the milliseconds to days, hours, minutes, and seconds.
*then return the days, hours, minutes and hours countdown as a reusable objects

* Next, to display the clock...
I wrote another function that takes two parameters. But before now, I already have my variables for querying the DOM

* I use setInterval to execute an anonymous function every second to calculate the remaining time, output the remaining time to the select DOM elements and then stop the clock once the time is up.

## To run the clock...

initializeClock('timer-format', countdown)

Here's a [Live Demo](https://js-countdown-app-trillionclues.vercel.app/) of the App

If you would like to read an indept [hashnode](https://trillioncluess.hashnode.dev/build-a-javascript-countdown-timer-in-5-minutes) article on how to do this, go [here](https://trillioncluess.hashnode.dev/build-a-javascript-countdown-timer-in-5-minutes)
