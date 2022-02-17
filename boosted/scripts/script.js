function testWebP(e) {
  var o = new Image();
  (o.onload = o.onerror =
    function () {
      e(2 == o.height);
    }),
    (o.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
}
testWebP(function (e) {
  1 == e
    ? document.querySelector("body").classList.add("webp")
    : document.querySelector("body").classList.add("no-webp");
}),
  $(document).ready(function () {
    $(".header__burger").click(function (e) {
      $(".header__burger, .header__menu").toggleClass("active"),
        $("body").toggleClass("lock");
    });
  }),
  $(document).ready(function () {
    $(".header__link").click(function (e) {
      $(".header__burger, .header__menu").removeClass("active"),
        $("body").removeClass("lock");
    });
  }),
  $(".slider__items").slick({
    infinite: !0,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: !0,
    centerMode: !1,
    autoplaySpeed: 2e3,
    responsive: [
      {
        breakpoint: 1300,
        settings: { arrows: !1, centerMode: !1, slidesToShow: 5 },
      },
      {
        breakpoint: 900,
        settings: { arrows: !1, centerMode: !0, slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { arrows: !1, centerMode: !0, slidesToShow: 2 },
      },
      {
        breakpoint: 490,
        settings: { arrows: !1, centerMode: !0, slidesToShow: 1 },
      },
    ],
  }),
  $(document).ready(function () {
    $("a.scrollto").click(function () {
      (elementClick = $(this).attr("href")),
        (destination = $(elementClick).offset().top),
        $("html,body").animate({ scrollTop: destination - 66 }, 1100);
    });
  });
