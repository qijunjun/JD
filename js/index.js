/**
 * Created by 123 on 2017/7/29.
 */
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $(".header_box").removeClass("scroll_header");
            $(".header").css({padding:"15px 0 0"});
        }else{
            $(".header_box").addClass("scroll_header");
            $(".header").css({padding:"0"});
        }
    });
    // 轮播图效果
   var mySwiper = new Swiper(".banner",{
       //滑动方向 horizontal  vertical
       direction: 'horizontal',
       //是否首尾衔接
       loop: true,
       //初始幻灯片，默认从0开始
       initialSlide:1,
       // 如果需要分页器
       pagination: '.swiper-pagination',
       //分页圆点是否可以点击
       paginationClickable:true,
       //设置自动播放及间隔时间
       autoplay:3000,
       //用户操作swiper后是否还自动播放，默认是true，不再自动播放
       autoplayDisableOnInteraction:false
   }); 
    // 倒计时效果
    function Timeleft(){
        var now = new Date();
        var future = new Date(2017,6,29,24,0,0);
        //把毫秒转换成秒
        var lefts =parseInt((future-now)/1000);
        var days = parseInt(lefts/86400);
        var hour =parseInt((lefts%86400)/3600)<1?"0"+parseInt((lefts%86400)/3600):parseInt((lefts%86400)/3600);
        var min = parseInt(lefts%86400%3600/60);
        var sec = lefts%60>9?lefts%60:"0"+lefts%60;
        $("#hours").html(hour);
        $("#minutes").html(min);
        $("#seconds").html(sec);

    }
    Timeleft();
    setInterval(Timeleft,1000);
});