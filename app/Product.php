<?php

namespace App;

use Faker\Provider\Barcode;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = 'products';
    protected $fillable = ['Product_ID',
        'Name',
        'WholeQuantity',
        'numberOfUnitInCartoon',
        'wholepricetrader',
        'wholepricesale',
        'SingleUnitPrice',
        'total',
        'Barcode',
        'Shop_ID',
        'userID',
        'Trader_ID',
        'created_at',
        'updated-at'];

}
