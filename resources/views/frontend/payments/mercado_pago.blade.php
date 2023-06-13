@php
    require  base_path('/vendor/autoload.php');

    MercadoPago\SDK::setAccessToken(settingHelper('mercadopago_access'));

    $preference = new MercadoPago\Preference();

      $payer = new MercadoPago\Payer();
      $payer->name = authUser()->full_name;
      $payer->email = authUser()->email;
      $payer->phone = array(
        "area_code" => $billing_details['postal_code'],
        "number" => authUser()->phone
      );

    // Crea un ítem en la preferencia

    $item = new MercadoPago\Item();
    $item->title = $billing_details['name'];
    $item->quantity = 1;
    $item->unit_price = $amount;
    $preference->payer = $payer;
    $preference->items = array($item);

    $preference->back_urls = array(
        "success" => $success_url,
        "failure" => $fail_url,
        "pending" => $fail_url
    );

    $preference->save();

@endphp

<html>
<head>
    <title>Mercadopago Payment</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://sdk.mercadopago.com/js/v2"></script>
</head>
<body>
<div class="mp-container" style="display: none;"></div>
<br>
<br>
<script>
    // Agrega credenciales de SDK
    const mp = new MercadoPago('{{ settingHelper('mercadopago_key') }}', {
        locale: "en-US",
        advancedFraudPrevention: true,
    });

    // Inicializa el checkout
    const checkout = mp.checkout({

        preference: {
            id: '{{ $preference->id }}',
        },
        autoOpen: true,
        render: {
            container: ".mp-container", // Indica el nombre de la clase donde se mostrará el botón de pago
            label: "Pagar", // Cambia el texto del botón de pago (opcional)
        },
    });

</script>
</body>
</html>
