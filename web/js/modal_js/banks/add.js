$(document).on('ready', function () {

    // index.php


    $('#modalButtonBanks').click(function () {
        var modal = $('#modal-banks');
        var href = $(this).attr('value');
        var modal_content = modal.find('#modalContentBanks');
        modal_content.html('');

        $.post(href, function (data) {
            modal_content.html(data);
            modal.modal('show');
        }).fail(function (data) {
            var n = Noty('id');
            $.noty.setText(n.options.id, data.responseText);
            $.noty.setType(n.options.id, 'error');

        })

        modal.on('hidden.bs.modal', function (event) {
            $.pjax.reload({container: '#pjax_products'});
            modal_content.html('');
            return false;
            /* $('#pjax_add_product').on('pjax:end', function () {
             alert("pjax_add_product");
             $.pjax.reload({container: '#pjax_products', timeout: 5000});
             });*/
        });


    });


})

