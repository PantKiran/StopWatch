let hr= 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;



function start() {
timer = true;
Stopwatch();
   
}

function stop(){
timer = false;
}

function reset(){
timer = false;
hr = 0;
min = 0;
sec = 0;
count =0;

        document.getElementById("count").innerHTML =  "00"
        document.getElementById("sec").innerHTML =  "00"
        document.getElementById("min").innerHTML =  "00"
        document.getElementById("hr").innerHTML = "00"


}
 
function Stopwatch(){
    if(timer==true){
        count = count+1;
        if (count == 100) {
            sec= sec+1;
            count=0;
        }
        if(sec==60){
            min= min+1;
            sec=0;
        }
        if(min==60){
            hr= hr+1;
            min=0;
            sec=0;
        }
        let HrString = hr;
        let MinString = min;
        let SecString = sec;
        let CountString = count;
        
        if(hr<10){
            HrString= "0"+ HrString;
        }

        if(min<10){
            MinString= "0"+ MinString;
        }

        if(sec<10){
            SecString= "0"+ SecString;
        }

        if(count<10){
            CountString= "0"+ CountString;
        }

        document.getElementById("count").innerHTML = CountString;
        document.getElementById("sec").innerHTML = SecString;
        document.getElementById("min").innerHTML = MinString;
        document.getElementById("hr").innerHTML = HrString;


        setTimeout(Stopwatch, 10);
    }

}