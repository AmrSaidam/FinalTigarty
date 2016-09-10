/**
 * Created by Amr Saidam on 7/1/2016.
 */
$(document).ready(function()
{

    $(this).dataTableInitialization();
    $(this).dataTablePreparations();
    //$("div.toolbar").html('<b>Custom tool bar! Text/images etc.</b>');


   // $('#myid').contents().last().replaceWith('my new text');
    //
    //$paginateId = parseInt($('.active').children('span').html());
    //$('.pagination').children().each(function(index , value){
    //
    //    if(index == 10  )
    //    {
    //
    //        $(this).children('li').removeClass('disabled');
    //    }
    //});
    //console.log();
    //if($paginateId <= 5)
    //{
    //
    //}


    //$('#pagination').ready(function(){
    //
    //});
});

//$('input[id="fullDate"]').click(function(){
//    $('input[id="firstDate"]').val('');
//    $('input[id="lastDate"]').val('');
//});
//
//$('input[id="firstDate"]').click(function(){
//    $('input[id="fullDate"]').val('');
//});

//
//$('#search').click(function()
//{
//    //if($('input[id="fullDate"]').length > 0 )
//   // {
//       $contentForSearch = $('input[id="fullDate"]').val();
//   // }
//
//    console.log('Hi');
//    $.ajax({
//        method: 'get',
//        url: getResult,
//        data: {body: $contentForSearch, postId: '', _token: token}
//
//    }).done(function (msg) {
//
//        if(msg['status'] == '200')
//        {
//
//           // $('').ready(function(){auto_re});
//           // saleInvoices = msg.saleInvoices;
//           // $("tbody").fadeIn();
//           // console.log( msg['saleInvoices']);
//            //
//            //$.each(msg['message'] , function(index , value){
//            //
//            //
//            //
//            //    console.log('the value is '+value['SInvID']);
//            //    $('tbody ').append(
//            //        $('<tr>').attr({}).append(
//            //            $('<td>').attr({}).html(index+1),
//            //            $('<td>').attr({}).html(value['SInvID']),
//            //            $('<td>').attr({}).html(value['InvoiceTotal']),
//            //            $('<td>').attr({}).html(value['created_at'])
//            //
//            //        )
//            //
//            //    );
//            //
//            //});
//            //
//            //
//            //$("tbody tr").quickPagination({pagerLocation:"both",pageSize:"10"});
//
//        }
//        //$allProducts = msg['message'];
//        //console.log($allProducts);
//
//    });
//});
(function($){
    $.fn.dataTablePreparations = function(){

        //Search customization
        // $(".dataTables_paginate").addClass('col-sm-12');
        // $(".dataTables_paginate").parent('div').removeClass('col-sm-6').addClass('col-sm-12 ');
        // $(".dataTables_info").parent().remove();
        // $(".dataTables_filter").children('label').contents().first().replaceWith('بحث');
        // $(".dataTables_filter").children('label').css('font-size','20px');
        // $(".dataTables_filter").children('label')
        //                         .children('input')
        //                         .css('margin-right','10px')
        //                         .addClass('input-group date')
        //                         .attr('data-date-format','yyyy-mm-dd').attr('placeholder','البحث عن طريق التاريخ ');
        //
        //
        //
        // //customizing the number of rows
        // $('.dataTables_length').children('label').contents().first().replaceWith('عرض');
        // $('.dataTables_length').children('label').contents().last().remove();
        // $(".dataTables_length").children('label').css('font-size','20px');
        // $(".dataTables_length").children('label').children('select').css('margin-right','10px');
    }
})(jQuery);

(function($){
    $.fn.dataTableInitialization = function(){
        $('#example2').dataTable();
    }
})(jQuery);