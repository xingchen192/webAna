<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto;margin-top: 2%">
        <div id="main" style="width: 100%;height:600px;margin:0 auto"></div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'pythonWordCloud',
    data () {
      return {
        datas:[{'name':"良好团队", "value":24},
          {'name':"业务需求", "value":11},
          {'name':"型数据库", "value":18},
          {'name':"团队合作", "value":46},
          {'name':"熟悉至少", "value":11},
          {'name':"软件开发", "value":14},
          {'name':"常用命令", "value":13},
          {'name':"表达能力", "value":21},
          {'name':"统招本科", "value":20},
          {'name':"高并发", "value":13},
          {'name':"开发维护", "value":24},
          {'name':"相关经验", "value":17},
          {'name':"代码实现", "value":11},
          {'name':"熟悉系统", "value":15},
          {'name':"任职资格", "value":33},
          {'name':"沟通能力", "value":48},
          {'name':"能力团队", "value":15},
          {'name':"系统开发", "value":22},
          {'name':"熟练使用", "value":64},
          {'name':"深入理解", "value":11},
          {'name':"使用常用", "value":15},
          {'name':"设计模式", "value":22},
          {'name':"能力强", "value":16},
          {'name':"开源项目", "value":11},
          {'name':"项目经验", "value":28},
          {'name':"专业本科", "value":16},
          {'name':"编程习惯", "value":13},
          {'name':"前端开发", "value":12},
          {'name':"良好代码", "value":11},
          {'name':"结构算法", "value":21},
          {'name':"面向对象", "value":11},
          {'name':"岗位职责", "value":81},
          {'name':"熟悉语言", "value":13},
          {'name':"负责公司", "value":21},
          {'name':"协作能力", "value":16},
          {'name':"相关技术", "value":25},
          {'name':"设计开发", "value":45},
          {'name':"技术方案", "value":13},
          {'name':"工作职责", "value":26},
          {'name':"架构设计", "value":32},
          {'name':"具有良好", "value":18},
          {'name':"网络编程", "value":15},
          {'name':"熟练掌握", "value":44},
          {'name':"较强学习", "value":19},
          {'name':"熟悉网络", "value":17},
          {'name':"技术文档", "value":17},
          {'name':"独立完成", "value":17},
          {'name':"模块开发", "value":12},
          {'name':"平台开发", "value":12},
          {'name':"解决问题能力", "value":20},
          {'name':"功能模块", "value":15},
          {'name':"关系型", "value":18},
          {'name':"抗压能力", "value":11},
          {'name':"相关专业", "value":87},
          {'name':"开发工作", "value":35},
          {'name':"职责描述", "value":44},
          {'name':"计算机相关", "value":53},
          {'name':"团队协作", "value":13},
          {'name':"开发框架", "value":25},
          {'name':"编码习惯", "value":11},
          {'name':"良好编码", "value":14},
          {'name':"熟悉常用", "value":29},
          {'name':"调优", "value":24},
          {'name':"相关工作", "value":26},
          {'name':"良好编程", "value":13},
          {'name':"文档编写", "value":15},
          {'name':"研发工作", "value":15},
          {'name':"数据结构", "value":39},
          {'name':"熟悉主流", "value":14},
          {'name':"熟悉数据库", "value":12},
          {'name':"基础知识", "value":13},
          {'name':"设计经验", "value":14},
          {'name':"端开发", "value":30},
          {'name':"工作经验", "value":61},
          {'name':"本科学历", "value":87},
          {'name':"熟悉开发", "value":15},
          {'name':"具备良好", "value":37},
          {'name':"职位描述", "value":13},
          {'name':"积极主动", "value":11},
          {'name':"性能优化", "value":19},
          {'name':"经验优先", "value":83},
          {'name':"工作压力", "value":15},
          {'name':"学习能力", "value":38},
          {'name':"熟悉操作系统", "value":12},
          {'name':"单元测试", "value":12},
          {'name':"应用开发", "value":12},
          {'name':"良好沟通", "value":35},
          {'name':"使用经验", "value":24},
          {'name':"系统架构", "value":22},
          {'name':"合作精神", "value":25},
          {'name':"责任心强", "value":19},
          {'name':"了解常用", "value":11},
          {'name':"分析解决问题", "value":16},
          {'name':"职位要求", "value":16},
          {'name':"精通语言", "value":14},
          {'name':"项目开发", "value":20},
          {'name':"开发经验", "value":105},
          {'name':"优先考虑", "value":24},]
      }
    },
    methods: {
      showWords () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let datas = this.datas



        let option = {
          tooltip: {
            show: true,
            position: 'top',
            textStyle: {
              fontSize: 30
            }
          },
          backgroundColor:'#191970',
          series: [{
            type: "wordCloud",
            // 网格大小，各项之间间距
            gridSize: 12,
            // 形状 circle 圆，cardioid  心， diamond 菱形，
            // triangle-forward 、triangle 三角，star五角星
            shape: 'circle',
            // 字体大小范围
            sizeRange: [20, 50],
            // 文字旋转角度范围
            rotationRange: [-90, 90],
            // 旋转步值
            // rotationStep: 50,
            // 自定义图形
            // maskImage: maskImage,
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            // 画布宽
            width: '90%',
            // 画布高
            height: '80%',
            // 是否渲染超出画布的文字
            drawOutOfBound: false,
            textStyle: {
              normal: {
                color: function() {
                  return 'rgb(' + [
                    Math.round(Math.random() * 200 + 55),
                    Math.round(Math.random() * 200 + 55),
                    Math.round(Math.random() * 200 + 55)
                  ].join(',') + ')';
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#2ac'
              }
            },
            data: datas
          }]
        };
        myChart.setOption(option)
      }
    },
    mounted () {
      this.showWords()
    }
  }
</script>

