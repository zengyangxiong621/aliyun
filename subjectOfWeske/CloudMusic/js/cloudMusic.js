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
//事件1：点击第一行内容文字，文字变大
//获取四个文本节点
let textFirstline=document.getElementsByClassName("search-changePage-text");
console.log(textFirstline.length);
let jump=document.getElementsByClassName("jump_page");
console.log(jump.length);
for(let i=0;i<2;i++){
	textFirstline[i].onclick=function(){
		for(let j=0;j<2;j++){
			textFirstline[j].style.fontSize="0.3rem";
			textFirstline[j].style.fontWeight="500";
			jump[j].style.display="none";
		}
		textFirstline[i].style.fontSize="0.4rem";
		textFirstline[i].style.fontWeight="600";
		jump[i].style.display="block";
	};
}

// 事件2:点击第一行内容文字,页面跳转
