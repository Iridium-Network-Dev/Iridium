window.onload = () => {
    showTime();

    /*$('text').textContent = text[Math.round(Math.random()*(text.length-1))];

    if(Math.round(Math.random()*1000000) == 1) {
        $('text').textContent = secret;
    }*/

    $("tabtext").value = window.localStorage.getItem('name');
    $("favicon").value = window.localStorage.getItem('icon');
}

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
    $('body').style.cssText = "background-color: transparent;";
    $('iframe').src = src;
}

async function registerSW() {
	if (!("serviceWorker" in navigator)) return;
	const workerURL = "/uv.sw-handler.js";
	const worker = await navigator.serviceWorker.getRegistration(workerURL);
	if(worker) return worker;
	return navigator.serviceWorker.register(workerURL, { scope: __uv$config.prefix });
}

registerSW();


function go(url){
    if (!isUrl(url)){
        searchurl(url); 
    } 
    else {
		if (!(url.startsWith("https://") || url.startsWith("http://"))){
             url = "http://" + url
        }
		proxy(url)
	}
}

function searchurl(url) {
	proxy(`https://www.google.com/search?q=${url}`)
}

function proxy(url) {
    registerSW().then(() => {
        iframe(__uv$config.prefix +__uv$config.encodeUrl(url));
    });
}

function isUrl(val = "") {
	if (/^http(s?):\/\//.test(val) || val.includes(".") && val.substr(0, 1) !== " ") return true;
	return false;
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

//text
/*text = ["Welcome to Iridium!",
 "A Simple and Light Weight Proxy",
 "Recommend games and/or apps in our Discord!",
 "Deployment tutorial in our Discord!",
 "1+1=2",
 "There is a 1/1,000,000 chance of seeing where the creator of Iridium lives.",
 "Recommend more texts in our Discord!",
 "Share with your friends!",
 "This uses Ultraviolet",
 "Go to our Github repository!",
 "69420 lines of code!!!",
 "Dee snuts",
 "Never trust white text!",
 "Pay attention to ur class!",
 "No playing games."
]

//Hey!!! No peeking!!!
secret = "He lives in Austin, Texas!!!";*/
