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
//from interstellar
function proxy(url) {
    window.navigator.serviceWorker.register("/sw.js", {
        scope: __uv$config.prefix,
    }).then(() => {
        location.href = __uv$config.prefix +__uv$config.encodeUrl(url)
    });
    $('quikmenu').style.cssText = "display:flex;";
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