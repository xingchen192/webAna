<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto">
        <h1 style="margin-bottom: 20px">程序员开发薪资区间</h1>
        <p style="position: absolute;z-index: 9;text-align: center;width: 90%">
            <el-row>
                <el-button size="mini" type="text" @click="requestData()" round>all</el-button>
                <el-button size="mini" @click="requestTypeData('android')" round>android</el-button>
                <el-button size="mini" type="primary" @click="requestTypeData('测试')" round>测试</el-button>
                <el-button size="mini" type="success" @click="requestTypeData('java')" round>java</el-button>
                <el-button size="mini" type="info" @click="requestTypeData('python')" round>python</el-button>
                <el-button size="mini" type="warning" @click="requestTypeData('web')" round>web</el-button>
                <el-button size="mini" type="danger" @click="requestTypeData('网络工程师')" round>网络</el-button>
            </el-row>

        </p>
        <div id="main" style="width: 100%;height:600px;margin:0 auto;margin-left: 16%">
            <!--<h3>技能树</h3>-->

        </div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'salarys',
    data () {
      return {
        datas: [],
      }
    },
    methods: {
      requestTypeData (type) {
        let _this = this
        this.$axios({
          method: 'get',
          url: 'http://localhost:9000/data/typeSalary',
          params: {
            name: type
          }
        }).then(function (re) {
          let data1 = re.data
          for (let i = 0; i < data1.length; i++) {
            data1[i]['unit'] = '人'
          }
          _this.datas = data1;

          _this.showWords();
        })
      },
      requestData () {
        /*
        * {
          name: "4-10k/月",
          value: 1868,
          unit: '人'
        },
          {
            name: "10-20k/月",
            value: 4976,
            unit: '人'
          },
          {
            name: "20-30k/月",
            value: 1558,
            unit: '人'
          },
          {
            name: "其他",
            value: 224,
            unit: '人'
          }
          * */
        let _this = this
        this.$axios({
          method: 'get',
          url: 'http://localhost:9000/data/salary'
        }).then(function (re) {
          // console.log(re.data)
          let data1 = re.data
          for (let i = 0; i < data1.length; i++) {
            data1[i]['unit'] = '人'
          }
          _this.datas = data1;
          _this.showWords();
        })
      },
      showWords () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC'
        let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF']
        let chartData = this.datas
        let arrName = []
        let arrValue = []
        let sum = 0
        let pieSeries = [],
          lineYAxis = []

// 数据处理
        chartData.forEach((v) => {
          arrName.push(v.name)
          arrValue.push(v.value)
          sum = sum + v.value
        })

// 图表option整理
        chartData.forEach((v, i) => {
          pieSeries.push({
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ['30%', '50%'],
            label: {
              show: false
            },
            data: [{
              value: v.value,
              name: v.name
            }, {
              value: sum - v.value,
              name: '',
              itemStyle: {
                color: 'rgba(0,0,0,0)'
              }
            }]
          })
          pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ['30%', '50%'],
            label: {
              show: false
            },
            data: [{
              value: 7.5,
              itemStyle: {
                color: '#E3F0FF'
              }
            }, {
              value: 2.5,
              name: '',
              itemStyle: {
                color: 'rgba(0,0,0,0)'
              }
            }]
          })
          v.percent = (v.value / sum * 100).toFixed(1) + '%'
          lineYAxis.push({
            value: i,
            textStyle: {
              rich: {
                circle: {
                  color: color[i],
                  padding: [0, 5]
                }
              }
            }
          })
        })

        let option = {
          tooltip: {
            show: true,
            position: 'top',
            formatter (params) {
              return params.data.value + '人 , ' + Number(params.data.value / sum * 100).toFixed(3) + '%'
            },
            textStyle: {
              fontSize: 20
            }
          },
          backgroundColor: '#fff',
          color: color,
          grid: {
            top: '15%',
            bottom: '54%',
            left: '30%',
            containLabel: false
          },
          yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function (params) {
                let item = chartData[params]
                // console.log(item)
                return '{line|}{circle|●}{name|' + item.name + '}{bd||}{percent|' + item.percent + '}{value|' + item.value + '}{unit| 人}'
              },
              interval: 0,
              inside: true,
              textStyle: {
                color: '#333',
                fontSize: 14,
                rich: {
                  line: {
                    width: 170,
                    height: 10,
                    backgroundColor: {image: dashedPic}
                  },
                  name: {
                    color: '#666',
                    fontSize: 14,
                  },
                  bd: {
                    color: '#ccc',
                    padding: [0, 5],
                    fontSize: 14,
                  },
                  percent: {
                    color: '#333',
                    fontSize: 14,
                  },
                  value: {
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 500,
                    padding: [0, 0, 0, 20]
                  },
                  unit: {
                    fontSize: 14
                  }
                }
              },
              show: true
            },
            data: lineYAxis
          }],
          xAxis: [{
            show: false
          }],
          series: pieSeries
        }
        myChart.setOption(option)

      }
    },
    mounted () {
      this.requestData()
    }
  }
</script>

