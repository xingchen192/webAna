<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto;margin-top: 2%">
        <div id="main" style="width: 100%;height:600px;margin:0 auto"></div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'wordCloud',
    methods: {
      showWords () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let data = [{'name': '能够较快', 'value': 1},
          {'name': '发挥主观能动性', 'value': 2},
          {'name': '制定详细', 'value': 2},
          {'name': '详细设计文档', 'value': 1},
          {'name': '编写架构', 'value': 1},
          {'name': '情坚持不懈', 'value': 1},
          {'name': '耕不辍', 'value': 2},
          {'name': '善于社交', 'value': 1},
          {'name': '浓烈兴趣', 'value': 1},
          {'name': '爱好骑车', 'value': 1},
          {'name': '预备党员', 'value': 1},
          {'name': '性格外向', 'value': 3},
          {'name': '表达能力', 'value': 2},
          {'name': '编程公众', 'value': 1},
          {'name': '班级活动', 'value': 1},
          {'name': '基础上充分', 'value': 2},
          {'name': '沟通交流', 'value': 1},
          {'name': '环境中', 'value': 1},
          {'name': '丰富知识库', 'value': 2},
          {'name': '良好团队', 'value': 1},
          {'name': '能力强', 'value': 4},
          {'name': '及时思考', 'value': 1},
          {'name': '注重效率', 'value': 1},
          {'name': '认真负责', 'value': 2},
          {'name': '熟练掌握', 'value': 1},
          {'name': '人生成长', 'value': 1},
          {'name': '陌生环境', 'value': 1},
          {'name': '良好沟通', 'value': 4},
          {'name': '性格乐观', 'value': 2},
          {'name': '严谨负责', 'value': 1},
          {'name': '管理运营', 'value': 1},
          {'name': '做到工作', 'value': 1},
          {'name': '较强组织', 'value': 1},
          {'name': '做到责任心', 'value': 1},
          {'name': '具有很好', 'value': 2},
          {'name': '应对突发', 'value': 2},
          {'name': '羽毛球乒乓球', 'value': 1},
          {'name': '积极向上生活', 'value': 1},
          {'name': '知识信息', 'value': 1},
          {'name': '学习齐头并进', 'value': 1},
          {'name': '新技术新', 'value': 1},
          {'name': '跨部门沟通', 'value': 4},
          {'name': '耐心工作', 'value': 1},
          {'name': '乐观开朗', 'value': 2},
          {'name': '调动气氛', 'value': 1},
          {'name': '能力公关', 'value': 1},
          {'name': '数字敏感', 'value': 1},
          {'name': '待人热情', 'value': 1},
          {'name': '学习接受', 'value': 1},
          {'name': '客户服务意识', 'value': 1},
          {'name': '较强语言', 'value': 1},
          {'name': '学习能力', 'value': 1},
          {'name': '较强学习', 'value': 1},
          {'name': '前沿领域', 'value': 1},
          {'name': '慢跑游泳', 'value': 1},
          {'name': '分析力', 'value': 1},
          {'name': '责任心客户服务', 'value': 1},
          {'name': '学习中', 'value': 1},
          {'name': '发挥己身', 'value': 2},
          {'name': '期间组织', 'value': 1},
          {'name': '热情真诚', 'value': 1},
          {'name': '爱好羽毛球', 'value': 1},
          {'name': '熟悉编程', 'value': 1},
          {'name': '快乐人生', 'value': 1},
          {'name': '较好理解', 'value': 1},
          {'name': '易于沟通', 'value': 1},
          {'name': '读写', 'value': 1},
          {'name': '热爱生活', 'value': 1},
          {'name': '协作能力', 'value': 1},
          {'name': '领域知识', 'value': 1},
          {'name': '严谨踏实', 'value': 1},
          {'name': '速度很快', 'value': 1},
          {'name': '工作态度', 'value': 1},
          {'name': '效率学习', 'value': 1},
          {'name': '知识有着', 'value': 1},
          {'name': '坚持不懈忍耐力', 'value': 1},
          {'name': '善于总结', 'value': 1},
          {'name': '具备熟练', 'value': 1},
          {'name': '解决问题办法', 'value': 1},
          {'name': '理解贯彻执行', 'value': 2},
          {'name': '休息时玩', 'value': 1},
          {'name': '付出当作', 'value': 1},
          {'name': '学生工作', 'value': 1},
          {'name': '很好领导', 'value': 1},
          {'name': '熟练英文', 'value': 1},
          {'name': '竞技项目', 'value': 1},
          {'name': '明确擅', 'value': 2},
          {'name': '直接上岗', 'value': 1},
          {'name': '团队合作', 'value': 5},
          {'name': '问题时和', 'value': 1},
          {'name': '自主学习', 'value': 1},
          {'name': '学习钻研', 'value': 1},
          {'name': '态度严谨', 'value': 1},
          {'name': '系统乐理', 'value': 1},
          {'name': '实现目标', 'value': 1},
          {'name': '责任心强', 'value': 1},
          {'name': '稳重乐观', 'value': 1},
          {'name': '善于乐于', 'value': 1},
          {'name': '喜欢互动', 'value': 2},
          {'name': '团队精神', 'value': 1},
          {'name': '参与架构', 'value': 1},
          {'name': '成为预备', 'value': 1},
          {'name': '中的历练', 'value': 1},
          {'name': '体系架构', 'value': 1},
          {'name': '团队意识', 'value': 2},
          {'name': '能力活动', 'value': 1},
          {'name': '善于互动', 'value': 1},
          {'name': '英语接受', 'value': 1},
          {'name': '学习习惯', 'value': 1},
          {'name': '专注做好', 'value': 1},
          {'name': '负责班级', 'value': 1},
          {'name': '适应能力', 'value': 1},
          {'name': '广泛兴趣', 'value': 1},
          {'name': '运营模式', 'value': 1},
          {'name': '风险归纳', 'value': 1},
          {'name': '学习中的', 'value': 1},
          {'name': '喜欢自主', 'value': 1},
          {'name': '良好人际关系', 'value': 1},
          {'name': '沟通善于', 'value': 1},
          {'name': '很好学习', 'value': 1},
          {'name': '想象力丰富', 'value': 1},
          {'name': '创新探索', 'value': 1},
          {'name': '较好沟通', 'value': 1},
          {'name': '数据敏感', 'value': 1},
          {'name': '谈判能力', 'value': 2},
          {'name': '及时解决问题', 'value': 1},
          {'name': '友善稳重', 'value': 1},
          {'name': '活泼开朗', 'value': 1},
          {'name': '精益求精专业', 'value': 1},
          {'name': '有着浓烈', 'value': 1},
          {'name': '学习新事物', 'value': 5},
          {'name': '很好沟通', 'value': 1},
          {'name': '协作较强', 'value': 1},
          {'name': '很好融入', 'value': 1},
          {'name': '概要详细设计', 'value': 1},
          {'name': '掌握办公', 'value': 1},
          {'name': '活动策划', 'value': 1},
          {'name': '探索激情', 'value': 1},
          {'name': '爱好广泛', 'value': 2},
          {'name': '很好团队', 'value': 2},
          {'name': '方可算作', 'value': 2},
          {'name': '时玩电子游戏', 'value': 1},
          {'name': '领能力', 'value': 2},
          {'name': '架构设计', 'value': 1},
          {'name': '较强分析', 'value': 1},
          {'name': '骑车慢跑', 'value': 1},
          {'name': '历练做到', 'value': 1},
          {'name': '学习误', 'value': 1},
          {'name': '贯彻执行老师', 'value': 2},
          {'name': '己身专业', 'value': 2},
          {'name': '乒乓球游泳', 'value': 1},
          {'name': '善于调动', 'value': 1},
          {'name': '敢于创新', 'value': 1},
          {'name': '擅制定', 'value': 2},
          {'name': '相处融洽', 'value': 2},
          {'name': '益智活动', 'value': 1},
          {'name': '具有很强', 'value': 4},
          {'name': '能力逻辑思维', 'value': 2},
          {'name': '实践经验', 'value': 1},
          {'name': '效率学生', 'value': 1},
          {'name': '能力较强', 'value': 2},
          {'name': '谦和友善', 'value': 1},
          {'name': '篮球体育', 'value': 1},
          {'name': '吃苦耐劳精神', 'value': 1},
          {'name': '沟通能力', 'value': 3},
          {'name': '具有强烈', 'value': 1},
          {'name': '做模型', 'value': 1},
          {'name': '主动付出', 'value': 1},
          {'name': '爱好电子', 'value': 1},
          {'name': '提交解决方案', 'value': 1},
          {'name': '能够互动', 'value': 1},
          {'name': '思考总结', 'value': 1},
          {'name': '归纳总结', 'value': 1},
          {'name': '较强逻辑思维', 'value': 4},
          {'name': '执行谈判', 'value': 2},
          {'name': '果决行动力', 'value': 1},
          {'name': '善于沟通', 'value': 1},
          {'name': '遇到了解', 'value': 1},
          {'name': '模型电影', 'value': 1},
          {'name': '具有良好', 'value': 1},
          {'name': '善于思考', 'value': 1},
          {'name': '指示情况下', 'value': 2},
          {'name': '性格开朗', 'value': 1},
          {'name': '组织能力', 'value': 2},
          {'name': '前端体系', 'value': 1},
          {'name': '干部班级', 'value': 1},
          {'name': '追求创新', 'value': 1},
          {'name': '时慌乱', 'value': 1},
          {'name': '成长经历', 'value': 1},
          {'name': '善于团队', 'value': 2},
          {'name': '收集需要', 'value': 1},
          {'name': '计划实现', 'value': 1},
          {'name': '素质吃苦耐劳', 'value': 1},
          {'name': '严谨务实', 'value': 2},
          {'name': '总结汇报', 'value': 1},
          {'name': '办公软件', 'value': 1},
          {'name': '沟通管理', 'value': 1},
          {'name': '勤勉务实', 'value': 1},
          {'name': '取长补短不断', 'value': 1},
          {'name': '乐于学习', 'value': 1},
          {'name': '力较强', 'value': 1},
          {'name': '听取意见', 'value': 1},
          {'name': '良好心理', 'value': 1},
          {'name': '负责工作', 'value': 1},
          {'name': '信息分析', 'value': 1},
          {'name': '迅速适应', 'value': 1},
          {'name': '愿意学习', 'value': 1},
          {'name': '新事物能力', 'value': 5},
          {'name': '公众管理', 'value': 1},
          {'name': '态度广泛', 'value': 1},
          {'name': '能力团队', 'value': 1},
          {'name': '阶段性产出', 'value': 1},
          {'name': '执行力较强', 'value': 1},
          {'name': '逻辑思维能力', 'value': 5},
          {'name': '网络前端', 'value': 1},
          {'name': '加入理解', 'value': 1},
          {'name': '策划能力', 'value': 2},
          {'name': '时和相关', 'value': 1},
          {'name': '游泳滑雪', 'value': 1},
          {'name': '语言表达', 'value': 5},
          {'name': '项目阶段性', 'value': 1},
          {'name': '设计文档', 'value': 1},
          {'name': '互动交流', 'value': 4},
          {'name': '成绩良好', 'value': 1},
          {'name': '搭建开发', 'value': 1},
          {'name': '有着较强', 'value': 1},
          {'name': '接受新事物', 'value': 1},
          {'name': '人际关系较高', 'value': 2},
          {'name': '勇于创新', 'value': 1},
          {'name': '游泳篮球', 'value': 1},
          {'name': '责任工作', 'value': 1},
          {'name': '同学老师', 'value': 1},
          {'name': '目标明确', 'value': 2},
          {'name': '电子游戏做', 'value': 1},
          {'name': '细心耐心', 'value': 1},
          {'name': '融入陌生', 'value': 1},
          {'name': '较快适应', 'value': 1},
          {'name': '诚待人', 'value': 1},
          {'name': '组织益智', 'value': 1},
          {'name': '沟通较强', 'value': 1},
          {'name': '公关能力', 'value': 1},
          {'name': '实干遇到', 'value': 1},
          {'name': '真诚谦和', 'value': 1},
          {'name': '文档概要', 'value': 1},
          {'name': '归纳整理', 'value': 1},
          {'name': '做事细心', 'value': 1},
          {'name': '敢挑重担', 'value': 1},
          {'name': '当作快乐', 'value': 1},
          {'name': '很强领', 'value': 4},
          {'name': '沟通合作', 'value': 1},
          {'name': '训练熟悉', 'value': 1},
          {'name': '拥有积极向上', 'value': 1},
          {'name': '兴趣爱好', 'value': 2},
          {'name': '较强团队', 'value': 3},
          {'name': '人员相处', 'value': 1},
          {'name': '沟通表达', 'value': 2},
          {'name': '沟通及时', 'value': 1},
          {'name': '喜欢休息', 'value': 1},
          {'name': '业务能力', 'value': 1},
          {'name': '工作较强', 'value': 1},
          {'name': '注重团队', 'value': 1},
          {'name': '班级班长', 'value': 1},
          {'name': '体育项目', 'value': 1},
          {'name': '大学英语', 'value': 1},
          {'name': '团队协作', 'value': 6},
          {'name': '性格活泼', 'value': 1},
          {'name': '工作中', 'value': 1},
          {'name': '诚实守信', 'value': 2},
          {'name': '适应跨部门', 'value': 4},
          {'name': '团队合作精神', 'value': 4},
          {'name': '乐理训练', 'value': 1},
          {'name': '较强执行', 'value': 1},
          {'name': '产出汇报', 'value': 1},
          {'name': '详细计划', 'value': 2},
          {'name': '思考解决问题', 'value': 1},
          {'name': '拓展知识面', 'value': 2},
          {'name': '强烈责任心', 'value': 1},
          {'name': '工作认真', 'value': 1},
          {'name': '生活勤俭节约', 'value': 1},
          {'name': '新事物速度', 'value': 1},
          {'name': '新知识', 'value': 1},
          {'name': '心态责任感', 'value': 1},
          {'name': '乐观积极向上', 'value': 1},
          {'name': '适应新的', 'value': 1},
          {'name': '从容解决问题', 'value': 1},
          {'name': '专业态度', 'value': 1},
          {'name': '善于资料', 'value': 1},
          {'name': '表达清晰', 'value': 4},
          {'name': '架构搭建', 'value': 1},
          {'name': '写作相关', 'value': 1},
          {'name': '分析能力', 'value': 1},
          {'name': '广度敢于', 'value': 2},
          {'name': '军旅生涯', 'value': 1},
          {'name': '执行力高', 'value': 1},
          {'name': '会想法', 'value': 1},
          {'name': '新的工作', 'value': 1},
          {'name': '工作条件', 'value': 1},
          {'name': '问题愿意', 'value': 1},
          {'name': '电子竞技', 'value': 1},
          {'name': '学习前沿', 'value': 1},
          {'name': '工作学习', 'value': 2},
          {'name': '善于同学', 'value': 1},
          {'name': '较高威信', 'value': 1},
          {'name': '算作合格', 'value': 2},
          {'name': '英文读', 'value': 1},
          {'name': '合作能力', 'value': 1},
          {'name': '中取长补短', 'value': 1}]
        // let data = [{
        //   'name': '美食',
        //   'value': 20
        // },
        //   {
        //     'name': '网红店',
        //     'value': 20
        //   },
        //   {
        //     'name': '新冠肺炎疫情表彰大会',
        //     'value': 20
        //   },
        //   {
        //     'name': '打卡',
        //     'value': 19
        //   },
        //   {
        //     'name': '十一长假',
        //     'value': 18
        //   },
        //   {
        //     'name': '自由行',
        //     'value': 18
        //   },
        //   {
        //     'name': '教师节',
        //     'value': 17
        //   },
        //   {
        //     'name': '旅游景点攻略',
        //     'value': 17
        //   },
        //   {
        //     'name': '坡子街',
        //     'value': 17
        //   },
        //   {
        //     'name': '体育',
        //     'value': 17
        //   },
        //   {
        //     'name': '综艺',
        //     'value': 17
        //   },
        //   {
        //     'name': '商场',
        //     'value': 17
        //   },
        //   {
        //     'name': '衡山',
        //     'value': 16
        //   },
        //   {
        //     'name': '科学家座谈会',
        //     'value': 15
        //   },
        //   {
        //     'name': '潇湘晨报',
        //     'value': 15
        //   },
        //   {
        //     'name': '张家界',
        //     'value': 15
        //   },
        //   {
        //     'name': '橘子洲',
        //     'value': 15
        //   },
        //   {
        //     'name': '房价',
        //     'value': 15
        //   },
        //   {
        //     'name': '开学',
        //     'value': 15
        //   },
        //   {
        //     'name': '湘江',
        //     'value': 15
        //   },
        //   {
        //     'name': '繁华',
        //     'value': 15
        //   },
        //   {
        //     'name': '湖南公考',
        //     'value': 14
        //   },
        //   {
        //     'name': '中秋节',
        //     'value': 14
        //   },
        //   {
        //     'name': '天气',
        //     'value': 14
        //   },
        //   {
        //     'name': '幸福感',
        //     'value': 14
        //   },
        //   {
        //     'name': '芒果台',
        //     'value': 13
        //   },
        //   {
        //     'name': '游戏',
        //     'value': 13
        //   },
        //   {
        //     'name': '宝藏小店',
        //     'value': 13
        //   },
        //   {
        //     'name': '动漫',
        //     'value': 13
        //   },
        //   {
        //     'name': '武汉',
        //     'value': 13
        //   },
        //   {
        //     'name': '湖南大学',
        //     'value': 13
        //   },
        //   {
        //     'name': '湘西',
        //     'value': 12
        //   }
        // ]
        let option = {
          backgroundColor: '#012248',
          series: [{
            type: 'wordCloud',
            gridSize: 7,
            sizeRange: [15, 40],
            rotationRange: [-90, 90],
            // rotationStep: 45,
            shape: 'circle',
            width: '100%',
            height: '100%',
            drawOutOfBound: false,
            textStyle: {
              normal: {
                color: function () {
                  return (
                    'rgb(' + [
                      Math.round(Math.random() * 500),
                      Math.round(Math.random() * 300),
                      Math.round(Math.random() * 200)
                    ].join(',') +
                    ')'
                  )
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#ffffff'
              }
            },
            data: data
          }]
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.showWords()
    }
  }
</script>

