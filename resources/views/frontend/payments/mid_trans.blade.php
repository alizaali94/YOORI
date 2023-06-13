@php
        Midtrans\Config::$serverKey = 'Mid-server-MLwTd2gcvYgbvJNyYltqV_Ak';
                Midtrans\Config::$clientKey = 'Mid-client-VJRzKPb_C8wbbyn-';
                Midtrans\Config::$isProduction = true;
                Midtrans\Config::$isSanitized = true;
                Midtrans\Config::$is3ds = true;

                $params = array(
                    'transaction_details' => array(
                        'order_id' => rand(),
                        'gross_amount' => 10000,
                    )
                );

                $token = Midtrans\Snap::getSnapToken($params);

@endphp
<html>

<head>
    <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key="Mid-client-VJRzKPb_C8wbbyn-"></script>
</head>

<body>
<button id="pay-button">Pay!</button>
<button>{{ $token }}</button>
<pre><div id="result-json">JSON result will appear here after payment:<br></div></pre>
<script type="text/javascript">
    document.getElementById('pay-button').onclick = function () {
        // SnapToken acquired from previous step
        snap.pay('{{ $token }}', {
            // Optional
            onSuccess: function (result) {
                /* You may add your own js here, this is just example */
                document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            },
            // Optional
            onPending: function (result) {
                /* You may add your own js here, this is just example */
                document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            },
            // Optional
            onError: function (result) {
                /* You may add your own js here, this is just example */
                document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
            }
        });
    }

</script>
</body>

</html>