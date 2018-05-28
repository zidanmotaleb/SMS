function loadNavBar()
{
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status == 200) {
      var el = document.getElementById("header");
      if (el) {
        el.innerHTML = xhr.responseText;
      }
      //window.alert(xhr.responseText);
    }
  };
  xhr.open("get", "header.txt", true);
  xhr.send();
}
loadNavBar();
