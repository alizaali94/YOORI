@foreach($data as $product)
    <li class="media">
        <img class="mr-3 rounded" width="55" src="{{ $product['image'] }}" alt="{{ $product['product_name'] }}">
        <div class="media-body">
            <a href="/product/{{ $product['slug'] }}">
                <div class="float-right"><div class="font-weight-600 text-muted text-small">{{ $product['total_sale'].' '.__('Sales') }} </div></div>
                <div class="media-title">{{ $product['product_name'] }}</div>
            </a>
        </div>
    </li>
@endforeach
