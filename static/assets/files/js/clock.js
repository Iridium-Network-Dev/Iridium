//clock
function showTime(){
    var d = new Date();
    var h = d.getHours(); // 0 - 23
    var m = d.getMinutes(); // 0 - 59
    var s = d.getSeconds(); // 0 - 59
    var day = d.getDay();
    var date = d.getUTCMonth() + 1 + "/" + d.getUTCDate() + "/" + d.getUTCFullYear();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    switch(day){
        case 1:
            day = "Mon";
            break;

        case 2:
            day = "Tue";
            break;
        
        case 3:
            day = "Wen";
            break;

        case 4:
            day = "Thurs";
            break;
        
        case 5:
            day = "Fri";
            break;

        case 6:
            day = "Sat";
            break;
        
        case 7:
            day = "Sun";
            break;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = day + " | " + date + " | " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}