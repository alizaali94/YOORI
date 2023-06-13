<div class="card-stats-item">
    <div class="card-stats-item-count">{{ $pending_order }}</div>
    <div class="card-stats-amount-count">{{ get_price($pending_order_price) }}</div>
    <div class="card-stats-item-label">{{__('Pending')}}</div>
</div>
<div class="card-stats-item">
    <div class="card-stats-item-count">{{ $processing_order }}</div>
    <div class="card-stats-amount-count">{{ get_price($processing_order_price) }}</div>
    <div class="card-stats-item-label">{{__('Processing')}}</div>
</div>
<div class="card-stats-item">
    <div class="card-stats-item-count">{{ $completed_order }}</div>
    <div class="card-stats-amount-count">{{get_price($completed_order_price) }}</div>
    <div class="card-stats-item-label">{{__('Delivered')}}</div>
</div>
