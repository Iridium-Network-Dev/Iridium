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