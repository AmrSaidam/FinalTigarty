function fixWrapperHeight() {
    var headerH = 62, navigationH = $("#navigation").height(), contentH = $(".content").height();
    navigationH > contentH && $("#wrapper").css("min-height", navigationH + "px"), navigationH > contentH && navigationH < $(window).height() && $("#wrapper").css("min-height", $(window).height() - headerH + "px"), contentH > navigationH && contentH < $(window).height() && $("#wrapper").css("min-height", $(window).height() - headerH + "px")
}
function setBodySmall() {
    $(this).width() < 769 ? $("body").addClass("page-small") : ($("body").removeClass("page-small"), $("body").removeClass("show-sidebar"))
}
function configState($stateProvider, $urlRouterProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(!0), $urlRouterProvider.otherwise("/dashboard"), $stateProvider.state("landing", {
        url: "/landing_page",
        templateUrl: "views/landing_page.html",
        data: {pageTitle: "Landing page", specialClass: "landing-page"}
    }).state("dashboard", {
        url: "/dashboard",
        templateUrl: "views/dashboard.html",
        data: {pageTitle: "Dashboard"}
    }).state("analytics", {
        url: "/analytics",
        templateUrl: "views/analytics.html",
        data: {pageTitle: "Analytics"}
    }).state("widgets", {
        url: "/widgets",
        templateUrl: "views/widgets.html",
        data: {pageTitle: "Widgets"}
    }).state("options", {
        url: "/options",
        templateUrl: "views/options.html",
        data: {pageTitle: "Options", pageDesc: "Example small header for demo purpose."}
    }).state("interface", {
        "abstract": !0,
        url: "/interface",
        templateUrl: "views/common/content.html",
        data: {pageTitle: "Interface"}
    }).state("interface.buttons", {
        url: "/buttons",
        templateUrl: "views/interface/buttons.html",
        data: {pageTitle: "Colors and Buttons", pageDesc: "The basic color palette"}
    }).state("interface.typography", {
        url: "/typography",
        templateUrl: "views/interface/typography.html",
        data: {pageTitle: "Typography", pageDesc: "The basic elements of typography"}
    }).state("interface.components", {
        url: "/components",
        templateUrl: "views/interface/components.html",
        data: {pageTitle: "Components", pageDesc: "Tabs, according, collapse and other UI components"}
    }).state("interface.icons", {
        url: "/icons",
        templateUrl: "views/interface/icons.html",
        data: {pageTitle: "Icons", pageDesc: "Two great icon libraries. Pe-icon-7-stroke and Font Awesome"}
    }).state("interface.panels", {
        url: "/panels",
        templateUrl: "views/interface/panels.html",
        data: {pageTitle: "Panels", pageDesc: "Two great icon libraries. Pe-icon-7-stroke and Font Awesome"}
    }).state("interface.alerts", {
        url: "/alerts",
        templateUrl: "views/interface/alerts.html",
        data: {pageTitle: "Alerts", pageDesc: "Notification and custom alerts"}
    }).state("interface.modals", {
        url: "/modals",
        templateUrl: "views/interface/modals.html",
        data: {pageTitle: "Modals", pageDesc: "Modal window examples"}
    }).state("interface.list", {
        url: "/list",
        templateUrl: "views/interface/list.html",
        data: {pageTitle: "Nestable list", pageDesc: "Nestable - Drag & drop hierarchical list."}
    }).state("interface.tour", {
        url: "/tour",
        templateUrl: "views/interface/tour.html",
        data: {pageTitle: "Tour", pageDesc: "The easiest way to show people how to use your website."}
    }).state("interface.draggable_panels", {
        url: "/draggable_panels",
        templateUrl: "views/interface/draggable_panels.html",
        data: {pageTitle: "Draggable panels", pageDesc: "Example page for draggable panels"}
    }).state("app_views", {
        "abstract": !0,
        url: "/app_views",
        templateUrl: "views/common/content.html",
        data: {pageTitle: "App Views"}
    }).state("app_views.timeline", {
        url: "/timeline",
        templateUrl: "views/app_views/timeline.html",
        data: {pageTitle: "Timeline", pageDesc: "Present your events in timeline style."}
    }).state("app_views.contacts", {
        url: "/contacts",
        templateUrl: "views/app_views/contacts.html",
        data: {pageTitle: "Contacts", pageDesc: "Show users list in nice and color panels"}
    }).state("app_views.profile", {
        url: "/profile",
        templateUrl: "views/app_views/profile.html",
        data: {pageTitle: "Profile", pageDesc: "Show user data in clear profile design"}
    }).state("app_views.calendar", {
        url: "/calendar",
        templateUrl: "views/app_views/calendar.html",
        data: {pageTitle: "Calendar", pageDesc: "Full-sized, drag & drop event calendar."}
    }).state("app_views.projects", {
        url: "/projects",
        templateUrl: "views/app_views/projects.html",
        data: {pageTitle: "Projects", pageDesc: "List of projects."}
    }).state("app_views.project_detail", {
        url: "/project_detail",
        templateUrl: "views/app_views/project_detail.html",
        data: {pageTitle: "Project detail", pageDesc: "Special page for project detail."}
    }).state("app_views.social_board", {
        url: "/social_board",
        templateUrl: "views/app_views/social_board.html",
        data: {pageTitle: "Social board", pageDesc: "Message board for social interactions."}
    }).state("app_views.blog", {
        url: "/blog",
        templateUrl: "views/app_views/blog.html",
        data: {pageTitle: "Blog", pageDesc: "Article board for blog page."}
    }).state("blog_details", {
        url: "/blog_details",
        templateUrl: "views/app_views/blog_details.html",
        data: {pageTitle: "Article", pageDesc: "Article blog page."}
    }).state("app_views.forum", {
        url: "/forum",
        templateUrl: "views/app_views/forum.html",
        data: {pageTitle: "Forum", pageDesc: "Topics board for forum page."}
    }).state("app_views.forum_details", {
        url: "/forum_details",
        templateUrl: "views/app_views/forum_details.html",
        data: {pageTitle: "Topic", pageDesc: "Topic for forum page."}
    }).state("app_views.gallery", {
        url: "/gallery",
        templateUrl: "views/app_views/gallery.html",
        data: {pageTitle: "Galery", pageDesc: "Touch-enabled, responsive and customizable image & video gallery."}
    }).state("app_views.mailbox", {
        url: "/mailbox",
        templateUrl: "views/app_views/mailbox.html",
        data: {pageTitle: "Mailbox", pageDesc: "Mailbox - Email list."}
    }).state("app_views.invoice", {
        url: "/invoice",
        templateUrl: "views/app_views/invoice.html",
        data: {pageTitle: "Invoice", pageDesc: "Clean invoice template."}
    }).state("app_views.file_manager", {
        url: "/mailbox",
        templateUrl: "views/app_views/file_manager.html",
        data: {pageTitle: "File manager", pageDesc: "Show you files in a nica manager design."}
    }).state("app_views.search", {
        url: "/search",
        templateUrl: "views/app_views/search.html",
        data: {pageTitle: "Search view", pageDesc: "Use search view to show search functionality."}
    }).state("app_views.chat_view", {
        url: "/chat_view",
        templateUrl: "views/app_views/chat_view.html",
        data: {pageTitle: "Chat view", pageDesc: "Create a chat room in your app"}
    }).state("transitions", {
        "abstract": !0,
        url: "/transitions",
        templateUrl: "views/common/content_blank.html",
        data: {pageTitle: "Transitions"}
    }).state("transitions.overview", {
        url: "/overview",
        templateUrl: "views/transitions/overview.html",
        data: {pageTitle: "Overview of transitions Effect"}
    }).state("transitions.transition_one", {
        url: "/transition_one",
        templateUrl: "views/transitions/transition_one.html"
    }).state("transitions.transition_two", {
        url: "/transition_two",
        templateUrl: "views/transitions/transition_two.html"
    }).state("transitions.transition_three", {
        url: "/transition_three",
        templateUrl: "views/transitions/transition_three.html"
    }).state("transitions.transition_four", {
        url: "/transition_four",
        templateUrl: "views/transitions/transition_four.html"
    }).state("transitions.transition_five", {
        url: "/transition_five",
        templateUrl: "views/transitions/transition_five.html"
    }).state("charts", {
        "abstract": !0,
        url: "/charts",
        templateUrl: "views/common/content.html",
        data: {pageTitle: "Charts"}
    }).state("charts.flot", {
        url: "/flot",
        templateUrl: "views/charts/flot.html",
        data: {
            pageTitle: "Flot chart",
            pageDesc: "Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features."
        }
    }).state("charts.chartjs", {
        url: "/chartjs",
        templateUrl: "views/charts/chartjs.html",
        data: {pageTitle: "ChartJS", pageDesc: "Simple HTML5 Charts using the canvas element"}
    }).state("charts.inline", {
        url: "/inline",
        templateUrl: "views/charts/inline.html",
        data: {
            pageTitle: "Inline charts",
            pageDesc: "Small inline charts directly in the browser using data supplied in the controller."
        }
    }).state("common", {
        "abstract": !0,
        url: "/common",
        templateUrl: "views/common/content_empty.html",
        data: {pageTitle: "Common"}
    }).state("common.login", {
        url: "/login",
        templateUrl: "views/common_app/login.html",
        data: {pageTitle: "Login page", specialClass: "blank"}
    }).state("common.register", {
        url: "/register",
        templateUrl: "views/common_app/register.html",
        data: {pageTitle: "Register page", specialClass: "blank"}
    }).state("common.error_one", {
        url: "/error_one",
        templateUrl: "views/common_app/error_one.html",
        data: {pageTitle: "Error 404", specialClass: "blank"}
    }).state("common.error_two", {
        url: "/error_two",
        templateUrl: "views/common_app/error_two.html",
        data: {pageTitle: "Error 505", specialClass: "blank"}
    }).state("common.lock", {
        url: "/lock",
        templateUrl: "views/common_app/lock.html",
        data: {pageTitle: "Lock page", specialClass: "blank"}
    }).state("tables", {
        "abstract": !0,
        url: "/tables",
        templateUrl: "views/common/content.html",
        data: {pageTitle: "Tables"}
    }).state("tables.tables_design", {
        url: "/tables_design",
        templateUrl: "views/tables/tables_design.html",
        data: {pageTitle: "Tables design", pageDesc: "Examples of various designs of tables."}
    }).state("tables.ng_grid", {
        url: "/ng_grid",
        templateUrl: "views/tables/ng_grid.html",
        data: {pageTitle: "ngGgrid", pageDesc: "Examples of various designs of tables."}
    }).state("tables.datatables", {
        url: "/datatables",
        templateUrl: "views/tables/datatables.html",
        data: {pageTitle: "DataTables", pageDesc: "Advanced interaction controls to any HTML table"}
    }).state("tables.footable", {
        url: "/footable",
        templateUrl: "views/tables/footable.html",
        data: {pageTitle: "FooTable", pageDesc: "Advanced interaction controls to any HTML table"}
    }).state("forms", {
        "abstract": !0,
        url: "/forms",
        templateUrl: "views/common/content_small.html",
        data: {pageTitle: "Forms"}
    }).state("forms.forms_elements", {
        url: "/forms_elements",
        templateUrl: "views/forms/forms_elements.html",
        data: {pageTitle: "Forms elements", pageDesc: "Examples of various form controls."}
    }).state("forms.forms_extended", {
        url: "/forms_extended",
        templateUrl: "views/forms/forms_extended.html",
        data: {pageTitle: "Forms extended", pageDesc: "Examples of various extended form controls."}
    }).state("forms.text_editor", {
        url: "/text_editor",
        templateUrl: "views/forms/text_editor.html",
        data: {pageTitle: "Text editor", pageDesc: "Examples of text editor."}
    }).state("forms.wizard", {
        url: "/wizard",
        templateUrl: "views/forms/wizard.html",
        data: {pageTitle: "Wizard", pageDesc: "Build a form with wizard functionality."}
    }).state("forms.validation", {
        url: "/validation",
        templateUrl: "views/forms/validation.html",
        data: {pageTitle: "Validation", pageDesc: "Build a form with validation functionality."}
    }).state("grid_system", {
        url: "/grid_system",
        templateUrl: "views/grid_system.html",
        data: {pageTitle: "Grid system"}
    })
}
function propsFilter() {
    return function (items, props) {
        var out = [];
        return angular.isArray(items) ? items.forEach(function (item) {
            for (var itemMatches = !1, keys = Object.keys(props), i = 0; i < keys.length; i++) {
                var prop = keys[i], text = props[prop].toLowerCase();
                if (-1 !== item[prop].toString().toLowerCase().indexOf(text)) {
                    itemMatches = !0;
                    break
                }
            }
            itemMatches && out.push(item)
        }) : out = items, out
    }
}
function pageTitle($rootScope, $timeout) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                var title = "HOMER | AngularJS Responsive WebApp";
                toState.data && toState.data.pageTitle && (title = "HOMER | " + toState.data.pageTitle), $timeout(function () {
                    element.text(title)
                })
            };
            $rootScope.$on("$stateChangeStart", listener)
        }
    }
}
function sideNavigation($timeout) {
    return {
        restrict: "A", link: function (scope, element) {
            element.metisMenu();
            var menuElement = $('#side-menu a:not([href$="\\#"])');
            menuElement.click(function () {
                $(window).width() < 769 && $("body").toggleClass("show-sidebar")
            })
        }
    }
}
function minimalizaMenu($rootScope) {
    return {
        restrict: "EA",
        template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $(window).width() < 769 ? $("body").toggleClass("show-sidebar") : $("body").toggleClass("hide-sidebar")
            }
        }
    }
}
function sparkline() {
    return {
        restrict: "A", scope: {sparkData: "=", sparkOptions: "="}, link: function (scope, element, attrs) {
            scope.$watch(scope.sparkData, function () {
                render()
            }), scope.$watch(scope.sparkOptions, function () {
                render()
            });
            var render = function () {
                $(element).sparkline(scope.sparkData, scope.sparkOptions)
            }
        }
    }
}
function icheck($timeout) {
    return {
        restrict: "A", require: "ngModel", link: function ($scope, element, $attrs, ngModel) {
            return $timeout(function () {
                var value;
                return value = $attrs.value, $scope.$watch($attrs.ngModel, function (newValue) {
                    $(element).iCheck("update")
                }), $(element).iCheck({
                    checkboxClass: "icheckbox_square-green",
                    radioClass: "iradio_square-green"
                }).on("ifChanged", function (event) {
                    return "checkbox" === $(element).attr("type") && $attrs.ngModel && $scope.$apply(function () {
                        return ngModel.$setViewValue(event.target.checked)
                    }), "radio" === $(element).attr("type") && $attrs.ngModel ? $scope.$apply(function () {
                        return ngModel.$setViewValue(value)
                    }) : void 0
                })
            })
        }
    }
}
function panelTools($timeout) {
    return {
        restrict: "A",
        scope: !0,
        templateUrl: "views/common/panel_tools.html",
        controller: function ($scope, $element) {
            $scope.showhide = function () {
                var hpanel = $element.closest("div.hpanel"), icon = $element.find("i:first"), body = hpanel.find("div.panel-body"), footer = hpanel.find("div.panel-footer");
                body.slideToggle(300), footer.slideToggle(200), icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"), hpanel.toggleClass("").toggleClass("panel-collapse"), $timeout(function () {
                    hpanel.resize(), hpanel.find("[id^=map-]").resize()
                }, 50)
            }, $scope.closebox = function () {
                var hpanel = $element.closest("div.hpanel");
                hpanel.remove()
            }
        }
    }
}
function smallHeader() {
    return {
        restrict: "A", scope: !0, controller: function ($scope, $element) {
            $scope.small = function () {
                var icon = $element.find("i:first"), breadcrumb = $element.find("#hbreadcrumb");
                $element.toggleClass("small-header"), breadcrumb.toggleClass("m-t-lg"), icon.toggleClass("fa-arrow-up").toggleClass("fa-arrow-down")
            }
        }
    }
}
function animatePanel($timeout, $state) {
    return {
        restrict: "A", link: function (scope, element, attrs) {
            var startAnimation = 0, delay = .06, start = Math.abs(delay) + startAnimation, currentState = $state.current.name;
            attrs.effect || (attrs.effect = "zoomIn"), delay = attrs.delay ? attrs.delay / 10 : .06, attrs.child ? attrs.child = "." + attrs.child : attrs.child = ".row > div";
            var panel = element.find(attrs.child);
            panel.addClass("opacity-0");
            var renderTime = panel.length * delay * 1e3 + 700;
            $timeout(function () {
                panel = element.find(attrs.child), panel.addClass("animated-panel").addClass(attrs.effect), panel.each(function (i, elm) {
                    start += delay;
                    var rounded = Math.round(10 * start) / 10;
                    $(elm).css("animation-delay", rounded + "s"), $(elm).removeClass("opacity-0")
                }), $timeout(function () {
                    currentState == $state.current.name && $(".animated-panel:not([ng-repeat]").removeClass(attrs.effect)
                }, renderTime)
            })
        }
    }
}
function landingScrollspy() {
    return {
        restrict: "A", link: function (scope, element, attrs) {
            element.scrollspy({target: ".navbar-fixed-top", offset: 80})
        }
    }
}
function appCtrl($http, $scope, $timeout) {
    $scope.checkOne = !0, $scope.barProfileData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4], $scope.barProfileOptions = {
        type: "bar",
        barWidth: 7,
        height: "30px",
        barColor: "#62cb31",
        negBarColor: "#53ac2a"
    }, $scope.chartIncomeData = [{
        label: "line",
        data: [[1, 10], [2, 26], [3, 16], [4, 36], [5, 32], [6, 51]]
    }], $scope.chartIncomeOptions = {
        series: {lines: {show: !0, lineWidth: 0, fill: !0, fillColor: "#64cc34"}},
        colors: ["#62cb31"],
        grid: {show: !1},
        legend: {show: !1}
    }, $scope.dynamicTooltip = "Hello, World!", $scope.htmlTooltip = "I've been made <b>bold</b>!", $scope.dynamicTooltipText = "Dynamic", $scope.dynamicPopover = "Hello, World!", $scope.dynamicPopoverTitle = "Title", $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo
    }, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], $scope.getLocation = function (val) {
        return $http.get("http://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: val,
                sensor: !1
            }
        }).then(function (response) {
            return response.data.results.map(function (item) {
                return item.formatted_address
            })
        })
    }, $scope.rate = 7, $scope.max = 10, $scope.hoveringOver = function (value) {
        $scope.overStar = value, $scope.percent = 100 * (value / this.max)
    }, $scope.groups = [{
        title: "Dynamic Group Header - 1",
        content: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. "
    }, {
        title: "Dynamic Group Header - 2",
        content: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. "
    }], $scope.oneAtATime = !0;
    var data1 = [[0, 55], [1, 48], [2, 40], [3, 36], [4, 40], [5, 60], [6, 50], [7, 51]], data2 = [[0, 56], [1, 49], [2, 41], [3, 38], [4, 46], [5, 67], [6, 57], [7, 59]];
    $scope.chartUsersData = [data1, data2], $scope.chartUsersOptions = {
        series: {
            splines: {
                show: !0,
                tension: .4,
                lineWidth: 1,
                fill: .4
            }
        },
        grid: {tickColor: "#f0f0f0", borderWidth: 1, borderColor: "f0f0f0", color: "#6a6c6f"},
        colors: ["#62cb31", "#efefef"]
    }, $scope.PieChart = {data: [1, 5], options: {fill: ["#62cb31", "#edf0f5"]}}, $scope.PieChart2 = {
        data: [226, 360],
        options: {fill: ["#62cb31", "#edf0f5"]}
    }, $scope.PieChart3 = {
        data: [.52, 1.561],
        options: {fill: ["#62cb31", "#edf0f5"]}
    }, $scope.PieChart4 = {data: [1, 4], options: {fill: ["#62cb31", "#edf0f5"]}}, $scope.PieChart5 = {
        data: [226, 134],
        options: {fill: ["#62cb31", "#edf0f5"]}
    }, $scope.PieChart6 = {
        data: [.52, 1.041],
        options: {fill: ["#62cb31", "#edf0f5"]}
    }, $scope.BarChart = {
        data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
        options: {fill: ["#dbdbdb", "#62cb31"]}
    }, $scope.LineChart = {
        data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
        options: {fill: "#62cb31", stroke: "#62cb31", width: 64}
    }, $scope.stanimation = "bounceIn", $scope.runIt = !0, $scope.runAnimation = function () {
        $scope.runIt = !1, $timeout(function () {
            $scope.runIt = !0
        }, 100)
    }
}
function sweetAlert($timeout, $window) {
    var swal = $window.swal;
    return {
        swal: function (arg1, arg2, arg3) {
            $timeout(function () {
                "function" == typeof arg2 ? swal(arg1, function (isConfirm) {
                    $timeout(function () {
                        arg2(isConfirm)
                    })
                }, arg3) : swal(arg1, arg2, arg3)
            }, 200)
        }, success: function (title, message) {
            $timeout(function () {
                swal(title, message, "success")
            }, 200)
        }, error: function (title, message) {
            $timeout(function () {
                swal(title, message, "error")
            }, 200)
        }, warning: function (title, message) {
            $timeout(function () {
                swal(title, message, "warning")
            }, 200)
        }, info: function (title, message) {
            $timeout(function () {
                swal(title, message, "info")
            }, 200)
        }
    }
}
function alertsCtrl($scope, sweetAlert, notify) {
    $scope.demo1 = function () {
        sweetAlert.swal({
            title: "Welcome in Alerts",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        })
    }, $scope.demo2 = function () {
        sweetAlert.swal({title: "Good job!", text: "You clicked the button!", type: "success"})
    }, $scope.demo3 = function () {
        sweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }, function () {
            sweetAlert.swal("Booyah!")
        })
    }, $scope.demo4 = function () {
        sweetAlert.swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: !1,
            closeOnCancel: !1
        }, function (isConfirm) {
            isConfirm ? sweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success") : sweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error")
        })
    }, $scope.msg = "Hello! This is a sample message!", $scope.demo = function () {
        notify({message: $scope.msg, classes: $scope.classes, templateUrl: $scope.template})
    }, $scope.closeAll = function () {
        notify.closeAll()
    }, $scope.homerTemplate = "views/notification/notify.html", $scope.homerDemo1 = function () {
        notify({
            message: "Info - This is a Homer info notification",
            classes: "alert-info",
            templateUrl: $scope.homerTemplate
        })
    }, $scope.homerDemo2 = function () {
        notify({
            message: "Success - This is a Homer success notification",
            classes: "alert-success",
            templateUrl: $scope.homerTemplate
        })
    }, $scope.homerDemo3 = function () {
        notify({
            message: "Warning - This is a Homer warning notification",
            classes: "alert-warning",
            templateUrl: $scope.homerTemplate
        })
    }, $scope.homerDemo4 = function () {
        notify({
            message: "Danger - This is a Homer danger notification",
            classes: "alert-danger",
            templateUrl: $scope.homerTemplate
        })
    }
}
function modalCtrl($scope, $modal) {
    $scope.open = function () {
        $modal.open({templateUrl: "views/modal/modal_example.html", controller: ModalInstanceCtrl})
    }, $scope.open1 = function () {
        $modal.open({templateUrl: "views/modal/modal_example1.html", controller: ModalInstanceCtrl})
    }, $scope.open3 = function (size) {
        $modal.open({templateUrl: "views/modal/modal_example3.html", size: size, controller: ModalInstanceCtrl})
    }, $scope.open2 = function () {
        $modal.open({
            templateUrl: "views/modal/modal_example2.html",
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-info"
        })
    }, $scope.open4 = function () {
        $modal.open({
            templateUrl: "views/modal/modal_example2.html",
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-warning"
        })
    }, $scope.open5 = function () {
        $modal.open({
            templateUrl: "views/modal/modal_example2.html",
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-success"
        })
    }, $scope.open6 = function () {
        $modal.open({
            templateUrl: "views/modal/modal_example2.html",
            controller: ModalInstanceCtrl,
            windowClass: "hmodal-danger"
        })
    }
}
function ModalInstanceCtrl($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close()
    }, $scope.cancel = function () {
        $modalInstance.dismiss("cancel")
    }
}
function charts_flotCtrl($scope) {
    $scope.flotBarOptions = {
        series: {
            bars: {
                show: !0,
                barWidth: .8,
                fill: !0,
                fillColor: {colors: [{opacity: .6}, {opacity: .6}]},
                lineWidth: 1
            }
        },
        xaxis: {tickDecimals: 0},
        colors: ["#62cb31"],
        grid: {
            color: "#e4e5e7",
            hoverable: !0,
            clickable: !0,
            tickColor: "#D4D4D4",
            borderWidth: 0,
            borderColor: "e4e5e7"
        },
        legend: {show: !1},
        tooltip: !0,
        tooltipOpts: {content: "x: %x, y: %y"}
    }, $scope.flotBarOptionsDas = {
        series: {
            bars: {
                show: !0,
                barWidth: .8,
                fill: !0,
                fillColor: {colors: [{opacity: 1}, {opacity: 1}]},
                lineWidth: 1
            }
        }, xaxis: {tickDecimals: 0}, colors: ["#62cb31"], grid: {show: !1}, legend: {show: !1}
    }, $scope.flotBarOptionsWid = {
        series: {
            bars: {
                show: !0,
                barWidth: .8,
                fill: !0,
                fillColor: {colors: [{opacity: 1}, {opacity: 1}]},
                lineWidth: 1
            }
        }, xaxis: {tickDecimals: 0}, colors: ["#3498db"], grid: {show: !1}, legend: {show: !1}
    }, $scope.flotChartData = [{
        label: "bar",
        data: [[1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22]]
    }], $scope.flotLineAreaData = [{
        label: "line",
        data: [[1, 34], [2, 22], [3, 19], [4, 12], [5, 32], [6, 54], [7, 23], [8, 57], [9, 12], [10, 24], [11, 44], [12, 64], [13, 21]]
    }];
    var data1 = [[0, 26], [1, 24], [2, 29], [3, 26], [4, 33], [5, 26], [6, 36], [7, 28]];
    $scope.chartUsersData = [data1], $scope.chartUsersOptions = {
        series: {
            splines: {
                show: !0,
                tension: .4,
                lineWidth: 1,
                fill: .5
            }
        },
        grid: {tickColor: "#e4e5e7", borderWidth: 1, borderColor: "#e4e5e7", color: "#6a6c6f"},
        colors: ["#62cb31", "#efefef"]
    }, $scope.pieChartData = [{label: "Data 1", data: 16, color: "#84c465"}, {
        label: "Data 2",
        data: 6,
        color: "#8dd76a"
    }, {label: "Data 3", data: 22, color: "#a2c98f"}, {
        label: "Data 4",
        data: 32,
        color: "#c7eeb4"
    }], $scope.pieChartDataDas = [{label: "Data 1", data: 16, color: "#62cb31"}, {
        label: "Data 2",
        data: 6,
        color: "#A4E585"
    }, {label: "Data 3", data: 22, color: "#368410"}, {
        label: "Data 4",
        data: 32,
        color: "#8DE563"
    }], $scope.pieChartDataWid = [{label: "Data 1", data: 16, color: "#fad57c"}, {
        label: "Data 2",
        data: 6,
        color: "#fde5ad"
    }, {label: "Data 3", data: 22, color: "#fcc43c"}, {
        label: "Data 4",
        data: 32,
        color: "#ffb606"
    }], $scope.pieChartOptions = {
        series: {pie: {show: !0}},
        grid: {hoverable: !0},
        tooltip: !0,
        tooltipOpts: {content: "%p.0%, %s", shifts: {x: 20, y: 0}, defaultTheme: !1}
    }, $scope.lineChartData = [{
        label: "line",
        data: [[1, 24], [2, 15], [3, 29], [4, 34], [5, 30], [6, 40], [7, 23], [8, 27], [9, 40]]
    }], $scope.lineChartOptions = {
        series: {
            lines: {
                show: !0,
                lineWidth: 1,
                fill: !0,
                fillColor: {colors: [{opacity: .5}, {opacity: .5}]}
            }
        },
        xaxis: {tickDecimals: 0},
        colors: ["#62cb31"],
        grid: {tickColor: "#e4e5e7", borderWidth: 1, borderColor: "#e4e5e7", color: "#6a6c6f"},
        legend: {show: !1},
        tooltip: !0,
        tooltipOpts: {content: "x: %x, y: %y"}
    }, $scope.lineChartOptionsDas = {
        series: {
            lines: {
                show: !0,
                lineWidth: 1,
                fill: !0,
                fillColor: {colors: [{opacity: 1}, {opacity: 1}]}
            }
        },
        xaxis: {tickDecimals: 0},
        colors: ["#62cb31"],
        grid: {tickColor: "#e4e5e7", borderWidth: 1, borderColor: "#e4e5e7", color: "#6a6c6f"},
        legend: {show: !1},
        tooltip: !0,
        tooltipOpts: {content: "x: %x, y: %y"}
    };
    for (var sin = [], cos = [], i = 0; 14 > i; i += .5)sin.push([i, Math.sin(i)]), cos.push([i, Math.cos(i)]);
    $scope.sinCosChartData = [{data: sin, label: "sin(x)"}, {
        data: cos,
        label: "cos(x)"
    }], $scope.sinCosChartOptions = {
        series: {lines: {show: !0}, points: {show: !0}},
        grid: {tickColor: "#e4e5e7", borderWidth: 1, borderColor: "#e4e5e7", color: "#6a6c6f"},
        yaxis: {min: -1.2, max: 1.2},
        colors: ["#62cb31", "#efefef"]
    }
}
function chartjsCtrl($scope) {
    $scope.polarData = [{value: 120, color: "#62cb31", highlight: "#57b32c", label: "Homer"}, {
        value: 140,
        color: "#80dd55",
        highlight: "#57b32c",
        label: "Inspinia"
    }, {
        value: 100,
        color: "#a3e186",
        highlight: "#57b32c",
        label: "Luna"
    }], $scope.polarOptions = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 1,
        scaleBackdropPaddingX: 1,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 1,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1
    }, $scope.doughnutData = [{value: 20, color: "#62cb31", highlight: "#57b32c", label: "App"}, {
        value: 120,
        color: "#91dc6e",
        highlight: "#57b32c",
        label: "Software"
    }, {
        value: 100,
        color: "#a3e186",
        highlight: "#57b32c",
        label: "Laptop"
    }], $scope.doughnutOptions = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 1,
        percentageInnerCutout: 45,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1
    }, $scope.lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Example dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [22, 44, 67, 43, 76, 45, 12]
        }, {
            label: "Example dataset",
            fillColor: "rgba(98,203,49,0.5)",
            strokeColor: "rgba(98,203,49,0.7)",
            pointColor: "rgba(98,203,49,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(26,179,148,1)",
            data: [16, 32, 18, 26, 42, 33, 44]
        }]
    }, $scope.lineOptions = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 1,
        datasetFill: !0
    }, $scope.sharpLineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Example dataset",
            fillColor: "rgba(98,203,49,0.5)",
            strokeColor: "rgba(98,203,49,0.7)",
            pointColor: "rgba(98,203,49,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(98,203,49,1)",
            data: [33, 48, 40, 19, 54, 27, 54]
        }]
    }, $scope.sharpLineOptions = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: !1,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 1,
        datasetFill: !0
    }, $scope.barOptions = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: !0,
        barStrokeWidth: 1,
        barValueSpacing: 5,
        barDatasetSpacing: 1
    }, $scope.barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(98,203,49,0.5)",
            strokeColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    }, $scope.singleBarOptions = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: !0,
        barStrokeWidth: 1,
        barValueSpacing: 5,
        barDatasetSpacing: 1
    }, $scope.singleBarData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My Second dataset",
            fillColor: "rgba(98,203,49,0.5)",
            strokeColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            data: [10, 20, 30, 40, 30, 50, 60]
        }]
    }, $scope.radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(98,203,49,0.2)",
            strokeColor: "rgba(98,203,49,1)",
            pointColor: "rgba(98,203,49,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#62cb31",
            data: [65, 59, 66, 45, 56, 55, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(98,203,49,0.4)",
            strokeColor: "rgba(98,203,49,1)",
            pointColor: "rgba(98,203,49,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#62cb31",
            data: [28, 12, 40, 19, 63, 27, 87]
        }]
    }, $scope.radarOptions = {
        scaleShowLine: !0,
        angleShowLineOut: !0,
        scaleShowLabels: !1,
        scaleBeginAtZero: !0,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: !0,
        pointDotRadius: 2,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 1,
        datasetFill: !0
    }, $scope.lineProjectData = {
        labels: ["January", "February", "March", "April"],
        datasets: [{
            label: "Example dataset",
            fillColor: "rgba(98,203,49,0.5)",
            strokeColor: "rgba(98,203,49,0.7)",
            pointColor: "rgba(98,203,49,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(26,179,148,1)",
            data: [17, 21, 19, 24]
        }]
    }, $scope.lineProjectOptions = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: !1,
        pointDot: !0,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !1,
        datasetStrokeWidth: 1,
        datasetFill: !0,
        responsive: !0,
        tooltipTemplate: "<%= value %>",
        showTooltips: !0,
        onAnimationComplete: function () {
            this.showTooltip(this.datasets[0].points, !0)
        },
        tooltipEvents: []
    }
}
function inlineChartsCtrl($scope) {
    $scope.inlineData = [34, 43, 43, 35, 44, 32, 44, 52, 25], $scope.inlineOptions = {
        type: "line",
        lineColor: "#54ab2c",
        fillColor: "#62cb31"
    }, $scope.barSmallData = [5, 6, 7, 2, 0, -4, -2, 4], $scope.barSmallOptions = {
        type: "bar",
        barColor: "#62cb31",
        negBarColor: "#c6c6c6"
    }, $scope.smallPieData = [1, 1, 2], $scope.smallPieOptions = {
        type: "pie",
        sliceColors: ["#62cb31", "#b3b3b3", "#e4f0fb"]
    }, $scope.longLineData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], $scope.longLineOptions = {
        type: "line",
        lineColor: "#62cb31",
        fillColor: "#ffffff"
    }, $scope.tristateData = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], $scope.tristateOptions = {
        type: "tristate",
        posBarColor: "#62cb31",
        negBarColor: "#bfbfbf"
    }, $scope.discreteData = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], $scope.discreteOptions = {
        type: "discrete",
        lineColor: "#62cb31"
    }, $scope.pieCustomData = [52, 12, 44], $scope.pieCustomOptions = {
        type: "pie",
        height: "150px",
        sliceColors: ["#1ab394", "#b3b3b3", "#e4f0fb"]
    }, $scope.barCustomData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], $scope.barCustomOptions = {
        type: "bar",
        barWidth: 8,
        height: "150px",
        barColor: "#1ab394",
        negBarColor: "#c6c6c6"
    }, $scope.lineCustomData = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], $scope.lineCustomOptions = {
        type: "line",
        lineWidth: 1,
        height: "150px",
        lineColor: "#17997f",
        fillColor: "#ffffff"
    }
}
function clockCtrl($scope, $timeout) {
    $scope.tickInterval = 1e3;
    var tick = function () {
        $scope.clock = Date.now(), $timeout(tick, $scope.tickInterval)
    };
    $timeout(tick, $scope.tickInterval)
}
function timelineCtrl($scope) {
    $scope.timelineItems = [{
        type: "The standard chunk of Lorem Ipsum",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        date: 1423063721,
        info: "It is a long established fact that"
    }, {
        type: "There are many variations",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
        date: 1423063721,
        info: "It is a long established fact that"
    }, {
        type: "Contrary to popular belief",
        content: " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: 1423063721,
        info: "It is a long established fact that"
    }, {
        type: "Lorem Ipsum",
        content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
        date: 1423063721,
        info: "It is a long established fact that"
    }, {
        type: "The generated Lorem Ipsum",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
        date: 1423063721,
        info: "It is a long established fact that"
    }, {
        type: "The standard chunk",
        content: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        date: 1423063721,
        info: "It is a long established fact that"
    }]
}
function googleMapCtrl($scope, $timeout) {
    $scope.mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(40.67, -73.94),
        styles: [{
            featureType: "landscape",
            stylers: [{saturation: -100}, {lightness: 65}, {visibility: "on"}]
        }, {
            featureType: "poi",
            stylers: [{saturation: -100}, {lightness: 51}, {visibility: "simplified"}]
        }, {
            featureType: "road.highway",
            stylers: [{saturation: -100}, {visibility: "simplified"}]
        }, {
            featureType: "road.arterial",
            stylers: [{saturation: -100}, {lightness: 30}, {visibility: "on"}]
        }, {
            featureType: "road.local",
            stylers: [{saturation: -100}, {lightness: 40}, {visibility: "on"}]
        }, {
            featureType: "transit",
            stylers: [{saturation: -100}, {visibility: "simplified"}]
        }, {featureType: "administrative.province", stylers: [{visibility: "off"}]}, {
            featureType: "water",
            elementType: "labels",
            stylers: [{visibility: "on"}, {lightness: -25}, {saturation: -100}]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{hue: "#ffff00"}, {lightness: -25}, {saturation: -97}]
        }],
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
}
function calendarCtrl($scope) {
    var date = new Date, d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
    $scope.alertMessage = "Report all events from UI calendar.", $scope.events = [{
        title: "All Day Event",
        start: new Date(y, m, 1)
    }, {id: 999, title: "Repeating Event", start: new Date(y, m, d - 3, 16, 0), allDay: !1}, {
        id: 999,
        title: "Repeating Event",
        start: new Date(y, m, d + 4, 16, 0),
        allDay: !1
    }, {
        title: "Birthday Party",
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: !1
    }, {
        title: "Homer task",
        start: new Date(y, m, d + 5, 19, 0),
        end: new Date(y, m, d + 6, 22, 30),
        allDay: !1,
        backgroundColor: "#62cb31",
        borderColor: "#62cb31"
    }, {
        title: "Click for Google",
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: "http://google.com/"
    }], $scope.alertOnEventClick = function (event, allDay, jsEvent, view) {
        $scope.alertMessage = event.title + ": Clicked "
    }, $scope.alertOnDrop = function (event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view) {
        $scope.alertMessage = event.title + ": Droped to make dayDelta " + dayDelta
    }, $scope.alertOnResize = function (event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view) {
        $scope.alertMessage = event.title + ": Resized to make dayDelta " + minuteDelta
    }, $scope.uiConfig = {
        calendar: {
            height: 550,
            editable: !0,
            header: {left: "prev,next", center: "title", right: "month,agendaWeek,agendaDay"},
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    }, $scope.eventSources = [$scope.events]
}
function editorCtrl($scope) {
    $scope.summernoteText = ["<h3>Hello Jonathan! </h3>", "<p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more", "<br/><br/>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.", "recently with.</p><p>Mark Smith</p>"].join(""), $scope.summernoteTextTwo = ["<h4>It is a long established fact</h4>", "<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)", "<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)", "with.</p>"].join(""), $scope.summernoteOpt = {toolbar: [["headline", ["style"]], ["style", ["bold", "italic", "underline", "superscript", "subscript", "strikethrough", "clear"]], ["textsize", ["fontsize"]], ["alignment", ["ul", "ol", "paragraph", "lineheight"]]]}
}
function nggridCtrl($scope) {
    $scope.exampleData = [{
        Name: "Jakeem",
        Email: "imperdiet@vulputatevelit.com",
        Company: "Laoreet Lectus Corporation",
        City: "Vaux-sur-Sure",
        Country: "Papua New Guinea"
    }, {
        Name: "Kadeem",
        Email: "sit.amet.risus@scelerisquenequesed.net",
        Company: "Mi Felis Adipiscing Institute",
        City: "Fauglia",
        Country: "Bouvet Island"
    }, {
        Name: "Paula",
        Email: "venenatis.lacus@milorem.net",
        Company: "Libero LLP",
        City: "Tirupati",
        Country: "Antigua and Barbuda"
    }, {
        Name: "Bree",
        Email: "adipiscing.non.luctus@loremutaliquam.edu",
        Company: "Vitae Purus Gravida Institute",
        City: "Chatteris",
        Country: "Poland"
    }, {
        Name: "Quinn",
        Email: "Nunc@ac.com",
        Company: "Dui Lectus Rutrum Consulting",
        City: "Wolverhampton",
        Country: "Venezuela"
    }, {
        Name: "Magee",
        Email: "pretium.aliquet.metus@venenatislacus.co.uk",
        Company: "Dui Associates",
        City: "Stokrooie",
        Country: "Japan"
    }, {
        Name: "Rowan",
        Email: "mus@rutrum.net",
        Company: "Diam Pellentesque Habitant Institute",
        City: "Ashburton",
        Country: "Taiwan"
    }, {
        Name: "Nina",
        Email: "lobortis.augue@feugiatnec.org",
        Company: "Auctor Velit Eget Consulting",
        City: "Stevenage",
        Country: "Denmark"
    }, {
        Name: "Chava",
        Email: "nec@ipsumSuspendissesagittis.com",
        Company: "Egestas Company",
        City: "Aulnay-sous-Bois",
        Country: "Togo"
    }, {
        Name: "Uma",
        Email: "tincidunt.nunc@vestibulumneque.net",
        Company: "Sem Semper Corp.",
        City: "Dalkeith",
        Country: "Nigeria"
    }, {
        Name: "Amal",
        Email: "laoreet.posuere@eu.net",
        Company: "Non Massa PC",
        City: "Stafford",
        Country: "South Sudan"
    }, {
        Name: "Dana",
        Email: "Nulla.dignissim@mattisornarelectus.co.uk",
        Company: "Laoreet PC",
        City: "Gentinnes",
        Country: "Korea, South"
    }, {
        Name: "Iris",
        Email: "nostra.per.inceptos@magnamalesuada.co.uk",
        Company: "Diam Vel LLC",
        City: "Oudekapelle",
        Country: "Dominican Republic"
    }, {
        Name: "Joshua",
        Email: "Duis@enimgravidasit.com",
        Company: "Magna Foundation",
        City: "San Francisco",
        Country: "Guinea-Bissau"
    }, {
        Name: "Rosalyn",
        Email: "egestas.ligula.Nullam@auctorullamcorpernisl.ca",
        Company: "Sodales Mauris LLC",
        City: "Seydişehir",
        Country: "Sudan"
    }, {
        Name: "Hilary",
        Email: "et.pede.Nunc@accumsanneque.co.uk",
        Company: "Et Rutrum Corp.",
        City: "Broechem",
        Country: "Bulgaria"
    }, {
        Name: "Amena",
        Email: "nisl.Maecenas.malesuada@vitaeorci.edu",
        Company: "Quis LLC",
        City: "Joliet",
        Country: "Saint Lucia"
    }, {
        Name: "Rashad",
        Email: "Pellentesque.tincidunt@euneque.org",
        Company: "Suspendisse Tristique Neque Industries",
        City: "Amlwch",
        Country: "Timor-Leste"
    }, {
        Name: "Sharon",
        Email: "ornare.sagittis@vitaeeratvel.ca",
        Company: "Tellus Foundation",
        City: "Woodstock",
        Country: "Chile"
    }], $scope.gridOptions = {data: "exampleData"}, $scope.gridOptionsTwo = {
        data: "exampleData",
        showGroupPanel: !0,
        jqueryUIDraggable: !0
    }
}
function nestableCtrl($scope) {
    $scope.remove = function (scope) {
        scope.remove()
    }, $scope.toggle = function (scope) {
        scope.toggle()
    }, $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a)
    }, $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: 10 * nodeData.id + nodeData.nodes.length,
            title: nodeData.title + "." + (nodeData.nodes.length + 1),
            nodes: []
        })
    }, $scope.collapseAll = function () {
        $scope.$broadcast("collapseAll")
    }, $scope.expandAll = function () {
        $scope.$broadcast("expandAll")
    }, $scope.data = [{
        id: 1,
        title: "Sem fringilla",
        nodes: [{
            id: 11,
            title: "Nisl lacus et, ultricies",
            nodes: [{id: 111, title: "Congue hac", nodes: []}]
        }, {id: 12, title: "Consectetuer orci mollis", nodes: []}]
    }, {
        id: 2,
        title: "Gravida morbi non",
        nodes: [{id: 21, title: "Lorem aliquam", nodes: []}, {id: 22, title: "Inceptos nibh", nodes: []}]
    }, {
        id: 3,
        title: "Pede hymenaeos",
        nodes: [{id: 31, title: "Magnis morbi orci", nodes: []}, {
            id: 32,
            title: "Ad tortor, auctor dui",
            nodes: []
        }, {id: 33, title: "Orci magnis, mauris", nodes: []}]
    }]
}
function tourCtrl($scope) {
}
function datatablesCtrl($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.fromSource("api/datatables.json"), $scope.dtColumns = [DTColumnBuilder.newColumn("Name").withTitle("Name"), DTColumnBuilder.newColumn("Position").withTitle("Position"), DTColumnBuilder.newColumn("Office").withTitle("Office"), DTColumnBuilder.newColumn("Age").withTitle("Age"), DTColumnBuilder.newColumn("Start_date").withTitle("Start_date"), DTColumnBuilder.newColumn("Salary").withTitle("Salary")]
}
function wizardOneCtrl($scope, notify, sweetAlert) {
    $scope.user = {
        username: "Mark Smith",
        email: "mark@company.com",
        password: "secret_password",
        approve: !1
    }, $scope.step = 1, $scope.wizard = {
        show: function (number) {
            $scope.step = number
        }, next: function () {
            $scope.step++
        }, prev: function () {
            $scope.step--
        }
    }, $scope.submit = function () {
        sweetAlert.swal({title: "Thank you!", text: "You approved our example form!", type: "success"}), $scope.step = 1
    }
}
function formsCtrl($scope) {
    $scope.user = {
        name: "awesome user",
        desc: "Awesome user \ndescription!",
        remember: !0
    }, $scope.person = {}, $scope.people = [{name: "Adam", email: "adam@email.com", age: 10}, {
        name: "Amalie",
        email: "amalie@email.com",
        age: 12
    }, {name: "Wladimir", email: "wladimir@email.com", age: 30}, {
        name: "Samantha",
        email: "samantha@email.com",
        age: 31
    }, {name: "Estefanía", email: "estefanía@email.com", age: 16}, {
        name: "Natasha",
        email: "natasha@email.com",
        age: 54
    }, {name: "Nicole", email: "nicole@email.com", age: 43}, {
        name: "Adrian",
        email: "adrian@email.com",
        age: 21
    }], $scope.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], $scope.multipleDemo = {}, $scope.multipleDemo.colors = ["Blue", "Red"], $scope.availableTags = ["Branding", "Website", "Design", "Ilustration", "New", "Important", "External"], $scope.multipleTags = {}, $scope.multipleTags.tags = ["Branding", "Website", "Design", "Ilustration", "New"], $scope.open = function ($event) {
        $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
    }
}
function SelectLocalCtrl($scope, $filter) {
    $scope.user = {status: 2}, $scope.statuses = [{value: 1, text: "status1"}, {value: 2, text: "status2"}, {
        value: 3,
        text: "status3"
    }, {value: 4, text: "status4"}], $scope.showStatus = function () {
        var selected = $filter("filter")($scope.statuses, {value: $scope.user.status});
        return $scope.user.status && selected.length ? selected[0].text : "Not set"
    }
}
function RadiolistCtrl($scope, $filter) {
    $scope.user = {status: 2}, $scope.statuses = [{value: 1, text: "status1"}, {
        value: 2,
        text: "status2"
    }], $scope.showStatus = function () {
        var selected = $filter("filter")($scope.statuses, {value: $scope.user.status});
        return $scope.user.status && selected.length ? selected[0].text : "Not set"
    }
}
function Html5InputsCtrl($scope) {
    $scope.user = {
        email: "email@example.com",
        tel: "123-45-67",
        number: 29,
        range: 10,
        url: "http://example.com",
        search: "blabla",
        color: "#6a4415",
        date: null,
        time: "12:30",
        datetime: null,
        month: null,
        week: null
    }
}
function DatepickerDemoCtrl($scope) {
    $scope.today = function () {
        $scope.dt = new Date
    }, $scope.today(), $scope.clear = function () {
        $scope.dt = null
    }, $scope.disabled = function (date, mode) {
        return "day" === mode && (0 === date.getDay() || 6 === date.getDay())
    }, $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date
    }, $scope.toggleMin(), $scope.open = function ($event) {
        $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
    }, $scope.dateOptions = {
        formatYear: "yy",
        startingDay: 1
    }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], $scope.format = $scope.formats[0]
}
function spinCtrl($scope) {
    $scope.inputteresxcs = 55, $scope.spinOption1 = {
        min: 0,
        max: 100,
        step: .1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10
    }, $scope.spinOption2 = {verticalbuttons: !0}, $scope.spinOption3 = {postfix: "%"}, $scope.spinOption4 = {
        postfix: "a button",
        postfix_extraclass: "btn btn-default"
    }
}
function draggableCtrl($scope) {
    $scope.sortableOptions = {connectWith: ".connectPanels", handler: ".panel-body"}
}
function validationCtrl($scope) {
    $scope.signupForm = function () {
        $scope.signup_form.$valid || ($scope.signup_form.submitted = !0)
    }
}
function touchSpin() {
    return {
        restrict: "A", scope: {spinOptions: "="}, link: function (scope, element, attrs) {
            scope.$watch(scope.spinOptions, function () {
                render()
            });
            var render = function () {
                $(element).TouchSpin(scope.spinOptions)
            }
        }
    }
}
$(document).ready(function () {
    fixWrapperHeight(), setBodySmall()
}), $(window).bind("load", function () {
    $(".splash").css("display", "none")
}), $(window).bind("resize click", function () {
    setBodySmall(), setTimeout(function () {
        fixWrapperHeight()
    }, 300)
}), function () {
    angular.module("homer", ["ui.router", "ngSanitize", "ui.bootstrap", "angular-flot", "angles", "angular-peity", "cgNotify", "angles", "ngAnimate", "ui.map", "ui.calendar", "summernote", "ngGrid", "ui.tree", "bm.bsTour", "datatables", "xeditable", "ui.select", "ui.sortable", "ui.footable"])
}(), angular.module("homer").config(configState).run(function ($rootScope, $state, editableOptions) {
    $rootScope.$state = $state, editableOptions.theme = "bs3"
}), angular.module("homer").filter("propsFilter", propsFilter), angular.module("homer").directive("pageTitle", pageTitle).directive("sideNavigation", sideNavigation).directive("minimalizaMenu", minimalizaMenu).directive("sparkline", sparkline).directive("icheck", icheck).directive("panelTools", panelTools).directive("smallHeader", smallHeader).directive("animatePanel", animatePanel).directive("landingScrollspy", landingScrollspy), angular.module("homer").controller("appCtrl", appCtrl), angular.module("homer").factory("sweetAlert", sweetAlert), angular.module("homer").controller("alertsCtrl", alertsCtrl), angular.module("homer").controller("modalCtrl", modalCtrl), angular.module("homer").controller("charts_flotCtrl", charts_flotCtrl), angular.module("homer").controller("chartjsCtrl", chartjsCtrl), angular.module("homer").controller("inlineChartsCtrl", inlineChartsCtrl), angular.module("homer").controller("clockCtrl", clockCtrl), angular.module("homer").controller("timelineCtrl", timelineCtrl), angular.module("homer").controller("googleMapCtrl", googleMapCtrl), angular.module("homer").controller("calendarCtrl", calendarCtrl), angular.module("homer").controller("editorCtrl", editorCtrl), angular.module("homer").controller("nggridCtrl", nggridCtrl), angular.module("homer").controller("nestableCtrl", nestableCtrl), angular.module("homer").controller("tourCtrl", tourCtrl), angular.module("homer").controller("datatablesCtrl", datatablesCtrl), angular.module("homer").controller("wizardOneCtrl", wizardOneCtrl), angular.module("homer").controller("formsCtrl", formsCtrl).controller("SelectLocalCtrl", SelectLocalCtrl).controller("RadiolistCtrl", RadiolistCtrl).controller("Html5InputsCtrl", Html5InputsCtrl).controller("DatepickerDemoCtrl", DatepickerDemoCtrl).controller("spinCtrl", spinCtrl), angular.module("homer").controller("draggableCtrl", draggableCtrl), angular.module("homer").controller("validationCtrl", validationCtrl), angular.module("homer").directive("touchSpin", touchSpin);