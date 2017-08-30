<template>
  <div>
    <q-item v-for="(v, index) in value">
      <q-item-main>
        <a :href="v.url" :key="v.url">{{v.name}}</a>
      </q-item-main>
      <q-item-side right icon="delete" class="cursor-pointer" @click="del(index)" />
    </q-item>

    <BzUploadFile :upload_url="upload_url" @upload_done="addNew">
      <slot></slot>
    </BzUploadFile>
  </div>
</template>

<script>
  import {
    QList,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'
  import BzUploadFile from './BzUploadFile'
  export default {
    watch: {
      value: {
        handler: function(val, oldVal) {
          let imgs = val.filter(item => item.src !== '')
          if (val.length !== imgs.length) {
            this.$emit('input', val.filter(item => item.src !== ''))
          }
        },
        deep: true
      }
    },
    props: {
      upload_url: {
        type: String,
        default: '/api_file_upload'
      },
      value: {
        default: function() {
          return []
        }
      }
    },
    components: {
      QList,
      QItem,
      QItemSide,
      QItemMain,
      BzUploadFile
    },
    data: function() {
      return {
        new_img: ''
      }
    },
    methods: {
      del: function(index) {
        this.value.splice(index, 1)
      },
      addNew: function(src, alt) {
        this.value.push({
          url: src.url,
          name: src.name,
          alt: alt
        })
        this.new_img = ''
      }
    }
  }
</script>
