<template>
    <div class="modal fade" id="invoice_area" tabindex="-1" aria-labelledby="invoice_area"
         aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ lang.invoice }}</h5>
                    <button type="button" id="close" class="close modal_close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body shopping-cart">
                    <div v-html="invoice_data"></div>
                </div><!-- /.modal-body -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "invoice_print",
    props : ['lang','invoice_data'],
    data() {
        return {
        }
    },
    methods : {
        print() {
            $('#invoice').modal('show')
            var printContents = document.getElementById('invoice_print').innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        },
    }
}
</script>

<style scoped>

</style>
