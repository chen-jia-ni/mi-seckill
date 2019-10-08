//js控制标签及商品页切换显示
var tabs=document.getElementById("tabs").getElementsByTagName("li");
var lists=document.getElementById("lists").getElementsByTagName("ul");
var listshade=document.getElementById("lists").getElementsByTagName("li");

console.log(tabs);//打印到控制台（测试用）
console.log(lists);

for(var i=0; i< tabs.length; i++){
	tabs[i].onclick=showlist;
}



function showlist(){
	for(var i=0; i< tabs.length; i++){
		if(tabs[i]===this){   //当tabs等于点击对象时。获得active类   lists与tabs同步进行控制
			tabs[i].className="active";
			lists[i].className="clearfix active";
		}else{
			tabs[i].className="";
			lists[i].className="";
		}
	}
}

/*js时间的鼠标悬停阴影效果
for(var i=0;i<listshade.length;i++){
	listshade[i].onmouseover=showshade;
	listshade[i].onmouseout=hiddenshade;
}

function showshade(){
	for(var i=0;i<listshade.length;i++){
		if(listshade[i]==this){
			listshade[i].className="item-active clearfix";
		}else{
			listshade[i].className="";
		}
	}
}

function hiddenshade(){
	for(var i=0;i<listshade.length;i++){
		if(listshade[i]==this){
			listshade[i].className="";
		}
	}
}
*/

//固定菜单栏
var seckillNav=document.getElementById("seckillNav");
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;//或取浏览器页面滚动的多少 PS:不同浏览器获取的方法不同
	console.log(scrollTop);
	if(scrollTop>=260){
		seckillNav.className="seckill-nav seckill-navfixed";
	}else{
		seckillNav.className="seckill-nav";
	}
}


function countdown(){
	//设置当前时间
	var time=new Date();
	var now=time.getTime();
	
	//设置截止时间
	var endTime=new Date(2020,5,8,20,00,00);
	var end=endTime.getTime();
	
	//时间差
	var deltaT=end-now;
	
	//定义变量 保存倒计时
	var h,m,s;
	if(deltaT>=0){
		h=Math.floor(deltaT/1000/60/60%24);
		m=Math.floor(deltaT/1000/60%60);
		s=Math.floor(deltaT/1000%60);
	}
	if(h<10){
		h='0'+h;
	}
	if(m<10){
		m='0'+m;
	}
	if(s<10){
		s='0'+s;
	}
	document.getElementById("count").innerHTML=h+":"+m+":"+s;
}
setInterval(countdown,1000); 