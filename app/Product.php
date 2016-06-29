<?php

namespace App;

use Faker\Provider\Barcode;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $table = 'products';
    protected $fillable = ['Product_ID',
        'SingleUnitAmount',
        'WholeQuantity',
        'WholePrice',
        'SingleUnitAmount',
        'SingleUnitPrice',
        'Barcode',
        'Shop_ID',
        'created_at',
        'updated-at'];

}
