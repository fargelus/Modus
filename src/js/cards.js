$(() => {
  const $cards_deck_item = $('.cards-deck__item');
  $cards_deck_item.hover(function() {
    const $current_popup_block = $(this).children('.popup-block');
    $current_popup_block.slideToggle(
      { 'start': function() {
                  if ($(this).css('display') === 'block') {
                      $(this).css('display', 'flex');
                    }
                  }
      });
  });
});
