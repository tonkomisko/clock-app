const cHour = document.getElementById('clock-hour');
const cMinute = document.getElementById('clock-minute');
const cSecond = document.getElementById('clock-second');
const cDay = document.getElementById('day-of-the-week');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
const options = {weekday: 'long'};
let degrees = 6;
let currentHour;
let currentMinute;
let currentSecond;

//write a function to replace the inner html of the elements every second



function writeTime() {
    currentDate = new Date();
    
   

    currentHour = currentDate.getHours();
    currentMinute = Math.floor((currentDate / 1000)/60)%60;
    currentSecond = Math.floor((currentDate / 1000)%60);
    currentDay = (new Intl.DateTimeFormat('en-US', options).format(currentDate));
    ;
  
    cDay.innerHTML = whichDay(currentDay)
    
    cHour.innerHTML = addZero(currentHour);
    cMinute.innerHTML = addZero(currentMinute);
    cSecond.innerHTML = addZero(currentSecond);
    
    

};

setInterval(writeTime,1000)
setInterval(turnHand,1000);


function addZero(time) {
    if(time < 10){
        time = `0${time}`;
    }
    return time
}



function whichDay(day){
        if(day === 'Monday'){
            return "Pondelok"
        }
        else if 
        (day === 'Tuesday'){
            return "Utorok"
        }
        else if 
        (day === 'Wednesday'){
            return "Streda"
        }
        
        else if 
        (day === 'Thursday'){
            return "Stvrtok"
        }

        else if 
        (day === 'Friday'){
            return "Piatok"
        }

        else if 
        (day === 'Saturday'){
            return "Sobota"
        }

        else if 
        (day === 'Sunday'){
            return "Nedela"
        }
        }
    

    
function turnHand(){
    

    let hourDegrees = currentHour * 30 + 90;
    let minuteDegrees = currentMinute * degrees + 90; //added 90 degrees, since the hands are defaulted to point left 
    let secondDegrees = currentSecond * degrees + 90;
    
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`; 
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
   
}


//not needed, if we're using the const deg set to 6 above

// function addMinute() {
   
   
//     for (let i = 0; i< 60; i++){
//         degrees += 6
//         // console.log(degrees);
//         return degrees;
// }





