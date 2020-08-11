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

 /*
 回到顶部提示的隐藏栏 
 需求：
 垂直滚动条下滑到一定程度时将隐藏的点击回到顶部提示区域显示
 点击回到顶部区域滚动条回到页面顶部，并且重新隐藏
 */

// 1.下滑滚动条显示隐藏的区域
// 获取隐藏区域
var toTop=document.getElementById("return-to-top");
// 在元素滚动条在滚动时触发
window.onscroll=function(){
	//兼容浏览器问题
	var scrolltop=document.documentElement.scrollTop?
	document.documentElement.scrollTop:document.body.scrollTop;
	if(scrolltop>500){
		toTop.style.display="block";
	}
	else{
		toTop.style.display="none";
	}
};
// 2.如果显示了隐藏的区域,点击后向上回滚
var id;
toTop.onclick=function(){
	// 使用间隔函数,点击隐藏区域并不是闪现到顶部,而是过渡到顶部
	id=setInterval(function(){
		//取得当前滚动的距离
		var current=document.documentElement.scrollTop?
		document.documentElement.scrollTop:
		document.body.scrollTop;
		//滚动距离为0时，清楚该间隔函数id
		if(current===0){
			clearInterval(id);
		}
		// 过渡
		document.documentElement.scrollTop=current-100;
		document.body.scrollTop=current-100;
	},16);
	//在回滚到顶部的过程中，如果用户手动滚动鼠标滚轮强行终止顶部回滚，则还需要实现一个步骤
	window.onmousewheel=function(){
		clearInterval(id);
	}
};

// 以下为附加内容js
// 点击搜索框上方的四个检索词变色
// 获取节点
var conText=document.getElementsByClassName("content1-text");
var search=document.getElementById("search");
// console.log(typeof(conText[0]));
// 为其绑定点击响应函数
for(let i=0;i<conText.length;i++){
	conText[i].onclick=function(){
	for(let j=0;j<conText.length;j++){
		conText[j].style.backgroundColor="white";
		conText[j].style.color="black";
	}
	// 点击搜索框上方检索词,搜索框的内容相应变更
	// switch(true){
	// 	case conText[0]:
	// 	conText[0].style.backgroundColor="#ff6a00";
	// 	conText[0].style.color="#fff";
	// 	search.placeHolder="全民加速节";
	// 	break;
	// 	case conText[1]:
	// 	conText[1].style.backgroundColor="#ff6a00";
	// 	conText[1].style.color="#fff";
	// 	search.placeHolder="请输入你想要找的域名";
	// 	break;
	// 	case conText[2]:
	// 	conText[2].style.backgroundColor="#ff6a00";
	// 	conText[2].style.color="#fff";
	// 	search.placeHolder="请输入你想要找的商标";
	// 	break;
	// 	case conText[3]:
	// 	conText[3].style.backgroundColor="#ff6a00";
	// 	conText[3].style.color="#fff";
	// 	search.placeholder="请输入你想要找的公司";
	// 	break;
	// 	default:
	// 	break;
	// 	}
	
	// conText[i].style.backgroundColor="#ff6a00";
	// conText[i].style.color="#fff";	
	}
}


