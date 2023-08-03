//settings

function saveSettings(){
    tabtext = $("tabtext").value;
    favicon = $("favicon").value;
    window.localStorage.setItem('name', tabtext);
    window.localStorage.setItem('icon', favicon);
    resetPage();
}

function setDefault(){
    window.localStorage.setItem('name', "My Drive - Google Drive");
    window.localStorage.setItem('icon', "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
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