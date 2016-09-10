<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::group(['middleware'=> ['web']], function (){
//    Route::get('/', function () {
//
//        return view('RegisterNewAccount');
//    });

    Route::get('/', 'userController@getDashboard');
    Route::get('/dashboard', [
        'as' => 'dashboard',
        'uses' => 'AnchorController@Dashboard',
        'middleware' => 'auth'
    ]);
//    Route::get('/dashboard/SalePoint{error}', [
//        'as' => 'SalePoint',
//        'uses' => 'AnchorController@SalePointWithError'
//    ]);
    Route::get('/dashboard/ShowTraders', [
        'as' => 'ShowTraders',
        'uses' => 'AnchorController@ShowTraders'
    ]);
    Route::get('/dashboard/ShowProducts', [
        'as' => 'ShowProducts',
        'uses' => 'AnchorController@ShowProducts'
    ]);
    Route::get('/dashboard/SupplierInvoice', [
        'as' => 'SupplierInvoice',
        'uses' => 'AnchorController@SupplierInvoice'
    ]);
    Route::get('/dashboard/AddUser', [
        'as' => 'AddUser',
        'uses' => 'AnchorController@AddUser'
    ]);
    Route::get('/dashboard/ShowUsers', [
        'as' => 'ShowUsers',
        'uses' => 'AnchorController@ShowUsers'
    ]);

    Route::get('/dashboard/ShowSellingInvoices', [
        'as' => 'ShowSellingInvoices',
        'uses' => 'ShowSaleInvoices@getAllSaleInvoices'
    ]);

    Route::get('/dashboard/ShowSellingInvoices/searchResult', [
        'as' => 'ShowSellingInvoicesWithResult',
        'uses' => 'AnchorController@ShowSellingInvoices'
    ]);


    Route::get('logout', [
        'as' => 'logout',
        'uses' => 'userController@logout'
    ]);



    Route::any('/dashboard/ShowSellingInvoices/searchBySingleDate', [
        'as' => 'getResultBySingleDate',
        'uses' => 'ShowSaleInvoices@getResultBySingleDate'
    ]);


    Route::get('/dashboard/ShowTradersInvoices', [
        'as' => 'ShowTradersInvoices',
        'uses' => 'AnchorController@ShowTradersInvoices'
    ]);
    Route::get('login', [
        'as' => 'Weblogin',
        'uses' => 'AnchorController@Login'
    ]);
    Route::get('/RegisterNewAccount', [
        'as' => 'RegisterNewAccount',
        'uses' => 'AnchorController@RegisterNewAccount'
    ]);

    Route::post('makeSale', [
        'as' => 'makeSale',
        'uses' => 'SaleController@makeSale'
    ]);

    Route::post('/dashboard/SalePoint/check', [
        'as' => 'checkName',
        'uses' => 'SaleController@checkName'
    ]);

    Route::get('/dashboard/SalePoint/getAllProductNames', [
        'as' => 'allProductNames',
        'uses' => 'SaleController@getAllProductNames'
    ]);

    Route::get('/try', [
        'as' => 'try',
        'uses' => 'AnchorController@tryy'
    ]);


    Route::post('/dashboard/SalePoint/checkAmount', [
        'as' => 'checkAmount',
        'uses' => 'SaleController@checkAmount'
    ]);


    Route::get('/dashboard/SalePoint/getReady', [
        'as' => 'getReady',
        'uses' => 'SaleController@getReady'
    ]);

    Route::get('/dashboard/SalePoint', [
        'as' => 'SalePoint',
        'uses' => 'AnchorController@SalePoint',
        'middleware' => 'auth'
    ]);

    Route::get('/dashboard/ShowProducts', [
        'as' => 'ShowProducts',
        'uses' => 'showProductController@ShowProducts'
    ]);

    Route::post('/dashboard/ShowProducts/search', [
        'as' => 'searchForProduct',
        'uses' => 'showProductController@searchForProduct'
    ]);

});

Route::get('/test',[
    'as' => 'test',
    'uses' => 'ShowSaleInvoices@getAllSaleInvoices'
]);


Route::post('/signup', [
    'uses' => 'userController@userSingUp',
    'as' => 'signup',
]);

Route::post('/signin', [
    'uses' => 'userController@userSignIn',
    'as' => 'signin',
]);

Route::post('/supplierInvoice',[
        'uses' => 'supplierInvoice@stInvoice',
        'as' => 'supplierInvoice'
    ]);