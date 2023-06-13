<?php

//otp settings
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use App\Http\Controllers\Admin\Addons\RewardSystemController;

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
        ], function () {

        Route::middleware(['adminCheck', 'loginCheck'])->prefix('admin')->group(function () {
            Route::get('/set-reward', [RewardSystemController::class, 'index'])->name('set.reward')->middleware('PermissionCheck:reward_setting_read');
            Route::post('set-reward-by',[RewardSystemController::class,'setRewardBy'])->name('set.reward.by')->middleware('PermissionCheck:reward_setting_create');
            Route::put('update-reward',[RewardSystemController::class,'updateReward'])->name('update.reward')->middleware('PermissionCheck:reward_setting_update');
            Route::get('rewards',[RewardSystemController::class,'userRewards'])->name('user.rewards')->middleware('PermissionCheck:user_reward_read');
            Route::get('user-reward/{id}',[RewardSystemController::class,'userRewardView'])->name('user.reward.view')->middleware('PermissionCheck:user_reward_update');
            Route::get('reward-config',[RewardSystemController::class,'rewardConfig'])->name('reward.config')->middleware('PermissionCheck:reward_configuration_read');
            Route::post('update-reward-config',[RewardSystemController::class,'storeRewardConfig'])->name('store.reward.config')->middleware('PermissionCheck:reward_configuration_update');
        });
    });
});
