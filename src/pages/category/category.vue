<template>
  <div>
    <el-button type="primary" @click="addType">新增分类</el-button>
    <el-table :data="categoryList" border>
      <el-table-column label="分类名" prop="categoryName"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="editType(scope.row.categoryId, scope.row.categoryName)"/>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.categoryId)"/>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加或修改分类的对话框 -->
    <el-dialog :title="dialogStatus==1?'添加分类':'修改分类'" :visible.sync="isOpen" width="50%">
      <el-form :model="typeForm" label-width="100px" ref="typeFormRef">
        <el-form-item label="分类名" prop="categoryName">
          <el-input v-model="typeForm.categoryName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogStatus = 0">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categoryList: [],
        typeForm: {
          categoryId: null,
          categoryName: ""
        },
        dialogStatus: 0
      }
    },
    computed: {
      isOpen(){
        if(this.dialogStatus == 0){
          return false
        }
        return true
      }
    },
    methods: {
      async getData() {
        let res = await this.$api.Category.getAll()
        this.categoryList = res.data
      },
      handleDelete(typeId){
        this.$confirm('确认删除此分类？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // let result = await Blog.deleteBlogTypes({typeId})
          // if(result.data.meta.status === 1){
          //   this.$message.success('删除成功!')
          //   this.loadBlogTypeList()
          // } else {
          //   this.$message.error(result.data.meta.msg)
          // }
        }).catch( () => {
          this.$message.info('取消删除')
        })
      },
      addType(){
        this.typeForm.categoryId = null
        this.typeForm.categoryName = ""
        this.dialogStatus = 1
      },
      editType(categoryId, categoryName){
        this.typeForm.categoryId = categoryId
        this.typeForm.categoryName = categoryName
        this.dialogStatus = 2
      },
      async confirm(){
        let res
        if(this.dialogStatus==1){
          res = await this.$api.Category.addCategory(this.typeForm)
        } else {
          res = await this.$api.Category.updateCategory(this.typeForm)
        }
        if(res.status){
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
        this.dialogStatus = 0
        this.getData()
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>

</style>