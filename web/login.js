const call = document.querySelector('[data-action="submit"]');
call.addEventListener("click", processFormData);
BorderStyle="0"
function processFormData(e) {

    const Num = ['1314', '6666', '8888', '9487', 'VIP0']
    // getElementsByTagName
  
    const inputElement = document.getElementsByTagName('input');
    const number = inputElement[0].value;
    const password = inputElement[1].value;

    window.confirm("公司編號： " + number + "\n登入密碼： " + password + "\n\n確認登入？")
        open("main.html");
/*
    if(number == '' || password == ''){
        window.confirm("欄位不可為空！");
    }else if(Num.indexOf(number) == -1){
        window.confirm("公司編號輸入錯誤！");
    }else{
        if(window.confirm("公司編號： " + number + "\n登入密碼： " + password + "\n\n確認登入？"))
            window.open("main.html")
    }*/
}