@extends('admin.partials.master')
@section('footer_content')
    active
@endsection
@section('page-style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/summernote-bs4.css') }}">
@endsection
@section('contact')
    active
@endsection
@section('title')
    {{ __('Contact') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="row">
                @include('admin.store-front.footer-content-sidebar')
                <div class="col-12 col-sm-12 col-md-8 col-lg-9">
                    <div class="tab-content no-padding" id="myTab2Content">
                        <div class="tab-pane fade show active" id="about" role="tabpane1"aria-labelledby="about-tab">
                            <div class="card">
                                <div class="card-header">
                                    {{__(' Contact Widget')}}
                                </div>
                                <div class="card-body col-8 middle">
                                    <form method="post" action="{{route('update')}}">
                                        @csrf
                                        @method('put')
                                        <div class="form">
                                            <div class="form-group">
                                                <label for="contact_phone">{{__('Footer Contact Phone')}}</label>
                                                <div class="custom-file">
                                                    <input type="phone" placeholder="{{__('Contact Phone')}}" value="{{old('footer_contact_phone') ? old('footer_contact_phone') : settingHelper('footer_contact_phone')}}" class="form-control" name="footer_contact_phone" id="footer_contact_phone">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="contact_email">{{__('Footer Contact Email')}}</label>
                                                <div class="custom-file">
                                                    <input type="email" placeholder="{{__('Footer Contact Email')}}" value="{{old('footer_contact_email') ? old('footer_contact_email') : settingHelper('footer_contact_email')}}" name="footer_contact_email" class="form-control" id="footer_contact_email">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="contact_address">{{__('Footer Contact Address')}}</label>
                                                <textarea name="footer_contact_address" placeholder="{{__('Footer Contact Address')}}" id="footer_contact_address" cols="30" rows="5" class="form-control h-130">{{old('footer_contact_address') ? old('footer_contact_address') : settingHelper('footer_contact_address')}}</textarea>
                                            </div>
                                        </div>
                                        <div class="text-md-right">
                                            <button class="btn btn-outline-primary" id="save-btn">{{__('Update')}}</button>
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


