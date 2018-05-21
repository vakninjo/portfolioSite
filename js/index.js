$(document).ready(function(){
    $(".logoImg").on("click", function(){
      let logo = document.getElementsByClassName("logoImg");
      document.location.href = "http://pentestjo.info/index.html";
    });
});

// console.log(logo);
// logo.onclick = window.location.replace("http://www.pentestjo.info/");
// logo.addEventListener("click", function(){ window.location.replace("http://www.pentestjo.info/")});
// logo.onclick="redirect()";
//
// function redirect() {
//   alert("clicked");
//
// }

// addEvent(logo, "click", function(){ alert("clicked")});
