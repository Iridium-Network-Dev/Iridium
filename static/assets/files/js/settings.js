//settings

window.onload = () => {
    isfs = window.localStorage.getItem('fs?')
    $("tabtext").value = window.localStorage.getItem('name');
    $("favicon").value = window.localStorage.getItem('icon');
    $('fullscreenswitch').checked = isfs;
};

$("fullscreenswitch").addEventListener( "click", () => {
    var theSwitch = $("fullscreenswitch");
    if(theSwitch.checked){
        theSwitch.checked = false;
    }
    else{
        theSwitch.checked = true;
    }
 });

function saveSettings(){
    tabtext = $("tabtext").value;
    favicon = $("favicon").value;
    fs = $('fullscreenswitch').checked;
    alert(fs);
    window.localStorage.setItem('name', tabtext);
    window.localStorage.setItem('icon', favicon);
    window.localStorage.setItem('fs?', fs);
    resetPage();
}

function setDefault(){
    window.localStorage.setItem('name', "My Drive - Google Drive");
    window.localStorage.setItem('icon', "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
    window.localStorage.setItem('fs?', false);
    resetPage();
}

function resetPage(){
    var currentUrl = window.location.href;
    var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '');
    if (window != top) {
        top.location.href = mainDomainUrl;
    } else {
        window.location.href = mainDomainUrl;
    }   
}