$(window).ready(function () {

    $.ajax({
        method: 'get',
        url: allProductName,
        data: {body: '', postId: '', _token: token}

    }).done(function (msg) {

        $allProducts = msg['message'];
        console.log($allProducts);

    });


    var date = new Date();
    $.ajax({
        method: 'get',
        url: invoiceBill,
        data: {body: '', postId: '', _token: token}

    }).done(function (msg) {
        if (msg['status'] == '200') {
            // console.log('Amr'+msg);
            $('#billID').html(' ' + msg['message']);
        }

        $('#invoiceDate').html(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
        $('#invoiceTime').html(date.getHours() + ':' + date.getMinutes());

    });
    //
   
    $('#SaleForm').validate({


        errorPlacement: function(error, element) {
            //alert('invalid input'); //note this is called ONLY IF validation fails
        }


    });



});

$(window).keypress(function (event) {

    if (event.ctrlKey) {
        // Save Function
        event.preventDefault();
        alert('Amr Sadam');

        $counter = 0;
        $('input[id= "productName"]').each(function (index) {
            console.log(index);
            $index = index;
            $counter++;
        });
        console.log('Counter' + $counter);

        $count = $('table tr').lenght;

        console.log($count);
        $('table').append(
            $('<tr>').attr({}).append($('<td>').attr({}).append(
                $('<div>').attr({
                    id: 'delete',
                    class: 'btn btn-danger delete-row',
                    onclick: "$(this).myfunction()"
                }).append(
                    $('<i>').attr({
                        class: "glyphicon glyphicon-minus"

                    })
                )
                ),
                $('<td>').attr({}).append($('<input>').attr({
                    id: "productName",
                    name: "productName[]",
                    type: "text",
                    placeholder: "  اسم المنتج ",
                    onfocusout: "$(this).productNameValidationAndAutoComplete()",
                    class: "form-control"

                })),
                $('<td>').attr({}).append($('<input>').attr({

                    id: "productAmount",
                    name: "productAmount[]",
                    type: "text",
                    placeholder: " الكمية  ",
                    onfocusout: "$(this).AmountValidation()",

                    class: "form-control"

                })),
                $('<td>').attr({
                    id: "productSum",
                    name: "productSum[]",
                    class: "productSumStyle"
                })
            )
        );


    }

});

(function ($) {

    $.fn.productNameFocusIn = function () {

        $('#SaleForm').validate({
            onsubmit:true
        });

       // $(this).attr('aria-required','false');
        $(this).removeClass('error').addClass('valid');
      //  $(this).css('border-color', '#e4e5e7');
    }
})(jQuery);


(function ($) {


    $.fn.productAmountFocusIn = function () {

        $('#SaleForm').validate({
            onsubmit:true
        });

     //   $(this).attr('aria-required','false');
        $(this).removeClass('error').addClass('valid');
     //   $(this).css('border-color', '#e4e5e7');
    }
})(jQuery);

$('input[id= "productName"]').focusin(function () {

    $('#SaleForm').validate({
        onsubmit:true
    });


   // $(this).attr('aria-required','false');
    $(this).removeClass('error').addClass('valid');
  //  $(this).css('border-color', '#e4e5e7');

});

$('input[id= "productAmount"]').focusin(function () {

    $('#SaleForm').validate({
        onsubmit:true
    });

    //
   // $(this).attr('aria-required','false');
    $(this).removeClass('error').addClass('valid');
    //$(this).css('border-color', '#e4e5e7');

});

$('input[id= "productName"]').focusout(function () {


    $id = $(this);
    $productAmount = $(this).parent().parent().children().children('#productAmount');
    $productSum = $(this).parent().parent().children('#productSum');
    $inputValue = $(this).val();

    console.log('check ' + $productAmount);
    console.log('sum ' + $productSum.text());

    $count = 0;
    $index = 0;
    $(this).each(function (index) {

        if ($(this).val() == '' || $(this).val() == ' ') {
            $count++;
        }
        $index = index;
    });


    if ($productAmount.val() != '') {
        console.log('check' + $productAmount.val());
        $sentBody = $id.val() + '/' + $productAmount.val();

    } else {
        $sentBody = $id.val() + '/' + 'null';
    }

    $.ajax({
        method: 'POST',
        url: url,
        data: {body: $sentBody, postId: '', _token: token}

    }).done(function (msg) {
        if (msg['status'] == '403') {

          //  $id.setCustomValidity('');

            $('#SaleForm').validate({
                onsubmit:false
            });

         //   $id.attr('aria-required','true');
            $id.removeClass('valid').addClass('error');
            //$('#SaleForm').validate({
            //
            //
            //    errorPlacement: function(error, element) {
            //        //alert('invalid input'); //note this is called ONLY IF validation fails
            //    }
            //
            //
            //});

            $productAmount.val('');
            $productSum.html('');
           // $($id).css('border-color', 'red');

        } else if (msg['status'] == '202') {
            console.log(msg['message']);
            $productSum.html(msg['message']);
            $sum = 0;
            $('td[id= "productSum"]').each(function (index) {

                console.log('index = ' + index + ' content = ' + $(this).text());
                if ($(this).text() != '') {
                    console.log(index);
                    $sum = $sum + parseInt($(this).text());

                }
            });
            $('#invoiceSum').val($sum);

        }
    });


});


$('input[id= "productName"]').keypress(function () {

    /* make $allProduct array be fetched  when the page be loaded at first time */

    $.ajax({
        method: 'get',
        url: allProductName,
        data: {body: '', postId: '', _token: token}

    }).done(function (msg) {

        $allProducts = msg['message'];
        console.log($allProducts);

    });

    $(this).autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: $allProducts,
        lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function (suggestion) {
            $(this).val(suggestion.value);
        }
    });

});


$('input[id= "productAmount"]').focusout(function (event) {

    $id = $(this);
    $productSum = $(this).parent().parent().children('#productSum');
    $productName = $(this).parent().parent().children().children('#productName').val();



    //alert('HI');

    //$.validator.messages.required = '';
    //{
    //    rules:{
    //        productAmount : {
    //            required: true,
    //            number: true
    //        }
    //    },
    //     message:{
    //         productAmount:{
    //             required: "Ahi"
    //         }
    //
    //     }
    // });


    //
    //$( "#productAmount" ).rules( "add", {
    //    required: true,
    //    minlength: 2,
    //    messages: {
    //        required: "Required input",
    //        minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
    //    }
    //});
    //$validator = $('#SaleForm').validate(
    //    {
    //        focusInvalid: true,
    //        rules: {
    //
    //            'productAmount': {
    //
    //                required: true,
    //                number: true,
    //                text:false
    //
    //            }
    //        },
    //
    //        invalidHandler: function (form, validator) {
    //          alert('Amr Saidam');
    //
    //        }
    //
    //
    //    }
    //);

    //$validator.focusInvalid();

    // $('SaleForm').submit(function () {
    //     return false;
    // });
    //console.log($validator);
    if ($(this).val() == '') {
        $productSum.html('');
    }

    if ($productName == '') {
        $(this).val('');
        $productSum.html('');
    }

    if ($(this).val() < 0) {
        $(this).val('');
        $productSum.html('');
    }
    $.ajax({
        method: 'POST',
        url: checkAmount,
        data: {body: $productName + '/' + $id.val(), postId: '', _token: token}

    }).done(function (msg) {

        if (msg['status'] == '200') {
            $productSum.html(msg['message']);
            $sum = 0;
            $counter = 0;
            $('td[id= "productSum"]').each(function (index) {

                console.log('index = ' + index + ' content = ' + $(this).text());
                if ($(this).text() != '') {
                    console.log(index);
                    $sum = $sum + parseInt($(this).text());
                    $counter++;

                }
            });

            $('#invoiceSum').val($sum);
            $('#invoiceTotal').html(' ' + $sum);
            $('#numberOfProducts').html(' ' + $counter);
            $(this).parent().parent().children().css();
            console.log('result of nothing ' + msg['message']);
        }else{

            $('#SaleForm').validate({
                onsubmit:false
            });


          //  $id.attr('aria-required','true');
            $id.removeClass('valid').addClass('error');}

    });


});


$('.delete-row').click(function () {

    $row = $(this).parent().parent();
    $row.remove();
});

$('.btn-success').click(function () {

    $id = $(this);

    $('table #body').append(
        $('<tr>').attr({}).append($('<td>').attr({}).append(
            $('<div>').attr({
                id: 'delete',
                class: 'btn btn-danger delete-row',
                onclick: "$(this).myfunction()"
            }).append(
                $('<i>').attr({
                    class: "glyphicon glyphicon-minus"

                })
            )
        ),
            $('<td>').attr({}).append($('<input>').attr({
                id: "productName",
                name: "productName[]",
                type: "text",
                placeholder: "  اسم المنتج ",
                onfocusout: "$(this).productNameValidationAndAutoComplete()",
                class: "form-control",
                onkeypress: "$(this).AutoComplete()",
                onfocusin: "$(this).productNameFocusIn()"

            })),

            $('<td>').attr({}).append($('<input>').attr({

                id: "productAmount",
                name: "productAmount[]",
                type: "text",
                placeholder: " الكمية  ",
                onfocusout: "$(this).AmountValidation()",
                class: "form-control",
                onfocusin: "$(this).productAmountFocusIn()",
                pattern:"^\\d$",
                required:"required"


            })),
            $('<td>').attr({
                id: "productSum",
                name: "productSum[]",
                class: "productSumStyle"
            })
        )
    );


    $('#body').children().children('#productName');
    if ($('#body').children().size() >= 4) {
        $('#tableContent').css('height', '400px').css('overflow', 'auto');

    }
});


(function ($) {
    $.fn.myfunction = function () {
        $row = $(this).parent().parent();
        $row.remove();

        if ($('#body').children().size() <= 5)
            $('#tableContent').css('height', '').css('overflow', '');
    };
})(jQuery);

(function ($) {
    $.fn.AmountValidation = function () {

        $id = $(this);
        $productSum = $(this).parent().parent().children('#productSum');
        $productName = $(this).parent().parent().children().children('#productName').val();

        if ($(this).val() == '') {
            $productSum.html('');
        }

        if ($productName == '') {
            $(this).val('');
            $productSum.html('');
        }

        if ($(this).val() < 0) {
            $(this).val('');
            $productSum.html('');
        }
        $.ajax({
            method: 'POST',
            url: checkAmount,
            data: {body: $productName + '/' + $id.val(), postId: '', _token: token}

        }).done(function (msg) {

            if (msg['status'] == '200') {
                $productSum.html(msg['message']);
                $sum = 0;
                $counter = 0;
                $('td[id= "productSum"]').each(function (index) {

                    console.log('index = ' + index + ' content = ' + $(this).text());
                    if ($(this).text() != '') {
                        console.log(index);
                        $sum = $sum + parseInt($(this).text());
                        $counter++;

                    }
                });

                $('#invoiceSum').val($sum);
                $('#invoiceTotal').html(' ' + $sum);
                $('#numberOfProducts').html(' ' + $counter);
                $(this).parent().parent().children().css();
                console.log('result of nothing ' + msg['message']);
            }else {

                $('#SaleForm').validate({
                    onsubmit:false
                });


           //     $id.attr('aria-required','true');
                $id.removeClass('valid').addClass('error');
                //
                //$('#SaleForm').validate({
                //
                //
                //
                //    rules:{
                //        "#productAmount" : {
                //            required: true,
                //            number: true
                //        }
                //    },
                //    errorPlacement: function(error, element) {
                //
                //    }
                //});

                //if($productAmmountValidator == null)
                //    console.log('Empty');
                //console.log('plus '+$productAmmountValidator);

                //   $id.css('border-color','red');
                //$productSum.html('');
                //$('#invoiceSum').val($('#invoiceSum').data('value'));
            }


        });

        //$('#SaleForm').children().children().children().css('background-color','red');

     //   console.log($('#SaleForm').children('#productAmount').lenght);

        $('input[id= "productAmount"]').each(function(index , value){
            if($(this).valid() == false)
                console.log('for loop index out it'+index);
        });

    };
})(jQuery);


(function ($) {
    $.fn.productNameValidationAndAutoComplete = function () {


        $productAmount = $(this).parent().parent().children().children('#productAmount');
        $productSum = $(this).parent().parent().children('#productSum');
        $inputValue = $(this).val();

        console.log('check ' + $productAmount);
        console.log('sum ' + $productSum.text());

        $count = 0;
        $index = 0;
        $(this).each(function (index) {

            if ($(this).val() == '' || $(this).val() == ' ') {
                $count++;
            }
            $index = index;
        });

        $id = $(this);
        if ($productAmount.val() != '') {
            console.log('check' + $productAmount.val());
            $sentBody = $id.val() + '/' + $productAmount.val();

        } else {
            $sentBody = $id.val() + '/' + 'null';
        }

        $.ajax({
            method: 'POST',
            url: url,
            data: {body: $sentBody, postId: '', _token: token}

        }).done(function (msg) {
            if (msg['status'] == '403') {

                $('#SaleForm').validate({
                    onsubmit:false
                });


               // $id.valid('true');
                $id.removeClass('valid').addClass('error');
                //$('#SaleForm').validate({
                //
                //    rules:{
                //        productName : {
                //            required: true
                //        }
                //    },
                //    errorPlacement: function(error, element) {
                //        //alert('invalid input'); //note this is called ONLY IF validation fails
                //    }
                //
                //
                //});

                $productAmount.val('');
                $productSum.html('');
              //  $($id).css('border-color', 'red');


            } else if (msg['status'] == '202') {
                console.log(msg['message']);
                $productSum.html(msg['message']);
                $sum = 0;
                $('td[id= "productSum"]').each(function (index) {

                    console.log('index = ' + index + ' content = ' + $(this).text());
                    if ($(this).text() != '') {
                        console.log(index);
                        $sum = $sum + parseInt($(this).text());

                    }
                });
                $('#invoiceSum').val($sum);

            }
        });


    };
})(jQuery);


$('#save').click(function () {

    $(this).focusin(true);
    $amountFlag = true;
    $Nameflag = true;
  //
  //console.log($('#SaleForm'));
  //  if($('#SaleForm').valid())
  //  {
  //      console.log('submit valid ');
  //  }
  //
  //  return false;
  //
   $('input[id= "productAmount"]').each(function(index , value){
       if($(this).hasClass('error') == true  || $(this).hasClass('valid') != true) {
          $(this).removeClass('valid').addClass('error');
           console.log('for loop index'+index);
           $amountFlag =  false;
       }
  
   });
   $('input[id= "productName"]').each(function(index , value){
        if($(this).hasClass('error') == true || $(this).hasClass('valid') != true) {
          $(this).removeClass('valid').addClass('error');
           console.log('for loop index'+index);
           $Nameflag =  false;
       }
   });
  //
  //  $('input[id= "productName"]').each(function(index , value){
  //      if($(this).valid() == false) {
  //          console.log('for loop index for Name'+index);
  //          $Nameflag =  false;
  //      }
  //
  //  });
  //
  //  return false;

  //  return $amountFlag != false && $Nameflag != false;
    //$flag = false;
    //$('input[id= "productName"]').each(function (index) {
    //    //$(this).hide(false);
    //    //$(this).css('background-color','red');
    //    //$(this).html('nnnnnnnnnnnnnnnnn');
    //    //$(this).val('ssssssssssssssssssss');
    //    console.log(index + ' ' + $(this).val());
    //    //console.log('lenght is '+value.val());
    //    $productAmount = $(this).parent().parent().children().children('#productAmount');
    //    if ($(this).val().length == 0) {
    //
    //        $(this).css('border-color', 'red');
    //
    //
    //        $flag = true;
    //
    //    }
    //    if ($productAmount.val().length == 0)
    //        $productAmount.css('border-color', 'red');
    //});
    //
    //
    //return $flag != true;
    //

});

(function ($) {
    $.fn.AutoComplete = function () {

        $.ajax({
            method: 'get',
            url: allProductName,
            data: {body: '', postId: '', _token: token}

        }).done(function (msg) {

            //$allProducts = msg['message'];
            //console.log($allProducts);

        });

        $(this).autocomplete({
            // serviceUrl: '/autosuggest/service/url',
            lookup: $allProducts,
            lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
                return re.test(suggestion.value);
            },
            onSelect: function (suggestion) {
                $(this).val(suggestion.value);
            }
        });

    }
})(jQuery);

$('#cancel').click(function () {
    location.reload();
});