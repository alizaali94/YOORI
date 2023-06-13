@php
    $refund       = App\Models\Refund::find($otherLinks[0]);
    $order_detail = $refund->orderDetail;
@endphp

    <div class="modal-body modal-padding-bottom">
        <div class="form-group">
            <label for="order">{{ __('Product') }}</label>
            <input type="text" value="{{ $order_detail->product->getTranslation('name', \App::getLocale()) }}" class="form-control" disabled id="order">
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="order_id">Total Paid:</label>
                    <input type="text" value="{{ get_price($refund->total_amount) }}" class="form-control" disabled id="order_id">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="shipping_cost">Shipping Cost:</label>
                    <input type="text" value="{{ get_price($refund->shipping_cost) }}" class="form-control" disabled id="shipping_cost">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="refundable_amount">Refundable Amount:</label>
                    <input type="text" value="{{ get_price($refund->refund_amount) }}" class="form-control" disabled id="refundable_amount">
                </div>
            </div>
        </div>
        <div class="form-group align-items-center">
            <label for="refund_reason" class="col-form-label">{{ __('Refund Reason') }}</label>
            <textarea type="number" name="reject_reason" disabled  placeholder="{{ __('Refund Reason') }}" id="refund_reason" class="form-control" rows="12" required >{{$refund->remark}}</textarea>
        </div>
        @if($refund->reject_reason != '')
            <div class="form-group align-items-center">
                <label for="reject_reason" class="col-form-label">{{ __('Reject Reason') }}</label>
                <textarea type="number" name="reject_reason" disabled placeholder="{{ __('Reject Reason') }}" id="reject_reason" class="form-control" rows="12" required >{{$refund->reject_reason}}</textarea>
            </div>
        @endif
    </div>

