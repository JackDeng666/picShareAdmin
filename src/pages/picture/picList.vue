<template>
  <div>
    图集列表
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pictureList: []
      }
    },
    methods: {
      async getData() {
        let res = await this.$api.Pic.getPicSetList({
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