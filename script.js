function showTime(){
    const current = new Date();
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
       console.log(time);
       document.getElementById("clock").innerText = time
}

let interval = setInterval(showTime,1000)

button.addEventListener("click", ()=>{
    clearInterval(interval);          //upon clicking the timer would stop.
});