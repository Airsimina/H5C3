$(function () {
    //数字滚动插件
    (function ($) {
        $.fn.numberRock = function (options) {
            var defaults = {
                lastNumber: 100,
                duration: 2000,
                easing: 'swing' //swing  linear
            };
            var opts = $.extend({}, defaults, options);
            $(this).animate({
                num: "numberRock",
                // width : 300,
                // height : 300,
            }, {
                duration: opts.duration,
                easing: opts.easing,
                step: function (a, b) {
                    //console.log(a);
                    //console.log(b.pos); 
                    $(this).html(Math.floor(b.pos * opts.lastNumber * 100) / 100);
                    
                    // console.log(Math.floor(b.pos * opts.lastNumber * 100) / 100);
                    // console.log(b.pos );
                    // console.log( opts.lastNumber);
                }
            });
        }
    })(jQuery);
    var flag2 = false;
    // 刷新页面时执行动画
    // $("#p1, #p2, #p3, #p4, #p0").css("visibility", "hidden");
    scrollAnimate(0, true);
    var pn = 0;
    var flag = true;
    $(document).mousewheel(function (e) {
        e = e || window.e;
        if (e.deltaY < 0) { //滚轮向下滚动
            mouseScroll(true);
        } else { 
            mouseScroll(false);
        }
    });

    document.onkeydown = function (e) {
        e = e || window.e;
        var code = e.keyCode;
        if (code === 32 || code === 39 || code === 40) {
            mouseScroll(true);                
        }else if (code === 37 || code === 38) {
            mouseScroll(false);                
        }
    }
    //判断是向上滚还是向下滚
    function mouseScroll(flag) {
        if (flag) {
            if (flag2) {
                flag2 = false;
                if (pn === 5) {
                    pn = 0;
                    scrollAnimate(pn, true);
                } else {
                    pn++;
                    scrollAnimate(pn, true);
                }
            }
        } else {
            if (pn === 0) {
                pn = 0;
            } else {
                if (flag2) {
                    flag2 = false;
                    pn--;
                    scrollAnimate(pn, false);
                }
            }
        }
    }
    var flag3 = false;
    function scrollAnimate(pn, judge) {
        var p0t1 = $("#p0_t_1");
        var p0Btn = $("#p0_btn");
        var p0Base = $("#p0_base");
        var slogan1 = $('#slogan-1');
        var slogan2 = $('#slogan-2');
        var slogan3 = $('#slogan-3');
        var bg = $(".bg");
        var ballBase = $(".ball_base");
        var p0 = $("#p0");
        var p1 = $("#p1");
        var p2 = $("#p2");
        var p3 = $("#p3");
        var p4 = $("#p4");
        var p5 = $("#p5");
        var addLefttop = $("#add_lefttop");
        var addScrolling = $("#add_scrolling"); 
        var p1t0 = $("#p1_t_0");
        var p1t1 = $("#p1_t_1");
        var p1Text = $(".p1_text");
        var p1t2 = $("#p1_t_2");
        var p2pop1 = $("#p2_pop_1");
        var p2pop2 = $("#p2_pop_2");
        var p2pop3 = $("#p2_pop_3");
        var p2pop4 = $("#p2_pop_4");
        var p2t1 = $("#p2_t_1");
        var p2t2 = $("#p2_t_2");    
        var p3Safe = $("#p3_safe");
        var p3t1 = $("#p3_t_1");
        var p3t2 = $("#p3_t_2");
        var p3List = $("#p3_list");
        var p4Sider = $("#p4_sider");
        var p4t1 = $("#p4_t_1");
        var p4t2 = $("#p4_t_2");
        var p4SiderSwitch = $("#p4_sider_switch");
        var p5t1 = $("#p5_t_1");
        var p5Text = $("#p5_text");
        var p5Ball = $("#p5_ball");
        var addLinks = $("#add_links");
        if (judge) {
            if (pn === 0) {
                // p5页面出场动画
                if (flag3) {
                    flag3 = false ;
                    p5t1.removeClass("rotateInDownLeft").addClass("rotateOutDownLeft");
                    p5Text.removeClass("rotateInDownRight").addClass("rotateOutDownRight");
                    p5Ball.velocity({ opacity: 0 }, { durtation: 1000 });
                    $("#p5_item .p5-item1").velocity({ opacity: 0, translateY: "800px", translateX: "800px", rotateY: "50deg" }, { duration: 1200 });
                    $("#p5_item .p5-item2").velocity({ opacity: 0, translateY: "800px", translateX: "800px", rotateY: "50deg" }, { duration: 1000 });
                    $("#p5_item .p5-item3").velocity({ opacity: 0, translateY: "800px", translateX: "800px", rotateY: "50deg" }, { duration: 800 });
                    addLinks.velocity({ opacity: 0 }, { duration: 800 }); 
                }
                // p0页面进场动画
                p0t1.velocity({ opacity: 1 }, { duration: 1000 });
                p0Btn.velocity({ opacity: 1 },{ duration:1000});
                slogan1.velocity({ opacity: 1, }, { duration: 500, easing: 'ease-in-out' });
                bg.velocity({ opacity: 1, scale: 0.6, translateX: '0px', translateY: '0px', rotateZ: '0deg' }, { duration: 2000, easing: 'ease-in-out', complete: function () { flag2 = true; }});
                ballBase.velocity({ opacity: 1,}, { duration: 1000,easing: 'ease-in-out' });
                slogan2.velocity({ translateZ: '1300px',rotateY: '-60deg',translateY: '500px',opacity: 1 }, { duration: 0 });
                slogan2.velocity({ translateZ: '0px',rotateY: '0deg',translateY: '0px' }, { duration: 1500 });
                slogan3.velocity({ translateZ: '1600px',rotateY: '-60deg',translateY: '500px',opacity: 1 }, { duration: 0 });
                slogan3.velocity({ translateZ: '0px',rotateY: '0deg',translateY: '0px' }, { duration: 1700 });
                addLefttop.removeClass('fadeInRight animated');
                $("#p1, #p2, #p3, #p4").css("visibility", "hidden");
                p0.css("visibility", "visible");
            } else if (pn === 1) {
                // p0页面出场动画
                p0t1.velocity({ opacity: 0 }, { duration: 1000 });
                p0Btn.velocity({ opacity: 0 }, { duration: 1000 });
                slogan1.velocity({ opacity: 0, }, { duration: 500, easing: 'ease-in-out' });
                ballBase.velocity({ opacity: 0, }, { duration: 1000, easing: 'ease-in-out' });
                slogan2.velocity({ translateZ: '-1300px',rotateY: '60deg',translateY: '-500px',opacity: 0 }, { duration: 1000 });
                slogan3.velocity({ translateZ: '-1600px',rotateY: '60deg',translateY: '-500px',opacity: 0 }, { duration: 1000 });
                bg.velocity('stop').velocity({ scale: 1, translateX: '-200px', translateY: '300px', rotateZ: '-105deg' }, { duration: 2000, easing: 'ease-in-out' });
                //p1页面进场动画
                p1t0.velocity({ rotateY: '30deg', translateZ: '1000px', opacity: 0 }, { duration: 0 });
                p1t0.velocity({ rotateY: '0deg', translateZ: '0px', opacity: 1 }, { duration: 2000 });
                p1t1.velocity({ rotateX: '0deg', translateZ: '0px', rotateY: '40deg', opacity: 0 }, { duration: 0 });
                p1t1.velocity({ rotateX: '0deg', translateZ: '0px', rotateY: '0deg', opacity: 1 }, { duration: 2000 });
                p1Text.removeClass("flipOutY").addClass("flipInY animated");
                p1t2.velocity({ opacity: 1 }, { duration: 2000, complete: function () { flag2 = true; } });
                addLefttop.addClass('fadeInRight animated');
                addScrolling.velocity({ opacity: 0 }, { duration: 100 });
                $("#p2, #p3, #p4, #p5").css("visibility", "hidden");
                p1.css("visibility", "visible");
                $("#speed > .count").numberRock({
                    lastNumber: 0.39,
                    duration: 2000,
                    easing: 'swing', //慢快慢
                });
                $("#size > .count").numberRock({
                    lastNumber: 4.72,
                    duration: 2000,
                    easing: 'swing', //慢快慢
                });
            } else if (pn === 2) {
                //p1页面出场动画
                p1t0.velocity({ rotateY: '0deg', translateZ: '1000px', opacity: 0 }, { duration: 1000 });
                p1t1.velocity({ rotateX: 0, translateZ: '0px', rotateY: '-40deg', opacity: 0 }, { duration: 600 });
                p1t2.velocity({ opacity: 0 }, { duration: 600 });
                p1Text.removeClass("flipInY").addClass("flipOutY");
                //p2页面进场动画
                p2pop1.velocity({ rotateY: '-60deg', translateZ: '800px', rotateX: '120deg', scale: 0.1 }, { duration: 0 });
                p2pop1.velocity({ rotateY: '0deg', translateZ: '0px', rotateX: '0deg', scale: 1 }, { duration: 1000 });
                p2pop2.velocity({ rotateY: '-60deg', translateZ: '900px', rotateX: '120deg', scale: 0.1 }, { duration: 0 });
                p2pop2.velocity({ rotateY: '0deg', translateZ: '0px', rotateX: '0deg', scale: 1 }, { duration: 1200 });
                p2pop3.velocity({ rotateY: '-60deg', translateZ: '1000px', rotateX: '120deg', scale: 0.1 }, { duration: 0 });
                p2pop3.velocity({ rotateY: '0deg', translateZ: '0px', rotateX: '0deg', scale: 1 }, { duration: 1400 });
                p2pop4.velocity({ rotateY: '-60deg', translateZ: '1100px', rotateX: '120deg', scale: 0.1 }, { duration: 0 });
                p2pop4.velocity({ rotateY: '0deg', translateZ: '0px', rotateX: '0deg', scale: 1 }, { duration: 1600 });
                p2t1.velocity({ rotateY: '-60deg', translateZ: '800px', rotateX: '0deg', opacity: 0 }, { duration: 0 });
                p2t1.velocity({ opacity: 1, rotateY: '0deg', translateZ: '0px', rotateX: '0deg' }, { duration: 1600, complete: function () { flag2 = true; } });
                p2t2.removeClass("rotateOutUpLeft").addClass('flipInX animated');
                $("#p0, #p3, #p4, #p5").css("visibility", "hidden");
                p2.css("visibility", "visible");

            } else if (pn === 3) {
                //p2页面出场动画
                p2t1.velocity({ opacity: 0, rotateY: '60deg', translateZ: '800px', rotateX: '0deg' }, { duration: 600 });                
                p2pop1.velocity({ rotateY: '60deg', translateZ: '1300px', rotateX: '90deg', scale: 0.1 }, { duration: 1000 });
                p2pop2.velocity({ rotateY: '60deg', translateZ: '1400px', rotateX: '90deg', scale: 0.1 }, { duration: 1200 });
                p2pop3.velocity({ rotateY: '60deg', translateZ: '1500px', rotateX: '90deg', scale: 0.1 }, { duration: 1400 });
                p2pop4.velocity({ rotateY: '60deg', translateZ: '1600px', rotateX: '90deg', scale: 0.1 }, { duration: 1600 });
                p2t2.removeClass("flipInX").addClass("rollOut");  
                //p3页面进场动画
                $("#p3_point .pt1").velocity({ scale: 1, rotateY: '-14deg', translateZ: '1000px',opacity: 0 }, { duration: 0 });
                $("#p3_point .pt1").velocity({ scale: 1, rotateY: '0deg', translateZ: '0px',opacity: 1 }, { duration: 1700 });
                $("#p3_point .pt2").velocity({ scale: 1, rotateY: '-16deg', translateZ: '1000px',opacity: 0 }, {duration: 0 });
                $("#p3_point .pt2").velocity({ scale: 1, rotateY: '0deg', translateZ: '0px',opacity: 1 }, { duration: 1900 });
                $("#p3_point .pt3").velocity({ scale: 1, rotateY: '-18deg', translateZ: '1000px',opacity: 0 }, {duration: 0 });
                $("#p3_point .pt3").velocity({ scale: 1, rotateY: '0deg', translateZ: '0px',opacity: 1 }, { duration: 2100 });
                $("#p3_point .pt4").velocity({ scale: 1, rotateY: '-20deg', translateZ: '1000px',opacity: 0 }, {duration: 0 });
                $("#p3_point .pt4").velocity({ scale: 1, rotateY: '0deg', translateZ: '0px',opacity: 1 }, { duration: 2300 });
                $("#p3_point .pt5").velocity({ scale: 1, rotateY: '-22deg', translateZ: '1000px',opacity: 0 }, { duration: 0 });
                $("#p3_point .pt5").velocity({ scale: 1, rotateY: '0deg', translateZ: '0px', opacity: 1 }, { duration: 2500, complete: function () { flag2 = true; }});
                p3Safe.velocity({ rotateY: '-30deg', opacity: 0 }, { duration: 0 });                
                p3Safe.velocity({ rotateY: '0deg', opacity: 1 }, { duration: 500 });                
                p3t1.velocity({ rotateY: '-60deg', scale: 0.5, opacity: 0 }, { duration: 0 });                
                p3t1.velocity({ rotateY: '0deg', scale: 1, opacity: 1 }, { duration: 800 });                
                p3List.velocity({ scale:0.5, opacity: 0 }, { duration: 0 });                
                p3List.velocity({ scale:1, opacity: 1 }, { duration: 800 });                
                p3t2.removeClass("rotateOutDownLeft").addClass("rollIn animated");                  
                $("#p0, #p1, #p4, #p5").css("visibility", "hidden");
                p3.css("visibility", "visible");
            } else if (pn === 4) {
                //p3页面出场动画
                p3t1.velocity({ rotateY: '-60deg', scale: 0.7, opacity: 0 }, { duration: 500 });
                p3t2.removeClass("rollIn").addClass("rotateOutDownRight"); 
                p3List.velocity({ scale: 0.5, opacity: 0 }, { duration: 800 });                
                $('#p3_point .pt1').velocity({ scale: 1, rotateY: '15deg', translateZ: '1000px',opacity: 0 }, { duration: 900 });
                $('#p3_point .pt2').velocity({ scale: 1, rotateY: '14deg', translateZ: '1000px', opacity: 0}, { duration: 1000 });
                $('#p3_point .pt3').velocity({ scale: 1, rotateY: '13deg', translateZ: '1000px',opacity: 0 }, { duration: 1100 });
                $('#p3_point .pt4').velocity({ scale: 1, rotateY: '12deg', translateZ: '1000px', opacity: 0 }, { duration: 1150 });
                $('#p3_point .pt5').velocity({ scale: 1, rotateY: '11deg', translateZ: '1000px', opacity: 0 }, { duration: 1200 });
                p3Safe.velocity({ rotateY: '-30deg', scale: 0.7, opacity: 0 }, { duration: 500 });
                //p4页面进场动画
                p4Sider.velocity({ opacity: 0, scale: 0, rotateZ: "90deg" }, { duration: 0 });
                p4Sider.velocity({ opacity: 1, scale: 1, rotateZ: "0deg" }, { duration: 1500, complete: function () { flag2 = true; }});
                p4t1.removeClass("zoomOutDown").addClass("jackInTheBox animated");
                p4t2.removeClass("lightSpeedOut").addClass("lightSpeedIn animated");
                $(".sider-switch-progress-w").velocity({ width:0, opacity: 0 },{ duration:0 });
                $(".sider-switch-progress-w").velocity({ width:"431px", opacity: 1 },{ duration:800 });
                p4SiderSwitch.velocity({ opacity: 0, scale: 0.5,translateX:"-500px", translateZ: "800px", rotateY: "20deg" }, { duration: 0 });
                p4SiderSwitch.velocity({ opacity: 1, scale: 1,translateX:0, translateZ: 0, rotateY: 0 }, { duration: 1300 });
                $("#p0, #p1, #p2, #p5").css("visibility", "hidden");
                p4.css("visibility", "visible");
            } else if (pn === 5) {
                // p4出场动画                
                flag3 = true;
                p4Sider.velocity({ opacity:0 ,scale:0,rotateZ:"-90deg" },{ duration:800 });
                p4t1.removeClass("jackInTheBox").addClass("rotateOut");
                p4t2.removeClass("lightSpeedIn").addClass("lightSpeedOut");
                $(".sider-switch-progress-w").velocity({ opacity: 0 }, { duration: 900 });
                p4SiderSwitch.velocity({ opacity: 0, scale: 0.5,translateX:"500px", translateZ: "-800px", rotateY: "-20deg" }, { duration: 1000 });
                //p5页面进场动画
                addLinks.velocity({ opacity: 1 }, { duration: 800 });
                p5t1.removeClass("rotateOutDownLeft").addClass("rotateInDownLeft animated");
                p5Text.removeClass("rotateOutDownRight").addClass("rotateInDownRight animated");
                $("#p5_item").velocity({ opacity: 1 }, { duration: 0 });                
                $("#p5_item .p5-item1").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 0 });
                $("#p5_item .p5-item1").velocity({ opacity: 1, translateY: "0", translateX: 0, rotateY: 0 }, { duration: 1400, complete: function () { flag2 = true; }});
                $("#p5_item .p5-item2").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 0 });
                $("#p5_item .p5-item2").velocity({ opacity: 1, translateY: "0", translateX: 0, rotateY: 0 }, { duration: 1200 });
                $("#p5_item .p5-item3").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 0 });
                $("#p5_item .p5-item3").velocity({ opacity: 1, translateY: "0", translateX: 0, rotateY: 0 }, { duration: 1000 });
                p5Ball.velocity({ opacity: 1 }, { duration: 1000 })
                $("#p0, #p1, #p2, #p3").css("visibility", "hidden");
                p5.css("visibility", "visible");

            }
        } else {
            if (pn === 0) {
                //p0进场动画
                p0t1.velocity({ opacity: 1 }, { duration: 1200 });
                p0Btn.velocity({ opacity: 1 }, { duration: 1300 });
                slogan1.velocity({ opacity: 1, }, { duration: 500, easing: 'ease-in-out' });
                ballBase.velocity({ opacity: 1, }, { duration: 1000, easing: 'ease-in-out' });
                slogan2.velocity({translateZ: '0',rotateY: '0',translateY: '0',opacity: 1}, {duration: 1500});
                slogan3.velocity({translateZ: '0',rotateY: '0',translateY: '0',opacity: 1}, {duration: 1700});
                bg.velocity({ opacity: 1, scale: 0.6, translateX: '0px', translateY: '0px', rotateZ: '0deg' }, { duration: 2000, easing: 'ease-in-out', complete: function () { flag2 = true; }}); 
                //p1出场动画
                p1t0.velocity({ rotateY: '30deg', translateZ: '10000px', opacity: 1 }, { duration: 1100 });
                p1t1.velocity({ rotateX: '0deg', translateZ: '0px', rotateY: '40deg', opacity: 0 }, { duration: 1000 });
                p1Text.removeClass("flipInY").addClass("flipOutY animated");
                p1t2.velocity({ opacity: 0 }, { duration: 800 });
                addLefttop.removeClass('fadeInRight animated');
                addScrolling.velocity({ opacity: 1 }, { duration: 500 });
                $("#p2, #p3, #p4, #p5").css("visibility", "hidden");
                p0.css("visibility", "visible");
            }else if (pn === 1) {
                //p2出场动画
                p2t1.velocity({ opacity: 0, rotateY: '-60deg', translateZ: '800px', rotateX: '0deg' }, { duration: 600 });                
                p2pop1.velocity({ rotateY: '-60deg', translateZ: '1300px', rotateX: '-90deg', scale: 0.1 }, { duration: 1000 });
                p2pop2.velocity({ rotateY: '-60deg', translateZ: '1400px', rotateX: '-90deg', scale: 0.1 }, { duration: 1200 });
                p2pop3.velocity({ rotateY: '-60deg', translateZ: '1500px', rotateX: '-90deg', scale: 0.1 }, { duration: 1400 });
                p2pop4.velocity({ rotateY: '-60deg', translateZ: '1600px', rotateX: '-90deg', scale: 0.1 }, { duration: 1600, complete: function () { flag2 = true; }});
                p2t2.removeClass("flipInX").addClass("rotateOutUpLeft");  
                //p1进场动画
                p1t0.velocity({ rotateY: '0deg', translateZ: '0', opacity: 1 }, { duration: 1000 });
                p1t1.velocity({ rotateX: 0, translateZ: '0px', rotateY: '0', opacity: 1 }, { duration: 1200 });
                p1t2.velocity({ opacity: 1 }, { duration: 1200 });
                p1Text.removeClass("flipOutY").addClass("flipInY");
                $("#p0, #p3, #p4, #p5").css("visibility", "hidden");
                p1.css("visibility", "visible");
            } else if (pn === 2) {
                //p2进场动画
                p2t1.velocity({ opacity: 1, rotateY: '0', translateZ: '0', rotateX: '0deg' }, { duration: 1200 });
                p2pop1.velocity({ rotateY: '0', translateZ: '0', rotateX: '0', scale: 1 }, { duration: 1000 });
                p2pop2.velocity({ rotateY: '0', translateZ: '0', rotateX: '0',scale: 1 }, { duration: 1200 });
                p2pop3.velocity({ rotateY: '0', translateZ: '0', rotateX: '0', scale: 1 }, { duration: 1400 });
                p2pop4.velocity({ rotateY: '0', translateZ: '0', rotateX: '0', scale: 1 }, { duration: 1600, complete: function () { flag2 = true; }});
                p2t2.removeClass("rollOut").addClass("flipInX");  
                //p3出场动画
                p3t1.velocity({ rotateY: '60deg', scale: 0.5, opacity: 0 }, { duration: 500 });
                p3t2.removeClass("rollIn").addClass("rotateOutDownLeft");
                p3List.velocity({ scale: 0.5, opacity: 0 }, { duration: 800 });
                $('#p3_point .pt1').velocity({ scale: 1, rotateY: '-15deg', translateZ: '1000px', opacity: 0}, { duration: 900 });
                $('#p3_point .pt2').velocity({ scale: 1, rotateY: '-14deg', translateZ: '1000px', opacity: 0}, { duration: 1000 });
                $('#p3_point .pt3').velocity({ scale: 1, rotateY: '-13deg', translateZ: '1000px', opacity: 0 }, { duration: 1100 });
                $('#p3_point .pt4').velocity({ scale: 1, rotateY: '-12deg', translateZ: '1000px', opacity: 0 }, { duration: 1150 });
                $('#p3_point .pt5').velocity({ scale: 1, rotateY: '-11deg', translateZ: '1000px', opacity: 0 }, { duration: 1200 });
                p3Safe.velocity({ rotateY: '30deg', scale: 0.7, opacity: 0 }, { duration: 500 });
                $("#p0, #p1, #p4, #p5").css("visibility", "hidden");
                p2.css("visibility", "visible");
            } else if (pn === 3) {
                //p3入场动画
                p3t1.velocity({ rotateY: '0', scale: 1, opacity: 1 }, { duration: 500 });
                p3t2.removeClass("rotateOutDownRight").addClass("rollIn");
                p3List.velocity({ scale: 1, opacity: 1 }, { duration: 800 });
                $('#p3_point .pt1').velocity({ scale: 1, rotateY: '0', translateZ: '0', opacity: 1 }, { duration: 900 });
                $('#p3_point .pt2').velocity({ scale: 1, rotateY: '0', translateZ: '0', opacity: 1 }, { duration: 1000 });
                $('#p3_point .pt3').velocity({ scale: 1, rotateY: '0', translateZ: '0', opacity: 1 }, { duration: 1100 });
                $('#p3_point .pt4').velocity({ scale: 1, rotateY: '0', translateZ: '0', opacity: 1 }, { duration: 1150 });
                $('#p3_point .pt5').velocity({ scale: 1, rotateY: '0', translateZ: '0', opacity: 1 }, { duration: 1200, complete: function () { flag2 = true; }});
                p3Safe.velocity({ rotateY: '-0', scale: 1, opacity: 1 }, { duration: 500 });
                //p4出场动画
                p4Sider.velocity({ opacity: 0, scale: 0, rotateZ: "90deg" }, { duration: 1000 });
                p4t1.removeClass("jackInTheBox").addClass("rotateOut");
                p4t2.removeClass("lightSpeedIn").addClass("lightSpeedOut");
                $(".sider-switch-progress-w").velocity({ opacity: 0 }, { duration: 1000 });
                p4SiderSwitch.velocity({ opacity: 0, scale: 0.5, translateX: "500px", translateZ: "-800px", rotateY: "-20deg" }, { duration: 1000 });
                $("#p0, #p1, #p2, #p5").css("visibility", "hidden");
                p3.css("visibility", "visible");
            } else if (pn === 4) {
                //P4页面进场动画
                p4Sider.velocity({ opacity: 1, scale: 1, rotateZ: "0" }, { duration: 1000 });
                p4t1.removeClass("rotateOut").addClass("jackInTheBox");
                p4t2.removeClass("lightSpeedOut").addClass("lightSpeedIn");
                $(".sider-switch-progress-w").velocity({ opacity: 1 }, { duration: 1000 });
                p4SiderSwitch.velocity({ opacity: 1, scale: 1, translateX: "0", translateZ: "0", rotateY: "0" }, { duration: 1200 });
                //p5页面出场动画
                p5t1.removeClass("rotateInDownLeft").addClass("rotateOutDownLeft animated");
                p5Text.removeClass("rotateInDownRight").addClass("rotateOutDownRight animated");
                $("#p5_item .p5-item1").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 1000 });
                $("#p5_item .p5-item2").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 1200 });
                $("#p5_item .p5-item3").velocity({ opacity: 0, translateY: "800px", translateX: "-800px", rotateY: "-60deg" }, { duration: 1400, complete: function () { flag2 = true; } });
                p5Ball.velocity({ opacity: 0 }, { duration: 1000 })
                $("#p0, #p1, #p2, #p3").css("visibility", "hidden");
                p4.css("visibility", "visible");
                addLinks.velocity({ opacity: 0 }, { duration: 800 });                
            }
        }
    }                                               


    // #p4页面轮播图
    //默认第一个高亮
    var img = $('#p4_sider > img');
    var switchLogo = $('.sider-switch-logo');
    var switchItem = $('#p4_sider_switch > .sider-switch-item');
    var switchProgress = $('.sider-switch-progress');
    img.eq(0).show().siblings().hide();
    switchLogo.eq(0).addClass("active");
    switchProgress.css({
        'width': '0',
        'left': 0
    });
    //鼠标移入显示
    switchItem.mouseenter(function () {
        //移入时停止定时器
        clearInterval(timerId);
        //移除所有active类样式
        $(this).siblings().find(switchLogo).removeClass('active');
        //给当前div下的logo设置active类样式
        $(this).find(switchLogo).addClass('active');
        console.log($(this).siblings().find(switchLogo).removeClass('active'));
        
        //获取当前div的索引
        var index = $(this).index();
        //让i = index 让动画继续向后执行
        i = index;
        //让当前div对应的图片显示，其余图片隐藏
        img.eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
        switchProgress.stop(true, false);
        //设置下面进度条的宽度和位置
        switchProgress.css({
            'width': '33.3%',
            'left': index * 33.3 + '%'
        });

    });
    switchItem.mouseleave(function () {
        var index = $(this).index();
        switchProgress.css({
            'left': index * 33.3 + '%'
        });
        move();
        // 移出时开始定时器，并且继续使用同一个变量接受，避免设置多个定时器
        timerId = setInterval(move, 2100);
    });
    var i = 0;
    //获取图片个数
    var size = img.size();
    var timerId = setInterval(move, 2100);

    function move() {
        i++;
        //如果移动到最后一张则从头开始
        if (i == size) {
            i = 0;
        }
        //移除所有active
        switchItem.siblings().find(switchLogo).removeClass('active');
        //给i对应索引设置active
        switchItem.eq(i).find(switchLogo).addClass("active");
        //让i对应索引的图片显示，其余的隐藏
        img.eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);

        //每次移动时让下面进度条的宽度为0
        switchProgress.css({
            'width': '0px',
            'left': i * 33.3 + '%'
        });
        //在一段时间内，让进度条的宽度变宽
        switchProgress.stop().animate({
            'width': '33.3%'
        }, 2000);
    }
    switchProgress.stop().animate({
        'width': '33.3%'
    }, 2000);
});


//canvas代码

// (function () {
    // 'use strict';
//     var c = document.getElementById('p5_line');
//     var ctx = c.getContext('2d');
//     var w = c.width = window.innerWidth;
//     var h = c.height = window.innerHeight;
//     var cx = w / 2;
//     var cy = h / 2;
//     var fl = 2000;

//     function prj(obj) {
//         var cz = obj.z + fl;
//         if (cz === 0) return;
//         var scl = fl / cz;
//         obj.p.x = cx + obj.x * scl;
//         obj.p.y = cy + obj.y * scl;
//         obj.s = scl;
//     }

//     var P = function (x, y, z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//         this.s = 1;
//         this.cl = 0;
//         this.p = {
//             x: 0,
//             y: 0
//         };
//     };
//     P.prototype = {
//         constructor: P,
//         update: function () {
//             this.z -= 30;
//         },
//         render: function (ctx) {
//             if (this.z <= -fl) return;
//             ctx.save();
//             ctx.translate(this.p.x, this.p.y);
//             ctx.scale(this.s, this.s);
//             ctx.fillStyle = 'hsla(' + this.cl + ', 100%, 50%, 0.5)';
//             ctx.beginPath();
//             ctx.arc(0, 0, 2, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.restore();
//         }
//     };
//     var M = function (x, y, z) {
//         this.list = [];
//         this.max = 100;
//         this.x = x;
//         this.y = y;
//         this.z = z;
//         this.s = 1;
//         this.p = {
//             x: 0,
//             y: 0
//         };
//         this.ax = Math.random() * (Math.PI * 2);
//         this.ay = Math.random() * (Math.PI * 2);
//         this.rx = Math.random() * 100;
//         this.ry = Math.random() * 100;
//         this.cl = Math.random() * 360;
//         this.cls = Math.random();
//     };
//     M.prototype = {
//         constructor: M,
//         update: function () {
//             this.cl += this.cls;
//             this.ax += Math.random() * 0.1 - 0.02;
//             this.ay += Math.random() * 0.1 - 0.02;
//             this.x = Math.cos(this.ax) * 100;
//             this.y = Math.sin(this.ay) * 100;
//             this.z += 10;
//             if (this.z > fl) this.z = fl;

//             if (this.list.length < this.max) {
//                 if (Math.random() * 100 < 50) {
//                     var pp = new P(this.x, this.y, this.z);
//                     pp.cl = this.cl;
//                     this.list.push(pp);
//                 }
//             } else {
//                 var pp = this.list.shift();
//                 pp.x = this.x;
//                 pp.y = this.y;
//                 pp.z = this.z;
//                 pp.cl = this.cl;
//                 this.list.push(pp);
//             }
//         },
//         render: function (ctx) {
//             if (this.z <= -fl) return;
//             ctx.save();
//             ctx.translate(this.p.x, this.p.y);
//             ctx.fillStyle = 'green';
//             ctx.beginPath();
//             ctx.arc(0, 0, 2, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.restore();
//         }
//     };

//     function update(mv, list) {
//         for (var i = 0; i < list.length; i++) {
//             var p = list[i];
//             p.update();
//             prj(p);
//             p.render(ctx);
//         }

//         for (var i = list.length - 1; i >= 0; i--) {
//             var p = list[i];
//             if (p.z <= -fl) continue;
//             if (i === list.length - 1) {
//                 ctx.lineWidth = Math.random();
//                 ctx.strokeStyle = 'hsl(' + mv.cl + ', 100%, 50%)';
//                 ctx.beginPath();
//                 ctx.moveTo(p.p.x, p.p.y);
//             } else {
//                 ctx.lineTo(p.p.x, p.p.y);
//             }
//         }
//         ctx.stroke();
//     }

//     var ms = [];

//     for (var i = 0; i < 10; i++) {
//         ms.push(new M(
//             Math.random() * 400 - 200,
//             Math.random() * 400 - 200,
//             Math.random() * 400 - 200));
//     }

//     requestAnimationFrame(function loop() {
//         requestAnimationFrame(loop);
//         ctx.clearRect(0, 0, w, h);

//         for (var i = 0; i < ms.length; i++) {
//             var m = ms[i];
//             m.update();
//             prj(m);
//             update(m, m.list);
//         }

//     });
// })();