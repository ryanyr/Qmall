//第一个倒计时
var intDiff_b = parseInt(1000000);//倒计时总秒数量
function timer_b(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show_b').html(day);
    $('#hour_show_b').html('<s id="h"></s>'+hour);
    $('#minute_show_b').html('<s></s>'+minute);
    $('#second_show_b').html('<s></s>'+second);
    intDiff--;
    }, 1000);
} 
$(function(){
    timer_b(intDiff_b);
});
//第二个倒计时
var intDiff_a = parseInt(6000);//倒计时总秒数量
function timer_a(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show_a').html(day);
    $('#hour_show_a').html('<s id="h"></s>'+hour+':');
    $('#minute_show_a').html('<s></s>'+minute+':');
    $('#second_show_a').html('<s></s>'+second);
    intDiff--;
    }, 1000);
} 
$(function(){
    timer_a(intDiff_a);
}); 
//第三个倒计时
var intDiff = parseInt(8000);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html(day+"天");
    $('#hour_show').html('<s id="h"></s>'+hour+':');
    $('#minute_show').html('<s></s>'+minute+':');
    $('#second_show').html('<s></s>'+second);
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
}); 
//轮播组件
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
            direction: 'horizontal',
            loop: true,
        });
//底部选项卡
        var btn = $(".choose-s");
        var div = $(".choose-ss");
        for(var i=0;i<btn.length;i++){
           btn[i].index=i;
           btn[i].onclick = function(){
              for(var i=0; i<div.length;i++){
                  div[i].style.display="none";
                  btn[i].style.color="#939393";
                  btn[i].style.border="0px";
              }
              btn[this.index].style.color="#000";　
              div[this.index].style.display='block';
              btn[this.index].style.borderBottom="0.01rem solid #000";
           }
        }
//弹窗
$(".benefit").click(function(){
    $(".popup").css("display","block");
})

$(".popup-d1").click(function(){
    $(".popup-d1").css("border","0px");
    $(".popup-d1").css("background","#f73452");
    $(".popup-d1").css("color","#fff");
    $(".popup-d2").css("border","0.01rem solid #000");
    $(".popup-d2").css("background","#fff");
    $(".popup-d2").css("color","#000");
    $("#popup-heart").text("夹心饼干巧克力味");
    $("#popup-heart1").text("夹心饼干巧克力味");
})

$(".popup-d2").click(function(){
    $(".popup-d2").css("border","0px");
    $(".popup-d2").css("background","#f73452");
    $(".popup-d2").css("color","#fff");
    $(".popup-d1").css("border","0.01rem solid #000");
    $(".popup-d1").css("background","#fff");
    $(".popup-d1").css("color","#000");
    $("#popup-heart").text("夹心饼干香草味");
    $("#popup-heart1").text("夹心饼干香草味");
})

$(".popup-footb").click(function(){
    $(".popup").css("display","none")
})

$(".popblank").click(function(){
    $(".popup").css("display","none")
});

//商品数量
$('.popup-footar').each(function(){
	   		var _this=$(this);
	   		var add=$(_this).find(".popup-footar3");//添加数量  
		   	var reduce=$(_this).find(".popup-footar1");//减少数量  
		  	var num=1;//数量初始值  
		   	var num_txt=$(_this).find(".popup-footar2");//接受数量的文本框 
		   	$(add).click(function(){  
		     	num = $(num_txt).val();      
		     	num++;  
		     	num_txt.val(num);  
		     	//ajax代码可以放这里传递到数据库实时改变总价  
		    });
		    /*减少数量的方法*/   
		   	$(reduce).click(function(){  
		    //如果文本框的值大于0才执行减去方法  
		        num =  $(num_txt).val();  
			     if(num >0){  
			      //并且当文本框的值为1的时候，减去后文本框直接清空值，不显示0  
			      if(num==1)  
			      { num--;  
			       num_txt.val("1");  
			      }  
			      //否则就执行减减方法  
			      else  
			      {  
			       num--;  
			       num_txt.val(num);  
			      }  
			    
			     }  
		    });        
	    }) 