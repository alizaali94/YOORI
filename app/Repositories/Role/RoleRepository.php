<?php

namespace App\Repositories\Role;

use App\Models\Role;
use App\Repositories\Interfaces\Role\RoleInterface;
use DB;

class RoleRepository implements RoleInterface
{

    public function all()
    {
        return Role::whereNotIn('id', [1])->latest();
    }

    public function paginate($limit)
    {
        return $this->all()->paginate($limit);
    }

    public function get($id)
    {
        return Role::find($id);
    }

    public function store($data)
    {
        DB::beginTransaction();
        try {
            $role   = new Role();
            $this->save($role, $data);

            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function update($request)
    {
        DB::beginTransaction();

        try {
            $role   = $this->get($request->id);
            $this->save($role, $request);

            DB::commit();
            return true;
        } catch (\Exception $e){
            DB::rollback();
            return false;
        }
    }

    public function delete($id)
    {
        $role   = Role::find($id);
        return $role->delete();
    }

    public function save($role, $data)
    {
        // for new add and update
        $role->name     = $data['name'];
        if ($data['slug'] != null) :
            $role->slug = $data['slug'];
        else :
            $role->slug = \Str::slug($data['name'], '-');
        endif;
        $role->permissions = $data['permissions'] ?? [];

        $role->save();
    }
}
