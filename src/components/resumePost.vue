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
        jobs: [{"job_id":221,"job_name":"Java高级开发工程师","company_name":"北京才鼎通信息技术有限公司","work_addr":"010800","salary":"2.5-3万/月","push_date":"2020-08-06 04:29:34","job_key":"107544018","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-hdq/107544018.html?s=01&t=0","descString":"1、计算机或相关专业大学本科毕业，5年以上JAVA实际项目开发经验； 2、有扎实的JAVA基础，JVM、JAVA多线程、并发及网络通信经验； 3、熟悉主流开源应用框架，精通Spring框架，熟悉使用至少一种ORM框架如Hibernate、MyBatis； 4、熟悉关系型数据Oracle、Sqlserver等，以及相应数据库调优、SQL优化； 5、熟悉HTML、Javascript、Ajax、CSS、JQuery等WEB前端技术； 6、熟悉Linux系统，并能使用常用的服务器命令； 7、具备良好文档编写能力；  由于该岗位需要有经验的工程师，***能本月内到岗工作。  职能类别：高级软件工程师 关键字：开发工程师"},{"job_id":1770,"job_name":"java中高级工程师","company_name":"天阳宏业科技股份有限公司","work_addr":"010800","salary":"1.2-2万/月","push_date":"2020-06-08 10:06:20","job_key":"115213946","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-hdq/115213946.html?s=01&t=0","descString":"全日制本科及以上学历，计算机、通信等相关专业。高级开发人员6年以上Java开发和设计经验; 中级开发人员4年以上Java开发和设计经验。 精通Java语言，熟练掌握SpringBoot、 MyBatis、Hibernate等开源框架以及Oracle，MySQL等主流数据库，掌握Redis等内存数据库 熟练掌握HTML、JavaScript、Ajax等前端开发技术，以及JQuery 、EasyUI、Angularjs、React JS等一种或多种前端框架 了解或熟悉Zookeeper、Tomcat、Nginx、MQ等中间件，了解CAS等开源单点认证方案 深刻理解J2EE系统架构、面向对象的编程思想，以及常用设计模式 具备良好的代码规范、文档编写、学习沟通能力，以及团队合作意识 具有金融行业软件开发经验者优先 职能类别：高级软件工程师"},{"job_id":99,"job_name":"Java中高级开发工程师","company_name":"中国科学院自动化研究所","work_addr":"010800","salary":"1.3-2.5万/月","push_date":"2020-08-06 10:04:34","job_key":"104097033","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-hdq/104097033.html?s=01&t=0","descString":"岗位职责： 主要完成日常工作中各功能模块的开发以及简单的数据库设计、系统维护以及系统调优等。 岗位要求： 1、 本科及以上学历，4年以上真实JAVA开发工作经验。能力突出者可放宽。 2、 精通j2ee架构，对其主流开源框架（SSM/SSH）的核心思想，实现原理有一定的认知。 3、 至少熟悉一种web前端JS框架，如angularjs\\jquery\\bootstrap等的工作机制。熟悉html、css等。 4、 至少熟悉两种或以上常用数据库,如：Oracle、Mysql、SQL server 、mongoDB、Nosql等。 5、 至少熟悉一种web容器，如：tomcat、weblogic、jboss等。 6、 熟悉SpringBoot,对其有研究者优先考虑。 7、 熟悉linux，做过财务系统以及二次开发或做过大型项目的优先考虑。 职能类别：高级软件工程师"},{"job_id":769,"job_name":".NET高级开发工程师","company_name":"东泓海科商贸（北京）有限公司","work_addr":"010800","salary":"2-4万/月","push_date":"2020-06-10 10:53:30","job_key":"117752869","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-hdq/117752869.html?s=01&t=0","descString":"--能根据企业业务接受长期出差的优先-- 1、计算机相关专业，5年以上asp.net开发经验(特别优秀者可3年以上)，至少担任过1个大型项目的开发主管 2、熟悉ABP框架及相关技术：C# 5.0、net core 2+、WebApi、Entity Framework 、SQL、Jquery，了解Redis、RabbitMQ 3、熟练使用泛型、Linq、Lambda、async / await、依赖注入、DTO对映。 4、熟悉各种架构模式和设计模式，有面向服务的架构经验。 5、对DDD(领域驱动设计)至少有最基本的了解和认识，有深入研究和应用者较佳。 6、有大型分散式项目经验优先；有电商平台、ERP、CMS、CRM、OA、工作流引擎开发经验优先 7、喜欢研究优秀的开源项目，持续学习.NET新技术 职能类别：高级软件工程师"},{"job_id":1277,"job_name":"后端开发","company_name":"北京三六九数动科技有限公司","work_addr":"010500","salary":"2.5-3万/月","push_date":"2020-08-04 16:16:05","job_key":"123302660","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-cyq/123302660.html?s=01&t=0","descString":"本科及以上学历，计算机相关专业。 7年以上软件开发项目全生命周期经验。 3年以上用java构建复杂企业应用程序的项目经验 2年以上RDBMS和SQL编程的项目经验。 了解和有Scala经验者优先。 了解和有JavaScript经验者优先。 了解和有大型系统开发和性能调优经验者优先。 了解和有NoSQL数据库经验者优先。 职能类别：高级软件工程师 关键字：软件开发软件"},{"job_id":1420,"job_name":"Java资深开发工程师","company_name":"中软国际科技服务有限公司","work_addr":"040000","salary":"1-1.5万/月","push_date":"2020-07-31 11:04:23","job_key":"119236973","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/shenzhen/119236973.html?s=01&t=0","descString":"1、进行医疗或者游戏项目的开发。 岗位要求： 1. 熟练掌握java，对spring、MyBatis了解其原理和实现机制， 2.具有spring cloud 和dubbo等微服务相关开发经验 3. 熟练掌握mysql，boostrap/jquery/javascript； 4. 熟练掌握linux基本运维命令； 5. 本科以上，3年以上实际经验； 6. 有运营系统、CRM（客户关系管理）系统研发经验者优先； 7. 有云计算业务使用经验者优先.    职能类别：高级软件工程师 关键字：Java"},{"job_id":512,"job_name":"高级研发工程师","company_name":"北京大数元科技发展有限公司","work_addr":"010800","salary":"1.2-2.4万/月","push_date":"2020-07-30 08:51:11","job_key":"119816312","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-hdq/119816312.html?s=01&t=0","descString":"岗位职责： 1、指导初级或中级工程师，根据预定计划完成程序开发或项目开发任务。 2、根据设计文档或需求说明完成代码编写，调试，测试和维护； 3、按照产品开发过程规范编写开发类文档； 4．分析并解决软件开发过程中的问题； 5、公司安排的其它技术类工作。  岗位要求： 1、本科以上学历，计算机相关专业，2年及以上Java开发经验； 2、精通JAVA，熟悉J2EE开发架构，熟悉Spring、Struts等Java主流开发框架； 3、精通Web/BS开发，熟练掌握JavaScript/jQuery/ExtJs等前端框架； 4、精通SQL，熟练使用Oracle、MySQL等关系型数据库； 5、熟悉Weblogic、Tomcat等应用服务器的运用； 6、熟练使用idea、eclipse、PL/SQL Developer等开发工具； 7、从事过政府、财政相关项目开发者优先；从事过政府领域大型项目开发者优先；熟悉Hadoop者优先； 8、由相关专业证书、学校期间获得奖学金优先，有过带领开发组经验优先。  发展机会： 1、工作满1年能力优秀者，可认购公司原始股权。 2、公司处于高速发展阶段，可往研发经理、产品经理、研发总监和产品总监方向发展。 职能类别：高级软件工程师"},{"job_id":344,"job_name":"JAVA工程师","company_name":"北京盛德信联科技有限公司","work_addr":"010000","salary":"1.5-2.5万/月","push_date":"2020-08-06 11:19:08","job_key":"73147450","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing/73147450.html?s=01&t=0","descString":"职位要求： 1、计算机相关专业本科及以上； 2、有互联网大容量、高并发分布式系统架构设计和开发经验； 3、精通OO，UML,AOP，设计模式； 4、3年以上Java开发工作经验，精通JAVA和J2EE，有扎实的计算机软件理论功底，精通数据结构，精通面向对象的程序设计方法； 5、熟悉web开发，Spring MVC，MyBatis，Jquery，bootstrap，CSS3，webservice，html5； 6、熟悉Tomcat，Apache，Weblogic等服务器； 7、熟悉Oracle/MySQL等数据库，熟练使用SQL语言，熟悉存储过程、触发器等编写； 8、具有良好的沟通能力和团队合作精神。 职能类别：高级软件工程师"},{"job_id":289,"job_name":"高级Java工程师  Senior Java Engineer","company_name":"易保网络技术（上海）有限公司-eBaoTech Corporation","work_addr":"010500","salary":"1-1.5万/月","push_date":"2020-08-05 11:26:21","job_key":"58184362","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing-cyq/58184362.html?s=01&t=0","descString":"职责描述： 参加大型商业应用系统的设计，领导开发小组进行软件开发。  任职资格： 本科及以上学历，计算机及相关专业； 三年以上商业程序开发经验，至少参加过两个中大型软件开发项目； 精通Java 语言和面向对象设计方法，精通EJB 、JTS、JMS、JDBC、XML、UML； 了解关系数据库理论，有Oracle编程经验； 有WebLogic、OracleAS、WebSphere平台开发经验或大型ERP/MIS系统开发经验者优先考虑。； 具有较强的分析设计能力和组织协调能力。 职能类别：高级软件工程师 关键字：javaoracle"},{"job_id":1073,"job_name":"JAVA工程师（中、高级）","company_name":"北京中软联动科技有限公司","work_addr":"010000","salary":"1-1.8万/月","push_date":"2020-08-05 09:45:04","job_key":"55202783","industry":"后端开发","underindustry":"高级软件工程师","job_href":"https://jobs.51job.com/beijing/55202783.html?s=01&t=0","descString":"满足以下任意一个岗位要求即可： 需求：一 任职要求： 1、计算机相关专业本科、学士以上（含学士）学位。 2、3-5年以上JAVA项目开发经验；有过大型项目经验优先考虑。 3、熟悉设计模式，具有面向对象的分析和设计的能力； 4、精通java、spring、hibernate/ibatis； 5、熟悉Extjs、Jquery、JavaScript/Ajax。 6、熟悉Oracle数据库。 7、思路清晰，善于思考，能独立分析和解决问题。 8、责任心强，做事细心 、有恒心和毅力、具备良好的团队合作精神和承受压力的能力。 9、有煤矿信息化建设项目经验优先。  岗位职责： 1、理解需求、参与原型设计和系统设计，编写设计文档。 2、依据设计文档编写规范的代码、包括注释。 3、在开发过程中重构现有的代码。 4、依据设计文档编写单元测试和集成测试用例，并执行单元测试。 5、根据测试结果修改产品中的bug。 6、在开发过程中对初级程序员进行指导。 7、编写软件的其他相关文档。  需求二 1、全日制本科以上学历，计算机专业； 2、熟练使用JAVA语言，至少3以上年开发经验； 3、熟练掌握基于Web的应用程序开发； 4、良好责任心和团队精神，良好的沟通表达能力； 5、有FLEX开发经验者优先； 6、有金融行业相关软件开发工作经验者优先  需求三 1、5年以上JAVA开发经验。 2、熟悉B/S项目开发。 3、具有良好的JS界面开发。 4、具有良好的学习能力、沟通能力。 5、有基于平台的前端程序开发者优先。 6、有SAP的MII模块web开发经验者优先。  需求四 1、本科及以上学历，计算机相关专业毕业，英语四级及以上； 2、3-5年以上J2EE开发经验，熟悉常用设计模式； 3、熟练掌握常用开发框架如SSH2等； 4、熟练掌握Web Service、JMS开发，熟悉Socket开发，掌握Apache Mina或ESB开发者优先； 5、熟悉客户端开发语言jsp、html、jquery； 6、熟练掌握oracle数据库，熟悉mysql数据库；熟练掌握SQL语言； 7、银行系统接口开发经验优先； 8、具备较强的文档编写能力； 9、具备较好的口头表达能力、沟通能力和学习能力，较好的团队协作能力和事务执行能力。  需求四 1、计算机相关专业专科以上学历，6年以上相关经验 2、精通JAVA语言,熟悉java异机制 3、精通面向对象的系统设计和开发，精通UML以及相关的OO设计工具,精通各种设计模式 4、精通SSH框架下开发及框架搭建 5、精通apache、Maven、ANT、log4j及svn版本控制工具 6、精通HTML、Javascript、Ajax、CSS、XML、JSON等技术 7、有技术难题攻关经验，善于主动推动项目进展并达成项目目标 8、有规范的编程习惯与文档编写能力，积极配合公司各项规范化管理工作； 9、良好的沟通表达及逻辑组织能力，思维敏捷 10、有石化行业研发经验者优先。    本需求招聘愿意在北京长期发展的 ，本科以上学历5年以上工作经验 ，***注明 自己的技术特长 和以后的发展方向，请求职者按照需求投递简历 ，谢谢。 职能类别：高级软件工程师 关键字：Java"},{"job_id":1808,"job_name":"node.js工程师","company_name":"北京中北信科技发展有限公司","work_addr":"010200","salary":"1-1.5万/月","push_date":"2020-08-06 10:18:03","job_key":"120335385","industry":"后端开发","underindustry":"软件工程师","job_href":"https://jobs.51job.com/beijing-xcq/120335385.html?s=01&t=0","descString":"node.js工程师， 上班地点：北京冠华大厦 1.计算机或电子信息相关专业本科以上学历，3年及以上开发经验 2.精通 NodeJs后端开发框架 3.熟练使用Mysql,Redis,MongoDB等相关数据库 4.熟悉Linux服务器环境及常用的操作指令 5熟悉docker容器使用优先 6.有良好的代码编写习惯，能独立解决开发中遇到的问题 职能类别：软件工程师 关键字：Node.js"}],
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


