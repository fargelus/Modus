$(() => {
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
});
