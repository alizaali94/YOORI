<template>
  <div class="product_modal home_modal">
    <a href="javascript:void(0)" class="video-play-btn" @click="backDropOff">
      <span class="mdi mdi-name mdi-play"></span>
    </a>
    <div class="modal fade" id="product_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <button type="button" class="btn-close" @click="pauseVideo" aria-label="Close"></button>
          <div class="modal-body">
            <div class="row"  v-if="productDetails.video_url">
              <div class="col-lg-12">
                <vue-plyr class="yt_player" ref="plyr" v-if="productDetails.video_provider == 'youtube'">
                  <div class="plyr__video-embed">
                    <iframe class="yt_frame" id="yt_video"
                            :src="'https://www.youtube.com/embed/'+productDetails.video_link+'/?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media'"
                            width="1200" height="1000" frameborder="0" :data-poster="productDetails.image_190x230"
                            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                            style="height: 600px !important;"></iframe>
                  </div>
                </vue-plyr>
                <vue-plyr v-if="productDetails.video_provider == 'mp4'">
                  <video ref="myvideo" :data-poster="productDetails.image_190x230">
                    <source size="720" :src="productDetails.video_link" type="video/mp4"/>
                  </video>
                </vue-plyr>
                <iframe v-if="productDetails.video_provider == 'vimeo'" id="vimeo_video"
                        :src="'https://player.vimeo.com/video/'+productDetails.video_link"
                        width="1200"
                        height="360" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "product-video",
  props : ['productDetails'],
  methods : {
    data()
    {
      return {
        player: null,
      }
    },
    mounted()
    {

    },
    pauseVideo(){
      $('#product_video').modal('hide');

    },
    backDropOff()
    {
      $(".modal").on("shown.bs.modal", function () {
        if ($(".modal-backdrop").length > 1) {
          $(".modal-backdrop").not(':first').remove();
        }
      });
      $('#product_video').modal('show');
      let that = this;
      if (!that.player)
      {

        $('#product_video').on('hidden.bs.modal', function (e) {

          if (that.productDetails.video_provider == 'youtube')
          {
            var url = 'https://www.youtube.com/embed/'+that.productDetails.video_link+'/?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media';
            $('.yt_frame').attr('src', '');
            $('.yt_frame').attr('src', url);
          }
          else if (that.productDetails.video_provider == 'mp4')
          {
            if (that.$refs.myvideo)
            {
              that.$refs.myvideo.pause();
            }
          }
          else if (that.productDetails.video_provider == 'vimeo')
          {
            var url = 'https://player.vimeo.com/video/'+that.productDetails.video_link;
            $('#vimeo_video').attr('src', '');
            $('#vimeo_video').attr('src', url);
          }
        })
      }
      that.player = 1;

    }
  }
}
</script>

<style scoped>

</style>