
window.paypal_sdk.Buttons({
    createOrder: (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: parseFloat(window.amount).toFixed(2),
                        currency_code: "USD",
                    }
                }
            ]
        });
    },

    onApprove: async (data, actions) => {
        const order = await actions.order.capture();

        if (window.user)
            window.url = window.base_url + '/api/complete-order?code=' + window.code + '&trx_id=' + window.trx_id;
        else
            window.url = window.base_url + '/api/complete-order?code=' + window.code + '&guest=1' + '&trx_id=' + window.trx_id;

        data.amount = amount;
        data.payment_type = 'paypal';
        data.order = order;
        data.token = window.token;

        $.ajax({
            method  : 'POST',
            url     : window.url,
            data    : data,
            success : function (response){
                if (response.error)
                {
                    toastr.error(response.error);
                }
                else{
                    toastr.success(response.success);
                    window.location.href = $('.payment_success_url').val();

                }
            }
        });
    },
    onError: err => {
        alert('Error');
    }
}).render('#paypal-button-container');
