<div class="modal" id="clone_menu">
    <li class="dd-item dd3-item">
        <input type="hidden" name="menu_lenght[]" id="menu_lenght" value="1">
        <div class="dd-handle dd3-handle move"><i class="bx bx-menu move"></i></div>
        <div class="dd3-content">
            <div class="row">
                <div class="col-md-3">
                    <input type="text" class="form-control mb-1 mr-sm-2 test" name="label[]" required id="label" placeholder="{{__('Label')}}">
                </div>
                <div class="col-md-7">
                    <input type="text" class="form-control mb-1 mr-sm-2 test" id="link" required name="url[]" placeholder="{{__('Link')}}">
                </div>
                <div class="col-md-2">
                    <button type="button" onclick="$(this).closest('.dd-item').remove()" class="btn btn-outline-danger btn-circle mb-1 remove-menu-row"><i class="bx bx-trash"></i></button>
                </div>
            </div>
        </div>
    </li>
</div>
