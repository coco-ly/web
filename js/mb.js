var url="./json/mb.json";
var request=new XMLHttpRequest();
request.open("get",url);
request.send(null);
request.onload=function(){
    if(request.status==200){
	    var book=JSON.parse(request.responseText);  //request.responseText
	}
	// 获取数据
	for(var i=0;i<book.length;i++){
		if(i%2==0){
			// 将数据放入模板中
			var res=template("book1",book[i]);
			// 将模板放入页面中
			document.getElementById("bookshelf").innerHTML+=res;
		}else{
		    // 将数据放入模板中 
			var res=template("book2",book[i]);
			// 将模板放入页面中
            document.getElementById("bookshelf").innerHTML+=res;
            document.getElementById("bookshelf").innerHTML+="<div style='clear:both;'></div>";
		}
			
	}
}		