$(function() {
  var pagetop = $('#pagetop');
  //ボタンの初期位置
  var position = {bottom: '-80px',right: '20px'}
  pagetop.css(position);
  $(window).scroll(function() {
  //スクロールが100以上になったら
        if($(window).scrollTop() >= 500){
  //表示
            pagetop.stop().animate({bottom: '20px'},450);
      } else {
  //以下なら隠す
            pagetop.stop().animate({bottom: '-80px'},100);
      }
   });
    //スクロール
  $('a[href^=#]').click(function() {
    var speed = 200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
  });
});