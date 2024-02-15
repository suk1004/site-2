$(document).ready(function(){

  /* header------------------------------------ */
  $(".gnb-main").hover(function(){
    $(this).find(".sub-menu").stop().slideDown();
  },function(){
    $(this).find(".sub-menu").stop().slideUp();
  });

  /* main-------------------------------------- */
  let $img = $(".changeimg ul li");
  let $text = $(".changeimg ul li .des")
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0;
  let idx = 0;
  let oldText = 0;
  let newText = 0;
  let img_n = $img.length;

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).removeClass("imgVisible");
      $img.eq(idx).addClass("imgVisible");
    }
    oldidx = idx;
  };

  function changeText(newText){
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx= 0;
    }
    changeImg(idx);
  }

  function autoText(){
    newText++;
    if(newText>img_n-1){
      newText=0;
    };
    changeText(newText);
  };

  timer = setInterval(changeAuto,7000);

  //비주얼하단버튼
  $btn.click(function(){
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,5000);
  });


  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){
      idx = img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,5000);
  })

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){
      idx= 0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,5000);
  })


  /* 글로벌 오피스 페이지 세계지도 Dot */
  $(".globalBox ul li:first").click(function(){
    $(".city:first").siblings().removeClass("activeDot");
    $(".city:first").addClass("activeDot");
  });
  $(".globalBox ul li:nth-child(2)").click(function(){
    $(".city:nth-child(2)").siblings().removeClass("activeDot");
    $(".city:nth-child(2)").addClass("activeDot");
  });
  $(".globalBox ul li:nth-child(3)").click(function(){
    $(".city:nth-child(3)").siblings().removeClass("activeDot");
    $(".city:nth-child(3)").addClass("activeDot");
  });
  $(".globalBox ul li:nth-child(4)").click(function(){
    $(".city:nth-child(4)").siblings().removeClass("activeDot");
    $(".city:nth-child(4)").addClass("activeDot");
  });
  $(".globalBox ul li:nth-child(5)").click(function(){
    $(".city:nth-child(5)").siblings().removeClass("activeDot");
    $(".city:nth-child(5)").addClass("activeDot");
  });

  /* 오피스 페이지 탭메뉴 */
  $(".selectBox-sub li").click(function(){
    $(this).addClass("activeTap");
    $(this).siblings().removeClass("activeTap");
    let result = $(this).attr("data-alt");

    $(".tabAll").removeClass("activeTap");
    $("#"+result).addClass("activeTap").hide().fadeIn();
  });

  /* 오피스 페이지 selectBox */
  $(".selectBox-main").click(function(){
    $(this).find(".selectBox-sub").stop().slideToggle();
  });

  /* 원신 페이지 아코디언 탭 */
  $(".title").click(function(){

    $(this).siblings().removeClass("activeSub");
    $(this).toggleClass("activeSub");

    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

    let dataImg = $(this).attr("data-image");
    $(".container2_bg img").attr("src",dataImg).hide().fadeIn();
  });


  /* 스타레일 아코디언 탭속의 탭 */
  $(".thumbnail img").click(function(){
    $(this).addClass("activeThumbnail");
    $(this).siblings().removeClass("activeThumbnail");
    $(this).stop().fadeIn();
    $(".subContent-text .subContent-des").removeClass("activeText");
    $("#"+$(this).attr("data-alt")).addClass("activeText");
  });

  $(".firstTab").click(function(){
    $(this).addClass("selected");
    $(this).siblings("dt").removeClass("selected");
    $(this).siblings("dd").stop().hide();
    $(this).next().stop().show();
    $(".subContent-text>div:first-child").addClass("activeText");
    $(".subContent-text>div:not(:first-child)").removeClass("activeText");
    $(".thumbnail img:first-child").addClass("activeThumbnail");
    $(".notFirst").removeClass("activeThumbnail");
  });




  /* 뉴스페이지 비주얼 배너 */
  function bannerAuto(){

    $(".ban ul").stop(true,true).animate({"marginLeft":"-=350px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({"marginLeft":"0px"});
    });
  };
  bauto = setInterval(bannerAuto,3000);

  $(".ban").hover(function(){
    clearInterval(bauto);
  },function(){
    bauto = setInterval(bannerAuto,3000);
  });

  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({"marginLeft":"-=350px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({"marginLeft":"0px"});
    })
  });

  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({"marginLeft":"+=350px"},500,function(){
      $(".ban ul li:last-child").prependTo(".ban ul");
      $(this).css({"marginLeft":"0px"});
    })
  });
  
  /* 뉴스페이지 탭메뉴 */
  $("#tabMenu ul li").click(function(){
    $(this).addClass("activeTap");
    $(this).siblings().removeClass("activeTap");

    let result = $(this).attr("data-alt");

    $(".newsGrid").removeClass("activeTap");
    $("#"+result).addClass("activeTap").hide().fadeIn();
  });

  /* 게임 페이지 월페이퍼 갤러리 */
  let goldidx=0;
  let gidx=0;

  function galleryImg(gidx){

    if(goldidx != gidx){

      $(".thumbs li").eq(goldidx).css({"opacity": 0.3});
      $(".thumbs li").eq(gidx).css({"opacity": 1});
      $(".largeImg li").eq(goldidx).stop().fadeOut(300);
      $(".largeImg li").eq(gidx).stop().fadeIn(300);
    };
    goldidx=gidx;
  };

  $(".thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx);
  })

  /* Swipe.js */
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
    
  });

  /* 플레이 스탑 버튼 */
  $(".playup").hide();
  $(".playup").on("click",function(){
    $(".stopup").show();
    $(".playup").hide();
    swiper.autoplay.start();
    return false;
  })
  $(".stopup").on("click",function(){
    $(".playup").show();
    $(".stopup").hide();
    swiper.autoplay.stop();
    return false;
  })

});