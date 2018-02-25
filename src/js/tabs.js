$(() => {
  function showTabContentOnClick() {
    $('.js-button--tab').click(function() {
      const current_tab_name = $(this).text();

      // Граничный случай
      if (current_tab_name === 'All') {
        $('.cards-deck__item').each(function(){
          if (!$(this).is(':visible')) {
            $(this).show('slow');
          }
        });

        return;
      }

      const $js_tab_anchor = $('.js-tab-anchor');
      let hidden_elements_counter = 0;
      $js_tab_anchor.each(function() {
        const is_name_equal_tab = $(this).text()
                             .includes(current_tab_name);

        const $parent_deck_item = $(this).parents('.cards-deck__item');
        // Клик после другого таба
        if (is_name_equal_tab) {
          if (!$parent_deck_item.is(':visible')) {
            $parent_deck_item.show('slow');
          }
        } else {
          $parent_deck_item.hide('slow');
          hidden_elements_counter += 1;
        }
      });

    });
  }

  showTabContentOnClick();
});
