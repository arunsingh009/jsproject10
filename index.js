let x = document.getElementById("time");
function day(){
    // declaring variables 
    let day,time,hour,minute,weekday;
    // yaha pr hamne ek array banaya hai jisme se se hm weekday call kr rhe hai niche
    const weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    //ye javascript ka function hai jo hame aaj ki date lene me madad krta hai 
    const d = new Date();
    //getDay() method hame 0-6 ki values deta hai jo ki start hota hai sunday se end hota hai saturday pe
    day = d.getDay();
    //hamne yaha pe array me se call kiya hai 
    weekday = weeks[day];
    //.getHours() method hai hame hour batata hai 
    hour = d.getHours();
    //yaha pe hamne terniary operator ka use kiya hai am pm ke liye
    let ampm = hour >= 12 ? 'pm' : 'am';
    if(hour>12){
        hour = hour-12;
    }else if(hour<10){
        hour = "0"+hour;
   };
    //yaha pe .getMinute() method minute bata hai 
    minute = d.getMinutes();
    if(minute<10){
        minute="0"+minute;
    }
    x.innerHTML=`${weekday} ${hour}:${minute}:${ampm}`;
    // console.log(`day and date is ${weekday} ${hour}:${minute}:${ampm}`);

}
day();