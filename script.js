let hr = document.getElementsByClassName("hr")[0];
let min = document.getElementsByClassName("min")[0];
let sec = document.getElementsByClassName("sec")[0];
let th_time = document.getElementsByClassName("th_time")[0];
let tm_time = document.getElementsByClassName("tm_time")[0];
let ts_time = document.getElementsByClassName("ts_time")[0];
let tt_day = document.getElementsByClassName("tt_day")[0];
let tt_date = document.getElementsByClassName("tt_date")[0];
let tt_mon = document.getElementsByClassName("tt_mon")[0];


setInterval(()=>{
    let day = new Date();

    let date = day.getDate();
    let mon = day.getMonth(); 
    let hr1 =day.getHours();
    let min1 =day.getMinutes();
    let sec1 =day.getSeconds();
    let wday =day.getDay();

    if(hr1 > 12){
        if(hr1<22){
            th_time.textContent = "0"+(hr1-12);
        }
        else{
            th_time.textContent = hr1-12;
        }
    }
    else{
        th_time.textContent = hr1;   
    }
    tm_time.textContent = min1;
    ts_time.textContent = sec1;
    
    tt_date.textContent = date+",";

    switch(mon)
    {
    case 0:
    {tt_mon.textContent = "JAN";;break;}
    case 1:
    {tt_mon.textContent = "FEB";;break;}
    case 2:
    {tt_mon.textContent = "MAR";;break;}
    case 3:
    {tt_mon.textContent = "APR";;break;}
    case 4:
    {tt_mon.textContent = "MAY";;break;}
    case 5:
    {tt_mon.textContent = "JUN";;break;}
    case 6:
    {tt_mon.textContent = "JUL";;break;}
    case 7:
    {tt_mon.textContent = "AUG";;break;}
    case 8:
    {tt_mon.textContent = "SEP";;break;}
    case 9:
    {tt_mon.textContent = "OCT";;break;}
    case 10:
    {tt_mon.textContent = "NOV";;break;}
    case 11:
    {tt_mon.textContent = "DEC";;break;}
    default :
    {tt_mon.textContent = "MONTH";break;}
    }


    switch(wday)
    {
    case 0:
    {tt_day.textContent = "SUNDAY";break;}
    case 1:
    {tt_day.textContent = "MONDAY";break;}
    case 2:
    {tt_day.textContent = "TUESDAY";break;}
    case 3:
    {tt_day.textContent = "WEDNESDAY";break;}
    case 4:
    {tt_day.textContent = "THURSDAY";break;}
    case 5:
    {tt_day.textContent = "FRIDAY";break;}
    case 6:
    {tt_day.textContent = "SATURDAY";break;}
    default :
    {tt_day.textContent = "DAY";break;}
    }

    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;
    console.log(hh);
    console.log(mm);
    console.log(ss);
    hr.style.transform = "rotateZ("+((hh+(mm/12))-180)+"deg)";
    min.style.transform = "rotateZ("+(mm-180)+"deg)";
    sec.style.transform = "rotateZ("+ss+"deg)";
})
