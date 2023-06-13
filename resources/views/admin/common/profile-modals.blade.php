<form action="{{ Sentinel::getUser()->user_type == 'seller' ? route('seller.profile.update') : route('admin.profile.update') }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('put')
    <div class="modal fade" id="profile_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Update Profile') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="bx bx-x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label> {{ __('First Name') }} *</label>
                        <input type="text" name="first_name" id="first_name"
                               value="{{ Sentinel::getUser()->first_name }}"
                               class="form-control" required>
                        <input type="hidden" name="id"
                               value="{{ Sentinel::getUser()->id }}"
                               class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>{{ __('Last Name') }} *</label>
                        <input type="text" id="last_name" name="last_name"
                               value="{{ Sentinel::getUser()->last_name }}"
                               class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>{{ __('Email') }} *</label>
                        <input type="hidden" name="user_type" value="{{ Sentinel::getUser()->user_type }}">
                        <input type="text" name="email" class="form-control"
                               value="{{ Sentinel::getUser()->email }}" required>
                    </div>
                    @if(Sentinel::getUser()->user_type != 'admin')
                        <div class="form-group">
                            <label>{{ __('Phone') }} *</label>
                            <input type="text" name="phone" class="form-control"
                                   value="{{ Sentinel::getUser()->phone }}" required>
                        </div>
                    @endif
                    <div class="form-group mt-4 text-center">
                        @if (Sentinel::getUser()->images != [] && @is_file_exists(Sentinel::getUser()->images['image_128x128'],Sentinel::getUser()->images['storage']))
                            <img src="{{ get_media(Sentinel::getUser()->images['image_128x128'],Sentinel::getUser()->images['storage']) }}"
                                 alt="{{ Sentinel::getUser()->first_name }}" id="img_profile"
                                 class="img-thumbnail user-profile ">
                        @else
                            <img src="{{ static_asset('images/default/user.jpg') }}"
                                 alt="{{ Sentinel::getUser()->first_name }}" id="img_profile"
                                 class="img-thumbnail user-profile">
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="">{{ __('Profile Image') }}</label>
                        <div class="form-group">
                            <input type="file" class="custom-file-input image_pick file-select" accept="image/*" data-image-for="profile"
                                   name="image" id="customFile"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-primary">{{ __('Update') }}</button>
                </div>
            </div>
        </div>
    </div>
</form>
