var one=document.getElementById("one");
var two=document.getElementById("two");

one.onclick=function(){
	alert("我是one");
};

two.onclick=function(){
	alert("我是two");
};

document.body.onclick=function(){
	alert("我是body");
};