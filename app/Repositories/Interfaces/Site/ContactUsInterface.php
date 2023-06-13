<?php

namespace App\Repositories\Interfaces\Site;

interface ContactUsInterface{

    public function paginate($paginate);

    public function storeContact($request);

    public function reply($request);
}
