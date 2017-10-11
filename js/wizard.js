(function ($) {

  var wizardName = prompt('What\s your Wizrds name?', 'Harry'),
    target = 1000;

  // Greetings
  console.log('You\'re a Wizard ' + wizardName);
  console.log('Start by casting a spell...\nType the following command into the console and hit enter:\n$.wizard.cast();')

  $('#wizard-name').text(wizardName);
  $('#target').html('<h2>Enemy health ' + target + ' 👾</h2>');

  function rollDice(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $.wizard = {
    name: wizardName,
    cast: function () {
      var $wizard = $('.wizard');
      console.log('Spell cast');

      $wizard.removeClass('wizard--idle');
      $wizard.addClass('wizard--attack');

      $('.wizard--attack').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          console.log('Spell cast completed');
          $wizard.removeClass('wizard--attack');
          $wizard.addClass('wizard--idle');
        });

      if (target > 0) {
        target = target - rollDice();
      } else {
        console.log('Enemy defeated!');
        alert('You Win!!! 🏆 \nThat monster 👾 never stood a chance \n👏👏👏👏👏👏👏👏👏👏👏👏');
      }


      console.log('Enemy health remaining ' + target);

      $('#target').html('<h2>Enemy health ' + target + ' 👾</h2>');

      return rollDice();
    }
  }

  $('#cast-spell').on('click', function(){
    $.wizard.cast();
  });


})(jQuery);