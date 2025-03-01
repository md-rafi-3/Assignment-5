

// week function
function getWeek (){
    const Weeks = ["Sun ,", "Mon ,", "Tue ,", "Wed ,", "Thu ,", "Fri ,", "Sat ,"];
    let now = new Date();
    let getWeek = now.getDay();
    const currentWeek = Weeks[getWeek];
    return currentWeek;
}
document.getElementById('week-display').innerText = getWeek();

// month function

function getMonth (){
    let now = new Date();
    let getMonth = now.getMonth();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const getCurrentMonth = months[getMonth];
    return getCurrentMonth; 

}
document.getElementById('month-display').innerText = getMonth();

// date function
function getDate (){
    let now = new Date();
    let getdate = now.getDate();

    if(getdate < 10){
        getdate= '0'+getdate;
    }
    
    return getdate;
}

document.getElementById('date-display').innerText = getDate(); 


// year function

function getYear (){
    let now = new Date();
    let getYear = now.getFullYear();
    return getYear;
}
document.getElementById('year-display').innerText = getYear();