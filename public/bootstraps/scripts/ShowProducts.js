
$('#search').click(function () {
    $productName = $(this).parent().parent().children('#searchContent');

    $.ajax({
        method: 'post',
        url: searchForProduct,
        data: {body: '' + $productName.val(), postId: '', _token: token}

    }).done(function (msg) {
        console.log(msg['message']);
        if (msg['status'] == '200') {
            $('tbody tr').hide();
            $('tbody').append(
                $('<tr>').append(
                    $('<td>').attr({}).html(0),
                    $('<td>').attr({}).html(msg['message'][0]['Name']),
                    $('<td>').attr({}).html(msg['message'][0]['WholeQuantity']),
                    $('<td>').attr({}).html(msg['message'][0]['WholePrice']),
                    $('<td>').attr({}).html(msg['message'][0]['SingleUnitAmount']),
                    $('<td>').attr({}).html(msg['message'][0]['SingleUnitPrice'])
                )
            );
        }else if((msg['status'] == '402'))
        {
            $('tbody tr').show(true);
        }

    });
});
