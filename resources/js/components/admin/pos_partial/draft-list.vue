<template>
  <div class="modal fade modalHide" id="draft-list" tabindex="-1" aria-labelledby="draft-list"
       aria-hidden="true" >
    <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable list-width">
      <div class="modal-content">
        <div class="modal-header">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <select name="country"  id="draft_id" class="form-control select2 draft_by_customer exp-width" aria-hidden="true">
                </select>
              </div>
              <ul class="nav nav-pills" id="myTab3" role="tablist">
                <li class="nav-item">
                  <a class="nav-link bar" :class="active_tab == 'draft' ? 'active' :''"
                     id="product-info-tab" data-toggle="tab" @click="activeTab('draft')" role="tab"
                     aria-controls="home"
                     aria-selected="true">{{lang.draft_list}}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link bar"
                     id="images-and-videos-tab" data-toggle="tab" :class="active_tab == 'order' ? 'active' :''" @click="activeTab('order')" role="tab"
                     aria-controls="home"
                     aria-selected="true">{{lang.recent_orders}}</a>
                </li>
              </ul>
            </div>
          </div>
          <button type="button" id="close" class="close modal_close" data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <input type="hidden" name="draft_user" value="40" class="draft_user" id="draft_user">
        </div>
        <div class="modal-body shopping-cart">
          <div class="sg-shipping">
            <div class="card-body p-0" >
              <div class="table-responsive">
            <div v-if="loading || !loading_for_draft">
              <div v-if="active_tab == 'draft'">
                <table class="table table-striped table-md">
                  <tbody>
                  <tr>
                    <th>#</th>
                    <th>{{ lang.date }}</th>
                    <th>{{lang.customer}}</th>
                    <th>{{lang.total_amount}}</th>
                    <th>{{ lang.actions }}</th>
                  </tr>
                  <tr  class="table-data-row" v-for="(draft,i) in draft.draft_list" :key="i">
                    <td>{{++i}}</td>
                    <td>{{draft.date}}</td>
                    <td>{{draft.user.full_name}}</td>
                    <td>{{ $parent.priceFormat(draft.total_payable) }}</td>
                    <td>
                      <a href="javascript:void(0)"
                         class="btn btn-outline-info btn-circle" data-url=""
                         data-toggle="tooltip" @click="restoreOrder(draft,i)" title="Edit" data-original-title="Edit">
                        <i class="bx bx-edit"></i>
                      </a>
                      <a v-if="draft.is_draft == 1" href="javascript:void(0)"
                         class="btn btn-outline-danger btn-circle" data-url=""
                         data-toggle="tooltip" title="Remove" @click="deleteDraft(draft.trx,i)">
                        <i class="bx bx-trash"></i>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div v-if="draft.paginate">
                  <div class="button text-center" v-if="!loading">
                    <a href="javascript:void(0)"
                       @click="loadMore('draft')" class="btn btn-outline-info">{{lang.load_more}}</a>
                  </div>
                  <div v-if="loading" class="button text-center">
                    <pos_loading_button :loading_image="loading_image"></pos_loading_button>
                  </div>
                </div>
              </div>
              <div v-if="active_tab == 'order'">
                <table class="table table-striped table-md">
                  <tbody>
                  <tr>
                    <th>#</th>
                    <th>{{ lang.date }}</th>
                    <th>{{lang.customer}}</th>
                    <th>{{lang.total_amount}}</th>
                    <th>{{ lang.actions }}</th>
                  </tr>
                  <tr  class="table-data-row" v-for="(draft,i) in recent_orders" :key="i">
                    <td>{{++i}}</td>
                    <td>{{draft.date}}</td>
                    <td>{{draft.user.full_name}}</td>
                    <td>{{ $parent.priceFormat(draft.total_payable) }}</td>
                    <td>
                      <button class="btn btn-outline-danger btn-circle"   :class="{ 'disable_btn' : invoice_download_loading }" type="button"
                              data-original-title="PDF" @click="download(draft)" ><i
                          class="bx bxs-file-pdf"></i></button>
                      <a :href="url + '/admin/pos/print-invoice/' + draft.id" target="_blank"
                         class="btn btn-outline-warning btn-circle" :class="{ 'disable_btn' : invoice_download_loading }"
                         type="button"><i
                          class="bx bx-printer"></i></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div v-if="recent_orders_paginate">
                <div class="button text-center" v-if="!loading">
                  <a href="javascript:void(0)"
                     @click="loadMore('recent_order')" class="btn btn-outline-info">{{lang.load_more}}</a>
                </div>
                <div v-if="loading" class="button text-center">
                  <pos_loading_button :loading_image="loading_image"></pos_loading_button>
                </div>
                </div>
              </div>
            </div>
                <div v-else>
                  <table id="pos-loader">
                    <div class="">
                      <pos_loading_button :loading_image="loading_image"></pos_loading_button>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div><!-- /.modal-body -->
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import pos_loading_button from './pos_loading_button'


export default {
  props: ['draft','cartProducts','lang','loading_for_draft','loading_image','invoice_download_loading','recent_orders_length'],
  name: "draft-list",
  components:{pos_loading_button},
  data(){
    return{
      checkListing: false,
      url: document.getElementById('url').value,
      trx_id:{
        trxId:''
      },
      key:{
        searchKey:''
      },
      loading: false,
      active_tab:'draft',
      order_id:'',
      recent_orders_paginate:'',
      paginate:'',
      recent_orders:''
    }
  },
  computed:{
    recent(){
      this.recent_orders=this.recent_orders_length
    }
  },
  mounted() {
    let that = this;
    $(document).ready(function () {
      $('.draft_by_customer').select2({
        placeholder: "Select Customer",
        minimumInputLength: 2,
        dropdownParent: $('#draft-list'),
        ajax: {
          type: "GET",
          dataType: 'json',
          url: document.getElementById('url').value + '/admin/pos/get-user-by-search',


          data: function (params) {

            return {
              q: params.term // search term
            };
          },
          delay: 250,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          processResults: function (data) {
            return {
              results: data,
            };
          },
          cache: true
        },
      });
      $("#draft_id")
          .on("select2:select", e => {
            let id = { user_id:e.params.data.id};
            that.loading = true;
            axios.post(document.getElementById('url').value + '/admin/pos/draft-list',id).then((response) => {
              that.loading = false;
              that.draft.paginate = response.data.draftList.next_page_url
              that.check(response.data.draftList.data);
            }).catch((error) => {
              that.loading = false;
            })

            // document.getElementById('draft_user').value = id;
          })
    });
  },
  methods: {
    restoreOrder(draft,i){
      if(this.cartProducts.length > 0){
        if (!confirm("discard exising cart?")){
          return false
        }
      }
      let trx_id = draft.trx;
      this.$emit('draftOrder', trx_id);
      this.draft.draft_list.splice(i-1, 1);
      toastr['success']('Draft added to the cart');
      $('.modalHide').modal('hide')

    },
    deleteDraft(trxId,i){
      if (!confirm("Are you sure?")){
        return false
      }
      this.trx_id.trxId = trxId
      axios.post(this.url + '/admin/pos/delete-draft',this.trx_id).then((response) => {
        if (response.data.deleteSuccess === 'success') {
          this.draft.draft_list.splice(i-1, 1);
          toastr[response.data.type](response.data.message);
          this.check( response.data.orders.data)
          this.draft.paginate = response.data.orders.next_page_url
        } else {
          toastr[response.data.type](response.data.message);
        }
      }).catch((error) => {

      })
    },
    check(data)
    {
      this.draft.draft_list = data;
    },
    loadMore(type){
      this.loading = true;
      if(type == 'recent_order'){
         this.paginate = this.recent_orders_paginate
      }else if(type == 'draft'){
        this.paginate = this.draft.paginate
      }
      axios.post(this.paginate).then((response) => {
        this.loading = false;
          if(response.data.draftList){
            for(let i =0; i<response.data.draftList.data.length;i++){
              this.draft.draft_list.push(response.data.draftList.data[i]);
            }
            this.draft.paginate = response.data.draftList.next_page_url
          }else{
            for(let i =0; i<response.data.recentOrders.data.length;i++){
              this.recent_orders.push(response.data.recentOrders.data[i]);
            }
            this.recent_orders_paginate = response.data.recentOrders.next_page_url
          }
      }).catch((error) => {
        this.loading = false;
      })
    },
    clearDraftfield(){
      this.active_tab = 'draft'
    },
    activeTab(type){
      if(type == 'draft'){
        this.active_tab = 'draft'
      }else{
        this.active_tab = 'order'
        this.recentOrders();
      }
    },
    download(order_for_invoice) {
      this.order_id = order_for_invoice.id
      this.$emit('invoiceDownload', order_for_invoice);
    },
    recentOrders(){
      if(this.recent_orders.length == 0){
        this.loading = true
        axios.post(this.url + '/admin/pos/recent-orders').then((response) => {
          this.loading = false
            this.recent_orders = response.data.recentOrders.data;
            this.recent_orders_paginate = response.data.recentOrders.next_page_url;
          }).catch((error) => {
          this.loading = false
          this.loading_for_draft = false;
          })
      }

    }
  },
}
</script>

<style scoped>

</style>