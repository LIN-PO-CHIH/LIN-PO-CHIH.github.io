if(localStorage.getItem('userlogin') != 'success'){
    window.location.href = "login.html";
}
var uploadimg = document.getElementById("uploadImage");
var upload = document.getElementById("upload");
uploadimg.addEventListener("change",handlefile);
upload?.addEventListener("click", send);
var data_apply = "";
var data_item = "",data_img = "";
var sender = 0;

function send(){
    var upapply = document.getElementById("apply").value;
    data_apply = upapply;
    if(data_item != "" & data_apply != "" & data_img != ""){
        window.confirm("申請類型："+data_item+"\n申請金額："+data_apply+"元\n資料送出？");
        location.reload(); 
    }else if(data_item == ""){
        window.confirm("申請類型不可為空！");
    }else if(data_apply == ""){
        window.confirm("申請金額不可為空！");
    }else if(data_img == ""){
        window.confirm("統編發票不可為空！");
    }
}
function findselect(){
    var selected = document.querySelector("input[name='location']:checked").value;
    data_item = selected;
    console.log(selected);
}
function select(){
    var choice = document.querySelectorAll("input[name='location']");
    choice.forEach(radioBtn =>{
        radioBtn.addEventListener("change",findselect);
    });
}
function handlefile(){
    var filelist = this.files;
    data_img = filelist;
    readURL(this);
}
function readURL(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("preview").src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}