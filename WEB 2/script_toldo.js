

function showDiv() {
  if (manifesto.style.display === "block") {
    manifesto.style.display = "none";
    var x = document.getElementsByClassName("header_bar");
    x[0].style.height= "100%";
   titulo.style.display="none";
   var check =0;
  } else {
    manifesto.style.display = "block";
    var x = document.getElementsByClassName("header_bar");
  	x[0].style.height= "29%";
  	titulo.style.display="block";
    var check =1;

  }

}
function showMenu(){
    var y = document.getElementsByClassName("menu_div");
    if (y[0].style.display==="block") {
      y[0].style.display="none";
    }else {
      y[0].style.display="block";
    }
    
    }
