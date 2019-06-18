var now = new Date();
var firstday = new Date("2017-11-30");
var toNow = now.getTime();      //현재시간 밀리초 변환
var toFirst = firstday.getTime();   //기준시간 밀리초 변환
var dateSave = [1, 100, 200, 300, 365, 400, 500];
var PassedTime = toNow - toFirst;   
var PassedDay = Math.round(PassedTime/(1000*60*60*24));

document.querySelector("#accent").innerText = PassedDay + "일";

function calcDate(days){
    var future = toFirst + days * (1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate()-1;

  document.querySelector("#date"+days).innerText = year +"년     "+ month + "월 " + date + "일";
}
for(var i = 0; i < dateSave.length; i++) {
    calcDate(dateSave[i]);
}