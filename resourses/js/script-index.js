$(document).ready(function(){

    $(".sec-edu-school-btn").click(function(){
        $(this).addClass("sec-edu-btn");
        $(".sec-edu-college-btn").removeClass("sec-edu-btn");
        $(".sec-edu-col-clg").slideUp("1");
        $(".sec-edu-col-sch").slideDown("slow");
    });
    $(".sec-edu-college-btn").click(function(){
        $(this).addClass("sec-edu-btn");
        $(".sec-edu-school-btn").removeClass("sec-edu-btn");
        $(".sec-edu-col-sch").slideUp("1");
        $(".sec-edu-col-clg").slideDown("slow");
    });
    $(".sec-social-btn").click(function(){
        $(".sec-social-row").slideDown("slow");
        $(this).slideUp("slow");
    });
    $(".contact-me-btn").click(function(){
        $(".section-contact-me").fadeIn("slow");
    });
    $(".sec-contact-back-btn").click(function(){
        $(".section-contact-me").fadeOut("slow");
    })
});
/*--------- typed.js jquery plugin -----*/
var typed = new Typed(".typed", {
    strings: ["I am SYED ZUBAIR AHMED", "I am a Programmer :)", "I am a Web Developer"],
    typeSpeed: 80,
    backSpeed: 5,
    loop: true,
    smartBackspace: true
});
