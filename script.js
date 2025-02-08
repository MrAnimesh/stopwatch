const svgns =  "http://www.w3.org/2000/svg"
const tvHours = document.getElementById("hour")
const tvMinutes = document.getElementById("minute")
const tvSeconds = document.getElementById("second")
const tvMilis = document.getElementById("milis")
const tvLaps = document.getElementById("laps")

const secondBar = document.querySelector('.second-bar')
const minuteBar = document.querySelector('.minute-bar')
const hourBar = document.querySelector('.hour-bar')
const milisBar = document.querySelector('.milis-bar')

const btnStart = document.getElementById("start-timer")
const btnPause = document.getElementById("pause-timer")
const btnReset = document.getElementById("reset-timer")
const btnLap = document.getElementById("set-lap")

let hours = seconds = minutes = milis = 0
let flag = false
let lapItems = ""
let lapCount = 0

function startTimer(){
    if(flag){
        milis+=1
        tvMilis.innerText = milis
        let milisD = ((milis / 100)*360) + 90
        milisBar.style.transform = `rotate(${milisD}deg)`
        
        if (milis == 100){
            milis = 0
            seconds+=1
            tvSeconds.innerText = seconds
            let secD = ((seconds / 60)*360) + 90
            secondBar.style.transform = `rotate(${secD}deg)`
        }
        if(seconds == 60){
            seconds = 0
            minutes+=1
            tvMinutes.innerText = minutes
            let secD = ((minutes / 60)*360) + 90
            minuteBar.style.transform = `rotate(${secD}deg)`
        }
        if(minutes == 60){
            minutes = 0
            hours +=1
            tvHours.innerText = hours
            let secD = ((hours / 60)*360) + 90
            hourBar.style.transform = `rotate(${secD}deg)`
        }

        setTimeout(startTimer,10)
        
    }
}

btnStart.addEventListener("click", ()=>{
    flag = true
    startTimer()
    btnStart.disabled = true
})
btnPause.addEventListener("click", ()=>{
    flag = false
    btnStart.disabled = false
    
})

btnReset.addEventListener("click", ()=>{
    flag = false
    hours = seconds = minutes = milis = 0
    tvMilis.innerText = "00"
    tvSeconds.innerText = "00"
    tvMinutes.innerText = "00"
    tvHours.innerText = "00"
    btnStart.disabled = false
    lapItems = ""
    tvLaps.innerHTML = ""
    lapCount = 0
    secondBar.style.transform = `rotate(90deg)`
    milisBar.style.transform = `rotate(90deg)`
    minuteBar.style.transform = `rotate(90deg)`
    hourBar.style.transform = `rotate(90deg)`
})

btnLap.addEventListener("click", ()=>{
    lapCount+=1
    console.log("clicked")
    lapItems+= `
    <hr size="1" width="100%"></hr>
    <li class="lap-list">
        <h3>Lap ${lapCount}</h3>
        <h3>${hours} :: ${minutes} :: ${seconds} :: ${milis}</h3>
    </li>
    `
    tvLaps.innerHTML = lapItems

})








// let line = 0

// function startbar(){
//     line = document.createElementNS(svgns, "line");
//     line.setAttribute("x1","70");
//     line.setAttribute("y1","70");
//     line.setAttribute("x2","70");
//     line.setAttribute("y2","1");
//     line.setAttribute("stroke","red");
//     line.setAttribute("stroke-width","3");
//     line.setAttribute("rotate","360")
//     document.getElementById("bar-container").appendChild(line);
// }
  // line.setAttribute("transform","translate("+1+","+milis+")");
        // line.setAttribute("y2",milis.toString())