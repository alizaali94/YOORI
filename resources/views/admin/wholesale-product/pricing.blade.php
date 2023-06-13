<div class="modal">
    <div class="menu-item" data-id="1">
        <input type="hidden" class="" name="is_wholesale" value="1">
        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_qty" readonly name="min_qty[]" value="" min="0" placeholder="{{__('Minimum QTY')}}">
        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_max_qty" name="max_qty[]" value="" min="0" placeholder="{{__('Maximum QTY')}}">
        <input type="number" class="form-control mb-2 mr-sm-2 wholesale_min_price" id="link" name="wholesaleprice[]" value="" min="0" step="any" placeholder="{{__('Price per piece')}}">
        <button type="button" class="btn btn-icon btn-sm btn-danger remove-menu-row" onclick="$(this).parent().remove()"><i class="bx bx-trash"></i></button>
    </div>

</div>
