// var head_nav_replace = (function () {
//     return {
//         init: function () {
//             this.event();
//         },
//         event: function () {
//             var _this = this;
            // .head-nav-ul头部导航展示
            $('.product-nav').on('mouseenter', 'li', function () {
                $('.item-children').stop().animate({ height: '300' }, 500);
                //console.log($(this).index());
                $('.item-children').html($(this).find('ul').html());
            });
            $('.item-children').on('mouseleave', function () {

                $('.item-children').stop
                    ().animate({ height: '0' }, 500);
                $('.item-children').html();
            });
            // 家电展示
//             $('.jiadian-nav-ul').on('mouseenter','li',function(){
//             $('.down-one').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'})
//             })
//         },
//     }
// }());