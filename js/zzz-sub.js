$(document).ready(function(){

  /* header------------------------------------ */
  $(".gnb-main").hover(function(){
    $(this).find(".sub-menu").stop().slideDown();
  },function(){
    $(this).find(".sub-menu").stop().slideUp();
  });



  /* 젠레스 젠 제로 페이지 */

  $(".modal-notice").click(function(){
    $(".modal").fadeIn();
    return false
  });
  $(".btn-close").click(function(){
    $(".modal").fadeOut();

  })

  /* ZZZ 갤러리 썸네일 배너 */
  $(".zzz-vis_right").click(function(){
    $(".zzz-thumbs li:first-child").stop(true,true).animate({"marginLeft":"-=135px"},500,function(){
      $(".zzz-thumbs li:first-child").appendTo(".zzz-thumbs");
      $(this).css({"marginLeft":"0px"});
    });
    return false;
  });

  $(".zzz-vis_left").click(function(){
    $(".zzz-thumbs li:first-child").stop(true,true).animate({"marginLeft":"+=135px"},500,function(){
      $(".zzz-thumbs li:last-child").prependTo(".zzz-thumbs");
      $(this).css({"marginLeft":"0"});
    });
    return false;

  });

  /* ZZZ 갤러리 */
  
  $(".zzz-thumbs li").click(function(){

    let charName = $(this).attr('data-alt');
    console.log(`charName:${charName}`);

    // $('.'+charName).parent().find('li').removeClass('activeS');
    // $('.'+charName).siblings(this).removeClass('activeS');
    
    $('.'+charName).siblings(this).removeClass('activeS');
    $('.'+charName).addClass('activeS');
  });

  /* ZZZ 배너영역 */
  function zzzbannerAuto(){

    $(".zzz-ban ul").stop(true,true).animate({"marginLeft":"-=600px"},700,function(){
      $(".zzz-ban ul li:first-child").appendTo(".zzz-ban ul");
      $(this).css({"marginLeft":"0px"});
    });
  };
  Zbauto = setInterval(zzzbannerAuto,3000);

  $(".zzz-ban").hover(function(){
    clearInterval(Zbauto);
  },function(){
    Zbauto = setInterval(zzzbannerAuto,3000);
  });

  $(".zzz-ban_btn .zzz-ban_right").click(function(){
    clearInterval(Zbauto);
    $(".zzz-ban ul").stop(true,true).animate({"marginLeft":"-=600px"},700,function(){
      $(".zzz-ban ul li:first-child").appendTo(".zzz-ban ul");
      $(this).css({"marginLeft":"0px"});
    });
    return false
  });

  $(".zzz-ban_btn .zzz-ban_left").click(function(){
    clearInterval(Zbauto);
    $(".zzz-ban ul").stop(true,true).animate({"marginLeft":"+=600px"},700,function(){
      $(".zzz-ban ul li:last-child").prependTo(".zzz-ban ul");
      $(this).css({"marginLeft":"0px"});
    });
    return false
  });



});