<table class="table table-striped table-bordered product-variant-table">
    <thead>
        <tr>
            <td scope="col">{{ __('Variant') }}</td>
            <td scope="col">{{ __('Price') }} *</td>
            <td scope="col">{{ __('SKU') }} *</td>
            <td scope="col">{{ __('Current Stock') }} *</td>
            <td scope="col">{{ __('Image') }}</td>
            <td>{{ __('Action') }}</td>
        </tr>
    </thead>
    <tbody>

        @for ($i = 0; $i < session()->get('attributes'); $i++)
            <tr>
                <th scope="row" width="18%"><label class="font-normal">{{ @old('variant_name')[$i] }}</label><input
                        type="hidden" lang="en" name="variant_name[{{ $i }}]"
                        value="{{ @old('variant_name')[$i] }}" class="form-control">
                    <input type="hidden" lang="en" name="variant_ids[{{ $i }}]"
                        value="{{ @old('variant_ids')[$i] }}" class="form-control">
                </th>
                <td width="18%"><input type="number" lang="en" name="variant_price[{{ $i }}]"
                        value="{{ @old('variant_price')[$i] }}" min="0" step="any" class="form-control">
                </td>
                <td width="18%">
                    <input type="text" name="variant_sku[{{ $i }}]"
                        value="{{ @old('variant_sku')[$i] }}" class="form-control">
                    @if ($errors->has('variant_sku.' . $i))
                        <div class="invalid-feedback">
                            <p>{{ $errors->first('variant_sku.' . $i) }}</p>
                        </div>
                    @endif

                </td>
                <td width="18%"><input type="number" lang="en" name="variant_stock[{{ $i }}]"
                        value="{{ @old('variant_stock')[$i] }}" min="0" step="1" class="form-control">
                </td>
                <td>
                    <div>
                        <div class="form-group">
                            <div class="input-group gallery-modal" id="btnSubmit" data-for="image"
                                data-variant="1" data-selection="multiple"
                                data-target="#galleryModal" data-dismiss="modal">
                                <input type="hidden" name="variant_image[]"
                                    value="{{ old('variant_image.' . $i) }}" class="image-selected" multiple>
                                <span class="form-control">
                                    @php
                                        $variantImage = old('variant_image.' . $i, []);
                                        if (!is_array($variantImage)) {
                                            $variantImage = [$variantImage];
                                        }
                                        $variantImageCount = count($variantImage);
                                    @endphp
                                    <span class="counter">{{ $variantImageCount }}</span>
                                    {{ __('files') }}
                                </span>
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        {{ __('Choose') }}
                                    </div>
                                </div>
                            </div>
                            <div class="selected-media-box">
                                <div class="mt-2 gallery gallery-md d-flex">
                                    @foreach ((array) old('variant_image.' . $i, []) as $selectedImage)
                                        <div class="selected-media mr-2 mb-2 mt-3 ml-0" data-id="{{ $selectedImage }}">
                                            @php
                                                $media = \App\Models\Media::find($selectedImage);
                                            @endphp
                                            @if ($media && is_file_exists($media->image_variants['image_72x72'], $media->image_variants['storage']))
                                                <img src="{{ get_media($media->image_variants['image_72x72'], $media->image_variants['storage']) }}"
                                                    alt="img-thumbnail" class="img-thumbnail logo-profile">
                                            @else
                                                <img src="{{ static_asset('images/default/default-image-72x72.png') }}"
                                                    alt="img-thumbnail" class="img-thumbnail logo-profile">
                                            @endif
                                            <div class="image-remove">
                                                <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td width="6%">
                    <button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row"
                        onclick="$(this).closest('tr').remove();">
                        <i class="bx bx-trash"></i></button>
                </td>
            </tr>
        @endfor
    </tbody>
</table>
