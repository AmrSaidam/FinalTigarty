<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Requests;

class showProductController extends Controller
{
    //

    public function ShowProducts()
    {

         $allProducts =  Product::paginate(10);
       // $allProducts = DB::table('products')->get();


        Session::put('products',$allProducts);
        return view('Show Product');
      //  redirect()->route('showProduct')->with(['products' => $allProducts]);
       //return $this->returnToShowView($allProducts);
        //return response()->json(['status' => '200' , 'message' => $allProducts]);
    }

    private function returnToShowView($allProducts)
    {
        return view('Show Product',compact('products',$allProducts));
    }

    public function searchForProduct(Request $request)
    {
        if(empty($request['body']))
        {
              return response()->json(['status' => '402' , 'message' => 'nothing to be searched']);

        }
        $product =  Product::where('Name',$request['body'])->get();


        if($product->isEmpty()){
            return response()->json(['status' => '404' , 'message' => 'Empty']);
        }
        return response()->json(['status' => '200' , 'message' => $product]);
//        if(empty($product))
//        {
//            return  'Amr Siada';
//        }
    }
}
