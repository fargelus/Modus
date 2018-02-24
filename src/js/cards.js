$(() => {
  const $cards_deck_item = $('.cards-deck__item');

  $cards_deck_item.hover(function() {
    const $current_popup_block = $(this).children('.popup-block');

    const fade_options =
    { 'start': function() {
                  if ($(this).is(':visible')) {
                      $(this).css('display', 'flex');
                    }

                  const $popup_childrens = $(this).children();
                  if ($popup_childrens.hasClass('smooth-up')) {
                      $popup_childrens.removeClass('smooth-up').addClass('smooth-down');
                  } else {
                    $popup_childrens.removeClass('smooth-down').addClass('smooth-up');
                  }
                },
    };

    $current_popup_block.fadeToggle(fade_options);
  });
});
