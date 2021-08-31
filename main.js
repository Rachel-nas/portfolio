// window.addEventListener('scroll', function (e) {
//   this.console.log(document.documentElement.scrollTop);
// });

window.onscroll = function () {
  if (document.documentElement.scrollTop > 3) {
    document.getElementById("navbar").style.background = "white";
  }
  else {
    document.getElementById("navbar").style.background = "#11ffee00";
  }
}