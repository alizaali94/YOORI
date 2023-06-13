@extends('admin.partials.master')
@section('reward_system')
    active
@endsection
@section('reward_active')
    active
@endsection
@section('title')
    {{ __('Rewards') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body ">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('All Rewards')}}</h2>
                    <p class="section-lead">
                        {{ __('You have total') . ' ' . $products->total() . ' ' . __('Reward Products') }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="{{ hasPermission('reward_setting_create') ? 'col-sm-xs-12 col-md-8' : 'col-sm-xs-12 col-md-9 middle' }}">
                    <div class="card">
                        <form action="">
                            <div class="card-header input-title">
                                <h4>{{__('Rewards')}}</h4>
                            </div>
                        </form>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>{{__('#')}}</th>
                                        <th>{{__('Name')}}</th>
                                        <th>{{__('Seller')}}</th>
                                        <th>{{__('Price')}}</th>
                                        <th>{{__('Point')}}</th>
                                        @if(hasPermission('reward_setting_update'))
                                        <th>{{__('Options')}}</th>
                                        @endif
                                    </tr>

                                    @foreach($products as $key => $product)
                                    <tr id="" class="table-data-row">
                                        <td>{{$products->firstItem() + $key }}</td>
                                        <td>
                                            <a href="{{ isAppMode() ? '#' : route('product-details',$product->slug) }}">{{ $product->getTranslation('name', \App::getLocale()) }}</a>
                                        </td>
                                        <td>
                                            @if($product->user_id == 1)
                                                {{__('Admin Product')}}
                                            @elseif($product->sellerProfile != null)
{{--                                                <a target="{{ isAppMode() ? '_parent' : '_blank' }}"--}}
{{--                                                   href="{{ isAppMode() ? '#' : route('frontend.shop', @$user->sellerProfile->slug) }}">{{ @$user->sellerProfile->shop_name }}--}}
{{--                                                </a>--}}
                                            @endif
                                        </td>
                                        <td>{{get_price($product->price,user_curr())}}</td>
                                        <td>{{$product->reward}}</td>
                                        <td>
                                        @if(hasPermission('reward_setting_update'))
                                            <a href="javascript:void(0)"
                                                class="btn btn-outline-secondary btn-circle modal-menu"
                                                data-url="{{ route('edit-info', ['page_name' => 'update-reward','param1'=>$product->id,'param2'=>$product->reward])}}"
                                                data-title="Update Reward for Product"
                                                data-toggle="modal"
                                                data-target="#common-modal"
                                                data-original-title="{{ __('Edit') }}">
                                                <i class="bx bx-edit"></i>
                                            </a>
                                        @endif
                                        </td>
                                    </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $products->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            @if(hasPermission('reward_setting_create'))
                <div class="col-sm-xs-12 col-md-4">
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{__('Set Rewards By Category')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{route('set.reward.by')}}">
                                @csrf
                                <div class="form-group">
                                    <label for="category">{{ __('Category') }}</label>
                                    <select class="filter-categories-by-ajax form-control select2" name="c" id="c" required>
                                        <option value="">{{ __('Category') }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="reward">{{__('Reward')}}</label>
                                    <input type="number" class="form-control" name="reward" id="reward" required
                                        value="{{old('reward')}}"
                                        placeholder="{{__('Reward')}}" tabindex="1"
                                        required>
                                    <input type="hidden" name="type" value="category">
                                    @if ($errors->has('reward'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('reward') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="sub_category" name="sub_category">
                                    <label class="custom-control-label" for="sub_category">{{ __('Apply for sub category also ?') }}</label>
                                </div>

                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{__('Set Rewards By Seller')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{route('set.reward.by')}}">
                                @csrf
                                <div class="form-group">
                                    <select class="seller-by-ajax form-control select2 sorting" name="seller_id" id="seller_id" required>
                                        <option value="">{{ __('Select Seller') }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="reward">{{__('Reward')}}</label>
                                    <input type="number" class="form-control" name="reward" id="reward"
                                        value="{{old('reward')}}"
                                        placeholder="{{__('Reward')}}" tabindex="1"
                                        required>
                                    <input type="hidden" name="type" value="seller">
                                @if ($errors->has('reward'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('reward') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header input-title">
                            <h4>{{__('Set Rewards by Products')}}</h4>
                        </div>
                        <div class="card-body card-body-paddding">
                            <form method="POST" action="{{route('set.reward.by')}}">
                                @csrf
                                <div class="form-group">
                                    <label for="product_id">{{ __('Product') }}</label>

                                    <select class="product-by-ajax form-control select2" id ="product_id" multiple="multiple" name="product_id[]" aria-hidden="true" required></select>
                                    @if ($errors->has('product_id'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('product_id') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="reward">{{__('Reward')}}</label>
                                    <input type="number" class="form-control" name="reward" id="reward"
                                        value="{{old('reward')}}"
                                        placeholder="{{__('Reward')}}" tabindex="1"
                                        required>
                                    <input type="hidden" name="type" value="product">
                                @if ($errors->has('reward'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('reward') }}</p>
                                        </div>
                                    @endif
                                </div>

                                <div class="form-group text-right">
                                    <button type="submit" class="btn btn-outline-primary" tabindex="4">
                                        {{ __('Save') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            @endif
            </div>
        </div>
    </section>
    @include('admin.common.selector-modal')
    @include('admin.common.common-modal')
@endsection
@push('script')
    <script type="text/javascript" src="{{static_asset('admin/js/ajax-div-load.js') }}"></script>
    <script type="text/javascript" src="{{ static_asset('admin/js/ajax-live-search.js') }}"></script>
@endpush

