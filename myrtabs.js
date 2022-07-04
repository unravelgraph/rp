function openMyrTab(myrtabname) {
  var i;
  var x = document.getElementsByClassName("myrtab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(myrtabname).style.display = "block";
}
