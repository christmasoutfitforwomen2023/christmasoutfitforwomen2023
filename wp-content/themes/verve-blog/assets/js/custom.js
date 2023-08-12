(function ($) {

  /* search toggle */
  $('body').click(function (evt) {
    if (!($(evt.target).closest('.header-search-content').length || $(evt.target).hasClass('search-toggle'))) {
      if ($(".search-toggle").hasClass("search-active")) {
        $(".search-toggle").removeClass("search-active");
        $(".search-box").slideUp("slow");
      }
    }
  });
  $(".search-toggle").click(function () {
    $(".search-box").toggle("slow");
    if (!$(".search-toggle").hasClass("search-active")) {
      $(".search-toggle").addClass("search-active");

    }
    else {
      $(".search-toggle").removeClass("search-active");
    }
  });


  jQuery('.site-header #primary-menu').meanmenu({
    meanMenuContainer: '.site-header .main-navigation',
    meanScreenWidth: "767",
    meanRevealPosition: "right",
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".site-header").removeClass("fixed-site-header");
    } else {
      $(".site-header").addClass("fixed-site-header");
    }
  });

  /* back-to-top button*/
  $('.back-to-top').hide();
  $('.back-to-top').on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });

  $(window).scroll(function () {
    var scrollheight = 400;
    if ($(window).scrollTop() > scrollheight) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut();
    }
  });

  /**
   * Clock Class.
   */
  class Clock {
    /**
     * Constructor
     */
    constructor() {
      this.initializeClock();
    }

    /**
     * initializeClock
     */
    initializeClock() {
      setInterval(() => this.time(), 1000);
    }

    /**
     * Numpad
     *
     * @param {String} str String
     *
     * @return {string} String
     */
    numPad(str) {
      const cStr = str.toString();
      if (2 > cStr.length) {
        str = 0 + cStr;
      }
      return str;
    }

    /**
     * Time
     */
    time() {
      const currDate = new Date();
      const currSec = currDate.getSeconds();
      const currMin = currDate.getMinutes();
      const curr24Hr = currDate.getHours();
      const ampm = 12 <= curr24Hr ? 'PM' : 'AM';
      let currHr = curr24Hr % 12;
      currHr = currHr ? currHr : 12;

      const stringTime =
        currHr +
        ':' +
        this.numPad(currMin) +
        ':' +
        this.numPad(currSec);
      const timeEmojiEl = $('#time-emoji');

      if (5 <= curr24Hr && 17 >= curr24Hr) {
        timeEmojiEl.text('🌞');
      } else {
        timeEmojiEl.text('🌜');
      }

      $('.header-data-time-wrap .has-time-prefix').text(stringTime);
      $('.header-data-time-wrap .has-time-suffix').text(ampm);

    }
  }
  new Clock();

  /**
   * Example of starting a plugin with options.
   * I am just passing some of the options in the following example.
   * you can also start the plugin using $('.marquee').marquee(); with defaults
  */
  $('.marquee').marquee({
    speed: 50,
    direction: 'left',
    delayBeforeStart: 0,
    duplicated: true,
    pauseOnHover: true,
    startVisible: true
  });

})(jQuery);
