<div class="modal" id="clone_menu">
    <div class="menu-item" data-id="1">
        <a href="#"><i class="bx bx-menu move"></i> </a>
        <label class="sr-only" for="label">{{__('Label')}}</label>
        <input type="text" class="form-control mb-2 mr-sm-2 label-input" name="label[]" id="label" placeholder="{{__('Label')}}">

        <label class="sr-only" for="link">{{__('Link')}}</label>
        <input type="text" class="form-control mb-2 mr-sm-2 url-input" id="link" name="url[]" placeholder="{{__('Link/Slug')}}">
        <button type="button" onclick="$(this).parent().remove()" class="btn btn-outline-danger btn-circle mb-2 remove-menu-row"><i class="bx bx-trash"></i></button>
    </div>
</div>
