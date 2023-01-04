
function ShowTime(){
    var NowDate = new Date();
    var yy = NowDate.getFullYear();
    var mm = NowDate.getMonth()+1;
    var dd = NowDate.getDate();
    var h = NowDate.getHours();
    var m = NowDate.getMinutes();
    var s = NowDate.getSeconds();
        document.getElementById('showbox1').innerHTML = yy+"年"+timetab(mm)+mm+"月"+timetab(dd)+dd+"日";
   
        document.getElementById('showbox2').innerHTML = timetab(h)+h+" 時 "+timetab(m)+m+" 分 "+timetab(s)+s+" 秒 ";
    setTimeout('ShowTime()',1000);
}
function timetab(num){
    var tab;
    if(num < 10){
        tab = "0";
    }else{
        tab = "";
    }
    return tab;
}