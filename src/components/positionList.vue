<template>
    <div style="width: 90%;margin: 0 auto;">
        <el-table
                height="600"
                :data="jobs"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="jobs">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <!--'job_id': 1,-->
                        <!--'job_name': 'Windows开发工程师',-->
                        <!--'company_name': '中国软件与技术服务股份有限公司',-->
                        <!--'work_addr': '011300',-->
                        <!--'salary': '1-2万/月',-->
                        <!--'push_date': '2020-08-06 11:12:27',-->
                        <!--'job_key': '124306648',-->
                        <!--'industry': '后端开发',-->
                        <!--'underindustry': '高级软件工程师',-->
                        <!--'job_href': 'https://jobs.51job.com/beijing-cpq/124306648.html?s=01&t=0',-->
                        <!--'descString': '岗位职责：  1.企业级数据安全产品，windows平台客户端相关组件开发维护 2.参与系统分析与设计，根据开发规范与流程完成模块的设计、编码、单元测试以及相关文档。任职资格：  1.本科及以上学历，计算机相关专业，1年以上实际项目开发经验；  2.精通C/C++，熟悉visual studio c++集成开发工具，熟练掌握常用的调试工具及调试方法；  3.熟练掌握多线程、Socket编程；  4.熟悉网络编程相关技术；  5.有信息安全产品开发经验或信息安全专业背景者优先；  6.需具备较强的学习能力和沟通能力，良好的团队合作精神； 职能类别：高级软件工程师软件工程师 关键字：windows核心'-->

                        <el-form-item style="display: block;height: 10px" label="岗位名称：">
                            <span>{{ jobs.row.job_name }}</span>
                        </el-form-item>
                        <el-form-item style="display: block;height: 10px" label="公司名称：">
                            <span>{{ jobs.row.company_name }}</span>
                        </el-form-item>
                        <el-form-item style="display: block;height: 10px" label="薪资待遇：">
                            <span>{{ jobs.row.salary }}</span>
                        </el-form-item>

                        <el-form-item style="display: block;height: 10px" label="招聘地址：">
                            <el-link :underline="false" >{{ jobs.row.job_href }}</el-link>
                            <!--<span>{{ props.row.job_href }}</span>-->
                        </el-form-item>
                        <el-form-item  style="display: block;" label="要求：">

                            <span>{{ jobs.row.descString }}</span>
                        </el-form-item>
                        <!--<el-form-item label="店铺地址">-->
                        <!--<span>{{ props.row.address }}</span>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item label="商品描述">-->
                        <!--<span>{{ props.row.desc }}</span>-->
                        <!--</el-form-item>-->
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="岗位"
                    prop="job_name">
            </el-table-column>
            <el-table-column
                    label="公司"
                    prop="company_name">
            </el-table-column>
            <el-table-column
                    label="薪资"
                    prop="salary">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    name: 'positionList',
    props:['jobs'],
    methods:{
      consoles(){

        // this.jobs = this.prop
        // console.log(this.jobs)

      }
    },
    mounted(){
      this.consoles()
    }

  }
</script>

<style scoped>

</style>
