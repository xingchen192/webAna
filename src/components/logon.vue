<template>
    <div>
        <div style="width: 50%;margin: 0 auto">
            <p style="margin-top: 20%">
                <span>账号：</span>
                <el-input v-model="id" style="width:50%;display: inline-block"></el-input>
            </p>
            <p style="margin-top: 30px;margin-bottom: 30px">
                <span>密码：</span>
                <el-input v-model="password" style="width:50%;display: inline-block"></el-input>
            </p>
            <el-button type="primary" style="margin-right: -40%" @click="adduser">确认注册</el-button>
        </div>

    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'logon',
    data () {
      return {
        id: '',
        password: ''
      }
    }, methods: {
      adduser () {
        if (this.id === '' || this.password === '') {
          this.$notify({
            message: '账号或密码不为空！！',
            type: 'warning',
            duration: 2000
          })
        } else {
          const datas = {
            id: this.id,
            password: this.password
          }
          this.$axios({
            method: 'post',
            url: 'http://localhost:9000/user/add',
            data: qs.stringify(datas),

          }).then((response) => {
            console.log(response.data)

            if (response.data === 1) {

              this.$notify({
                message: '注册成功',
                type: 'info',
                duration: 0
              })
              this.$router.push({
                path:'/'
              })
            } else {
              this.$notify({
                message: '注册失败，用户名已存在！！',
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

</style>
