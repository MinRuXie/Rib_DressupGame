window.addEventListener ? 
window.addEventListener("load", load_animation, false) : 
window.attachEvent && window.attachEvent("onload", load_animation);

function load_animation(){
    $('.loading').hide();
    console.log("GGG");
}


$(function(){

    // 區塊
    let clothes = $('.room-part .room-box .clothes');
    let bg = $('.room-part .room-box .bg');
    let menu = $('.room-part .menu');

    // 按鈕區塊
    let clothes_btn_box = $('.clothes-box .content');
    let bg_btn_box = $('.bg-box .content');
    let suit_btn_box = $('.suit-box .content');

    // 產生按鈕
    let count = 10;
    for(let i=1 ; i<=count ; i++){
        suit_btn_box.append('<div class="content-item"><img src="images/btn/4-' + i + '.png" alt="" draggable="false"></div>');
        clothes_btn_box.append('<div class="content-item"><img src="images/clothes/rib_' + i + '.png" alt="" draggable="false"></div>');
        bg_btn_box.append('<div class="content-item"><img src="images/bg/bg4-' + i + '.png" alt="" draggable="false"></div>');
    }

    // 按鈕
    let clothes_btn = $('.clothes-box .content .content-item');
    let bg_btn = $('.bg-box .content .content-item');
    let suit_btn = $('.suit-box .content .content-item');
    let mobile_menu_btn = $('.room-part .room-box .mobile-munu-btn');


    // 換裝
    clothes_btn.each(function(index){
        $(this).on('click', function(){
            // 更換區塊圖片
            clothes.find('img').attr('src', 'images/clothes/rib_'+ (index+1) +'.png');
        });
    });

    // 換背景
    bg_btn.each(function(index){
        $(this).on('click', function(){
            // 更換區塊圖片
            bg.find('img').attr('src', 'images/bg/bg4-'+ (index+1) +'.png');
        });
    });

    // 換標配
    suit_btn.each(function(index){
        $(this).on('click', function(){
            // 更換區塊圖片
            clothes.find('img').attr('src', 'images/clothes/rib_'+ (index+1) +'.png');
            bg.find('img').attr('src', 'images/bg/bg4-'+ (index+1) +'.png');
        });
    });

    mobile_menu_btn.on('click', function(){
        menu.toggleClass('closed');
    });

});