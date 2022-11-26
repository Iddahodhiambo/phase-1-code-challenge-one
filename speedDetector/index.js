function iinvokeSpeedDetector(speed) { 
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
    let points = speedAbove70/5;
    if(points > 12) {
        console.log ("License suspended");
    }else{
        console.log(`Points: ${points}`)
    }
    
}


iinvokeSpeedDetector(1000);