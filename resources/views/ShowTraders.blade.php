<!DOCTYPE html>
<html>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/validation.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:40 GMT -->
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

    <div class="normalheader transition animated fadeIn" dir="rtl">
        <div class="hpanel">
            <div class="panel-body">
                <h2 class="font-light m-b-xs">
                    عرض التجار
                </h2>
                <a class="small-header-action" href="#">
                    <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                    </div>
                </a>


            </div>
        </div>
    </div>

    <div class="content">

        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">


                    <div class="panel-body">
                        <div class="col-md-8"></div>

                        <div class="input-group m-b"><span class="input-group-btn">
                        <button type="button" class="btn btn-primary">Go!</button> </span> <input type="text"
                                                                                                  class="form-control"
                                                                                                  placeholder=" اسم التاجر ....."
                                                                                                  dir="rtl">
                        </div>


                        <table id="example2" class="table table-striped table-bordered table-hover"
                               style="direction: rtl">
                            <thead>
                            <tr>

                                <th style="text-align: right" width="1">الرقم</th>
                                <th style="text-align: right">الاسم</th>
                                <th style="text-align: right">رقم الجوال</th>
                                <th style="text-align: right">العنوان</th>
                                <th style="text-align: right"> الايميل</th>
                                <th style="text-align: right"> التحكم</th>

                            </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button class="btn btn-xs btn-warning"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-xs btn-danger"><i class="fa fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button class="btn btn-xs btn-warning"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-xs btn-danger"><i class="fa fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button class="btn btn-xs btn-warning"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-xs btn-danger"><i class="fa fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button class="btn btn-xs btn-warning"><i class="fa fa-pencil"></i></button>
                                    <button class="btn btn-xs btn-danger"><i class="fa fa-times"></i></button>
                                </td>
                            </tr>

                            </tbody>
                        </table>


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


</div>


<!-- Vendor scripts -->
@include('TemplateMainComponent.ScriptFooter')

<script>

    $(function () {

        $("#form").validate({
            rules: {
                password: {
                    required: true,
                    minlength: 3
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                max: {
                    required: true,
                    maxlength: 4
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $("#form_2").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                username: {
                    required: true,
                    minlength: 5
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                last_name: {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                number: {
                    required: "(Please enter your phone number)",
                    number: "(Please enter valid phone number)"
                },
                last_name: {
                    required: "This is custom message for required",
                    minlength: "This is custom message for min length"
                }
            },
            submitHandler: function (form) {
                form.submit();
            },
            errorPlacement: function (error, element) {
                $(element)
                        .closest("form")
                        .find("label[for='" + element.attr("id") + "']")
                        .append(error);
            },
            errorElement: "span",
        });


    });
</script>

</body>

<!-- Mirrored from webapplayers.com/homer_admin-v1.7/validation.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 28 Jul 2015 12:46:41 GMT -->
</html>