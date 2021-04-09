<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto">

        <div id="main" style="width: 900px;height:600px;margin:0 auto;margin-left: 26%">
            <!--<h3>技能树</h3>-->
        </div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'salarys',
    data(){
      return{
        datas: [{
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
        ]
      }
    },
    methods: {
      showWords () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
        let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
        let chartData = this.datas
        let arrName = [];
        let arrValue = [];
        let sum = 0;
        let pieSeries = [],
          lineYAxis = [];

// 数据处理
        chartData.forEach((v) => {
          arrName.push(v.name);
          arrValue.push(v.value);
          sum = sum + v.value;
        })

// 图表option整理
        chartData.forEach((v, i) => {
          pieSeries.push({
            name: '学历',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ["30%", "50%"],
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
                color: "rgba(0,0,0,0)"
              }
            }]
          });
          pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%',57 - i * 15 + '%'],
            center: ["30%", "50%"],
            label: {
              show: false
            },
            data: [{
              value: 7.5,
              itemStyle: {
                color: "#E3F0FF"
              }
            }, {
              value: 2.5,
              name: '',
              itemStyle: {
                color: "rgba(0,0,0,0)"
              }
            }]
          });
          v.percent = (v.value / sum * 100).toFixed(1) + "%";
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
          });
        })

        let option = {
          backgroundColor: '#fff',
          color: color,
          grid: {
            top: '15%',
            bottom: '54%',
            left: "30%",
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
              formatter: function(params) {
                let item = chartData[params];
                // console.log(item)
                return '{line|}{circle|●}{name|'+ item.name +'}{bd||}{percent|'+item.percent+'}{value|'+ item.value+'}{unit| 人}'
              },
              interval: 0,
              inside: true,
              textStyle: {
                color: "#333",
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
                  percent:{
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
        };
        myChart.setOption(option)

      }
    },
    mounted () {
      this.showWords()
    }
  }
</script>

