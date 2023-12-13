function ad(){
    if(window.localStorage.getItem("q") == null){
        alert('If you want to display a message whenever this link loads for once, please go to link+"/ad.html" for more info.');
        if(Math.floor(Math.random() * 8) == 0){
            window.localStorage.setItem("q", "yes")
        }
    }
}