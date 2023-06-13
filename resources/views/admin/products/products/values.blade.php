@foreach($attributes as $attribute)
    <div class="form-group row">
        <div class="col-md-3">
            <input type="text" class="form-control" value="{{ $attribute->getTranslation('title', \App::getLocale()) }}" disabled>
        </div>
        <div class="col-md-9">
            <select class="form-control select2 variant" name="attribute_values_{{$attribute->id}}[]" multiple>
                @foreach($attribute->attributeValue as $value)
                    <option value="{{ $value->id }}" {{  $request->has('attribute_values_'.$attribute->id) ? (in_array($value->id , $request['attribute_values_'.$attribute->id]) ? 'selected' : '') : '' }}>{{ $value->value }}</option>
                @endforeach
            </select>
        </div>
    </div>
@endforeach
