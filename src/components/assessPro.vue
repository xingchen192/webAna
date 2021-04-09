<template>
    <div class="cancelRequest">
        <el-container style="height: 600px">
            <el-header v-if=!vis style="width: 50%;margin:0 auto;height: auto;margin-top: 10%">

                <h2>先选择一堆简历，然后上传服务器，最后进行评估</h2>
                <el-upload
                        v-if=!vis
                        class="upload-demo"
                        ref="upload"
                        action="http://localhost:9000/resume/uploads"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :on-success="success"
                        :on-change="handleChange"
                        :file-list="fileList"
                        multiple
                        drag
                        accept=".pdf"
                        :auto-upload="false">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div slot="tip" class="el-upload__tip">只能上传pdf文件</div>
                </el-upload>
                <p style="margin-top: 30px">
                    <el-button
                            v-if=!vis
                            style="" size="small" type="success" @click="requestH">上传到服务器
                    </el-button>
                    <el-button v-if=!vis style="margin-left: 30px;" size="small" type="primary" @click="assessQ">评估
                    </el-button>
                </p>
                <!---->
                <el-button v-if=!vis @click="cons"></el-button>
                <!--<el-button @click="returnLength"></el-button>-->
                <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="hh">上传</el-button>-->
            </el-header>
            <el-main style="margin-top: 5%">
                <!--<dataAss v-if=vis :resdata = "JSON.stringify(resData)"></dataAss>-->
                <data-ass v-if=vis :arr="resData"></data-ass>
            </el-main>

        </el-container>
    </div>


</template>

<script>
  import dataAss from './dataAssess'
  import qs from 'qs'

  export default {
    name: 'assessPro',
    props: {
      msg: String
    },
    components: {
      dataAss
    },
    data: function () {
      return {
        oneClick: true,
        vis: false,
        file_name: '',
        // src: 'asdfasdf',
        jobs: [],
        // judgeFile: false,
        fileList: [],
        filePaths: [],
        fileUp: [],
        resData: []
      }
    },
    methods: {
      visAust () {
        this.vis = !this.vis
      },

      requestH () {
        if (this.oneClick) {
          const _this = this
          // console.log(file)
          // this.fileUp.push(file)
          let count = 0
          let timer = setInterval(function () {
            if (count === _this.fileUp.length - 1) {
              _this.oneClick = false
              _this.$notify({
                message: '上传服务器成功，点击进行评估！！',
                type: 'success',
                duration: 3000
              })
              // _this.fileUp=[]
              // _this.fileList = []
              clearInterval(timer)
            }
            let formData = new FormData()
            // _this.sleep(2000)
            formData.append('file', _this.fileUp[count].raw)
            _this.$axios.post('http://localhost:9000/resume/uploads', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(function (response) {
              _this.addFile(response.data)
              count++
            }).catch(function (reason) {
              console.log(reason)
            })

            console.log(count)
            console.log(_this.fileUp.length)

          }, 100)

        }

      },
      handleChange (file, fileList) {
        this.fileUp = fileList
      },
      submitUpload () {
        this.$refs.upload.submit()
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      error () {

      },
      assessQ () {
        const loading = this.$loading({
          lock: true,
          text: '正在匹配最合适招聘信息(可能需要几分钟）',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        const datas = {
          filePaths: this.filePaths
        }
        const _this = this
        this.$axios({
          method: 'post',
          url: 'http://localhost:9000/resume/access',
          data: qs.stringify(datas, {arrayFormat: 'comma'}),
        }).then((response) => {
          loading.close()
          _this.fileUp
          _this.visAust()
          _this.resData = response.data
          // console.log( _this.resData)

        }).catch(function (reason) {
          loading.close()
          console.log(reason)
        })
      },
      returnLength () {
        console.log(this.filePaths.length)
        return this.filePaths.length
      },
      addFile (response) {
        this.filePaths.push(response)
      },
      cons () {
        this.visAust()
        // console.log(this.fileUp)
        // console.log(this.filePaths)
        // console.log(this.filePaths.length)
      }
      ,
      success (response) {
        // console.log(response)
        // this.singleFile = response
        // this.judgeFile = true
        this.addFile(response)
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
          console.log('kongkongkong')
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
      },
      judVis () {
        if (this.jobs.length < 1) {
          this.vis = false
        } else {
          this.vis = true
        }
      }

    }
    ,
    mounted () {

      // this.addFile(),
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


