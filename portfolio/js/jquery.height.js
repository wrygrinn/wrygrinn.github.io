  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var header = $('header').outerHeight(true);
    var footer = $('footer').outerHeight(true);
    
 //600より大きい時はheaderとfooterの高さ分余白を取る
 
    if (w > 600) {
      $("#wrapper,.link").css('padding-top', header + 'px');
      $(".link").css('margin-top', -header + 'px');
      $("body").css('margin-bottom', footer + 30 + 'px');
    } else {
      $("#wrapper,.link").css('padding-top', '0');
      $(".link").css('margin-top', '0');
      $("body").css('margin-bottom', footer + 20 + 'px');
    }
  });
