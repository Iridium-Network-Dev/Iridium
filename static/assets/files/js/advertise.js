function ad(){
    var num = Math.floor(Math.random() * 8);
    if(window.localStorage.getItem("ad?") == null){
        alert('If you want to display a message whenever this link loads for once, please go to link+"/ad.html" for more info.');
        if(num == 0){
            window.localStorage.setItem("ad?", "yes");
        }
    }
}