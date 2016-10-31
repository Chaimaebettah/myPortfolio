'use strict';
function filterElements($triggerElements, $displayElements, allElementsName){
  $triggerElements.on('click', 'a', function(event){
    var $triggerId = $(this).attr('id');
    if($triggerId === allElementsName){
      $displayElements.show();
    } else {
      $displayElements.hide();
      $displayElements.each(function(){
        if($(this).attr('data-category') === $triggerId) {
          $(this).fadeIn();
        }
      });
    }
  });
}

filterElements($('.buttons-container'), $('.project-template'), 'all');
filterElements($('.navigation ul'), $('section'), 'home');

// function displaySections(){
//
// }
