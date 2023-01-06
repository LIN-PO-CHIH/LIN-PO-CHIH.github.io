if(localStorage.getItem('userlogin') != 'success'){
    window.location.href = "login.html";
}
function previewFile() {
    const content = document.querySelector('.outputbox');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      content.innerText = reader.result;
    }, false);
  
    if (file) {
      reader.readAsText("txtfile.txt");
    }
  }