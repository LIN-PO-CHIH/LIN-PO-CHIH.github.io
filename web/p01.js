
function GetTime(time){
    const NowDate = new Date();
    const h = NowDate.getHours();
    const m = NowDate.getMinutes();
    const s = NowDate.getSeconds();
    time = h +'：'+ m +'：'+ s;
    return time;
}
function GetH(){
    const Now = new Date();
    const h = Now.getHours();
    return h;
}
function towork(){
    if(!workstate & (GetH()-checkinH >= 1)){
        document.getElementById("checktime").textContent = "打卡時間(上班)" + GetTime();
        checkinH = GetH();
        workstate = true;
    }else if(GetH()-checkinH < 1){
        window.alert("錯誤的輸入\n上班時間不可低於一小時！");
    }else{
        window.alert("你目前正在上班\n請先打卡下班後再次嘗試！");
    }

}

function offwork(){
    if(workstate){
        document.getElementById("checktime").textContent = "打卡時間(下班)" + GetTime();
        workstate = false;
    }else{
        window.alert("你目前正在休息\n請先打卡上班後再次嘗試！");
    }

}
var call1 = document.getElementById('act1');
var call2 = document.getElementById('act2');
call1?.addEventListener("click", towork);
call2?.addEventListener("click", offwork);
var workstate = false;
var checkinH = 0;