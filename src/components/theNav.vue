<template>
  <div id="app">
    <el-container>
      <el-header style=" margin: auto;margin-top: -50px;width: 90%;">
        <el-menu
            :default-active="activeIndex2"
            text-color="#409EFF"
            active-text-color="#000EFF"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-row>
            <el-col :span="12">
              <div style="text-align: left;margin-left: 30px" class="grid-content bg-purple">
                <el-menu-item index="1">
                  <img style="height: 30px;width: 30px" src="../assets/system.png"/>
                  <el-link :underline="false" style="font-size: 38px;margin-left: 4px" type="primary">
                    Analysis
                  </el-link>
                </el-menu-item>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple-light">
                <el-submenu index="2">
                  <template slot="title"><span style="font-size: 18px;">就业分析</span></template>
                  <el-menu-item index="2-1">岗位分布</el-menu-item>
                  <el-menu-item index="2-2">薪资区间</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">招聘信息</template>
                    <el-menu-item index="2-4-1">andriod</el-menu-item>
                    <el-menu-item index="2-4-2">测试工程师</el-menu-item>
                    <el-menu-item index="2-4-3">java</el-menu-item>
                    <el-menu-item index="2-4-4">python</el-menu-item>
                    <el-menu-item index="2-4-5">web</el-menu-item>
                    <el-menu-item index="2-4-6">网络工程师</el-menu-item>
                    <!--<el-menu-item index="2-4-7">网络工程师</el-menu-item>-->
                  </el-submenu>
                  <el-menu-item index="2-3">招聘对比</el-menu-item>
                  <el-menu-item index="2-5">数据上传</el-menu-item>
                </el-submenu>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple" style="font-size: 18px;">

                <el-submenu index="3">
                  <template slot="title"><span style="font-size: 18px;">简历分析</span></template>
                  <el-menu-item index="3-1">求职者自我评价</el-menu-item>
                  <el-menu-item index="3-2">求职者技能树</el-menu-item>
                  <el-menu-item index="3-3">求职者分布</el-menu-item>
                  <el-menu-item index="3-4">求职者意向职位</el-menu-item>
                  <el-menu-item index="3-5">分析数据上传</el-menu-item>
                  <!--<el-submenu index="3-4">-->
                  <!--<template slot="title">选项4</template>-->
                  <!--<el-menu-item index="3-4-1">选项1</el-menu-item>-->
                  <!--<el-menu-item index="3-4-2">选项2</el-menu-item>-->
                  <!--<el-menu-item index="3-4-3">选项3</el-menu-item>-->
                  <!--</el-submenu>-->
                </el-submenu>
              </div>
            </el-col>
            <el-col :span="4">
              <div style="" class="grid-content bg-purple-light">
                <el-submenu index="4">
                  <template slot="title"><span style="font-size: 18px;">岗位推荐</span></template>
                  <el-menu-item index="4-1">快速推荐</el-menu-item>
                  <el-menu-item index="4-2">准确推荐</el-menu-item>
                  <el-menu-item index="4-3">教学成果评估</el-menu-item>
                  <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
                  <!--<el-submenu index="3-4">-->
                  <!--<template slot="title">选项4</template>-->
                  <!--<el-menu-item index="3-4-1">选项1</el-menu-item>-->
                  <!--<el-menu-item index="3-4-2">选项2</el-menu-item>-->
                  <!--<el-menu-item index="3-4-3">选项3</el-menu-item>-->
                  <!--</el-submenu>-->
                </el-submenu>
                <!--<el-menu-item index="4"><a target="_blank" style="font-size: 18px;">岗位推荐</a>-->
                <!--</el-menu-item>-->
              </div>
            </el-col>
          </el-row>
        </el-menu>


      </el-header>
      <!--<el-main>-->


      <!--<div id="main-port">-->


      <!--</div>-->
      <!--</el-main>-->
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'theNav',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }, methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      console.log(keyPath)

      this.switchPages(key)

    },
    switchPages(key) {
      switch (key) {
        case '1':
          this.$router.push({path: '/main'})
          break
          // case '2':;
        case '2-3':
          this.$router.push({
            path: '/mainMap'
          })
          break
        case '3-1':
          this.$router.push({
            path: '/self_wordCloud'
          })
          break
        case '3-2':
          this.$router.push({
            path: '/skill_tree'
          })
          break
        case '3-3':
          this.$router.push({
            path: '/stuDistribution'
          })
          break
        case '3-4':
          this.$router.push({
            path: '/stuIntention'
          })
          break
        case '3-5':
          this.$router.push({
            path: '/resumeDataUpload'
          })
          break
        case '2-1':
          this.$router.push({
            path: '/distribution'
          })
          break
        case '4-1':
          this.$router.push({
            path: '/resumePost'
          })
          break
        case '2-4-1':
          this.$router.push({
            path: '/androidWordCloud'
          })
          break
        case '2-4-2':
          this.$router.push({
            path: '/cWordCloud'
          })
          break
        case '2-4-3':
          this.$router.push({
            path: '/javaWordCloud'
          })
          break
        case '2-4-4':
          this.$router.push({
            path: '/pythonWordCloud'
          })
          break
        case '2-4-5':
          this.$router.push({
            path: '/webWordCloud'
          })
          break
        case '2-4-6':
          this.$router.push({
            path: '/networkWordCloud'
          })
          break
        case '2-2':
          this.$router.push({
            path: '/safaris'
          })
          break
        case '2-5':
          this.$router.push({
            path: '/jobUpload'
          })
          break
        case '4-2':
          this.$router.push({
            path: '/infoPost'
          })
          break
        case '4-3':
          this.$router.push({
            path: '/assessPro'
          })
          break

      }
    },
    // mianMap(){
    //   this.$router.push({path: '/mainMap'
    //   })
    // },
    // mainContent(){
    //   this.$router.push({path: '/'})
    // }
  },
  components: {
    // mainContent,
    // skill_tree,
    // mainMap,
    // HelloWorld,
    // self_wordCloud,
    // mapEcharts,
    // echartsMap
    // resumePost,
    // test
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
