<div class="modal fade" id="galleryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 id="gallery-modal-header">
                    <div class="left">
                        <ul class="nav nav-pills" id="gallery-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active load-new-content" id="gallery" data-toggle="tab" data-for="image" data-selctection="single" href="#gallery-files"
                                   role="tab" aria-controls="gallery-files" aria-selected="true">{{ __('Media Files') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="uploader-tab" data-toggle="tab" href="#uploader" role="tab" aria-controls="uploader" aria-selected="false">
                                    {{ __('Upload Media') }}
                                </a>
                            </li>
                        </ul>
                        <div class="modal-title-footer header-counter mt-1">
                            {{ __('Showing').' '}} <span class="count-showing">0</span>{{ ' '.__('of').' ' }} <span class="total-files">0</span> {{ ' '.__('files') }}
                        </div>
                    </div>
                </h5>
                <div class="text-right d-flex">
                    <input type="text" class="form-control media-on-search" name="q" value=""
                           placeholder="{{ __('Search') }}">
                    <button type="button" class="close py-0" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="modal-body media-modal">
            </div>
            <div class="modal-footer justify-content-between">
                <div class="left">
                    <span class="counter">0</span> {{ __('file selected') }}
                </div>
                <div class="right">
                    <button type="button" class="btn btn-icon icon-left btn-outline-primary add-selected" data-dismiss="modal">{{ __('Add') }}</button>
                </div>
            </div>
        </div>
    </div>
</div>
