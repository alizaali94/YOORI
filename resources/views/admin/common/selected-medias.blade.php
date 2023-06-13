<div class="mt-2 gallery gallery-md d-flex">
    @foreach($medias as $media)
        <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $media->id }}">
            @if($media->type == 'image' && @is_file_exists(@$media->image_variants['image_72x72'], $media->storage))
                <img src="{{ get_media($media->image_variants['image_72x72'], $media->storage) }}" alt="{{ $media->name }}"
                     class="img-thumbnail logo-profile">
            @else
                <img src="{{ static_asset('images/default/default-'.$media->type.'-72x72.png') }}" alt="{{ $media->name }}"
                     class="img-thumbnail logo-profile">
            @endif
            <div class="image-remove">
                <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
            </div>
        </div>
    @endforeach

    @if(blank($medias) && $selection == 'single')
        <div class="selected-media mr-2 mb-2 mt-3 ml-0">
            <img src="{{ static_asset('images/default/default-'.$type.'-72x72.png') }}" alt="default-{{ $type }}"
                 class="img-thumbnail logo-profile">
        </div>
    @endif
</div>
