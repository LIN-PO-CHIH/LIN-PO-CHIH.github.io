if(localStorage.getItem('userlogin') != 'success'){
    window.location.href = "login.html";
}
var uploadimg = document.getElementById("uploadImage");
var upload = document.getElementById("upload");
uploadimg.addEventListener("change",handlefile);
upload?.addEventListener("click", send);
var data_item = "",data_img = "";
var sender = 0;

function send(){
    if(data_item != "" & data_img != ""){
        window.confirm("資料送出？");
        location.reload(); 
    }else if(data_item == ""){
        window.confirm("貨項不可為空！");
    }else if(data_img == ""){
        window.confirm("相片不可為空！");
    }  
}
function select(){
    var choice = document.getElementById("dropdown03").value;
    if(choice != ""){
        document.getElementById("sele").innerHTML = "請上傳"+choice+"的發票、明細";
    }else{
        document.getElementById("sele").innerHTML = "";             
    }
    data_item = choice;
}
function handlefile(){
    var filelist = this.files;
    data_img = filelist;
    readURL(this)
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
