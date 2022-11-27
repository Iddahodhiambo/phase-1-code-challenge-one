function iinvokeSpeedDetector(speed) { 
    //this is a function to invoke speed
    if (speed < 0) {
        console.log ("not correct");
    }
    else if(speed >=0 && speed <= 70) {
        console.log("Ok");
    }else {
        speedDetector(speed - 70);
    }
}

function speedDetector(speedAbove70) {
    // function calculates the points one gets when speed is above 70
    let points = speedAbove70/5;
    if(points > 12) {
        console.log ("License suspended");
    }else{
        console.log(`Points: ${points}`)
    }
    
}


iinvokeSpeedDetector(1000);//invoking speedDetector function by running a speed of 1000