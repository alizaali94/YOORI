<?php

//otp settings
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Addons\OtpController;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::match(['get','post'],'admin/test-number-send', [OtpController::class, 'sendNumber'])->name('test.number.send');

Route::middleware(['XSS','isInstalled'])->group(function () {
    Route::group(
        [
            'prefix' => LaravelLocalization::setLocale(),
            'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath','isInstalled']
        ], function () {
        Route::middleware(['adminCheck','loginCheck'])->prefix('admin')->group(function () {
            Route::get('otp-settings', [OtpController::class, 'otpSetting'])->name('otp-settings')->middleware('PermissionCheck:otp_setting_read');
            Route::put('otp-setting-update', [OtpController::class, 'otpSettingUpdate'])->name('admin.setting.otp.update')->middleware('PermissionCheck:otp_setting_update');
            Route::get('sms-templates', [OtpController::class, 'smsTemplates'])->name('sms-templates')->middleware('PermissionCheck:sms_template_read');
            Route::put('update-sms-templates', [OtpController::class, 'smsTemplateUpdate'])->name('update-sms-templates')->middleware('PermissionCheck:sms_template_update');

            Route::put('sms-status-change', [OtpController::class, 'statusChange'])->name('admin.sms-status-change')->middleware('PermissionCheck:sms_template_update');
            Route::put('sms-template-status-change', [OtpController::class, 'templateStatusChange'])->name('admin.sms-template-status-change')->middleware('PermissionCheck:sms_template_update');

            Route::get('test-number/{type}', [OtpController::class, 'testPage'])->name('test.number');
            //sms test route

        });
    });
});
