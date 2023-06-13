@extends('admin.partials.master')

@section('title')
    {{ __('Product Reviews') }}
@endsection
@section('product_active')
    active
@endsection
@section('product_review')
    active
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Product Reviews')}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Reviews List')}}</h4>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped table-md">
                                    <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>{{__('User')}}</th>
                                        <th>{{__('Product')}}</th>
                                        <th>{{__('Review Title')}}</th>
                                        <th>{{__('Rating')}}</th>
                                        <th>{{__('comment')}}</th>
                                        <th>{{__('Option')}}</th>
                                    </tr>


                                    @foreach ($reviews as $key => $review)
                                        @php
                                        $product = $review->product;
                                        @endphp
                                        <tr id="row_{{$review->id}}">
                                            <td>{{$reviews->firstItem() + $key}}</td>
                                            <td>
                                                {{$review->user->first_name.' '.$review->user->last_name}}
                                            </td>
                                            <td>
                                                @if(isAppMode())
                                                    <a href="#">{{ $product->getTranslation('name', \App::getLocale()) }}</a>
                                                @else
                                                    <a href="{{ route('product-details',$product->slug) }}" target="_blank">{{ $product->getTranslation('name', \App::getLocale()) }}</a>
                                                @endif</td>
                                            <td>{{$review->title}}</td>
                                            <td>{{ $review->rating}}</td>
                                            <td>{{ $review->comment}}</td>
                                            <td>
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox" value="review-status-change/{{$review->id}}/status"
                                                           {{ $review->status == 1 ? 'checked' : '' }} name="custom-switch-checkbox"
                                                           class="status-change custom-switch-input">
                                                    <span class="custom-switch-indicator"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer">
                            <nav class="d-inline-block">
                                {{ $reviews->appends(Request::except('page'))->links('pagination::bootstrap-4') }}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@include('admin.common.delete-ajax')



