<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Repositories\Interfaces\Admin\AccountInterface;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    protected $accounts;
    public function __construct(AccountInterface $accounts){
        $this->accounts = $accounts;

    }
    public function index(){
        $wallets = $this->accounts->allWallets(get_pagination('pagination'));
        return view('seller.wallet.wallet',compact('wallets'));
    }

    public function wallet()
    {
        return redirect('/my-wallet');
    }
}
