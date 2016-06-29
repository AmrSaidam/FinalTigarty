<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
class AnchorController extends Controller
{
    function RegisterNewAccount()
    {
        return view('RegisterNewAccount');
    }
    function SalePoint()
    {
        return view('Sales Point');
    }
    function SupplierInvoice()
    {
        return view('SupplierInvoice');
    }
    function ShowSellingInvoices()
    {
        return view('ShowSellingInvoices');
    }
    function ShowTradersInvoices()
    {
        return view('ShowTradersInvoices');
    }
    function AddUser()
    {
        return view('AddUser');
    }
    function ShowUsers()
    {
        return view('ShowUsers');
    }
    function ShowProducts()
    {
        return view('Show Product');
    }
    function ShowTraders()
    {
        return view('ShowTraders');
    }
    function Login()
    {
        return view('WebLogin');
    }
    function Dashboard()
    {
        return view('Dashboard');
    }
    function tryy(){
        return view('try');
    }
    function SalePointWithError($error)
    {
        return view('Sales Point',compact('error',$error));
    }
}