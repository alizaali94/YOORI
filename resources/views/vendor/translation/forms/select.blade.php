<div class="select-group ml-1 mr-1">
    <select class="form-control laguage-select"  name="{{ $name }}" @if(isset($submit) && $submit) v-on:change="submit" @endif>
        @if(isset($optional) && $optional)<option value> ----- </option>@endif
        @foreach($items as $key => $value)
            @if(is_numeric($key))
                <option value="{{ $value }}" @if(isset($selected) && $selected === $value) selected="selected" @endif>{{ $value }}</option>
            @else
                <option value="{{ $key }}" @if(isset($selected) && $selected === $key) selected="selected" @endif>{{ $value }}</option>
            @endif
        @endforeach
    </select>
</div>
