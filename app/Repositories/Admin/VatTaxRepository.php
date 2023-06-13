<?php
namespace App\Repositories\Admin;

use App\Models\VatTax;
use Illuminate\Support\Facades\DB;
use App\Repositories\Interfaces\Admin\VatTaxInterface;

class VatTaxRepository implements VatTaxInterface{

    public function all(){
        return VatTax::latest();
    }
    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }
    public function get($id){
        return VatTax::find($id);
    }

    public function store($request){

        DB::beginTransaction();
        try {
            $data                  = new VatTax();
            $data->vat_tax         = $request->vat_tax;
            $data->percentage      = $request->percentage;
            $data->save();

            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function update($request){

        DB::beginTransaction();
        try {
            $data                   = $this->get($request->id);
            $data->vat_tax          = $request->vat_tax;
            $data->percentage       = $request->percentage;
            $data->save();

            DB::commit();
            return true;
        } catch (Exception $e) {
            DB::rollback();
            return false;
        }
    }
    public function statusChange($request){
        DB::beginTransaction();
        try {

            $vat_tax           = $this->get($request['id']);
            $vat_tax->status   = $request['status'];
            $vat_tax->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function activeTaxes()
    {
        return VatTax::where('status',1)->get();
    }
}
