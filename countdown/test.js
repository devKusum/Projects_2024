const endDate = "10 June 2024 12:00 PM ";
document.getElementById("end-date").innerText=  endDate;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate);// time in milliseconds
    const now = new Date();
    const diff = (end-now)/1000 ;//converting  form  milliseconds to seconds
    //console.log(diff); diffrence between end-now in seconds..
    //   console.log(Math.floor(diff / 3600 / 24));//converting into days
     if(diff<0) return;// otherwise it will return values in (-)
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;

}
clock();
setInterval(
    ()=>{
        clock()
       
    },
    1000
)

// 1 day = 24Hrs 
// 1 hr  =  60mints 
// 60 mints = 3600 Sec 
//  millisecnds to sconds = end-date-current-date/1000
//  seconds to days       = end-date-current-date/3600sec/24Hrs
// hrs  = Math.floor(diff/3600)%24
//mints = Math.floor(diff/60)%60;

