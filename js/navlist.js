function loadNavList()
{
   var list = ["Future Students", "Current Students", "Staff", "Login"];
   var node = document.getElementById("nav1");
   var str = "";
   for(var i=0; i < list.length; ++i)
   {
     str += "<a href=''>" + list[i] + "</a><br/>";
   }
   node.innerHTML = str;
}

loadNavList();
