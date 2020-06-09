<template>
  <div class='tmpl-module'>
    <c-button></c-button>
    module-amodule-amodule-amodule-amodule-a
  </div>
</template>

<style lang='less' scoped>
.tmpl-module {
  color: red;
  font-size: 30px;
}
</style>

<script>
/**
 *  @file: module.vue is a <vue> file
 *  @date: File created 2020-06-01 23:07
 *  @author:  shangwenhe
 */

const CButton = () => import(/* webpackChunkName: 'webpackChunkNameButton' */ './components/button.vue')
// import CButton from './components/button.vue'
// console.log(CButton)
export default {
  data () {
    return {
    }
  },
  created(){
    console.log('created')
  },
  props: [],
  methods: {},
  computed: {},
  watch: {},
  components: {
    CButton
  }
}
</script>
