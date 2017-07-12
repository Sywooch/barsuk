$(document).on('ready', function () {

    // index.php

    $('body').on('click', '#CreateContractor', function () {

        var modal = $('#modal-first');
        var href = $(this).attr('value');
        var modal_content = modal.find('#modalFirstContent');
        modal_content.html('');
        var index_highest = 0;
        /* modal.each(function () {
         var index_current = parseInt($(this).css("zIndex"), 1);
         if (index_current > index_highest) {
         index_highest = index_current;
         }
         });*/

        $.post(href, function (data) {
            modal_content.html(data);
            modal.modal('show');
        }).fail(function (data) {
            var n = Noty('id');
            $.noty.setText(n.options.id, data.responseText);
            $.noty.setType(n.options.id, 'error');

        })

        modal.on('hidden.bs.modal', function (event) {
            modal_content.html('');
            $.pjax.reload({container: '#contractors_grid'});

            return false;
            event.stopPropagation();
            /* $('#pjax_add_product').on('pjax:end', function () {
             alert("pjax_add_product");
             $.pjax.reload({container: '#pjax_products', timeout: 5000});
             });*/
        });


    });

})

