if(localStorage.getItem('userlogin') != 'success' & localStorage.getItem('userlogin') != 'advanced'){
    window.location.href = "login.html";
}else if(localStorage.getItem('userlogin') != 'advanced'){
        alert("非常抱歉\n本功能尚未開放");
        window.history.back(-1);
}