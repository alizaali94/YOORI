<?php

namespace App\Repositories\Admin\Support;

use App\Models\SupportDepartment;
use App\Models\SupportDepartmentLanguages;
use App\Repositories\Interfaces\Admin\Support\SupportDepartmentLanguageInterface;
use App\Traits\SlugTrait;
use Illuminate\Support\Facades\DB;

class SupportDepartmentLanguageRepository implements SupportDepartmentLanguageInterface
{

    use SlugTrait;

    public function all()
    {
        // TODO: Implement all() method.
    }

    public function get($id)
    {
       return SupportDepartmentLanguages::find($id);
    }

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $departmentLang                                   = new  SupportDepartmentLanguages();
            $departmentLang->title                            = $request->title;
            $departmentLang->lang                             = $request->lang;
            $departmentLang->support_department_id            = $request->support_department_id;
            $departmentLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }

    public function paginate($limit)
    {
        // TODO: Implement paginate() method.
    }

    public function update($request)
    {
        DB::beginTransaction();
        try {
            $departmentLang                                   = $this->get($request->support_department_lang_id);
            $departmentLang->title                            = $request->title;
            $departmentLang->save();

            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollback();
            return false;
        }
    }
}


