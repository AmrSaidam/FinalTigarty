$(window).ready(function () {

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
        console.log('Counter'+$counter);

        $count = $('table tr').lenght;

        console.log($count);
        $('table').append(
            $('<tr>').attr({}).append($('<td>').attr({}).html($counter),
                $('<td>').attr({}).append($('<input>').attr({
                    id: "productName",
                    name: "productName[]",
                    type: "text",
                    placeholder: "  اسم المنتج ",
                  //  style: "width:100%; height: auto; right:0  !important;",
                    class: "form-control"

                })),
                $('<td>').attr({}).append($('<input>').attr({

                    id: "productAmount",
                    name: "productAmount[]",
                    type: "text",
                    placeholder: " الكمية  ",
                   // style: "width:100%; height: auto;",
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
//    $ctrl('I', function(s) {
//        alert(s);
//    }, ["Control D pressed"]);
//    if (e.ctrlKey && e.ctrlKey)
//    {
//alert('Amr Sadam');
//
//    }
});

$('input[id= "productName"]').focusin(function () {

    $(this).css('border-color','#e4e5e7');

});

$('input[id= "productName"]').focusout(function () {


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


            $productAmount.val('');
            $productSum.html('');
            $($id).css('border-color','red');
            //$($id).tooltip()
            //    .attr('data-original-title', 'السلعة غير موجودة في هذا المتجر ')
            //    .tooltip('fixTitle')
            //    .tooltip('show').attr('options', {autoShow: true, autoRefresh: true, autoClose: true});

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


$('input[id= "productName"]').keyup(function () {


    $.ajax({
        method: 'get',
        url: allProductName,
        data: {body: '', postId: '', _token: token}

    }).done(function (msg) {
        $allProducts = msg['message'];
        console.log($allProducts);

    });


    var normalize = function (term) {
        var ret = "";
        for (var i = 0; i < term.length; i++) {
            ret += term.charAt(i);
        }
        return ret;
    };

    $(this).autocomplete({
        source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep($allProducts, function (value) {
                value = value.label || value.value || value;
                return matcher.test(value) || matcher.test(normalize(value));
            }));


        },

        change: function (event, ui) {

            if (ui.item === null) {

            }
        }

    });
});

$('input[id= "productAmount"]').focusout(function () {


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
        }


    });


});
