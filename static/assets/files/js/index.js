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

//games and apps
var searchag;
function agSwap(ag){
    apps = $('apps');
    games = $('games');
    if(ag == "g"){
        games.style.cssText = "display: initial;";
        apps.style.cssText = "display: none;";
    }
    else if(ag == "a"){
        apps.style.cssText = "display: initial;";
        games.style.cssText = "display: none;";
    }
}

function filter(){
    if($('apps').style.cssText == 'display: initial;'){
        container = document.getElementById('apps');
    }
    if($('games').style.cssText == 'display: initial;'){
        container = document.getElementById('games');
    }
    var input, filter, container, button, p, i, txtValue;
    input = document.getElementById("agsearch");
    filter = input.value.toUpperCase();
    button = container.getElementsByTagName("button");
    for (i = 0; i < button.length; i++) {
        p = button[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            button[i].style.display = "";
        } else {
            button[i].style.display = "none";
        }
    }
}

//settings

function save(){
    name = $("tabtext").value;
    icon = $("favicon").value;
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('icon', favicon);
    reset();
}

function setDefault(){
    window.localStorage.setItem('name', "My Drive - Google Drive");
    window.localStorage.setItem('icon', "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
    window.location.href = window.location;
    reset();
}
function reset(){
    var currentUrl = window.location.href;
    var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '');
    if (window != top) {
        top.location.href = mainDomainUrl;
    } else {
        window.location.href = mainDomainUrl;
    }   
}