<?php

namespace App\Repositories\Interfaces\Site;

interface AddressInterface{

    public function userAddress();

    public function storeAddress($request);

    public function deleteAddress($id);

    public function makeDefault($type, $id);

    public function store($request);

    public function edit($id);

    public function update($request,$id);

    public function destroy($id);

    public function getAdrByUser($id);
}
