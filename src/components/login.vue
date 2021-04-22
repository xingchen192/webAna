<template>
    <div class="login_container">

        <div style="width: 30%;margin:0 auto;margin-top: 10%">
            <h1 style="text-align: center;margin-left: 20px">登 录</h1>
            <!-- 登陆表单区域 -->

            <p>
                <span>账 号：</span>
                <el-input v-model="loginFrom.username" style="width: 80%;display: inline-block"></el-input>
            </p>
            <p>
                <span>密 码：</span>
                <el-input style="margin-top: 20px;margin-bottom: 20px;width: 80%;display: inline-block"
                          v-model="loginFrom.password" show-password>
                </el-input>

            </p>


            <el-button type="info" style="margin-right: 150px" @click="resetLoginForm">重置</el-button>
            <el-button type="primary" @keyup.enter.native="login" @click="login"  >登录</el-button>
            <p style="text-align: right;margin-right: 30px;margin-top: 30px">
                <router-link style="font-size: 2px" :to="{ path: 'logon' }">没有账号？点击这里注册</router-link>
            </p>
        </div>
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'login',
    data () {
      return {
        loginFrom: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      resetLoginForm () {
        this.loginFrom.username = ''
        this.loginFrom.password = ''
      },
      login () {
        if (this.loginFrom.username === '' || this.loginFrom.password === '') {
          this.$notify({
            message: '请输入完整账号密码！！',
            type: 'warning',
            duration: 2000
          })
        } else {
          const datas = {
            id: this.loginFrom.username,
            password: this.loginFrom.password
          }
          console.log(datas)
          this.$axios({
            method: 'post',
            url: 'http://localhost:9000/user/login',
            data: qs.stringify(datas),
          }).then((response) => {
            console.log(response.data)
            if (response.data === 1) {
              this.$router.replace({
                path: '/main'
              })
            } else {
              this.$notify({
                message: '账号或密码错误！！',
                type: 'warning',
                duration: 2000
              })
            }
          }).catch(function (reason) {
            console.log(reason)
          })
        }

      }
    }

  }
</script>
<style scoped>
    /*.login_container {*/
    /*background: #2b4b6b;*/
    /*height: 100%;*/

    /*}*/

    /*.login_box {*/
    /*width: 450px;*/
    /*height: 240px;*/
    /*background-color: rgba(255, 255, 255, 0.418);*/
    /*border-radius: 5px;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 40%;*/
    /*transform: translate(-50%, -50%);*/
    /*}*/

    /*.login_form {*/
    /*position: absolute;*/
    /*bottom: 0;*/
    /*width: 100%;*/
    /*padding: 0 20px;*/
    /*// 元素指定宽度和高度包括了 padding 和 border*!*!*/
    /*box-sizing: border-box;*/

    /*}*/

    /*.btns {*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*}*/
</style>
