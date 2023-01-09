if(localStorage.getItem('userlogin') != 'success'){
    window.location.href = "login.html";
}
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
    console.log(GetH());
    console.log(checkinH);
    if(!workstate & (GetH()-checkinH >= 1)){
        geoFindMe();
        document.getElementById("checktime").textContent = "打卡時間(上班)" + GetTime();
        checkinH = GetH();
        workstate = true;
    }else if(GetH()-checkinH < 1){
        window.alert("錯誤的輸入\n休息時間不可低於一小時！");
    }else{
        window.alert("你目前正在上班\n請先打卡下班後再次嘗試！");
    }

}

function offwork(){
    if(workstate){
        geoFindMe();
        document.getElementById("checktime").textContent = "打卡時間(下班)" + GetTime();
        workstate = false;
    }else{
        window.alert("你目前正在休息\n請先打卡上班後再次嘗試！");
    }

}
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    function success(position) {
      const latitude  = position.coords.latitude*10000000;
      const longitude = position.coords.longitude*10000000;
  
      status.textContent = "(" + latitude + ","+ longitude + ")";
    }
  
    function error() {
      status.textContent = '無法定位';
    }
  
    if (!navigator.geolocation) {
      status.textContent = '請開啟定位';
    } else {
      status.textContent = '載入中…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}
var call1 = document.getElementById('act1');
var call2 = document.getElementById('act2');
call1?.addEventListener("click", towork);
call2?.addEventListener("click", offwork);
var workstate = false;
var checkinH = -1;