
 
function showDiv() {  
  if (manifesto.style.display === "block") { 
    manifesto.style.display = "none";
    var x = document.getElementsByClassName("header_bar");
    x[0].style.height= "83%";
   titulo.style.display="none";
  } else {
    manifesto.style.display = "block";
    var x = document.getElementsByClassName("header_bar");
  	x[0].style.height= "28%";
  	titulo.style.display="block";

  }

}
function showMenu(){
  
}


 




  	