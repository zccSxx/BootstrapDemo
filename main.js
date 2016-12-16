"use strict"
$(function(){
    // 锚点跳转
    $("#navUl").on("click", "li", scroll);
    //回到最上
    $("#topButton").on("click", scrollTop);
    $("#topLogo").on("click", scrollTop);
    //滚动条监听
    $(window).scroll(scrollMove);
    // 导航栏按钮事件
    $(".clickBtn").on("click", navEvent);
    // 显示当前时间
    $("#nowDate").html(new Date());
});

// 锚点跳转实现方法
function scroll(){
    $("#" + this.dataset.href).HoverTreeScroll(1000);  
}

//跳转到顶部
function scrollTop(){
    $("#page1").HoverTreeScroll(1000);
}

//滚动条监听事件
function scrollMove(event){
    let windowToTop = window.innerHeight;
    let length = $(window).scrollTop();
    //触发导航栏变动
    if(length !== 0){
        $("#myNavbar").css("background-color", "#f8f8f8");
        if(length > 400){
            $("#topButton").css("opacity", "0.4").css("visibility", "visible");
        } else{
            $("#topButton").css("opacity", "0").css("visibility", "hidden");
        }
    } else{
        //淡化导航栏
        $("#myNavbar").css("background-color", "transparent");
        $("#topButton").css("opacity", "0").css("visibility", "hidden");
    }
    //触发图片变动
    imgMoveListener(windowToTop, length);
}

//导航栏事件
function navEvent(){
    switch (this.id) {
        case "btn1":
        case "btn4":
            window.location = "http://blog.sina.com.cn/u/3189899312";
            break;
        case "btn5":
            window.location = "https://github.com/zccSxx/BootstrapDemo";
            break;
        case "btn3":
            console.log("hellow~");
            break;
        default:
            break;
    }
}

// 图片滑动监听事件
function imgMoveListener(windowToTop, length){
    $(".myMoveImg").each(function(){
        let imgToTop = this.offsetTop;
        if(windowToTop + length >= imgToTop){
            if(this.dataset.move === "false"){
                //已可见，上移
                imgMove(this, true);
            }
        } 
    });
}

// 图片滑动实现
function imgMove(img){
        //上移
    $(img).css("margin-top", parseInt($(img).css("margin-top")) - 15 + "px")[0].dataset.move = "true";
}