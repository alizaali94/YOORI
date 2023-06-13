<template>
    <div>
        <div :class="{ 'yt_4' : video.style == 'style_4' || video.style == 'style_2' }">
            <vue-plyr v-if="video.video_type == 'youtube'">
                <div class="plyr__video-embed">
                    <iframe class="yt_frame"
                            :src="'https://www.youtube.com/embed/'+video.video_url+'/?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media'"
                            width="1200" height="1000" frameborder="0" :data-poster="video.thumbnail"
                            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                            style="height: 600px !important;"></iframe>
                </div>
            </vue-plyr>
        </div>
        <div :class="{ 'mp_4' : video.style == 'style_4' || video.style == 'style_2' }">
            <vue-plyr v-if="video.video_type == 'mp4'">
                <video :data-poster="video.thumbnail">
                    <source :src="video.video_url" type="video/mp4"/>
                </video>
            </vue-plyr>
        </div>
      <iframe v-if="video.video_type == 'vimeo'"
              :src="'https://player.vimeo.com/video/'+video.video_url"
              width="1200"
              height="360" frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen></iframe>

        <iframe v-if="video.video_type == 'embedded_video'"
            :src="'https://www.facebook.com/plugins/video.php?height='+height()+'&href='+ video.video_url+'%2F&show_text=true&width=476&t=0'"
            width="476" :height="height()+200"
            style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true">
        </iframe>
    </div>
</template>

<script>
export default {
    name: "video_section",
    props: ['video'],
    methods : {
        height()
        {
            let height = '';
            let style = this.video.style;
            if (style == 'style_2' || style == 'style_4')
            {
                height = 798;
            }
            else{
                height = 359 - 200;
            }
            return height;
        }
    }
}
</script>

<style scoped>

</style>
