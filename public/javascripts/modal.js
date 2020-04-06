(function($) {

    $.fn.openModal = function(modalId, cb) {
        var $modal = $('#' + modalId);

        $('[data-type="accept"]', $modal).click(function(event) {
            $modal.modal('hide');
            if(cb) cb(event);
        });

        $modal.modal('show');
    }

})(jQuery);