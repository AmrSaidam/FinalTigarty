<!DOCTYPE html>
<html>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/search.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:25 GMT -->
<head>

    @include('TemplateMainComponent.IncodingHeader')

            <!-- Page title -->
    <title>HOMER | WebApp admin theme</title>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!--<link rel="shortcut icon" type="image/ico" href="favicon.ico" />-->

    <!-- Vendor styles -->
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/fontawesome/css/font-awesome.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/metisMenu/dist/metisMenu.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/animate.css/animate.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/bootstrap/dist/css/bootstrap.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/select2-3.5.2/select2.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/select2-bootstrap/select2-bootstrap.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker3.min.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css')}}" />

    <!-- App styles -->
    <link rel="stylesheet" href="{{URL::asset('bootstraps/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/fonts/pe-icon-7-stroke/css/helper.css')}}" />
    <link rel="stylesheet" href="{{URL::asset('bootstraps/styles/style.css')}}">

    {{--@include('TemplateMainComponent.CSSHeader')--}}

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
<div id="wrapper">

    <div class="normalheader transition animated fadeIn" dir="rtl">
        <div class="hpanel">
            <div class="panel-body">
                <h2 class="font-light m-b-xs">
                    عرض فواتير البيع
                </h2>
                <a class="small-header-action" href="#">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>


            </div>
        </div>
    </div>


    <div class="content animate-panel">

        <div class="row">

            <div class="col-md-8">

                <div class="row">

                    <div class="row" dir="rtl">

                        <div class="col-lg-12">
                            <div class="hpanel">


                                <div class="panel-body">

                                    <div class="table-responsive">


                                        <table cellpadding="1" cellspacing="1"
                                               class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th style="text-align: center">الرقم</th>
                                                <th style="text-align: center"> رقم الفاتورة</th>

                                                <th style="text-align: center"> السعر الكلي</th>
                                                <th style="text-align: center"> تاريخ اصدار الفاتورة</th>
                                                <th style="text-align: center"> التحكم</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>

                                    </div>


                                    <div class="row">
                                        <div class="col-sm-6"></div>
                                        <div class="col-sm-6">


                                            <ul class="pagination pagination-sm pull-right">
                                                <li><a href="#">التالي</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">السابق</a></li>
                                            </ul>

                                            <div class="clearfix"></div>

                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div>


                    </div>


                </div>


            </div>
            <div class="col-md-4" dir="rtl">
                <div class="hpanel">
                    <div class="panel-body">
                        <div class="m-b-md">
                            <h4>
                                <i class="pe-7s-search"> </i>
                                البحث
                            </h4>
                            <small>
                                البحث عن طريق التاريخ
                            </small>
                        </div>

                        <div class="form-group">
                            <label class="control-label"> أدخل تاريخ البحث :</label>
                            <div class="input-group date">
                                <input type="text" class="form-control" value="10/06/2016">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                            </div>
                        </div>
                        <div class="form-group"><label> أو </label></div>
                        <div class="form-group">

                            <label> أدخل فترة البحث من -> الي :</label>

                            <div class="input-daterange input-group" id="datepicker">
                                <input type="text" class="input-sm form-control" name="start"/>
                                <span class="input-group-addon">to</span>
                                <input type="text" class="input-sm form-control" name="end"/>
                            </div>
                        </div>


                        <button class="btn btn-success btn-block"><i class="pe-7s-search"></i> بحث</button>

                    </div>

                </div>

            </div>
        </div>


    </div>

    <!-- Right sidebar -->
    <div id="right-sidebar" class="animated fadeInRight">

        <div class="p-m">
            <button id="sidebar-close" class="right-sidebar-toggle sidebar-button btn btn-default m-b-md"><i
                        class="pe pe-7s-close"></i>
            </button>
            <div>
                <span class="font-bold no-margins"> Analytics </span>
                <br>
                <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>
            </div>
            <div class="row m-t-sm m-b-sm">
                <div class="col-lg-6">
                    <h3 class="no-margins font-extra-bold text-success">300,102</h3>

                    <div class="font-bold">98% <i class="fa fa-level-up text-success"></i></div>
                </div>
                <div class="col-lg-6">
                    <h3 class="no-margins font-extra-bold text-success">280,200</h3>

                    <div class="font-bold">98% <i class="fa fa-level-up text-success"></i></div>
                </div>
            </div>
            <div class="progress m-t-xs full progress-small">
                <div style="width: 25%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" role="progressbar"
                     class=" progress-bar progress-bar-success">
                    <span class="sr-only">35% Complete (success)</span>
                </div>
            </div>
        </div>
        <div class="p-m bg-light border-bottom border-top">
            <span class="font-bold no-margins"> Social talks </span>
            <br>
            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.</small>
            <div class="m-t-md">
                <div class="social-talk">
                    <div class="media social-profile clearfix">
                        <a class="pull-left">
                            <img src="images/a1.jpg" alt="profile-picture">
                        </a>

                        <div class="media-body">
                            <span class="font-bold">John Novak</span>
                            <small class="text-muted">21.03.2015</small>
                            <div class="social-content small">
                                Injected humour, or randomised words which don't look even slightly believable.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social-talk">
                    <div class="media social-profile clearfix">
                        <a class="pull-left">
                            <img src="images/a3.jpg" alt="profile-picture">
                        </a>

                        <div class="media-body">
                            <span class="font-bold">Mark Smith</span>
                            <small class="text-muted">14.04.2015</small>
                            <div class="social-content">
                                Many desktop publishing packages and web page editors.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social-talk">
                    <div class="media social-profile clearfix">
                        <a class="pull-left">
                            <img src="images/a4.jpg" alt="profile-picture">
                        </a>

                        <div class="media-body">
                            <span class="font-bold">Marica Morgan</span>
                            <small class="text-muted">21.03.2015</small>

                            <div class="social-content">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-m">
            <span class="font-bold no-margins"> Sales in last week </span>
            <div class="m-t-xs">
                <div class="row">
                    <div class="col-xs-6">
                        <small>Today</small>
                        <h4 class="m-t-xs">$170,20 <i class="fa fa-level-up text-success"></i></h4>
                    </div>
                    <div class="col-xs-6">
                        <small>Last week</small>
                        <h4 class="m-t-xs">$580,90 <i class="fa fa-level-up text-success"></i></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6">
                        <small>Today</small>
                        <h4 class="m-t-xs">$620,20 <i class="fa fa-level-up text-success"></i></h4>
                    </div>
                    <div class="col-xs-6">
                        <small>Last week</small>
                        <h4 class="m-t-xs">$140,70 <i class="fa fa-level-up text-success"></i></h4>
                    </div>
                </div>
            </div>
            <small> Lorem Ipsum is simply dummy text of the printing simply all dummy text.
                Many desktop publishing packages and web page editors.
            </small>
        </div>

    </div>

    <!-- Footer-->
    <footer class="footer">
        <span class="pull-right">
            Example text
        </span>
        Company 2015-2020
    </footer>

</div>

<!-- Vendor scripts -->
<script src="{{URL::asset('bootstraps/vendor/jquery/dist/jquery.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/jquery-ui/jquery-ui.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/slimScroll/jquery.slimscroll.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/metisMenu/dist/metisMenu.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/}vendor/iCheck/icheck.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/sparkline/index.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/moment/moment.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/select2-3.5.2/select2.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js')}}"></script>
<script src="{{URL::asset('bootstraps/vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js')}}"></script>

<!-- App scripts -->
<script src="{{URL::asset('bootstraps/scripts/homer.js')}}"></script>
<script>

    $(function () {

        $('.input-group.date').datepicker();

        $("#demo1").TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10
        });

        $("#demo2").TouchSpin({
            verticalbuttons: true
        });

        $(".select2").select2();

    });

</script>
<script>

    $(function () {

        $('#datepicker').datepicker();
        $("#datepicker").on("changeDate", function (event) {
            $("#my_hidden_input").val(
                    $("#datepicker").datepicker('getFormattedDate')
            )
        });

        $('#datapicker2').datepicker();
        $('.input-group.date').datepicker({});
        $('.input-daterange').datepicker({});

        $("#demo1").TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
        });

        $("#demo2").TouchSpin({
            verticalbuttons: true
        });

        $("#demo3").TouchSpin({
            postfix: '%'
        });

        $("#demo4").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-default"
        });

        $(".js-source-states").select2();
        $(".js-source-states-2").select2();

        //turn to inline mode
        $.fn.editable.defaults.mode = 'inline';

        //defaults
        $.fn.editable.defaults.url = '#';

        //editables
        $('#username').editable({
            url: '#',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username'
        });

        $('#firstname').editable({
            validate: function (value) {
                if ($.trim(value) == '') return 'This field is required';
            }
        });

        $('#sex').editable({
            prepend: "not selected",
            source: [
                {value: 1, text: 'Male'},
                {value: 2, text: 'Female'}
            ],
            display: function (value, sourceData) {
                var colors = {"": "gray", 1: "green", 2: "blue"},
                        elem = $.grep(sourceData, function (o) {
                            return o.value == value;
                        });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });

        $('#dob').editable();

        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            }
        });

        $('#comments').editable({
            showbuttons: 'bottom'
        });

        $('#fruits').editable({
            pk: 1,
            limit: 3,
            source: [
                {value: 1, text: 'banana'},
                {value: 2, text: 'peach'},
                {value: 3, text: 'apple'},
                {value: 4, text: 'watermelon'},
                {value: 5, text: 'orange'}
            ]
        });

        $('#user .editable').on('hidden', function (e, reason) {
            if (reason === 'save' || reason === 'nochange') {
                var $next = $(this).closest('tr').next().find('.editable');
                if ($('#autoopen').is(':checked')) {
                    setTimeout(function () {
                        $next.editable('show');
                    }, 300);
                } else {
                    $next.focus();
                }
            }
        });

    });

</script>


</body>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/search.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:32 GMT -->
</html>