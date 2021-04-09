<!--
程序猿招聘信息
-->
<template>
    <div class="echarts">
        <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
    </div>
</template>
<script>
  import echarts from 'echarts'
  //   import '../../node_modules/echarts/map/js/world.js'
  import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
  import city from '../../node_modules/echarts/map/json/china-cities'
  export default {
    name: 'echartsMap',
    props: ['userJson'],
    data () {
      return {
        chart: null
      }
    },
    mounted () {
      alert(city)
      this.chinaConfigure()
    },
    beforeDestroy () {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      chinaConfigure () {
        // console.log(this.userJson)
        let myChart = echarts.init(this.$refs.myEchart) //这里是为了获得容器所在位置
        window.onresize = myChart.resize
        myChart.setOption({ // 进行相关配置
          backgroundColor: '#02AFDB',
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
            {
              name: '启动次数', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: [
                {'name': '昆明', 'value': 2},
                {'name': '石家庄', 'value': 10},
                {'name': '宁波', 'value': 13},
                {'name': '运城', 'value': 3},
                {'name': '西安', 'value': 29},
                {'name': '登封市', 'value': 3},
                {'name': '重庆', 'value': 3},
                {'name': '长沙', 'value': 18},
                {'name': '保定', 'value': 4},
                {'name': '张家口', 'value': 3},
                {'name': '桂林', 'value': 2},
                {'name': '泉州', 'value': 6},
                {'name': '秦皇岛', 'value': 2},
                {'name': '广州', 'value': 23},
                {'name': '济南', 'value': 10},
                {'name': '许昌', 'value': 2},
                {'name': '潍坊', 'value': 1},
                {'name': '廊坊', 'value': 5},
                {'name': '乌兰察布', 'value': 1},
                {'name': '邯郸', 'value': 2},
                {'name': '惠州', 'value': 2},
                {'name': '哈尔滨', 'value': 3},
                {'name': '大连', 'value': 56},
                {'name': '开封', 'value': 1},
                {'name': '北京', 'value': 11174},
                {'name': '太原', 'value': 6},
                {'name': '上海', 'value': 86},
                {'name': '聊城', 'value': 1},
                {'name': '平顶山', 'value': 4},
                {'name': '杭州', 'value': 16},
                {'name': '南京', 'value': 18},
                {'name': '郑州', 'value': 2},
                {'name': '深圳', 'value': 47},
                {'name': '马鞍山', 'value': 1},
                {'name': '南充', 'value': 2},
                {'name': '唐山', 'value': 4},
                {'name': '无锡', 'value': 8},
                {'name': '郴州', 'value': 3},
                {'name': '安阳', 'value': 1},
                {'name': '锦州', 'value': 1},
                {'name': '合肥', 'value': 9},
                {'name': '武汉', 'value': 27},
                {'name': '贵阳', 'value': 2},
                {'name': '青岛', 'value': 7},
                {'name': '成都', 'value': 32},
                {'name': '柳州', 'value': 2},
                {'name': '温州', 'value': 1},
                {'name': '苏州', 'value': 10},
                {'name': '珠海', 'value': 2},
                {'name': '厦门', 'value': 5},
                {'name': '昆山', 'value': 5},
                {'name': '东莞', 'value': 2},
                {'name': '天津', 'value': 38},
                {'name': '呼和浩特', 'value': 2},
                {'name': '沈阳', 'value': 3},
                {'name': '云南省', 'value': 1},
                {'name': '烟台', 'value': 1}]
            }
          ]
        })
      }
    }
  }
</script>
<style>
    * {
        margin: 0;
        padding: 0
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    /*.echarts{*/
    /*width:800px;*/
    /*height:600px;*/
    /*margin: 150px auto;*/
    /*border:1px solid #ddd;*/
    /*}*/
</style>
