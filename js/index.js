/**
 * Created by 123 on 2017/7/29.
 */
$(function(){
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
   }) 
});