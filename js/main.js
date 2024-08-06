$(document).ready(function () {
  // ハンバーガーメニューのクリックイベント
  $(".hamburger").click(function () {
    $(this).toggleClass("open");
    $(".nav-list").toggleClass("open");
  });

  // コンセプト fadein スライダー
  $(".mainvisual-slide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // お客様の声スライダー
  $(".voices-slide").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // FAQ アコーディオン
  $(".js-accordion-question").click(function () {
    $(this).next(".js-accordion-answer").slideToggle();
    $(this).toggleClass("open");
  });
});

// スクロール時のフェードイン処理
$(window).scroll(function () {
  // コンセプト
  $(".text-fadein").each(function () {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();

    if (scroll > target - windowHeight + 100) {
      $(this).css({
        opacity: "1",
        transform: "translateY(0)",
      });
    }
  });

  // 選ばれる理由
  $(".img-fadein").each(function () {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();

    if (scroll > target - windowHeight + 200) {
      $(this).css({
        opacity: "1",
        transform: "translateZ(0)",
      });
    }
  });

  $(".text-fadein").each(function () {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();

    if (scroll > target - windowHeight + 200) {
      $(this).css({
        opacity: "1",
        transform: "translateZ(0)",
      });
    }
  });
});
