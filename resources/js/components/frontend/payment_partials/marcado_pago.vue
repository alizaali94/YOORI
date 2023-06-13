<template>
    <div class="modal fade" id="fw_modal" tabindex="-1" aria-labelledby="fw_modal"
         aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ lang.pay_with_mp }}</h5>
                    <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "marcado_pago",
    props : ['trx_id','code','amount'],
    components :{
    },
    data(){
        return {
        }
    },
    mounted() {
        const script = document.createElement("script")
        script.src = "https://sdk.mercadopago.com/js/v2";
        document.body.appendChild(script);
    },
    methods : {
        goMercadoPago()
        {
            const mp = new MercadoPago('YOUR_PUBLIC_KEY');
        }
    }
}
</script>

<style scoped>

</style>
