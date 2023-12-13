function ad(){
    if(window.localStorage.getItem("test") == null){
        alert('If you want to display a message whenever this link loads for once, please go to link+"/ad.html" for more info.');
        window.localStorage.setItem("test", "yes")
    }
}