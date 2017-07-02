/**
 * Created by ZloyBarsuk on 30.06.2017.
 */
$(document).on('ready', function () {

    $('body').on('click', 'td>a.delete_contractor', function (event) {
        if (confirm("Уверен, что хочешь удалить?")) {
            event.stopPropagation();
            var url = $(this).attr("href");
            $.ajax({
                'url': url,
                'type': 'POST',
                // 'data': form.serialize(),
                'cache': false,
                success: function (data) {
                    if (data === Object(data)) {
                        // Если success значит валидация не прошла
                        if (data.notify == 0) {
                            //Выводим ошибки валидации
                            /* $.each(data.validate, function(key, val) {
                             $("#example-form").yiiActiveForm("updateAttribute", key, "");
                             $("#example-form").yiiActiveForm("updateAttribute", key, [val]);
                             });*/
                            //   alert(JSON.stringify(data));
                         //   notyfy_alert(data);
                        } else {
                            if (data.notify == 1) {
                             //   notyfy_alert(data);
                                var n = Noty('id');
                                $.noty.setText(n.options.id, data.notify_text);
                                $.noty.setType(n.options.id, 'information');
                                $.pjax.reload({container: '#pjax_contractor', timeout: 2000});
                                //  $.pjax.reload({container: '#pjax_products', timeout: 2000});
                            }
                            else {
                                $.noty.setText(n.options.id, data.notify_text);
                                $.noty.setType(n.options.id, 'error');
                            }
                        }

                        return false;
                    }
                },

                error: function (data) {
                    console.log(JSON.stringify(data));
                    $.noty.setText(n.options.id, data.notify_text);
                    $.noty.setType(n.options.id, 'error');
                }
            });

            return false;
        }
        else {
            return false;
        }


    });

});