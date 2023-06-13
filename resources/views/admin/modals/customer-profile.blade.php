@php
    $user = App\Models\User::find($otherLinks[0]);
@endphp
<div>
    <div class="modal-body modal-padding-bottom modal-body-overflow-unset">
        <div class="card-body">
            <div class="user-item">
                <div>
                    @if(!blank($user->images))
                        <img src="{{ get_media($user->images['image_128x128'],$user->images['storage']) }}" alt="{{ $user->first_name }}"
                             class="imagecheck-image article-image">
                    @else
                        <img src="{{ static_asset('images/default/user.jpg') }}" alt="{{ $user->first_name }}"
                             class="imagecheck-image article-image">
                    @endif
                </div>
                <div class="user-details">
                    <div class="user-name">{{ $user->first_name }} {{ $user->last_name }}</div>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <h6>{{ __('Basic Information') }}</h6>
            <table class="table table-striped table-md">
                <tbody>
                <tr>
                    <td>{{ __('Phone Number:') }}</td>
                    <td>{{ $user->phone }}</td>
                </tr>
                <tr>
                    <td>{{ __('Email :') }}</td>
                    <td>{{ $user->email }}</td>
                </tr>
                <tr>
                    <td>{{ __('Register On:') }}</td>
                    <td>{{ \Carbon\Carbon::parse($user->created_at)->diffForHumans() }}</td>
                </tr>
                <tr>
                    <td>{{ __('Last Login:') }}</td>
                    <td>{{ $user->last_login != null ? \Carbon\Carbon::parse($user->last_login)->diffForHumans() : __('Not Login Yet') }} </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
