<template>
    <div style="">
        <el-container>
            <el-header style="width: auto;height: auto;margin-top: 10%">


                <el-form v-if=!vis style="width: 40%;margin: 0 auto" label-width="80px">
                    <p>请输入简历匹配关键信息，可提高岗位推荐准确度</p>


                    <el-form-item style="margin-top: 30px;margin-bottom: 30px" label="专业技能">
                        <el-input type="textarea" :rows="9" v-model="skills"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="项目经历">-->
                    <!--<el-input type="textarea" :rows="5" v-model="info.projects"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item>
                        <el-button type="primary" style="margin-left: 40%" @click="onpost">确定</el-button>
                    </el-form-item>
                </el-form>
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
  import qs from 'qs'

  export default {
    name: 'infoPost',
    data () {
      return {
        skills: '',
        vis: false,
        jobs: [],

      }
    }, components: {
      positionList
    },
    methods: {
      onpost () {
        if (this.skills === '') {
          this.$notify({
            message: '内容不为空！！',
            type: 'warning',
            duration: 2000
          })
        } else {
          const loading = this.$loading({
            lock: true,
            text: '正在进行匹配(可能需要几分钟）',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          const datas = {
            skills: this.skills
          }
          this.$axios({
            method: 'post',
            url: 'http://localhost:9000/resume/reco',
            data: qs.stringify(datas),
          }).then((response) => {

            // console.log(response.data[0].g)
            if (response.data.length < 1) {
              loading.close()
              this.$notify({
                title: '对不起',
                message: '未找到与你相配的招聘信息，请更换简历重试',
                type: 'warning',
                duration: 4000
              })
            } else {
              this.jobs = response.data
              loading.close()
              this.judVis()
            }
          }).catch(function (reason) {
            loading.close()
            console.log(reason)
          })

        }

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

</style>
