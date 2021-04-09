<template>
    <div class="cancelRequest" >
        <el-container style="height: 600px"
                      v-loading="loading"
                      element-loading-text="正在匹配最合适招聘信息(可能需要几分钟）"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-header style="width: auto;height: auto;margin-top: 10%">
                <div>

                    <el-upload
                            v-if=!vis
                            :before-upload="whileupdate"
                            :on-progress="setname"
                            class="upload-demo"
                            drag
                            :on-error="error"
                            :on-success="success"
                            action="http://localhost:9000/resume/uploadPoster"
                            >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传pdf文件，且不超过20mb</div>
                    </el-upload>
                </div>

                <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="hh">上传</el-button>-->
            </el-header>
            <el-main style="margin-top: -100px">
                <position-list v-if=vis :jobs="jobs">
                </position-list>
            </el-main>

        </el-container>
    </div>


</template>

<script>

  import positionList from '../components/positionList'

  export default {
    name: 'resumePost',
    props: {
      msg: String
    }, components: {positionList},
    data: function () {
      return {
        vis: false,
        file_name: '',
        src: 'asdfasdf',
        jobs: [],
        loading: false,

      }
    },
    methods: {
      setname () {
        this.loading = true

      },
      error () {

      },
      whileupdate (file) {
        console.log(file.name)
        if (file.name.split('.')[1] !== 'pdf') {
          this.$notify({
            title: '对不起',
            message: '仅支持pdf格式简历',
            type: 'warning',
            duration: 0
          })
          return false
        }
      },
      success (response) {
        this.loading = false
        if (response.length < 1) {

          this.$notify({
            title: '对不起',
            message: '未找到与你相配的招聘信息，请更换简历重试',
            type: 'warning',
            duration: 0
          })
        } else {
          this.jobs = response
          this.judVis()
        }
      }
      ,
      hh () {

        //loading
        const loading = this.$loading({
          lock: true,
          text: '正在匹配最合适招聘信息(可能需要几分钟）',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        const file = new FormData()
        // formData.append('i', '1231')
        const thefile = document.getElementById('file').files[0]
        // console.log(thefile)
        this.file_name = thefile.name
        file.append('file', thefile)
        // console.log(file.get('file'))
        // console.log(file)
        // console.log(formData.get('i'))
        this.$axios({
          method: 'post',
          url: 'http://localhost:9000/resume/uploadPoster',
          data: file,
          headers: {
            'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
          },
        }).then((response) => {
          if (response.data.length < 1) {

            loading.close()
            this.$notify({
              title: '对不起',
              message: '未找到与你相配的招聘信息，请更换简历重试',
              type: 'warning',
              duration: 0
            })
          } else {
            console.log(response.data)
            // let jobsss
            // jobsss = response.data
            // console.log(jobsss)
            this.jobs = response.data
            loading.close()
            this.judVis()
          }
          // alert(response.data + 'aaaaaaaa')
        }).catch(function (reason) {
          loading.close()
          console.log(reason + 'aaaaaaaaaa')
        })
        // console.log()
      }, judVis () {
        if (this.jobs.length < 1) {
          this.vis = false
        } else {
          this.vis = true
        }
      }

    }, mounted () {
      this.judVis()
    }
  }


</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .a-upload {
        padding: 4px 10px;
        height: 20px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        color: #888;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        *display: inline;
        *zoom: 1
    }

    .a-upload input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer
    }

    .a-upload:hover {
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none
    }

    .file {
        position: relative;
        display: inline-block;
        background: #D0EEFF;
        border: 1px solid #99D3F5;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #1E88C7;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
    }

    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }

    .file:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
    }
</style>


