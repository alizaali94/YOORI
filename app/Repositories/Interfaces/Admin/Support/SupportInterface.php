<?php

namespace App\Repositories\Interfaces\Admin\Support;

interface SupportInterface
{
    public function all();

    public function get($id);

    public function store($request);

    public function paginate($request,$limit,$status);

    public function update($request);

    public function ticketReplayStore($request);

    public function ticketReplayUpdate($request);

    public function getSupport($request);

    public function getTicketReply();

    public function sellerSupport($request, $limit,$status);
}
