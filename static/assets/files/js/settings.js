//settings

window.onload = () => {
    $("tabtext").value = window.localStorage.getItem('name');
    $("favicon").value = window.localStorage.getItem('icon');

    if(window.localStorage.getItem('fs?').includes('checked')){
        $('fullscreenswitch').innerHtml = "<input type='checkbox' checked><span class='slider round'></span>";
    }
    else{
        $('fullscreenswitch').innerHtml = "<input type='checkbox'><span class='slider round'></span>";
    }
};

function settingSwitch(id){
    var switch1 = $(id).innerHTML;
    if(switch1.includes("checked")){
        alert();
        switch1 = "<input type='checkbox'><span class='slider round'></span>";
    }
    else{
        alert();
        switch1 = "<input type='checkbox' checked><span class='slider round'></span>";
    }
}

function saveSettings(){
    tabtext = $("tabtext").value;
    favicon = $("favicon").value;
    fs = $('fullscreenswitch').innerHtml;
    window.localStorage.setItem('name', tabtext);
    window.localStorage.setItem('icon', favicon);
    window.localStorage.setItem('fs?', fs);
    resetPage();
}

function setDefault(){
    window.localStorage.setItem('name', "My Drive - Google Drive");
    window.localStorage.setItem('icon', "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
    window.localStorage.setItem('fs?', "<input type='checkbox'><span class='slider round'></span>")
    window.location.href = window.location;
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