<!DOCTYPE html>
<html>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/tour.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:41:56 GMT -->
<head>

@include('TemplateMainComponent.IncodingHeader')

<!-- Page title -->
    <title>HOMER | WebApp admin theme</title>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!--<link rel="shortcut icon" type="image/ico" href="favicon.ico" />-->

    <!-- Vendor styles -->
    @include('TemplateMainComponent.CSSHeader')

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


    <div class="normalheader transition animated fadeIn">
        <div class="hpanel tour-1">
            <div class="panel-body">
                <a class="small-header-action" href="#">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>

                <h4 class="font-light m-b-xs" dir="rtl">
                    اضافة فاتورة مشتريات من التاجر
                </h4>
                <small></small>
            </div>
        </div>
    </div>
    <div class="content animate-panel">

        <div class="row">
            <div class="col-md-12">
                <div class="hpanel tour-2">

                    <div class="panel-body">

                        <div class="row" style="margin-right:80px;margin-left:50px;" dir="rtl">
                            <div class="col-sm-12">
                                <div style="text-align: center;">

                                    <small style="font-size: medium">اسم التاجر</small>
                                    <select>
                                        <option>khalid</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-3" style="font-size: medium">
                                <div>
                                    <div>رقم الفاتوره: <span></span></div>
                                    <div>تاريخ الفاتوره: <span></span></div>
                                </div>
                            </div>
                            <div class="col-lg-5"></div>
                            <div class="col-lg-4" style="font-size: medium">
                                <div>
                                    <div>اسم التاجر:</div>
                                    <span></span>
                                    <div>العنوان:</div>
                                    <span></span>
                                    <div>الجوال:</div>
                                    <span></span>
                                    <div>البريد الالكتروني:</div>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="margin-left: 30px;margin-right: 35px;margin-top: 20px">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped" DIR="rtl">
                                    <colgroup>
                                        <col width="20px">
                                        <col width="100px">
                                        <col width="50px">
                                        <col width="100px">
                                        <col width="100px">
                                        <col width="100px">
                                    </colgroup>

                                    <thead>
                                    <tr>
                                        <th style="text-align: center"> الرقم</th>
                                        <th style="text-align: center">الصنف</th>
                                        <th style="text-align: center">الكمية</th>
                                        <th style="text-align: center">سعر الكرتونه من التاجر</th>
                                        <th style="text-align: center">سعر الكرتونه للبيع</th>
                                        <th style="text-align: center">سعر الصنف</th>
                                        <th style="text-align: center">المجموع</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" name="item" class="control-input"/></td>
                                        <td><input style="width: 120px" type="text" name="item" class="control-input"/></td>
                                        <td><input type="text" name="price" class="control-input"/></td>
                                        <td><input type="text" name="price" class="control-input"/></td>
                                        <td><input type="text" name="priceforpaid" class="control-input"/></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <th>
                                            <strong>الضريبة</strong>
                                        </th>
                                        <th colspan="5"><input type="text" name="tax" class="control-input" style="width: 100%"/>
                                        </th>
                                        <td></td>
                                    </tr>

                                    <tr style="background-color: #ccc;">
                                        <th colspan="6">
                                            <strong style="float: left;">المجموع</strong>
                                        </th>
                                        <th></th>
                                    </tr>

                                    <tr style="background-color: #ccc;">
                                        <th colspan="6">
                                            <strong style="float: left;">الضريبة</strong>
                                        </th>
                                        <th></th>
                                    </tr>

                                    <tr style="background-color: #ccc;">
                                        <th colspan="6">
                                            <strong style="float: left;">المجموع بعد الضريبة</strong>
                                        </th>
                                        <th></th>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <div style="text-align: center;">
                                    <button type="reset" class="btn btn-danger" style="width:30%;">إلغاء</button>
                                    <button type="submit" class="btn btn-info" style="width:30%;">اعتماد</button>
                                </div>
                            </div>
                            <div class="col-lg-4"></div>
                        </div>
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
@include('TemplateMainComponent.DashboardScript')

<script>

    $(function () {


        // Instance the tour
        var tour = new Tour({
            backdrop: true,
            onShown: function (tour) {

                // ISSUE    - https://github.com/sorich87/bootstrap-tour/issues/189
                // FIX      - https://github.com/sorich87/bootstrap-tour/issues/189#issuecomment-49007822

                // You have to write your used animated effect class
                // Standard animated class
                $('.animated').removeClass('fadeIn');
                // Animate class from animate-panel plugin
                $('.animated-panel').removeClass('zoomIn');

            },
            steps: [
                {
                    element: ".tour-1",
                    title: "Page header",
                    content: "Place your page title and breadcrumb. Select small or large header or give the user choice to change the size.",
                    placement: "bottom"
                },
                {
                    element: ".tour-2",
                    title: "Tour title",
                    content: "Add any components you want from the Homer theme - graphs, tables, calendars, lists, create your unique app view with Homer.",
                    placement: "top"

                },
                {
                    element: ".tour-3",
                    title: "Tour title",
                    content: "This is a 3 step on our tour. You can easy set a placement of tour tooltip.",
                    placement: "right"

                },
                {
                    element: ".tour-4",
                    title: "Tour title",
                    content: "In this 4 step is a description of how to use tour directive.",
                    placement: "left"

                }
            ]
        });

        // Initialize the tour
        tour.init();

        // Restart the tour
        $('.run-tour').click(function () {
            tour.restart();
        });

        /**
         * Flot charts line data and options
         */
        var chartIncomeData = [
            {
                label: "line",
                data: [[1, 10], [2, 26], [3, 16], [4, 36], [5, 32], [6, 51]]
            }
        ];

        var chartIncomeOptions = {
            series: {
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: true,
                    fillColor: "#64cc34"

                }
            },
            colors: ["#62cb31"],
            grid: {
                show: false
            },
            legend: {
                show: false
            }
        };

        $.plot($("#flot-income-chart"), chartIncomeData, chartIncomeOptions);

    });

</script>

</body>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/tour.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:41:58 GMT -->
</html>