(function($){ 
    $(document).ready(function () {
        $('.delete-dish').click(function (event) {
            event.preventDefault();

            var dishId = $(event.target).attr('data-id');
    
            $.fn.openModal('confirm-modal', function () {
                $.ajax({ url: '/dish/' + dishId, method: 'delete' })
                    .done(function(result) { window.location.reload(); })
                    .fail(function(err) { throw err; });
            })
        })
    });
})(jQuery);
