<template>
  <div>
    图片列表
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picSetList: []
      }
    },
    methods: {
      async getData() {
        let res = await this.$api.Pic.getPicList({
          currentPage: 1,
          pageSize: 10
        })
        console.log(res)
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>

</style>