<?php

namespace App\Repositories\Interfaces\Admin;

interface DashboardInterface
{
    public function index();

    public function getLastDateOfMonth($month);

    public function orderState($report_type, $first_load);

    public function orderStatistics($report_type, $first_load);

    public function salesByCategory($report_type, $first_load);

    public function salesState($report_type, $first_load);

    public function topCategories();

    public function topSellers();
    public function topProducts($report_type, $first_load);
}
