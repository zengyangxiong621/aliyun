// 获取设备宽度,计算rem和px的值
(function () {
	function resizeBaseFontSize() {
		var rootHtml = document.documentElement,
			deviceWidth = rootHtml.clientWidth;
			// if( deviceWidth > 320) {
				if (deviceWidth >= 1080 ) {
					deviceWidth = 1080;
				}
				rootHtml.style.fontSize = deviceWidth /18.75 + "px";
			// }
			// if(deviceWidth<=320){
			// 	deviceWidth=540;
			// 	rootHtml.style.fontSize = "17.06667px";
			// }
	}
	resizeBaseFontSize();
	window.addEventListener("resize", resizeBaseFontSize, false);
	window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();

