@extends('admin.partials.master')
@section('store_front_active')
    active
@endsection
@section('theme-options')
    active
@endsection
@section('theme-options')
    active
@endsection
@section('title')
    {{ __('Theme-Options') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Store Front') }}</h2>
            <div class="row">
                @include('admin.store-front.theme-options-sitebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="themeoption" role="tabpane1"
                             aria-labelledby="themeoption-tab">
                            <div class="card">
                                <div class="card-header">
                                    <h4>{{ __('Theme Options') }}</h4>
                                </div>
                                <div class="col-md-10 middle card-body">
                                    <form method="POST" action="{{ route('update')}}">
                                        @csrf
                                        @method('put')
                                        <div class="row">
                                            <div class="form-group col-md-4">
                                                <label for="primary_color">{{ __('Primary Color') }}*</label>
                                                <div class="input-group colorpickerinput">
                                                    <input type="text" class="form-control" name="primary_color"
                                                           value="{{ old('primary_color') ? old('primary_color') : settingHelper('primary_color') }}"
                                                           id="primary_color" placeholder="{{ __('Primary Color') }}">
                                                    <input type="hidden" name="id" value=""/>
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                            <i class='bx bxs-color-fill'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                @if ($errors->has('primary_color'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('primary_color') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                            @if(settingHelper('header_theme') == 'header_theme1')
                                                <div class="form-group col-md-4">
                                                    <label for="fonts">{{ __("Full-Width Menu Background") }}*</label>
                                                    <select id="fonts" name="full_width_menu_background"
                                                            class="form-control selectric">
                                                        <option value="1"
                                                                @if(old('full_width_menu_background') ? old('full_width_menu_background') : settingHelper('full_width_menu_background') == '1') selected @endif> {{ __('Yes') }}</option>
                                                        <option value="0"
                                                                @if(old('full_width_menu_background') ? old('full_width_menu_background') : settingHelper('full_width_menu_background') == '0') selected @endif> {{ __('No') }}</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="menu_background_color">{{ __('Menu Background Color') }}
                                                        *</label>
                                                    <div class="input-group colorpickerinput">
                                                        <input type="text" class="form-control"
                                                               name="menu_background_color"
                                                               value="{{ old('menu_background_color') ? old('menu_background_color') : settingHelper('menu_background_color') }}"
                                                               id="menu_background_color"
                                                               placeholder="{{ __('Menu Background Color') }}">
                                                        <div class="input-group-append">
                                                            <div class="input-group-text">
                                                                <i class='bx bxs-color-fill'></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @if ($errors->has('menu_background_color'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('menu_background_color') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="menu_background_color">{{ __('Menu Text Color') }}
                                                        *</label>
                                                    <div class="input-group colorpickerinput">
                                                        <input type="text" class="form-control" name="menu_text_color"
                                                               value="{{ old('menu_text_color') ? old('menu_text_color') : settingHelper('menu_text_color') }}"
                                                               id="menu_text_color"
                                                               placeholder="{{ __('Menu Text Color') }}">
                                                        <div class="input-group-append">
                                                            <div class="input-group-text">
                                                                <i class='bx bxs-color-fill'></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @if ($errors->has('menu_text_color'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('menu_text_color') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="menu_active_color">{{ __('Menu Active Color') }}
                                                        *</label>
                                                    <div class="input-group colorpickerinput">
                                                        <input type="text" class="form-control" name="menu_active_color"
                                                               value="{{ old('menu_active_color') ? old('menu_active_color') : settingHelper('menu_active_color') }}"
                                                               id="menu_active_color"
                                                               placeholder="{{ __('Menu Active Color') }}">
                                                        <input type="hidden" name="id" value="" require/>
                                                        <div class="input-group-append">
                                                            <div class="input-group-text">
                                                                <i class='bx bxs-color-fill'></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    @if ($errors->has('menu_active_color'))
                                                        <div class="invalid-feedback">
                                                            <p>{{ $errors->first('menu_active_color') }}</p>
                                                        </div>
                                                    @endif
                                                </div>
                                            @endif
                                            <div class="form-group col-md-4">
                                                <label for="menu_background_color">{{ __('Button Background Color') }}
                                                    *</label>
                                                <div class="input-group colorpickerinput">
                                                    <input type="text" class="form-control" required
                                                           name="button_background_color"
                                                           value="{{ old('button_background_color') ? old('button_background_color') : settingHelper('button_background_color') }}"
                                                           id="button_background_color"
                                                           placeholder="{{ __('Button Background Color') }}">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                            <i class='bx bxs-color-fill'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                @if ($errors->has('button_background_color'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('button_background_color') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="menu_background_color">{{ __('Button Text Color') }}
                                                    *</label>
                                                <div class="input-group colorpickerinput">
                                                    <input type="text" class="form-control" required
                                                           name="button_text_color"
                                                           value="{{ old('button_text_color') ? old('button_text_color') : settingHelper('button_text_color') }}"
                                                           id="button_text_color"
                                                           placeholder="{{ __('Button Text Color') }}">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                            <i class='bx bxs-color-fill'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                @if ($errors->has('button_text_color'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('button_text_color') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="menu_background_color">{{ __('Button Border Color') }}
                                                    *</label>
                                                <div class="input-group colorpickerinput">
                                                    <input type="text" class="form-control" required
                                                           name="button_border_color"
                                                           value="{{ old('button_border_color') ? old('button_border_color') : settingHelper('button_border_color') }}"
                                                           id="button_border_color"
                                                           placeholder="{{ __('Button Border Color') }}">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                            <i class='bx bxs-color-fill'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                @if ($errors->has('button_border_color'))
                                                    <div class="invalid-feedback">
                                                        <p>{{ $errors->first('button_border_color') }}</p>
                                                    </div>
                                                @endif
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="fonts">{{ __("Fonts") }}*</label>
                                            <select id="fonts" name="fonts" class="form-control selectric">
                                                <option value="Poppins"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Poppins') selected @endif> {{ __('Poppins') }}</option>
                                                <option value="Roboto"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Roboto') selected @endif> {{ __('Roboto') }}</option>
                                                <option value="Open Sans"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Open Sans') selected @endif>{{ __('Open Sans') }}</option>
                                                <option value="Inter"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Inter') selected @endif> {{ __('Inter') }}</option>
                                                <option value="Nunito"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Nunito') selected @endif> {{ __('Nunito') }}</option>
                                                <option value="Lato"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Lato') selected @endif> {{ __('Lato') }}</option>
                                                <option value="Montserrat"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Montserrat') selected @endif> {{ __('Montserrat') }}</option>
                                                <option value="Oswald"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Oswald') selected @endif> {{ __('Oswald') }}</option>
                                                <option value="Rubik"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Rubik') selected @endif> {{ __('Rubik') }}</option>
                                                <option value="Fredoka"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Fredoka') selected @endif> {{ __('Fredoka') }}</option>
                                                <option value="Ubuntu"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Ubuntu') selected @endif> {{ __('Ubuntu') }}</option>
                                                <option value="Raleway"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Raleway') selected @endif> {{ __('Raleway') }}</option>
                                                <option value="Playfair Display"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Playfair Display') selected @endif> {{ __('Playfair Display') }}</option>
                                                <option value="Mukta"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Mukta') selected @endif> {{ __('Mukta') }}</option>
                                                <option value="Lora"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Lora') selected @endif> {{ __('Lora') }}</option>
                                                <option value="Hind"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Hind') selected @endif> {{ __('Hind') }}</option>
                                                <option value="Exo 2"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Exo 2') selected @endif> {{ __('Exo 2') }}</option>
                                                <option value="Exo"
                                                        @if(old('fonts') ? old('fonts') : settingHelper('fonts') == 'Exo') selected @endif> {{ __('Exo') }}</option>
                                            </select>
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary"
                                                    id="save-btn">{{__('Update')}}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('script')
    <script>
        $(".inputtags").tagsinput('items');
    </script>
@endpush
