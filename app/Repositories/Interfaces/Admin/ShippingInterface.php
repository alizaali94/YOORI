<?php

namespace App\Repositories\Interfaces\Admin;

interface ShippingInterface {

    public function countries();
    public function getAllCountries();
    public function userCountries();
    public function countriesPaginate($request, $limit);
    public function countryStatusChange($request);

    public function getState($id);
    public function getStateByCountry($id);
    public function states();
    public function statesPaginate($request, $limit);
    public function stateStatusChange($request);
    public function stateStore($request);
    public function stateUpdate($request);

    public function getCity($id);
    public function getCitiesByState($id);
    public function cities();
    public function citiesPaginate($request, $limit);
    public function cityStatusChange($request);
    public function cityStore($request);
    public function cityUpdate($request);

    public function countriesSearch($request);

    public function stateImport();





}
