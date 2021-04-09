
<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto;margin-top: 2%">
        <div id="main" style="width: 100%;height:600px;margin:0 auto"></div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'networkWordCloud',
    data () {
      return {
        datas:[{'name':"良好团队", "value":8},
          {'name':"精通主流", "value":11},
          {'name':"证书优先", "value":19},
          {'name':"防病毒", "value":6},
          {'name':"支持工作", "value":11},
          {'name':"安全设备", "value":9},
          {'name':"相关项目", "value":11},
          {'name':"规划设计", "value":17},
          {'name':"相关工作", "value":16},
          {'name':"故障处理", "value":10},
          {'name':"系统安装", "value":6},
          {'name':"网络技术", "value":18},
          {'name':"路由协议", "value":10},
          {'name':"服务器设备", "value":6},
          {'name':"团队合作", "value":15},
          {'name':"协议原理", "value":6},
          {'name':"实施管理", "value":7},
          {'name':"设备安装", "value":6},
          {'name':"表达能力", "value":8},
          {'name':"选型", "value":8},
          {'name':"负责数据中心", "value":8},
          {'name':"深信服", "value":10},
          {'name':"熟悉华为", "value":7},
          {'name':"网络监控", "value":12},
          {'name':"相关经验", "value":6},
          {'name':"熟悉主流", "value":13},
          {'name':"软件安装", "value":6},
          {'name':"精通协议", "value":6},
          {'name':"网络建设", "value":6},
          {'name':"主流网络设备", "value":8},
          {'name':"熟悉服务器", "value":7},
          {'name':"任职资格", "value":17},
          {'name':"沟通能力", "value":22},
          {'name':"具备一定", "value":7},
          {'name':"较强沟通", "value":6},
          {'name':"基础知识", "value":7},
          {'name':"能够独立", "value":6},
          {'name':"熟悉协议", "value":7},
          {'name':"路由交换", "value":10},
          {'name':"熟练使用", "value":8},
          {'name':"网络规划", "value":11},
          {'name':"维护经验", "value":14},
          {'name':"实施方案", "value":8},
          {'name':"大专学历", "value":15},
          {'name':"工作经验", "value":33},
          {'name':"厂商网络设备", "value":6},
          {'name':"办公区", "value":7},
          {'name':"沟通表达", "value":7},
          {'name':"工程相关", "value":6},
          {'name':"能力强", "value":11},
          {'name':"掌握网络", "value":6},
          {'name':"安全产品", "value":8},
          {'name':"路由器交换机", "value":13},
          {'name':"具有较强", "value":7},
          {'name':"解决能力", "value":8},
          {'name':"网络维护", "value":7},
          {'name':"本科学历", "value":34},
          {'name':"专业本科", "value":6},
          {'name':"交办", "value":7},
          {'name':"管理维护", "value":10},
          {'name':"协调能力", "value":8},
          {'name':"具备良好", "value":8},
          {'name':"网络设计", "value":10},
          {'name':"上网行为", "value":8},
          {'name':"设计实施", "value":11},
          {'name':"综合布线", "value":9},
          {'name':"性能优化", "value":11},
          {'name':"网络架构", "value":23},
          {'name':"漏洞扫描", "value":6},
          {'name':"实施工作", "value":9},
          {'name':"判断解决", "value":7},
          {'name':"配置管理", "value":9},
          {'name':"安装调试", "value":18},
          {'name':"经验优先", "value":24},
          {'name':"实施经验", "value":9},
          {'name':"沟通协调", "value":10},
          {'name':"能力服务", "value":6},
          {'name':"项目实施", "value":16},
          {'name':"交换机路由器", "value":17},
          {'name':"信息安全管理", "value":7},
          {'name':"解决网络", "value":7},
          {'name':"微信分享", "value":6},
          {'name':"故障排查", "value":12},
          {'name':"维护工作", "value":16},
          {'name':"网络服务器", "value":6},
          {'name':"网络相关", "value":14},
          {'name':"服务器存储", "value":8},
          {'name':"华为思科", "value":6},
          {'name':"学习能力", "value":12},
          {'name':"公司网络", "value":23},
          {'name':"中网络", "value":7},
          {'name':"具备网络", "value":13},
          {'name':"丰富网络", "value":8},
          {'name':"售前", "value":6},
          {'name':"网络项目", "value":6},
          {'name':"交换机防火墙", "value":8},
          {'name':"网络认证", "value":6},
          {'name':"良好沟通", "value":14},
          {'name':"安装配置", "value":15},
          {'name':"分析判断", "value":7},
          {'name':"岗位职责", "value":30},
          {'name':"专科学历", "value":7},
          {'name':"运维经验", "value":11},
          {'name':"负责网络", "value":17},
          {'name':"技术支持", "value":24},
          {'name':"常用网络", "value":9},
          {'name':"认证优先", "value":9},
          {'name':"设备维护", "value":6},
          {'name':"调试工作", "value":6},
          {'name':"负责公司", "value":32},
          {'name':"通信电子", "value":6},
          {'name':"独立分析", "value":6},
          {'name':"网络安全", "value":14},
          {'name':"负责项目", "value":10},
          {'name':"正常运行", "value":7},
          {'name':"负载均衡", "value":6},
          {'name':"主流网络", "value":11},
          {'name':"能够熟练", "value":6},
          {'name':"路由器防火墙", "value":16},
          {'name':"相关技术", "value":11},
          {'name':"全日制本科", "value":8},
          {'name':"服务意识", "value":13},
          {'name':"合作精神", "value":11},
          {'name':"故障排除", "value":6},
          {'name':"管理经验", "value":12},
          {'name':"网络工程师", "value":10},
          {'name':"方案设计", "value":6},
          {'name':"进行网络", "value":6},
          {'name':"配置维护", "value":13},
          {'name':"实施维护", "value":9},
          {'name':"网络运维", "value":8},
          {'name':"工作职责", "value":17},
          {'name':"责任心强", "value":11},
          {'name':"架构设计", "value":9},
          {'name':"具有良好", "value":12},
          {'name':"分析解决问题", "value":7},
          {'name':"主流厂商", "value":15},
          {'name':"熟练掌握", "value":12},
          {'name':"熟悉网络", "value":16},
          {'name':"建设实施", "value":6},
          {'name':"深刻理解", "value":6},
          {'name':"项目技术", "value":10},
          {'name':"计算机通信", "value":8},
          {'name':"网络协议", "value":8},
          {'name':"技术文档", "value":7},
          {'name':"硬件设备", "value":8},
          {'name':"解决问题能力", "value":9},
          {'name':"大学本科", "value":6},
          {'name':"优先考虑", "value":16},
          {'name':"架构规划", "value":9},
          {'name':"企业网络", "value":7},
          {'name':"产品技术", "value":10},
          {'name':"调试维护", "value":9},
          {'name':"稳定运行", "value":6},
          {'name':"厂商产品", "value":6},
          {'name':"具备较强", "value":7},
          {'name':"认证证书", "value":9},
          {'name':"抗压能力", "value":8},
          {'name':"网络产品", "value":13},
          {'name':"网络环境", "value":8},
          {'name':"设备配置", "value":7},
          {'name':"专业相关", "value":52},
          {'name':"故障分析", "value":8},
          {'name':"数据中心网络", "value":9},
          {'name':"职责描述", "value":29},
          {'name':"具有网络", "value":9},
          {'name':"网络故障", "value":24},
          {'name':"计算机相关", "value":27},]
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
          backgroundColor:'#D2691E',
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

