// 获取设备宽度,计算rem和px的值
(function () {
	function resizeBaseFontSize() {
		var rootHtml = document.documentElement,
			deviceWidth = rootHtml.clientWidth;
		if (deviceWidth > 720) {
			deviceWidth = 720;
		}
		rootHtml.style.fontSize = deviceWidth /7.2 + "px";
	}
	resizeBaseFontSize();
	window.addEventListener("resize", resizeBaseFontSize, false);
	window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();

//获取四个文本节点--事件1：点击第一行内容文字，文字变大、页面跳转
let textFirstline=document.getElementsByClassName("search-changePage-text");
console.log(textFirstline.length);
let jump=document.getElementsByClassName("jump_page");


//获取节点--事件3：点击“我的”板块的广场、动态下的滚动条会来回滚动
let rollBar=document.getElementsByClassName("adv-sweeep-cloudvillage-news-roll");
let ground=document.getElementsByClassName("ground");
let news=document.getElementsByClassName("news");
let ground_container=document.getElementsByClassName("adv-sweeep-cloudvillage-ground");
let dynamic_container=document.getElementsByClassName("adv-sweeep-cloudvillage-dynamic");



//事件1：点击第一行内容文字，文字变大、页面跳转
for(let i=0;i<textFirstline.length;i++){
	textFirstline[i].onclick=function(){
		for(let j=0;j<textFirstline.length;j++){
			textFirstline[j].style.fontSize="0.3rem";
			textFirstline[j].style.fontWeight="500";
			jump[j].style.display="none";
		}
		textFirstline[i].style.fontSize="0.4rem";
		textFirstline[i].style.fontWeight="600";
		jump[i].style.display="block";
	};
}

// 事件2：点击播放

//事件3：点击“我的”板块的广场、动态下的滚动条会来回滚动
ground[0].onclick=function(){
	rollBar[0].style.transform='translate(0,0)';
	dynamic_container[0].style.display="none";
	ground_container[0].style.display="block"
};
news[0].onclick=function(){
	rollBar[0].style.transform='translate(2.89rem,0)';
	dynamic_container[0].style.display="block";
	ground_container[0].style.display="none"	
};