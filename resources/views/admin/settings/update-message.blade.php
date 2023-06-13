@if($data['error'])
    <p>{{ $data['message'] }}</p>
    @if(count($data['commands']))
        <ol>
            @foreach($data['commands'] as $command)
                <li>{{ $command }}</li>
            @endforeach
        </ol>
    @endif
@else
    <div class="alert alert-success center">
        <p><i class="bx bx-check"></i>{{ $data['message'] }}</p>
    </div>
@endif