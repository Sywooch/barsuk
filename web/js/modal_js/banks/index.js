/**
 * Created by ZloyBarsuk on 30.06.2017.
 */
$(document).on('ready', function () {

// обновление контрагента и его инфы
    $('body').on('click', 'td>a.update_banks', function (event) {

        event.stopPropagation();
        var href = $(this).attr('href');
        var data_id = $(this).attr('data-model-id');
        var modal = $('#modal-banks');
        var modal_content = modal.find('#modalContentBanks');
        modal_content.html('');

        /*  $.post(href).done(function (data) {
         modal_content.html(data);
         modal.modal('show');
         });*/
        $.post(href, function (data) {
            modal_content.html(data);
            modal.modal('show');
        }).fail(function (data) {
            var n = Noty('id');
            $.noty.setText(n.options.id, data.responseText);
            $.noty.setType(n.options.id, 'error');

        })


        /*$.ajax({
         type: "POST",
         url: href,
         //  data: data,
         // dataType: dataType

         success: function (data) {
         $('.results').html(data);
         },
         error: function (data) {
         // alert(JSON.stringify(data.responseText));
         //  alert(data.responseText);
         var n = Noty('id');
         $.noty.setText(n.options.id, data.responseText);
         $.noty.setType(n.options.id, 'error');
         $.pjax.reload({container: '#pjax_banks', timeout: 2000});
         },
         });*/


        return false;

    });
});