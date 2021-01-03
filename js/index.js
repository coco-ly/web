var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
}
function check(){
    if(document.cookie.indexOf("username")==-1){
    alert("首次打开,请注册！");
    window.location.href="zc.html";
}else{
    document.getElementById("nav1").innerHTML="<pre>欢迎您,"+getCookie("username")+"          </pre>";
}
}
