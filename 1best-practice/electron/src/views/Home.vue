<template>
    <div class="home">
        <div msg="Welcome to Your Vue.js App"/>
        <section class="base-card shadow-gary">
            <div>
                <input type="text" v-model="BadgeCount"/>
                <button class="button-primary" @click="setBadgeCount">
                    点击显示徽章计数
                </button>
            </div>
            <div>
                <input type="text" v-model="BadgeText"/>
                <button class="button-primary" @click="setBadgeText">
                    点击改变徽章文本
                </button>
            </div>

            <div>
                <button class="button-primary" @click="beep">小声哔哔</button>
            </div>

            <div>
                <p><span>版本更新：</span>{{UpdaterText}}</p>
            </div>
            <div>
                <p><span>下载文件：</span><a href="https://static.videezy.com/system/protected/files/000/033/826/pattaya_aerial_view30.mov?md5=Ber08J6k6VTxxcEhGAEXsA&expires=1573733359">文件地址</a></p>
                <p>文件名称：<span>{{filename}}</span></p>
                <p>文件进度：<span>{{downloadProgress}}</span></p>
            </div>
        </section>
    </div>
</template>

<script>
  import CustomNotification from "@/electron/notification";
  import { CustomNotify, DownloadNotify } from "@/electron/notification";

  export default {
    name: "home",
    data: function() {
      return {
        BadgeCount: 0,
        BadgeText: "",
        UpdaterText: "",
        downloadProgress: 0,
        filename: ""
      };
    },
    components: {},
    methods: {
      setBadgeCount: function() {
        CustomNotification.setBadgeCount(this.BadgeCount);
      },
      setBadgeText: function() {
        CustomNotification.setBadgeText(`'${this.BadgeText}'`);
      },
      beep: function() {
        CustomNotification.beep();
        // CustomNotification.beepOnce()
      }
    },
    mounted() {
      this.UpdaterNotify = new CustomNotify((text) => {
        this.UpdaterText = text;
      });
      this.DownloadNotify = new DownloadNotify((event, prc) => {
        this.filename = prc.filename;
        this.downloadProgress = prc.receive / prc.total;
      });
    },
    destroyed() {
      this.UpdaterNotify.destory();
      this.DownloadNotify.destory();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .shadow-gary
        box-shadow 0 2px 12px 0 rgba(0, 0, 0, .1)

    .base-card
        border-radius 4px
        border 1px solid #ebeef5
        background-color #fff
        overflow hidden
        color #303133
        transition .3s

    input
        -webkit-appearance none
        background-color #fff
        background-image none
        border-radius 4px
        border 1px solid #dcdfe6
        box-sizing border-box
        color #606266
        display inline-block
        font-size inherit
        height 40px
        line-height 40px
        outline none
        padding 0 15px
        transition border-color .2s cubic-bezier(.645, .045, .355, 1)
        width 100%

    input:hover
        border-color #c0c4cc

    button
        display inline-block
        line-height 1
        white-space nowrap
        cursor pointer
        background #fff
        border 1px solid #dcdfe6
        color #606266
        -webkit-appearance none
        text-align center
        box-sizing border-box
        outline none
        margin 0
        transition .1s
        font-weight 500
        -moz-user-select none
        -webkit-user-select none
        -ms-user-select none
        padding 12px 20px
        font-size 14px
        border-radius 4px

    .button-primary
        color #fff
        background-color #409eff
        border-color #409eff
</style>
