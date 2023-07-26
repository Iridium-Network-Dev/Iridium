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

$('quikform').addEventListener("submit", async (event) => {
    event.preventDefault();
    alert($('quikinput').value);
    proxy($('quikinput').value);
});