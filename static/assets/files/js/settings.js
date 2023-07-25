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