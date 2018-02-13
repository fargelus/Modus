$(() => {
  function scrollOnTopNavLinkClick() {
    $('.js-nav-link').each(function() {
      const $nav_link = $(this);
      const anchor_href = $nav_link.attr('href');
      const $section_anchor = $(anchor_href);
      const $root = $('html,body');

      $nav_link.click(() => {
        $root.animate({
          scrollTop: $section_anchor.offset().top
        }, 600);

        return false;
      });
    });
  }

  function mainNavVisibilityChange() {
    const $prior_nav = $('.prior-nav');
    $(window).scroll(function() {
      const scrool_value = $(this).scrollTop();
      const scroll_step = 40;
      if (scrool_value >= 5 * scroll_step) {
        $prior_nav.fadeIn();
      } else {
        $prior_nav.fadeOut();
      }
    });
  }

  scrollOnTopNavLinkClick();
  mainNavVisibilityChange();
});
