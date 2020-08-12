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
var textFirstline=document.getElementsByClassName("search-changePage-text");
for(let i=0;i<textFirstline.length;i++){
	textFirstline[i].onclick=function(){
		for(let j=0;j<textFirstline.length;j++){
			textFirstline[j].style.fontSize="0.3rem";
			textFirstline[j].style.fontWeight="500";
		}
		textFirstline[i].style.fontSize="0.4rem";
		textFirstline[i].style.fontWeight="600";
	};
}