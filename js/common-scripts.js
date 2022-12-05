
(function($){
	$(function(){


    $('input').each(function () {
        var $_this = (this)
        $('input').on('keyup', function () {
            var $$_this = $(this)

            if ($$_this.val() == '') {
                $$_this.parent().removeClass('focused');
            } else {
                $$_this.parent().addClass('focused');
            }
        });

    })
     
	})// End ready function.
})(jQuery)

