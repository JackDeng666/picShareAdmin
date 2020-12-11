<template>
  <div>
    分类列表
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categoryList: []
      }
    },
    methods: {
      async getData() {
        let res = await this.$api.Category.getAll()
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