function getTime (){
    let now = new Date();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let amPm;
    let secound = now.getSeconds();
    

    if(hours > 12){
        hours = hours-12;
    }

    if(hours === 0){
        hours=12;
    }

    if(hours < 10){
        hours='0'+hours;
    }

    if(minute < 10){
        minute='0'+minute;
    }

    if(hours>=12){
        amPm='PM'
    }
    else {
        amPm = 'AM'
    }
    
    const finalTime = hours +':'+minute+':'+secound +' '+amPm;
    return finalTime;
}
const result = getHour();
console.log(result)