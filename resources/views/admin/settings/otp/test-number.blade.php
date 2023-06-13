@extends('admin.partials.master')
@section('otp_setting_menu')
    active
@endsection
@section('otp_setting')
    active
@endsection
@section('title')
    {{ __('Otp Setting') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <div class="d-flex justify-content-between">
                <div class="d-block">
                    <h2 class="section-title">{{__('Test Number')}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 middle">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{__('Test Number')}}</h4>
                        </div>
                        <form method="POST">
                            @csrf
                            <div class="card-body">
                                <div class="form">
                                    <div class="form-group">
                                        <label for="test_number">{{ __('Enter Valid Number') }} *</label>
                                        <input type="tel" class="form-control intl-phone-input" id="txtPhone" />
                                        <input type="hidden" id="typevalue" value="{{$type}}" name="type"/>
                                    </div>
                                    @if($type == 'fast2')
                                    <div class="form-group">
                                        <label for="templateId">{{ __('Enter Template ID') }} *</label>
                                        <input type="number" class="form-control intl-phone-input" name="templateId" id="template_id" />
                                    </div>
                                    @endif
                                </div>
                                <div class="text-right">
                                    <button type="button" class="btn btn-outline-primary" id="btnSubmit" value="Send">{{__('Send')}}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('style')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css">
@endsection
@push('script')
    <script src="{{ static_asset('admin/js/intlTelInput-jquery.min.js') }}"></script>
<script>
    $(function () {
        $('#txtPhone').intlTelInput({
            autoHideDialCode: false,
            autoPlaceholder: "polite",
            dropdownContainer: document.body,
            formatOnDisplay: true,
            initialCountry: "{{ settingHelper('phone_default_country') }}",
            nationalMode: true,
            placeholderNumberType: "MOBILE",
            preferredCountries: ['US'],
            separateDialCode: true,
            utilsScript:"{{ static_asset('admin/js/utils.js') }}"
        });
        $('#btnSubmit').on('click', function (event) {
            var code        = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
            var test_number = $('#txtPhone').val();
            var type        = $("#typevalue").val();
            var templateId  = $("#templateId").val();

            var formData = {
                ccode: code,
                test_number : test_number,
                type : type,
                templateId : templateId,
            }
            $.ajax({
                type: "post",
                dataType: 'json',
                data: formData,
                url:"{{ route('test.number.send') }}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(data) {
                    var status = data.status;
                    if (status === 'success'){
                        toastr["success"](data.message);
                        return false;
                    } else {
                        toastr["error"](data.message);
                        return false;
                    }
                },
                error: function(data) {
                    toastr["error"]('{{ __("Something went wrong with ajax!") }}');
                    return false;
                }
            });
        });
    });
</script>
@endpush
