<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaleInvoice extends Model
{
    //

    protected $table = 'saleinvoice';
    protected $fillable = [
        'SInvID',
        'InvoiceTotal',
        'Shop_ID',
        'note',
        'created_at',
        'updated_at'
    ];
}
