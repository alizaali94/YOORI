@php
    $position = null;
    for ($i=0; $i < $child_category->position; $i++){
        $position .= '¦--';
    }
@endphp
<option value="{{ $child_category->id }}" {{ @$parent ? (gettype($parent) == 'array') ? (in_array($child_category->id, $parent) ? 'selected' : '') :  (@$parent == $child_category->id ? 'selected' : '') : '' }}>
                                                {{ $position." ".$child_category->getTranslation('title'), App::getLocale() }}</option>
@if ($child_category->categories)
    @if(@$product == true)
        @foreach ($child_category->categories as $childCategory)
            @include('admin.products.categories.child-categories', ['child_category' => $childCategory, 'parent' => @$parent])
        @endforeach
    @else
        @foreach ($child_category->categories->where('position','<',2) as $childCategory)
            @include('admin.products.categories.child-categories', ['child_category' => $childCategory, 'parent' => @$parent])
        @endforeach
    @endif
@endif
