<template>
  <div>
    <a href="javascript:void(0)" class="btn btn-primary w-100" data-bs-toggle="modal"
       data-bs-target="#offline"
       v-if="offline_method.name">{{ lang.pay_now }}</a>
    <div class="modal fade" id="offline" tabindex="-1" aria-labelledby="offline_modal"
         aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.pay_with }} {{ offline_method.name }}</h5>
            <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label>{{ lang.upload_file }}</label>
                  <div class="input-group">
                    <div class="custom-file d-flex">
                      <label class="upload-image form-control" for="upload-1">
                        <input type="file" id="upload-1" @change="imageUp($event)">
                        <i id="upload-image">{{ lang.upload_file }}</i>
                      </label>
                      <label class="upload-image upload-text" for="upload-2">
                        <input type="file" id="upload-2" @change="imageUp($event)">
                        <img v-lazy="getUrl('public/images/others/env.svg')" alt="file"
                             class="img-fluid">
                        {{ lang.upload }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12" v-if="offline_method.instructions">
                <label>{{ lang.instructions }}</label>
                <div class="instruction" v-html="offline_method.instructions"></div>
              </div>
              <div class="col-lg-12 text-center mt-3">
                <button @click="submit" class="btn btn-primary" v-show="!loading">{{ lang.proceed }}</button>
                <loading_button v-show="loading" :class_name="'btn btn-primary'"></loading_button>
              </div>
            </div>
          </div><!-- /.modal-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "offline_method",
    props : ['trx_id','code','amount','offline_method','loading'],
    methods : {
        submit()
        {
            this.$parent.payment();
        }
    }
}
</script>

<style scoped>

</style>
