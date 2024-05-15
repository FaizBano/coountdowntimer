#! /usr/bin/env/node 

// import inquirer from "inquirer";

import {differenceInCalendarDays, differenceInSeconds} from "date-fns";

// function for countdown seconds
function* countdownTimer(seconds: number){
    while (seconds > 0 ){
        yield seconds;
seconds--;
    }
}

// step 2

let timerInterator = countdownTimer(10);

// function to create a countdown timer
function displayContdown(){

    // value blew 10
    let result = timerInterator.next();
    if (!result.done){

        // current date and time calls 
        const now = new Date();

        // calculate minuts in time
        const countdownTimer = new Date(now.getTime() + (result.value*1000))
        // calculate remaining seconds in time
const remainingSeconds = differenceInSeconds (countdownTimer , now)
console.log(`the remaining Seconds :  ${remainingSeconds}`);
setTimeout(displayContdown,1000) // one second = 1000 ns

    } else {
        // Display result Countdown Complete
        console.log("Countdown Complete");
    }
}
// invoke function

displayContdown();