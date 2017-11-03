(function ($, Drupal) {
    Drupal.behaviors.mymoduleTest = {
        attach: function (context, settings) {

            $('.hasTooltip').each(function() {
                console.log(this);
                $(this).qtip({
                    content: {
                        text: $(this).next('div')
                    }
                });
            });

        }
    };
})(jQuery, Drupal);