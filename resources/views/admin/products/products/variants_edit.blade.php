<table class="table table-striped table-bordered product-variant-table">
    @if(isset($variants))
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

        @foreach ($variants_data as $key => $variant)
        @php
            $variant_name = '';
            $variant_ids = '';
            foreach ($variant as $key => $item){
                if($key > 0 ){
                    $attribute_value = \App\Models\AttributeValues::find($item);
                    $variant_name .= '-'.str_replace(' ', '', $attribute_value->value);
                    $variant_ids .= '-'.str_replace(' ', '', $attribute_value->id);

                }
                else{
                    if($colors == 1){
                        $color_all = \App\Models\Color::where('id', $item)->first()->colorLanguages()->where('lang','en')->get();
                        foreach ($color_all as $color){
                            $color_name = $color->name;
                            $color_id = $color->id;
                            continue;
                        }
                        $variant_name .= $color_name;
                        $variant_ids .= $item;
                    }
                    else{
                        $attribute_value = \App\Models\AttributeValues::find($item);
                        $variant_name .= str_replace(' ', '', $attribute_value->value);
                        $variant_ids .= str_replace(' ', '', $attribute_value->id);
                    }
                }
            }
            $variant_stock = $product->stock->where('name', $variant_name)->first();

        @endphp
        @if(strlen($variant_name) > 0)
        <tr>
        <th scope="row" width="18%"><label class="font-normal">{{ $variant_name }}</label><input type="hidden" lang="en" name="variant_name[]" value="{{ $variant_name }}" class="form-control">
            <input type="hidden" lang="en" name="variant_ids[]" value="{{ $variant_ids }}" class="form-control">
        </th>
        <td width="18%"><input type="number" lang="en" name="variant_price[]" value="{{ $product_price == $product->price ? ($variant_stock ? $variant_stock->price : $product_price) : $product_price }}"
                               min="0" step="any" class="form-control"></td>
        <td width="18%"><input type="text" name="variant_sku[]" value="{{ $variant_stock ? $variant_stock->name : $variant_name }}"
                               class="form-control"></td>
        <td width="18%"><input type="number" lang="en" name="variant_stock[]" value="{{ $variant_stock ? $variant_stock->current_stock : '' }}" min="0" step="1" class="form-control"></td>
        <td width="22%">
            <div>
                <div class="form-group">
                    <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-variant="1" data-selection="multiple"
                         data-target="#galleryModal" data-dismiss="modal">
                        <input type="hidden" name="variant_image[]" value="{{ !blank($variant_stock) ? $variant_stock->image_id : ''}}" class="image-selected" multiple>
                        <span class="form-control"><span class="counter">{{ (@$variant_stock && $variant_stock->image_id != null) ? substr_count($variant_stock->image_id, ',') + 1 : 0 }}</span> {{ __('file') }}</span>
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                {{ __('Choose') }}
                            </div>
                        </div>
                    </div>
                    <div class="selected-media-box">
                        <div class="mt-2 gallery gallery-md d-flex">
                            @if($variant_stock != '' && $variant_stock->image_id != null)
                                <div class="selected-media mr-2 mt-3 mb-2 ml-0" data-id="{{ $variant_stock->image_id }}">
                                    @if(is_file_exists($variant_stock->image['image_72x72'], $variant_stock->image['storage']))
                                        <img src="{{ get_media($variant_stock->image['image_72x72'], $variant_stock->image['storage']) }}" alt="{{$variant_name}}"
                                             class="img-thumbnail logo-profile">
                                    @else
                                        <img src="{{ static_asset('images/default/default-image-72x72.png') }}" alt="{{$variant_name}}"
                                             class="img-thumbnail logo-profile">
                                    @endif
                                    <div class="image-remove">
                                        <a href="javascript:void(0)" class="remove"><i class="bx bx-x"></i></a>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td width="6%"><button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row" onclick="$(this).closest('tr').remove();"><i class="bx bx-trash"></i></button></td>
    </tr>
        @endif
    @endforeach
    </tbody>
    @endif
</table>
