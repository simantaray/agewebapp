
let button= document.getElementById("add");
var m =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

button.addEventListener('click',function(){
    let day= Number(document.getElementById("day").value);
    let month= Number(document.getElementById("mon").value);
    let year= Number(document.getElementById("year").value);
    let pday= Number(document.getElementById("pday").value);
    let pmonth= Number(document.getElementById("pmon").value);
    let pyear= Number(document.getElementById("pyear").value);

   
    if(day>pday){
        pmonth = pmonth-1;
        pday=pday+m[month-1];
    }
    if(month>pmonth){
        pyear=pyear-1;
        pmonth=pmonth+12;
    }

    document.getElementById("demo1").innerHTML = pday-day;
    document.getElementById("demo2").innerHTML = pmonth-month;
    document.getElementById("demo3").innerHTML = pyear-year;

  
});
//button.addEventListener('click',location.reload());
