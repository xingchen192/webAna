<template>
    <div class="cancelRequest">
        <div>姓名：<input type="text" v-model="name"></div>
        <div>头像：<input type="file" ref="file"></div>
        <div @click="save">保存</div>
    </div>
</template>

<script>
    import axios from 'axios'
  export default {
    name: 'test',
    data(){
      return {
        name:'',
        value:''
      }
    },
    components:{},
    props:{},
    watch:{},
    computed:{},
    methods:{
      save(){
        let formData=new FormData();
        // formData.append('name',this.name)
        formData.append('file',this.$refs.file.files[0])
        console.log(formData.get('file'))
        axios.post('http://localhost:9000/resume/uploadPoster',formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          console.log(response.data)
          alert(response.data + 'asfasdfasfd')
        }).catch(function (reason) {
          console.log(reason)
        })
      }
    },
    created(){},
    mounted(){}
  }
</script>
<style>

</style>
