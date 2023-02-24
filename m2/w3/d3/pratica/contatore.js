
    var i = (sessionStorage.getItem("count")) ? sessionStorage.getItem("count") : 0;
    setInterval(conta, 1000);
    function conta(){
        i++;
        document.querySelector(".timer").innerHTML = i + " secondi di sessione aperta";
        sessionStorage.setItem("count", i);
    }
