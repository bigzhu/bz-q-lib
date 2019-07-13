<template>
  <div class="layout-padding relative-position upload-img">
    <div v-show="loading" class="ui large active loader">
      <div class="ui text loader">上传图片中</div>
    </div>
    <upload-file :zip="zip" :uploadUrl="uploadUrl" @changeFile="previewImg" accept="image/png, image/jpeg, image/gif" @uploadDone="done" class="hidden">上传附件</upload-file>
    <a @click="changeImg" href="javascript:void(0)" data-content="">
      <img :src="value||blankImg||defaultPicture" class="responsive" :alt="alt" />
      <q-inner-loading :visible="loading" />
    </a>

    <a @click="deleteImg" :class="{'show-delete': value}" class="delete" href="javascript:;"><img src="../assets/delete.svg"></a>
    <!--
    <BzImgPopup v-model="popImg"></BzImgPopup>
    -->
  </div>
</template>

<script>
  import {
    QInnerLoading
  } from 'quasar'
  import UploadFile from './BzUploadFile'
  import BzImgPopup from './BzImgPopup'
  import uploadPicture from '../assets/upload-picture.svg'
  export default {
    props: {
      zip: { // 是否压缩图片
        type: Boolean,
        default: true
      },
      uploadUrl: {
        type: String,
        default: '/apiFileUpload'
      },
      value: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
      blankImg: {
        type: String,
        default: ''
      }
    },
    components: {
      QInnerLoading,
      BzImgPopup,
      UploadFile
    },
    data: function() {
      return {
        popImg: '',
        defaultPicture: uploadPicture,
        loading: false,
        imgInput: null,
        preImg: null
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.imgInput = this.$el.getElementsByTagName('input')[0]
        this.preImg = this.$el.getElementsByClassName('.responsive')[0]
      })
    },
    methods: {
      deleteImg: function() {
        this.$emit('input', '')
      },
      changeImg: function() {
        if (this.value) {
          this.popImg = this.value
        } else {
          this.imgInput.click()
        }
      },
      previewImg: function(e) {
        let file = e.target.files[0]
        if (file) {
          this.loading = true
        }
      },
      done: function(url, name) {
        this.loading = false
        this.$emit('input', url)
        this.$emit('uploadDone', url, name)
      }
    },
    computed: {}
  }
</script>

<style lang="stylus" scoped>
  .upload-img:hover .show-delete {
    visibility: visible;
    opacity: 1;
  }
  .delete {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    transition: color 0.3s ease;
    transition: visibility 0s, opacity 0.3s linear;
    opacity: 0;
  }
</style>
