// 点击账号密码登录,切换页面
// 获取节点
let src_click=document.getElementsByClassName("register-body-rightinfo-sub-title");
let src_hidden=document.getElementsByClassName("register-body-rightinfo-src");
let src_sweep=document.getElementsByClassName("register-body-rightinfo-main-title");
// 为其绑定单击响应函数
src_click[0].onclick=function(){
	src_hidden[0].style.display="block";
};
src_sweep[0].onclick=function(){
	src_hidden[0].style.display="none";
};