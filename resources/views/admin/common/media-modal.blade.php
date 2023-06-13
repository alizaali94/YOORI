<div class="tab-content" id="galleryContent">
    <div class="tab-pane fade show active" id="gallery-files" role="tabpanel"
         aria-labelledby="gallery-files-tab">
        <div class="medias-show">
            <div class="sg-media-gallery">
                @foreach($medias as $media)
                    <article class="article media-modal article-style-b" id="artilce_{{ $media->id }}">
                        <div class="article-header">
                            <label class="imagecheck mb-4">
                                <input name="imagecheck" type="checkbox" value="{{ $media->id }}" class="imagecheck-input">
                                <figure class="imagecheck-figure">
                                    @if($media->type == 'image' && is_file_exists($media->image_variants['image_thumbnail'], $media->storage))
                                        <img src="{{ get_media($media->image_variants['image_thumbnail'], $media->storage) }}"
                                             alt="{{ $media->name }}"
                                             class="imagecheck-image article-image">
                                    @else
                                        <img src="{{ static_asset('images/default/default-'.$media->type.'-180x120.png') }}"
                                             alt="{{ $media->name }}"
                                             class="imagecheck-image article-image">
                                    @endif
                                </figure>
                            </label>
                        </div>
                        <div class="article-details d-flex">
                            <div class="d-block article-footer">
                                <div class="d-flex">
                                    <span class="article-title">{{ $media->name }}</span>
                                    <span class="img-ext">.{{ $media->extension }}</span>
                                </div>
                                <div class="d-flex">
                                    <span class="image-size">{{ formatBytes($media->size) }} </span>
                                </div>
                            </div>
                        </div>
                    </article>
                @endforeach
            </div>
            <div class="buttons add-button center d-none load-button">
                <a href="javascript:void(0)" class="btn btn-icon icon-left btn-outline-primary load-more-media"><i
                        class='bx bx-refresh'></i>{{ __('Load more') }}</a>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="uploader" role="tabpanel" aria-labelledby="uploader-tab">
        <form action="{{ route('admin.store.media') }}" method="post" enctype="multipart/form-data" class="dropzone" id="media-upload">
            @csrf
            <div class="fallback">
                <input name="file" type="file" multiple />
            </div>
        </form>
    </div>
</div>

@section('style')
    <link rel="stylesheet" href="{{ static_asset('admin/css/dropzone.css') }}">
@endsection
@push('page-specific')
    <script type="text/javascript" src="{{ static_asset('admin/js/dropzone.min.js') }}"></script>
@endpush
