let menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px"

function toggleMenu(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight="300px";
  }
  else{
    menuList.style.maxHeight="0px";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  let counter = 1; // Initialize the counter
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true; 
    counter++;
    if (counter > 5) {
      counter = 1; 
    }
  }, 3000);
});
