@push('script')
    <script src="{{ static_asset('admin/js/intlTelInput-jquery.min.js') }}"></script>
    <script>
        $(function () {
            var number;
            $(document).ready(function()
            {
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
                $("#txtPhone").on("input", function(){
                     number = $(this).val()
                    let code = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
                    let value = '+'+code+number;
                    $('input[name = "phone"]').val(value);
                    return false;

                });
                
                var input = document.querySelector('#txtPhone');

                input.addEventListener("countrychange", function(e) {
                    let code = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
                    let value = '+'+code+number;
                    $('input[name = "phone"]').val(value);
                    return false;
                });
            })
        });
    </script>
@endpush
