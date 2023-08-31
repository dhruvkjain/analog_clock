let hr = document.getElementsByClassName("hr")[0];
let min = document.getElementsByClassName("min")[0];
let sec = document.getElementsByClassName("sec")[0];

setInterval(()=>{
    let day = new  Date();
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
