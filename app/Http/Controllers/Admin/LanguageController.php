<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LanagueUpdate;
use App\Http\Requests\Admin\LanguageStore;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use JoeDixon\Translation\Drivers\Translation;
use Psr\Container\ContainerExceptionInterface;

use Psr\Container\NotFoundExceptionInterface;

class LanguageController extends Controller
{
    private $translation;
    private $disk;
    private $lanuages;

    public function __construct(Filesystem $disk,Translation $translation, LanguageInterface $languages)
    {
        $this->translation  = $translation;
        $this->disk         = $disk;
        $this->lanuages     = $languages;
    }

    public function index()
    {
        try {
            $flags               = $this->lanuages->flags();
            $languages           = $this->lanuages->paginate(get_pagination('index_form_paginate'));

            return view('admin.settings.language.index', compact( 'languages','flags'));
        } catch (\Exception $e){
             Toastr::error(__($e->getMessage()));
            return back();
        }
    }

    public function create()
    {
        return view('admin.settings.language.create');
    }

    public function store(LanguageStore $request){
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->lanuages->store($request)):
            Toastr::success(__('Created Successfully'));
            return redirect()->route('language');
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function addNewLanguage(LanguageStore $request)
    {
        return redirect()->back()->with('success', __('new_language_added'));
    }

    public function editLanguageInfo($id)
    {
        $langInfo       = $this->lanuages->get($id);
        $langConfig     = $langInfo->languageConfig;
        $flagIcons      = $this->lanuages->flags();

        return view('language::edit_language',[
            'langInfo'      => $langInfo,
            'langConfig'    => $langConfig,
            'flagIcons'     => $flagIcons
        ]);
    }

    public function delete($id)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        $language = $this->lanuages->get($id);
        if ($id == 1 || $language->locale == settingHelper('default_language')):
            $response['message'] = __('Access Denied');
            $response['status']  = 'error';
            $response['title']   = __('403');
            return response()->json($response);
        endif;
        if ($this->lanuages->deleteConfirm($language->locale, $id)):
            $response['message'] = __('translation::translation.Deleted Successfully!');
            $response['status']  = 'success';
            $response['title']   = __('Deleted');
            return response()->json($response);
        else:
            $response['message'] = __('Something went wrong, please try again');
            $response['status']  = 'error';
            $response['title']   = __('Ops..!');
            return response()->json($response);
        endif;
    }

    public function translationIndex(Request $request, $language){
        try {
            if ($request->has('language') && $request->get('language') !== $language) {
                return redirect()
                    ->route('admin.languages.translations.index', ['language' => $request->get('language'), 'group' => $request->get('group'), 'filter' => $request->get('filter')]);
            }

            $languages      = $this->translation->allLanguages();
            $groups         = $this->translation->getGroupsFor(config('app.locale'))->merge('single');
            $translations   = $this->translation->filterTranslationsFor($language, $request->get('filter'));

            if ($request->has('group') && $request->get('group')) {
                if ($request->get('group') === 'single') {
                    $translations = $translations->get('single');
                    $translations = new Collection(['single' => $translations]);
                } else {
                    $translations = $translations->get('group')->filter(function ($values, $group) use ($request) {
                        return $group === $request->get('group');
                    });
                    $translations = new Collection(['group' => $translations]);
                }
            }

            return view('admin.settings.language.translation.index', compact('language', 'languages', 'groups', 'translations'));
        } catch (\Exception $e){
            dd($e);
            Toastr::error(__($e->getMessage()));
            return back();
        }
    }

    public function editLanguage(Request $request){
        try {
            if ($request->id == 1):
                return abort('403');
            endif;
            $language       = $this->lanuages->get($request->id);
            $title          = 'edit_language';
            $flags          = $this->lanuages->flags();
            $r = $request->server('HTTP_REFERER');
            return view('admin.settings.language.form', compact('language','title','flags','r'));
        } catch (\Exception $e){
             Toastr::error(__($e->getMessage()));
            return back();
        }
    }

    public function update(LanagueUpdate $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        if ($this->lanuages->update($request)):
            Toastr::success(__('Updated Successfully'));
            return redirect($request->r);
        else:
             Toastr::error(__('Something went wrong, please try again'));
            return back()->withInput();
        endif;
    }

    public function statusChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        $language = $this->lanuages->get($request['data']['id']);
        if ($language->locale == settingHelper('default_language')):
            $response['message']    = __('Access Denied');
            $response['title']      = __('403');
            $response['status']     = 'error';
            return response()->json($response);
        endif;

        if($this->lanuages->statusChange($request['data'])):
            $response['message']    = __('Updated Successfully');
            $response['title']      = __('Success');
            $response['status']     = 'success';
            return response()->json($response);
        else:
            $response['message']    = __('Something went wrong, please try again');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
    }

    public function directionChange(Request $request)
    {
        if (isDemoServer()):
            $response['message']    = __('This function is disabled in demo server.');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
        if($this->lanuages->directionChange($request['data'])):
            $response['message']    = __('Updated Successfully');
            $response['title']      = __('Success');
            $response['status']     = 'success';
            return response()->json($response);
        else:
            $response['message']    = __('Something went wrong, please try again');
            $response['title']      = __('Ops..!');
            $response['status']     = 'error';
            return response()->json($response);
        endif;
    }

    public function updateTrans(Request $request, $language)
    {
        if (! Str::contains($request->get('group'), 'single')) {
            $this->translation->addGroupTranslation($language, $request->get('group'), $request->get('key'), $request->get('value') ?: '');
        } else {
            $this->translation->addSingleTranslation($language, $request->get('group'), $request->get('key'), $request->get('value') ?: '');
        }

        return ['success' => true];
    }
}
