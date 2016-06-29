<?php
/**
 * Created by PhpStorm.
 * User: Amr Saidam
 * Date: 6/19/2016
 * Time: 3:14 PM
 */
        ?>
<aside id="menu">
    <div id="navigation">
        <div class="profile-picture">
            <a href="{{route('dashboard')}}">
                <img src="{{ URL::to('bootstraps/images/Tigarty/newLogo.png') }}" class="m-b" alt="logo" style="width: 100px;height: 100px">
            </a>

            <div class="stats-label text-color">
                <span class="font-extra-bold font-uppercase"> اسم المتجر</span>


                <div id="sparkline1" class="small-chart m-t-sm"></div>
                <div>
                    <h4 class="font-extra-bold m-b-xs">
                        $260 104,200
                    </h4>
                    <small class="text-muted"> نسبة البيع</small>
                </div>
            </div>
        </div>

        <ul class="nav" id="side-menu" style="text-align: center">

            <li>
                <a href="{{route('dashboard')}}"> <span class="nav-label"> الرئيسية </span></a>
            </li>
            <li>
                <a href="#"><span class="nav-label" > ادخال فواتير </span><span class="fa arrow"></span> </a>
                <ul class="nav nav-second-level">
                    <li><a href="{{route('SalePoint')}}"> نقطة بيع </a></li>
                    <li><a href="{{route('SupplierInvoice')}}"> فاتورة مشتريات</a></li>

                </ul>
            </li>
            <li>
                <a href="#"><span class="nav-label"> عرض فواتير </span><span class="fa arrow"></span> </a>
                <ul class="nav nav-second-level">

                    <li><a href="{{route('ShowSellingInvoices')}}"> عرض فواتير البيع </a></li>
                    <li><a href="Show Traders Bills.html"> عرض فواتير المشتريات </a></li>

                </ul>
            </li>
            <li>
                <a href="#"><span class="nav-label"> المستخدمين    </span><span class="fa arrow"></span> </a>
                <ul class="nav nav-second-level">
                    <li><a href="{{route('AddUser')}}"> ادخال مستخدم جديد </a></li>
                    <li><a href="{{route('ShowUsers')}}"> عرض المستخدمين </a></li>
                </ul>
            </li>

            <li>
                <a href="{{route('ShowTraders')}}"> <span class="nav-label"> عرض التجار </span></a>
            </li>
            <li>
                <a href="{{route('ShowProducts')}}"> <span class="nav-label"> عرض السلع </span></a>
            </li>

        </ul>
    </div>
</aside>
