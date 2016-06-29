<!DOCTYPE html>
<html>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/invoice.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:25 GMT -->
<head>

    @include('TemplateMainComponent.IncodingHeader')

            <!-- Page title -->
    <title>HOMER | WebApp admin theme</title>


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory  -->
    <!--<link rel="shortcut icon" type="image/ico" href="favicon.ico" />-->

    <!-- Vendor styles -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

    <script>
        var token = '{{csrf_token()}}';
        var url = '{{route('checkName')}}';
        var allProductName = '{{route('allProductNames')}}';
        var checkAmount = '{{route('checkAmount')}}';
        var invoiceBill = '{{route('getReady')}}';
    </script>
    @include('TemplateMainComponent.CSSHeader')
    <link rel="stylesheet" type="text/css" href="{{URL::asset('tooltipster/dist/css/tooltipster.bundle.min.css')}}" />
    <script>
        function Send_Requet_For_PHP_File(ProductName) {


            alert("ِAmr saidam " + document.getElementById("ProductName").value);

            window.location.href = 'login.html';
            var xhtmlreq = new XMLHttpRequest();
            var url = "FetchForSalesPoint.php";

            var vars = "ProductName=" + ProductName;//+ "&Pass=" + Pass + "&Email=" + Email + "&Address=" + Address + "&Phone=" + Phone;
            xhtmlreq.open("POST", url, true);
            xhtmlreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhtmlreq.onreadystatechange = function () {
                if (xhtmlreq.readyState == 4 && xhtmlreq.status == 200) {

                }

            }


            xhtmlreq.send(vars);


        }
    </script>

    <style>
        .ui-autocomplete-input li
        {
            background-color: red;
        }
        .productSumStyle
        {
            text-align: center;
            vertical-align: center;
            font-size: 20px
        }

        .ui-menu .ui-menu-item input{
            background:red;
            height:10px;
            font-size:8px;
        }

        ul.ui-autocomplete.ui-menu{width:400px}

    </style>
</head>
<body>

<!-- Simple splash screen-->
@include('TemplateMainComponent.SimpleSplash')
        <!--[if lt IE 7]>
@include('TemplateMainComponent.InternetExplorerValidation')
        <!--[endif]-->

<!-- Header -->
@include('TemplateMainComponent.PageHeader')

        <!-- Navigation -->
@include('TemplateMainComponent.NavigationBar')

        <!-- Main Wrapper -->
@if(session()->has('quantityError'))

    {{--{{$quantityError}}--}}
    <p>dlllllllllllllllllllllllllllllllllll</p>
    {{session('quantityError')}}
    {!! var_dump( session('quantityError')) !!}

@endif

<div id="wrapper">

    <div class="normalheader transition animated fadeIn" dir="rtl">
        <div class="hpanel" dir="rtl">
            <div class="panel-body" dir="rtl">
                <a class="small-header-action" href="#">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>

                <h4 class="font-light m-b-xs" dir="rtl">
                    فاتورة بيع
                </h4>

            </div>
        </div>
    </div>

    <div class="content animate-panel">

        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">

                    <div class="panel-body p-xl">


                        <div class="row" style="padding-right:130px;padding-left:130px">

                            <div class="row" dir="rtl" style="font-size:16px;">
                                <div class="col-md-4">
                                    <div> رقم الفاتورة :<span id="billID"></span></div>
                                    <div> نوع الفاتور: فاتورة بيع</div>
                                    <div> تاريخ اصدار الفاتورة :<span id="invoiceDate"></span></div>

                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-4">
                                    <div> عدد السلع :<span id="numberOfProducts"></span></div>
                                    <div> المبلغ الاجمالي :<span id="invoiceTotal"></span></div>
                                    <div>وقت اصدار الفاتورة :<span id="invoiceTime"></span></div>
                                </div>

                            </div>
                            <form method="post" action="{{route('makeSale')}}" name="SaleForm" id="SaleForm">
                           <input type="hidden" name="_token" value="{{csrf_token()}}">
                                <div class="row">
                                    <hr/>
                                </div>
                                <div class="row" style=" ">

                                    <div id='tableContent' dir="rtl" style="height:400px; overflow:auto">
                                        <table class="table table-bordered table-striped" name="SaleTable" dir="rtl">
                                            <thead style="text-align: center">
                                            <tr style="font-size:18px;">
                                                <th style="text-align: center; width: 50px">الرقم</th>
                                                <th style="text-align: center; width: 300px">اسم المنتج</th>
                                                <th style="text-align: center; width: 100px">الكمية</th>
                                                <th style="text-align: center">السعر</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><input id="productName" name="productName[]" type="text"
                                                           placeholder="  اسم المنتج "
                                                           style="width:100%; height: auto; right:0  !important;" class="form-control" ></td>
                                                {{--<span class="tooltip" title="This is my span's tooltip message!">Some text</span>--}}
                                                <td><input id="productAmount" name="productAmount[]" type="text" placeholder=" الكمية  "
                                                           style="width:100%; height: auto;" class="form-control"></td><span id="auto"></span>
                                                <td id="productSum" name="productSum[]" class="productSumStyle"></td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><input id="productName" name="productName[]" type="text" placeholder="اسم المنتج "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td><input id="productAmount" name="productAmount[]" type="text" placeholder=" الكمية  "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td  id="productSum" name="productSum[]" class="productSumStyle" ></td>

                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><input id="productName" name="productName[]" type="text" placeholder="اسم المنتج "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td><input id="productAmount" name="productAmount[]" type="text" placeholder=" الكمية  "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td id="productSum" name="productSum[]" class="productSumStyle"></td>

                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td><input id="productName" name="productName[]" type="text" placeholder="اسم المنتج "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td><input id="productAmount" name="productAmount[]" type="text" placeholder=" الكمية   "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td id="productSum" name="productSum[]" class="productSumStyle"></td>

                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td><input id="productName" name="productName[]" type="text" placeholder="اسم المنتج "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td><input id="productAmount" name="productAmount[]" type="text" placeholder=" الكمية  "
                                                           style="width:100%; height: auto;" class="form-control"></td>
                                                <td id="productSum" name="productSum[]" class="productSumStyle"></td>

                                            </tr>

                                            </tbody>
                                            <tfoot>
                                            <tr style="font-size:18px;">
                                                <td colspan="3" style="text-align: center" > السعر الاجمالي</td>
                                                <td style="text-align: center"><input  id="invoiceSum" name="invoiceSum" contenteditable="false" class="form-control productSumStyle" style="text-align: center;" readonly ></td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                </div>
                                <div class="row" style="float: right;width: 104%; font-size:16px;">
                                    <p style="float: right"> : ملاحظات </p>
                                    <div class="row" style="width: 100%; margin-left:1px; ">
                                        <textarea   name="note" style="height: 100px;width:100%;  "></textarea>
                                    </div>
                                </div>
                                <div class="row" style="">
                                    <div class="col-lg-4"></div>
                                    <div class="col-md-1"></div>
                                    <div class="col-lg-4" style="padding-top: 2%;">
                                        <input name="Cancel" type="button" value="الغاء" class="btn btn-danger btn-sm">
                                        <input name="Save" type="submit" value="اعتماد" class="btn btn-info btn-sm"
                                               width="30px">
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>

    <!-- Right sidebar -->

    <!-- Footer-->
    <footer class="footer">
        <span class="pull-right">
            Example text
        </span>
        Company 2015-2020
    </footer>

</div>

<!-- Vendor scripts -->
<?php
//        if()
?>
@include('TemplateMainComponent.ScriptFooter')
{{--<script type="text/javascript" src="{{URL::asset('tooltipster/dist/js/tooltipster.bundle.min.js')}}"></script>--}}
<script src="{{URL::asset('bootstraps/scripts/SalePointScript.js')}}"></script>
</body>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/invoice.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:25 GMT -->
</html>