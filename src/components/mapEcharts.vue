<!--
    程序猿招聘信息

-->
<template>
  <div id="app">
    <!--<div id="main" ></div>-->
    <!--<div class="echarts">-->
    <h1 style="text-align: center;margin-top: -40px;margin-bottom: 20px">后端开发招聘岗位分布</h1>
    <div class="block">
      <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions">
      </el-date-picker>
      <el-button style="margin-left: 10px;" @click="clickDataHandle" type="primary" plain>筛选</el-button>
    </div>
    <div id="main" :style="{height:'600px',width:'100%'}" ref="myEchart">

    </div>
    <!--</div>-->
  </div>
</template>

<script>
// import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js'
import city from '../../node_modules/echarts/map/json/china-cities'
// import Cookies from 'js-ookie'
export default {
  name: 'mapEcharts',
  data() {
    return {
      mapData: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value2: ''
    }
  },
  methods: {
    clickDataHandle() {
      if (this.value2 !== '') {

        let rData = {
          bda: this.dateFormat('YYYY-mm-dd', this.value2[0]),
          eda: this.dateFormat('YYYY-mm-dd', this.value2[1])
        }
        let _this = this
        this.$axios({
          method: 'get',
          url: 'http://localhost:9000/data/allGroupDataByDate',
          params: rData
        }).then(function (response) {
          // console.log(response.data)
          _this.mapData = response.data
          _this.chinaConfigure()
          // console.log(_this.mapData)

        })
      } else{
        this.reData()
      }
          // let oldTime = (new Date(this.value2[0])).getTime();
          // let curTime = new Date(oldTime).format("yyyy-MM-dd");

          },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
      }
      return fmt;
    },
    reData() {
      let _this = this
      this.$axios({
        methods: 'get',
        url: 'http://localhost:9000/data/allGroupDatas'
      }).then(function (response) {
        // console.log(response.data)
        _this.mapData = response.data
        _this.chinaConfigure()
        // console.log(_this.mapData)

      })
    },
    chinaConfigure() {

      let _this = this
      _this.mapData.sort(function (a, b) {
        return b.value - a.value
      })
      let myChart = this.$echarts.init(this.$refs.myEchart) //这里是为了获得容器所在位置
      let geoCoordMap = {}
      let mapName = 'china'
      myChart.showLoading()
      let mapFeatures = city.features
      myChart.hideLoading()
      mapFeatures.forEach(function (v) { // 地区名称
        let name = v.properties.name // 地区经纬度
        geoCoordMap[name] = v.properties.cp
      })
      // var data = []
      // data = this.mapData
      // var max = 480, min = 9 // todo
      // var maxSize4Pin = 100, minSize4Pin = 20
      var convertData = function (data) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          // console.log(geoCoord)
          if (geoCoord) {
            res.push({
              name: data[i].name,
              number: data[i].value,
              value: geoCoord.concat(data[i].value),
            })
          }
        }

        // console.log(res)
        return res
      }

      window.onresize = myChart.resize
      myChart.setOption({ // 进行相关配置
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          backgroundColor: '#1540a1',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: false,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params) {
            // if (ticket.indexOf('散点') != -1) {
            let index = params.dataIndex
            // console.log(_this.mapData)
            let name = params.name
            // console.log(index,name)
            let tipHtml = ''
            tipHtml =
                '<div style="width:280px;height:140px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
                '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);">' +
                '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
                '</i>' + '<span style="margin-left:10px;color:#fff;font-size:18px;">' + name + '</span>' +
                '</div>' + '<div style="padding:20px">' + '<p style="color:#fff;font-size:18px;">' +
                '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                '</i>' + '招聘总数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].value +
                '</span>' + '个' + '</p>'
                + '</div>' + '</div>'
            return tipHtml
            // }
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 200,
          left: '10%',
          top: 'bottom',
          calculable: false,
          seriesIndex: [1],
          inRange: {
            color: ['#04387b', '#467bc0']
            // ,'#cfc5de','#f1ebd1','#feffdb','#e0cee4','#fde8cd','#e4f1d7','#fffed7'
          }
        },
        geo: {
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            },
            color: '#fff'
          },
          roam: true,
          zoom: .6,
          scaleLimit: { //所属组件的z分层，z值小的图形会被z值大的图形覆盖
            min: .6, //最小的缩放值
          },
          layoutCenter: ['50%', '50%'], //地图位置
          layoutSize: '180%',
          itemStyle: {
            normal: {
              areaColor: '#0083ce',
              borderColor: '#0066ba' //省份边界颜色
            },
            emphasis: {
              borderColor: '#0066ba', //选中省份边界颜色
              areaColor: '#0494e1', //选中省份颜色
              shadowColor: 'rgba(0, 0, 0, 0.4)', //选中省份投影
              shadowBlur: 10
            }
          }
        },
        series: [{
          name: '散点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(this.mapData),
          rippleEffect: {
            //涟漪特效
            period: 5, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          hoverAnimation: true,
          symbolSize: function (data) {
            // console.log('data', data)
            if (data[2] > 100) {
              return 25
            }
            if (data[2] < 20) {
              return 5
            }
            return data[2] / 4
          },
          itemStyle: {
            normal: {
              color: '#fff'
            }
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            emphasis: {
              show: false
            }
          },
        }, {
          name: '散点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(this.mapData.slice(0, 4)),
          symbolSize: function (data) {
            // console.log('data', data)
            if (data[2] > 120) {
              return 30
            }
            return data[2] / 4
          },
          showEffectOn: 'render',
          rippleEffect: {
            //涟漪特效
            period: 3, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'left',
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow',
              shadowBlur: 10,
              shadowColor: 'yellow'
            }
          },
          zlevel: 1
        }]
      })
    },

  },
  mounted() {
    this.reData()
    // this.drawCharts()
  }
}


</script>

<style scoped>


</style>
