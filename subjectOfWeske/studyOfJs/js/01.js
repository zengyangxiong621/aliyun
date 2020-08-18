var test01=function(){
	let a=NaN;
	let b=Boolean(a);
	 // console.log(b);
	 console.log(isNaN("true"));
}
// test01();

var test02=function(){
	for(var a in window){
		document.write(a);
	}
}
// test02();

var test03=function(){
	let num=0;
	for(let i=1;i<10;i++){
		if(i%5==0){
			continue;
		}
		num++;
	}
	console.log(num);
}
// test03();

var test04=function(){
	for(let i=0;i<100;i++){
		switch(i){
			case 25:
			console.log("25");
			break;
		case 35:
			console.log(35);
			break;
		case 45:
			console.log(45);
			break;
		case 55:
			console.log(55);
			break;
		case 65:
			console.log(65);
			break;
		case 75:
			console.log(75);
			break;
		case 85:
			console.log(85);
			break;
		default:
		console.log("没了")
		}
	}
}
// test04();

// 判断语句的另外一种写法‘
var test05=function(){
	let a=45;
		switch(true){
			case 10:
			console.log("10");
			break;
			case 20:
			console.log("20");
			break;
			case 30:
			console.log("30");
			break;
			case 40:
			console.log("40");
			break;
			default:
			console.log("淦");
		}
}
// test05();
//获悉传进方法的参数个数，可以变相完成方法的重载
var test06=function(){
	console.log(arguments.length);
}
test06(0,12,1,21,21,);
