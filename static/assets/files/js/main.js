function $(id){
    return document.getElementById(id);
}
//menu
function openMenu(id) {
    $(id).style.left = "0";
}

function closeMenu(id) {
    $(id).style.left = "100%";
}

function iframe(src){
    $('main-content').style.cssText = "display: none;";
    $('quikmenu').style.cssText = "display:flex;";
    $('iframe').style.cssText = "display: initial;";
    $('iframe').src = src;
}

//from interstellar
function proxy(url) {
    window.navigator.serviceWorker.register("/sw.js", {
        scope: __uv$config.prefix,
    }).then(() => {
        iframe(__uv$config.prefix +__uv$config.encodeUrl(url));
    });
}

function fullscreen(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        $('fs').innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        document.exitFullscreen();
        $('fs').innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
}

//clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();