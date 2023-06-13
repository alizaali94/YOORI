@extends('admin.partials.master')

@section('title')
    {{ __('Media Library') }}
@endsection
@section('media')
    active
@endsection
@section('main-content')
    <!-- Main Content -->
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{ __('Upload file') }}</h2>
                </div>
                <div class="buttons add-button">
                    <a href="{{ url()->previous() }}" class="btn btn-icon icon-left btn-outline-primary"><i
                      class="bx bx-arrow-back"></i>{{ __('Back') }}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ __('Media Upload') }}</h4>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('admin.store.media') }}" method="post" enctype="multipart/form-data" class="dropzone" id="media-upload">
                                @csrf
                                <div class="fallback">
                                    <input name="file" type="file" multiple />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Main Content End -->
@endsection
@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('page-specific')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
    <script type="text/javascript">
        Dropzone.options.mediaUpload = {
            acceptedFiles: ".jpg,.jpeg,.png,.gif,.mp4,.mpg,.mpeg,.webp,.webm,.ogg,.avi,.mov,.flv,.swf,.mkv,.wmv,wma,.aac,.wav,.mp3,.zip,.rar,.7z,.doc,.txt,.docx,.pdf,.csv,.xml,.ods,.xlr,.xls,.xlsx",
            timeout: 180000,
            maxFiles: 20,
            init: function () {
                this.on("error", function (file, responseText) {
                    toastr['error'](responseText)
                });
            }
        }
    </script>
@endpush
