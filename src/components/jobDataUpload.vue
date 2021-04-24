<template>
    <div class="cancelRequest">
        <el-container style="height: 600px"
                      v-loading="loading"
                      element-loading-text="后台数据更新中，请稍后"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-header style="width: auto;height: auto;margin-top: 10%">
                <h2>岗位数据上传</h2>

                <div>

                    <el-upload
                            class="upload-demo"
                            drag
                            name="file"
                            :on-success="success"
                            action="http://localhost:9000/data/upload"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div  style="margin-top: 10px" class="el-upload__tip" slot="tip" @click="dialogVisible = true">只能上传excel文件，点击查看数据格式要求
                        </div>
                    </el-upload>
                </div>

                <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="hh">上传</el-button>-->
            </el-header>

            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="40%"
                    :before-close="handleClose">
                <span style="margin-bottom: 10px" class="demonstration">自第二行开始，按照工作名称，地点，薪资，工作职责等格式排列</span>
                <el-image src="/tip.png"></el-image>
                <span slot="footer" class="dialog-footer">
                     <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
            <!--<el-main style="margin-top: -100px">-->
            <!--<position-list v-if=vis :jobs="jobs">-->
            <!--</position-list>-->
            <!--</el-main>-->

        </el-container>
    </div>
</template>

<script>
  export default {
    name: 'jobDataUpload',
    data () {
      return {
        loading: false,
        dialogVisible: false
      }
    },
    methods: {
      success (res) {
        this.$notify({
          title: '结果',
          message: res,
          offset: 100,
          duration: 0
        });
      }, handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
            console.log(_)
          })
          .catch(_ => {
            console.log(_)
          })
      }
    }
  }
</script>

<style scoped>

</style>
