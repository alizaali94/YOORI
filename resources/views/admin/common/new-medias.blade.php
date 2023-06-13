@foreach($medias as $media)
    <article class="article media-modal article-style-b" id="artilce_{{ $media->id }}">
        <div class="article-header">
            <label class="imagecheck mb-4">
                <input name="imagecheck" type="checkbox" value="{{ $media->id }}" class="imagecheck-input">
                <figure class="imagecheck-figure">
                    @if($media->type == 'image' && @is_file_exists($media->image_variants['image_thumbnail'] , $media->storage))
                        <img src="{{ get_media($media->image_variants['image_thumbnail'], $media->storage) }}" alt="{{ $media->name }}"
                             class="imagecheck-image article-image">
                    @else
                        <img src="{{ static_asset('images/default/default-'.$media->type.'-180x120.png') }}" alt="{{ $media->name }}"
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
