//menu
function openMenu(id) {
    $(id).style.left = "0";
}

function closeMenu(id) {
    $(id).style.left = "100%";
}

//quikmenu
function fullscreen(){
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        $('fs').innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        document.exitFullscreen();
        $('fs').innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
}