var img11 = document.getElementById("hct");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById("box");
img1.onmouseover=function(){
    slider.style.display='block';
	img2.style.display='block';
	box.style.width = '820.5px';
}
img1.onmouseout=function(){
    slider.style.display='none';
	img2.style.display='none';
	box.style.width = '415.5px';
}
img1.onmousemove=function(ev){
	var ev=ev||event;  
	var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2; 
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight; 
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px' ;
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
}

var five = document.getElementById("five");
var six = document.getElementById("six");
five.onclick = function(){
	five.style.border = '1px solid  orange';
	six.style.border= '1px solid white';
	img11.src = "../img/pp0.jpeg";
	Bimg.src = "../img/pp0.jpeg";
}
six.onclick = function(){
	five.style.border = '1px solid  white';
	six.style.border= '1px solid orange';
	img11.src= "../img/pp1.jpeg";
	Bimg.src= "../img/pp1.jpeg";
}
//150ml 200ml
var Yi = document.getElementById("Yi");
var yi = document.getElementById("yi");
var Er = document.getElementById("Er");
var er = document.getElementById("er");
var zhuan = document.getElementById("zhuan");
Yi.onclick = function(){
	Yi.style.border = '1px solid red';
	Er.style.border = '1px solid white';
	yi.style.display = 'block';
	er.style.display = 'none';
	zhuan.innerHTML = '"150ml"';
}
Er.onclick = function(){
	Yi.style.border = '1px solid white';
	Er.style.border = '1px solid red';
	yi.style.display = 'none';
	er.style.display = 'block'; 
	zhuan.innerHTML = '"200ml"';
}
//加减操作
var jia = document.getElementById("jia");
var jian = document.getElementById("jian");
var kucun = document.getElementById("kucun");
jia.onclick = function(){
	if(kucun.value == 5){
		jia.style.cursor = 'not-allowed';
		jian.style.cursor = 'pointer';
		return;
	}
	kucun.value++;
}
jian.onclick = function(){
	if(kucun.value == 1){
		jian.style.cursor = 'not-allowed';
		jia.style.cursor = 'pointer';
		return;
	}
	kucun.value--;
}
//弹出框
var gouwu = document.getElementById("gouwu");
var quanbu = document.getElementById("quanbu");
var ooo = document.getElementById("ooo");
var chacha = document.getElementById("chacha");
var jixu = document.getElementById("jixu");
gouwu.onclick = function(){
	quanbu.style.background = '#dedcd8';
	quanbu.style.opacity= '0.8';
	ooo.style.display = 'block'; 
}
chacha.onclick = function(){
	quanbu.style.background = 'none';
	quanbu.style.opacity= '1';
	ooo.style.display = 'none'; 
}
jixu.onclick = function(){
	quanbu.style.background = 'none';
	quanbu.style.opacity= '1';
	ooo.style.display = 'none'; 
}
