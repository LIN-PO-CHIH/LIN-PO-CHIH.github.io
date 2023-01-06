if(localStorage.getItem('userlogin') != 'success'){
    window.location.href = "login.html";
}
var call1 = document.getElementById('act1');
var call2 = document.getElementById('act2');
call1?.addEventListener("click", send);
call2?.addEventListener("click", clr);
function send(){
    window.confirm("資料送出？");
}
function clr(){
    location.reload();
}