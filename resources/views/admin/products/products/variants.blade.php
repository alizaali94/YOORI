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

        @foreach ($variants_data as $index => $variant)
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
        @endphp
        @if(strlen($variant_name) > 0)
        <tr>
        <th scope="row" width="18%"><label class="font-normal">{{ $variant_name }}</label><input type="hidden" lang="en" name="variant_name[]" value="{{ $variant_name }}" class="form-control">
            <input type="hidden" lang="en" name="variant_ids[]" value="{{ $variant_ids }}" class="form-control">
        </th>
        <td width="18%"><input type="number" lang="en" name="variant_price[]" value="0" min="0" step="any" class="form-control"></td>
        <td width="18%">
            <input type="text" name="variant_sku[]" value="{{ $variant_name }}" class="form-control">
            @if ($errors->has('variant_sku.'.$index))
                <div class="invalid-feedback">
                    <p>{{ $errors->first('variant_sku.'.$index) }}</p>
                </div>
            @endif
        </td>
        <td width="18%"><input type="number" lang="en" name="variant_stock[]" value="" min="0" step="1" class="form-control"></td>
        <td width="22%">
            <div>
                <div class="form-group">
                    <div class="input-group gallery-modal" id="btnSubmit"  data-for="image" data-variant="1" data-selection="multiple"
                         data-target="#galleryModal" data-dismiss="modal">
                        <input type="hidden" name="variant_image[]" value="" class="image-selected" multiple>
                        <span class="form-control"><span class="counter">0</span> {{ __('file') }}</span>
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                {{ __('Choose') }}
                            </div>
                        </div>
                    </div>
                    <div class="selected-media-box">

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
