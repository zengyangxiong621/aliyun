/*
	对右侧固定栏区域的隐藏区域进行操作：
	点击"x"图标可以退出隐藏栏
*/
// 获取"x"节点
var del=document.getElementById("del");
// 获取隐藏区域节点
var hiddenArea=document.getElementsByClassName("xiaoyun-panle-box");
// 获取右侧固定区域的节点
var area=document.getElementsByClassName("entry-button-wrap-link");
// //绑定节点的点击函数
del.onclick=function(){
	hiddenArea[0].style.opacity="0";
};
function entryBlock(){
	hiddenArea[0].style.opacity="1";
}
