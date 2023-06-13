@if ($title == 'edit_language')
    <div class="modal-body">
    </div>
@endif

@if($title == 'file_info')
    <table class="table">
        <tbody>
        <tr>
            <td>{{ __('File name') }}</td>
            <td>:</td>
            <td>{{ $media->name }}</td>
        </tr>
        <tr>
            <td>{{ __('File type') }}</td>
            <td>:</td>
            <td>{{ $media->type }}</td>
        </tr>
        <tr>
            <td>{{ __('Extension') }}</td>
            <td>:</td>
            <td>.{{ $media->extension }}</td>
        </tr>
        <tr>
            <td>{{ __('Size') }}</td>
            <td>:</td>
            <td>{{ formatBytes($media->size) }}</td>
        </tr>
        <tr>
            <td>{{ __('Uploaded By') }}</td>
            <td>:</td>
            <td>{{ @$media->user->first_name.' '.@$media->user->last_name.'('.@$media->user->user_type.')' }}</td>
        </tr>
        <tr>
            <td>{{ __('Uploaded at') }}</td>
            <td>:</td>
            <td>{{ date('M d, Y g:i A', strtotime($media->created_at)) }}</td>
        </tr>
        </tbody>
    </table>
    @if (hasPermission('media_download') || Sentinel::getUser()->user_type == 'seller')
        <div class="d-flex center">
            <a href="{{ get_media($media->original_file, $media->storage) }}" target="_blank" download="{{ $media->name }}.{{ $media->extension }}" class="dropdown-item btn btn-outline-secondary btn-circle">
                <i class='bx bx-download'></i> {{ __('Download') }}
            </a>
            <a href="javascript:void(0)"  data-text="{{ __('Copied to Clipboard') }}" data-url="{{ get_media($media->original_file, $media->storage) }}" class="dropdown-item mx-2 copy-url btn btn-outline-info btn-circle">
                <i class='bx bx-copy'></i> {{ __('Copy Link') }}
            </a>
            @if (hasPermission('media_delete') || Sentinel::getUser()->user_type == 'seller')
                <a href="javascript:void(0)" onclick="delete_media('delete/media/', {{ $media->id }})" class="dropdown-item btn btn-outline-danger btn-circle">
                    <i class='bx bx-trash'></i> {{ __('Delete') }}
                </a>
            @endif
        </div>
    @endif
@endif
