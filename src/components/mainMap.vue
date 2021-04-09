<template>
    <div id="app">
        <!--<div id="main" ></div>-->
        <!--<div class="echarts">-->
        <!--<h1 style="text-align: center">全国程序员招聘信息</h1>-->
        <div id="main" style="width: 90%;height: 600px; margin: auto" ref="myEchart"></div>
        <!--</div>-->
    </div>
</template>

<script>
  import echarts from 'echarts'
  import '../../node_modules/echarts/map/js/china.js'
  import city from '../../node_modules/echarts/map/json/china-cities'
  import $ from 'jquery'
  // import Cookies from 'js-ookie'
  const uploadedDataURL = '/chinageoJson.json'

  export default {
    name: 'mainMap',
    methods: {
      chinaConfigure () {
        this.mapData = [
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
          {'name': '烟台', 'value': 1}
        ]
        let _this = this
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
        // var max = 480, min = 9
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
                // + '<p style="color:#fff;font-size:12px;">' +
                // '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                // '</i>' + '正常运行机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].good +
                // '</span>' +
                // '个' + '</p>' + '<p style="color:#fff;font-size:12px;">' +
                // '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
                // '</i>' + '待修机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].bad +
                // '</span>' +
                // '个' + '</p>'
                + '</div>' + '</div>'
              // tipHtml =
              //   '<div style="width:280px;height:200px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">' +
              //   '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' +
              //   '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' +
              //   '</i>' + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + name + '</span>' +
              //   '</div>' + '<div style="padding:20px">' + '<p style="color:#fff;font-size:12px;">' +
              //   '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
              //   '</i>' + '机器总数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].count +
              //   '</span>' +
              //   '个' + '</p>' + '<p style="color:#fff;font-size:12px;">' +
              //   '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
              //   '</i>' + '正常运行机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].good +
              //   '</span>' +
              //   '个' + '</p>' + '<p style="color:#fff;font-size:12px;">' +
              //   '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' +
              //   '</i>' + '待修机器数：' + '<span style="color:#f48225;margin:0 6px;">' + _this.mapData[index].bad +
              //   '</span>' +
              //   '个' + '</p>' + '</div>' + '</div>'
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
              if (data[2] > 1000) {
                return 25
              }
              if (data[2] < 10) {
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
            data: convertData(this.mapData.sort(function (a, b) {
              return b.value - a.value
            }).slice(0, 3)),
            symbolSize: function (data) {
              // console.log('data', data)
              if (data[2] > 1000) {
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
      mainMaps () {
        // let myChart =
        let myChart = echarts.init(this.$refs.myEchart)

//geoCoordMap把所有可能出现的城市加到数组里面
        var geoCoordMap = {
          // '杭州': [119.5313, 29.8773],
          // '苏州': [118.8062, 31.9208],
          // '上海': [121.4648, 31.2891],
          // '天津': [117.4219, 39.4189],
          // '深圳': [114.072026, 22.552194],
          // '成都': [103.9526, 30.7617],
          // '郑州': [113.4668, 34.6234],
          // '宁波': [121.640618, 29.86206],
          // '合肥': [117.29, 32.0581],
          // '重庆': [108.384366, 30.439702],
          // '广州': [113.12244, 23.009505],
          // '大连': [123.1238, 42.1216],
          // '青岛': [117.1582, 36.8701],
          // '北京': [116.4551, 40.2539],
          // '东莞': [113.764742, 23.02039],
          // '长沙': [113.0823, 28.2568],
          // '珠海': [113.556111, 22.250876],
          // '泉州': [118.58, 24.93],
          // '赤峰': [118.87, 42.28],
          // '厦门': [118.1, 24.46],
          // '福州': [119.3, 26.08],
          // '抚顺': [123.97, 41.97],
          // '汕头': [116.69, 23.39],
          // '海口': [110.35, 20.02],
          // '岳阳': [113.09, 29.37],
          // '武汉': [114.31, 30.52],
          // '义乌': [120.06, 29.32],
          // '唐山': [118.02, 39.63],
          // '石家庄': [114.48, 38.03],
          // '哈尔滨': [126.63, 45.75],
          // '兰州': [103.73, 36.03],
          // '贵阳': [106.71, 26.57],
          // '呼和浩特': [111.65, 40.82],
          // '南昌': [115.89, 28.68],
          // '佛山': [113.11, 23.05],
          // '烟台': [121.39, 37.52],
          // '威海': [122.1, 37.5],
        }
        let mapFeatures = city.features

        /*
        *
        * android
        * {'杭州':19,'福州':3,'泉州':1,'邯郸':1,'南京':11,'重庆':5,'北京':50,'嘉兴':2,'上海':41,'昆明':1,'南充':1,'肇庆':1,'成都':5,'长沙':2,'惠州':1,'苏州':9,'厦门':5,'石家庄':1,'天津':1,'广州':26,'郑州':1,'无锡':3,'深圳':87,'宁波':1,'湖北':1,'合肥':6,'珠海':2,'大连':1,'武汉':6,'太原':1,'济南':2,'西安':6}
        c {'杭州':23,'福州':1,'南京':7,'重庆':1,'莆田':2,'北京':39,'上海':93,'常州':2,'南充':1,'成都':2,'苏州':7,'南宁':1,'天津':1,'广州':30,'郑州':1,'无锡':2,'深圳':43,'宁波':1,'金华':1,'合肥':3,'珠海':1,'青岛':2,'武汉':1,'济南':1,'西安':5}
        java {'杭州':23,'福州':3,'南京':11,'重庆':6,'北京':88,'嘉兴':1,'上海':64,'成都':10,'长沙':14,'苏州':4,'厦门':5,'石家庄':2,'天津':2,'广州':39,'郑州':9,'无锡':1,'深圳':54,'宁波':4,'贵阳':2,'合肥':1,'珠海':1,'青岛':2,'大连':1,'威海':1,'南昌':1,'武汉':7,'廊坊':1,'西安':3}
        python {'杭州':18,'福州':2,'南京':1,'徐州':1,'重庆':2,'北京':46,'上海':60,'成都':4,'长沙':2,'苏州':6,'天津':2,'广州':16,'郑州':2,'海口':1,'无锡':1,'深圳':38,'宁波':1,'合肥':1,'珠海':1,'青岛':7,'大连':1,'武汉':3,'西安':5}
        web {'杭州':23,'福州':3,'南京':6,'重庆':2,'北京':43,'嘉兴':1,'上海':64,'沈阳':2,'温州':2,'成都':14,'长沙':3,'苏州':7,'南宁':3,'厦门':1,'东莞':1,'天津':1,'广州':29,'郑州':4,'无锡':1,'深圳':47,'宁波':6,'合肥':3,'青岛':3,'大连':3,'武汉':7,'太原':1,'济南':7,'萍乡':1,'西安':7}
        测试 {'杭州':40,'徐州':3,'绍兴':1,'佛山':1,'嘉兴':4,'上海':71,'成都':14,'惠州':2,'苏州':19,'东莞':7,'天津':3,'合肥':7,'珠海':4,'南昌':1,'武汉':15,'衡阳':1,'西安':7,'邯郸':1,'南京':18,'湖州':1,'重庆':3,'乌鲁木齐':2,'北京':45,'沈阳':1,'常州':2,'长沙':1,'烟台':2,'南宁':2,'厦门':3,'广州':21,'郑州':3,'无锡':2,'深圳':72,'贵阳':1,'青岛':3,'大连':1,'威海':1,'镇江':2}
        网络工程师 {'南宁':3,'厦门':1,'东莞':1,'石家庄':2,'天津':1,'杭州':6,'福州':1,'广州':10,'泉州':1,'南京':4,'徐州':2,'荆州':1,'重庆':2,'无锡':1,'深圳':12,'北京':16,'佛山':2,'宁波':1,'青岛':2,'大连':2,'南昌':1,'上海':18,'武汉':2,'昆明':1,'成都':4,'长沙':3,'西安':2}
        *
        * */

//android数据
        var d1 = {
          '杭州': 19,
          '福州': 3,
          '泉州': 1,
          '邯郸': 1,
          '南京': 11,
          '重庆': 5,
          '北京': 50,
          '嘉兴': 2,
          '上海': 41,
          '昆明': 1,
          '南充': 1,
          '肇庆': 1,
          '成都': 5,
          '长沙': 2,
          '惠州': 1,
          '苏州': 9,
          '厦门': 5,
          '石家庄': 1,
          '天津': 1,
          '广州': 26,
          '郑州': 1,
          '无锡': 3,
          '深圳': 87,
          '宁波': 1,
          '湖北': 1,
          '合肥': 6,
          '珠海': 2,
          '大连': 1,
          '武汉': 6,
          '太原': 1,
          '济南': 2,
          '西安': 6
        }

//c数据
        var d2 = {
          '杭州': 23,
          '福州': 1,
          '南京': 7,
          '重庆': 1,
          '莆田': 2,
          '北京': 39,
          '上海': 93,
          '常州': 2,
          '南充': 1,
          '成都': 2,
          '苏州': 7,
          '南宁': 1,
          '天津': 1,
          '广州': 30,
          '郑州': 1,
          '无锡': 2,
          '深圳': 43,
          '宁波': 1,
          '金华': 1,
          '合肥': 3,
          '珠海': 1,
          '青岛': 2,
          '武汉': 1,
          '济南': 1,
          '西安': 5
        }

//Java数据
        var d3 = {
          '杭州': 23,
          '福州': 3,
          '南京': 11,
          '重庆': 6,
          '北京': 88,
          '嘉兴': 1,
          '上海': 64,
          '成都': 10,
          '长沙': 14,
          '苏州': 4,
          '厦门': 5,
          '石家庄': 2,
          '天津': 2,
          '广州': 39,
          '郑州': 9,
          '无锡': 1,
          '深圳': 54,
          '宁波': 4,
          '贵阳': 2,
          '合肥': 1,
          '珠海': 1,
          '青岛': 2,
          '大连': 1,
          '威海': 1,
          '南昌': 1,
          '武汉': 7,
          '廊坊': 1,
          '西安': 3
        }

//python数据
        var d4 = {
          '杭州': 18,
          '福州': 2,
          '南京': 1,
          '徐州': 1,
          '重庆': 2,
          '北京': 46,
          '上海': 60,
          '成都': 4,
          '长沙': 2,
          '苏州': 6,
          '天津': 2,
          '广州': 16,
          '郑州': 2,
          '海口': 1,
          '无锡': 1,
          '深圳': 38,
          '宁波': 1,
          '合肥': 1,
          '珠海': 1,
          '青岛': 7,
          '大连': 1,
          '武汉': 3,
          '西安': 5
        }

//web数据
        var d5 = {
          '杭州': 23,
          '福州': 3,
          '南京': 6,
          '重庆': 2,
          '北京': 43,
          '嘉兴': 1,
          '上海': 64,
          '沈阳': 2,
          '温州': 2,
          '成都': 14,
          '长沙': 3,
          '苏州': 7,
          '南宁': 3,
          '厦门': 1,
          '东莞': 1,
          '天津': 1,
          '广州': 29,
          '郑州': 4,
          '无锡': 1,
          '深圳': 47,
          '宁波': 6,
          '合肥': 3,
          '青岛': 3,
          '大连': 3,
          '武汉': 7,
          '太原': 1,
          '济南': 7,
          '萍乡': 1,
          '西安': 7
        }

//测试数据
        var d6 = {
          '杭州': 40,
          '徐州': 3,
          '绍兴': 1,
          '佛山': 1,
          '嘉兴': 4,
          '上海': 71,
          '成都': 14,
          '惠州': 2,
          '苏州': 19,
          '东莞': 7,
          '天津': 3,
          '合肥': 7,
          '珠海': 4,
          '南昌': 1,
          '武汉': 15,
          '衡阳': 1,
          '西安': 7,
          '邯郸': 1,
          '南京': 18,
          '湖州': 1,
          '重庆': 3,
          '乌鲁木齐': 2,
          '北京': 45,
          '沈阳': 1,
          '常州': 2,
          '长沙': 1,
          '烟台': 2,
          '南宁': 2,
          '厦门': 3,
          '广州': 21,
          '郑州': 3,
          '无锡': 2,
          '深圳': 72,
          '贵阳': 1,
          '青岛': 3,
          '大连': 1,
          '威海': 1,
          '镇江': 2
        }

//网络工程师数据
        var d7 = {
          '南宁': 3,
          '厦门': 1,
          '东莞': 1,
          '石家庄': 2,
          '天津': 1,
          '杭州': 6,
          '福州': 1,
          '广州': 10,
          '泉州': 1,
          '南京': 4,
          '徐州': 2,
          '荆州': 1,
          '重庆': 2,
          '无锡': 1,
          '深圳': 12,
          '北京': 16,
          '佛山': 2,
          '宁波': 1,
          '青岛': 2,
          '大连': 2,
          '南昌': 1,
          '上海': 18,
          '武汉': 2,
          '昆明': 1,
          '成都': 4,
          '长沙': 3,
          '西安': 2
        }

        // console.log(typeof (d1))

        // d1 = d1.sort(function (a,b) {
        //
        // })
        // d2 = d2.sort()
        // d3 = d3.sort()
        // d4 = d4.sort()
        // d5 = d5.sort()
        // d6 = d6.sort()
        // d7 = d7.sort()

        mapFeatures.forEach(function (v) { // 地区名称
          // console.log(v.name)
          if (Object.prototype.hasOwnProperty.call(d1, v.properties.name)||Object.prototype.hasOwnProperty.call(d2, v.properties.name)||Object.prototype.hasOwnProperty.call(d3, v.properties.name)||Object.prototype.hasOwnProperty.call(d4, v.properties.name)||Object.prototype.hasOwnProperty.call(d5, v.properties.name)||Object.prototype.hasOwnProperty.call(d6, v.properties.name)||Object.prototype.hasOwnProperty.call(d7, v.properties.name)) {
            let name = v.properties.name // 地区经纬度
            geoCoordMap[name] = v.properties.cp
          }

        })
        // console.log(geoCoordMap)
        var colors = [
          ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
          ['#37A2DA', '#67E0E3', '#32C5E9', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3', '#9D96F5', '#8378EA', '#8378EA'],
          ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78', '#73A373', '#73B9BC', '#7289AB', '#91CA8C', '#F49F42'],
        ]
        var colorIndex = 0
        $(function () {
          var year = ['android', 'c', 'java', 'python', 'web', '测试', '网络工程师']
          var mapData = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]

          /*柱子Y名称*/
          var categoryData = []
          var barData = []

          for (let key in geoCoordMap) {
            if(d1[key]!=null)
            mapData[0].push({
              'year': 'android',
              'name': key,
              'value': d1[key],
            })
            if(d2[key]!=null)
            mapData[1].push({
              'year': 'c',
              'name': key,
              'value': d2[key],
            })
            if(d3[key]!=null)
            mapData[2].push({
              'year': 'java',
              'name': key,
              'value': d3[key],
            })
            if(d4[key]!=null)
            mapData[3].push({
              'year': 'python',
              'name': key,
              'value': d4[key],
            })
            if(d5[key]!=null)
            mapData[4].push({
              'year': 'web',
              'name': key,
              'value': d5[key],
            })
            if(d6[key]!=null)
            mapData[5].push({
              'year': '测试',
              'name': key,
              'value': d6[key],
            })
            if(d7[key]!=null)
            mapData[6].push({
              'year': '网络工程师',
              'name': key,
              'value': d7[key],
            })
          }

          for (var i = 0; i < mapData.length; i++) {

            // console.log(mapData[i])
            // console.log('___________________________')
            mapData[i].sort(function (a,b) {
              if (a.value!=null&&b.value!=null)
                return a.value-b.value
              else return -1
            })
            // console.log(mapData[i])
            barData.push([])
            categoryData.push([])
            for (var j = 0; j < mapData[i].length; j++) {
              barData[i].push(mapData[i][j].value)
              categoryData[i].push(mapData[i][j].name)
              // if (j == 20) {
              //   break
              // }
            }
          }
          // console.log(barData)
          // console.log(categoryData)

          $.getJSON(uploadedDataURL, function (geoJson) {

            echarts.registerMap('china', geoJson)
            var convertData = function (data) {
              var res = []
              for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name]
                if (geoCoord && data[i].value > 0) {

                  res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                  })
                }
              }
              return res
            }

            let optionXyMap01 = {
              timeline: {
                data: year,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                label: {
                  normal: {
                    textStyle: {
                      color: '#ddd'
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                symbolSize: 10,
                lineStyle: {
                  color: '#555'
                },
                checkpointStyle: {
                  borderColor: '#777',
                  borderWidth: 2
                },
                controlStyle: {
                  showNextBtn: true,
                  showPrevBtn: true,
                  normal: {
                    color: '#666',
                    borderColor: '#666'
                  },
                  emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                  }
                },

              },
              baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                  right: '1%',
                  top: '15%',
                  bottom: '10%',
                  width: '20%'
                },
                tooltip: {
                  trigger: 'axis', // hover触发器
                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                      color: 'rgba(150,150,150,0.1)' //hover颜色
                    }
                  }
                },
                geo: {
                  show: true,
                  map: 'china',
                  roam: true,
                  zoom: 1,
                  center: [113.83531246, 34.0267395887],
                  label: {
                    emphasis: {
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: 'rgba(147, 235, 248, 1)',
                      borderWidth: 1,
                      areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                          offset: 1,
                          color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(128, 217, 248, 1)',
                      // shadowColor: 'rgba(255, 255, 255, 1)',
                      shadowOffsetX: -2,
                      shadowOffsetY: 2,
                      shadowBlur: 10
                    },
                    emphasis: {
                      areaColor: '#389BB7',
                      borderWidth: 0
                    }
                  }
                },
              },
              options: []

            }

            for (var n = 0; n < year.length; n++) {
              optionXyMap01.options.push({
                backgroundColor: '#013954',
                title: [{
                  text: '岗位分布信息',
                  left: '40%',
                  top: '7%',
                  textStyle: {
                    color: '#fff',
                    fontSize: 25
                  }
                },
                  {
                    id: 'statistic',
                    text: year[n] + '数据统计情况',
                    left: '75%',
                    top: '5%',
                    textStyle: {
                      color: '#fff',
                      fontSize: 25
                    }
                  }
                ],
                xAxis: {
                  type: 'value',
                  scale: true,
                  position: 'top',
                  min: 0,
                  boundaryGap: false,
                  splitLine: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  axisLabel: {
                    margin: 2,
                    textStyle: {
                      color: '#aaa'
                    }
                  },
                },
                yAxis: {
                  type: 'category',
                  //  name: 'TOP 20',
                  nameGap: 16,
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisTick: {
                    show: false,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisLabel: {
                    interval: 0,
                    textStyle: {
                      color: '#ddd'
                    }
                  },
                  data: categoryData[n]
                },

                series: [
                  //地图
                  {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                      normal: {
                        show: false
                      },
                      emphasis: {
                        show: false,
                        textStyle: {
                          color: '#fff'
                        }
                      }
                    },
                    roam: true,
                    itemStyle: {
                      normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                      },
                      emphasis: {
                        areaColor: '#2B91B7'
                      }
                    },
                    animation: false,
                    data: mapData
                  },
                  //地图中闪烁的点
                  {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData[n].sort(function (a, b) {
                      return b.value - a.value
                    }).slice(0, 20)),
                    symbolSize: function (val) {
                      return val[2] / 4
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                      brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                      normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: colors[colorIndex][n],
                        shadowBlur: 10,
                        shadowColor: colors[colorIndex][n]
                      }
                    },
                    zlevel: 1
                  },
                  //柱状图
                  {
                    zlevel: 1.5,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                      normal: {
                        color: colors[colorIndex][n]
                      }
                    },
                    data: barData[n]
                  }
                ]
              })
            }
            myChart.setOption(optionXyMap01)
          })
        })
      },
//       drawCharts () {
//         let myChart = echarts.init(this.$refs.myEchart)
// // 基于准备好的dom，初始化echarts实例
// //         let myChart = this.$echarts.init(document.getElementById('main'))
// // 指定图表的配置项和数据
//         let option
//         let data = [
//           {name: '海门', value: 9},
//           {name: '鄂尔多斯', value: 12},
//           {name: '招远', value: 12},
//           {name: '舟山', value: 12},
//           {name: '齐齐哈尔', value: 14},
//           {name: '盐城', value: 15},
//           {name: '赤峰', value: 16},
//           {name: '青岛', value: 18},
//           {name: '乳山', value: 18},
//           {name: '金昌', value: 19},
//           {name: '泉州', value: 21},
//           {name: '莱西', value: 21},
//           {name: '日照', value: 21},
//           {name: '胶南', value: 22},
//           {name: '南通', value: 23},
//           {name: '拉萨', value: 24},
//           {name: '云浮', value: 24},
//           {name: '梅州', value: 25},
//           {name: '文登', value: 25},
//           {name: '上海', value: 25},
//           {name: '攀枝花', value: 25},
//           {name: '威海', value: 25},
//           {name: '承德', value: 25},
//           {name: '厦门', value: 26},
//           {name: '汕尾', value: 26},
//           {name: '潮州', value: 26},
//           {name: '丹东', value: 27},
//           {name: '太仓', value: 27},
//           {name: '曲靖', value: 27},
//           {name: '烟台', value: 28},
//           {name: '福州', value: 29},
//           {name: '瓦房店', value: 30},
//           {name: '即墨', value: 30},
//           {name: '抚顺', value: 31},
//           {name: '玉溪', value: 31},
//           {name: '张家口', value: 31},
//           {name: '阳泉', value: 31},
//           {name: '莱州', value: 32},
//           {name: '湖州', value: 32},
//           {name: '汕头', value: 32},
//           {name: '昆山', value: 33},
//           {name: '宁波', value: 33},
//           {name: '湛江', value: 33},
//           {name: '揭阳', value: 34},
//           {name: '荣成', value: 34},
//           {name: '连云港', value: 35},
//           {name: '葫芦岛', value: 35},
//           {name: '常熟', value: 36},
//           {name: '东莞', value: 36},
//           {name: '河源', value: 36},
//           {name: '淮安', value: 36},
//           {name: '泰州', value: 36},
//           {name: '南宁', value: 37},
//           {name: '营口', value: 37},
//           {name: '惠州', value: 37},
//           {name: '江阴', value: 37},
//           {name: '蓬莱', value: 37},
//           {name: '韶关', value: 38},
//           {name: '嘉峪关', value: 38},
//           {name: '广州', value: 38},
//           {name: '延安', value: 38},
//           {name: '太原', value: 39},
//           {name: '清远', value: 39},
//           {name: '中山', value: 39},
//           {name: '昆明', value: 39},
//           {name: '寿光', value: 40},
//           {name: '盘锦', value: 40},
//           {name: '长治', value: 41},
//           {name: '深圳', value: 41},
//           {name: '珠海', value: 42},
//           {name: '宿迁', value: 43},
//           {name: '咸阳', value: 43},
//           {name: '铜川', value: 44},
//           {name: '平度', value: 44},
//           {name: '佛山', value: 44},
//           {name: '海口', value: 44},
//           {name: '江门', value: 45},
//           {name: '章丘', value: 45},
//           {name: '肇庆', value: 46},
//           {name: '大连', value: 47},
//           {name: '临汾', value: 47},
//           {name: '吴江', value: 47},
//           {name: '石嘴山', value: 49},
//           {name: '沈阳', value: 50},
//           {name: '苏州', value: 50},
//           {name: '茂名', value: 50},
//           {name: '嘉兴', value: 51},
//           {name: '长春', value: 51},
//           {name: '胶州', value: 52},
//           {name: '银川', value: 52},
//           {name: '张家港', value: 52},
//           {name: '三门峡', value: 53},
//           {name: '锦州', value: 54},
//           {name: '南昌', value: 54},
//           {name: '柳州', value: 54},
//           {name: '三亚', value: 54},
//           {name: '自贡', value: 56},
//           {name: '吉林', value: 56},
//           {name: '阳江', value: 57},
//           {name: '泸州', value: 57},
//           {name: '西宁', value: 57},
//           {name: '宜宾', value: 58},
//           {name: '呼和浩特', value: 58},
//           {name: '成都', value: 58},
//           {name: '大同', value: 58},
//           {name: '镇江', value: 59},
//           {name: '桂林', value: 59},
//           {name: '张家界', value: 59},
//           {name: '宜兴', value: 59},
//           {name: '北海', value: 60},
//           {name: '西安', value: 61},
//           {name: '金坛', value: 62},
//           {name: '东营', value: 62},
//           {name: '牡丹江', value: 63},
//           {name: '遵义', value: 63},
//           {name: '绍兴', value: 63},
//           {name: '扬州', value: 64},
//           {name: '常州', value: 64},
//           {name: '潍坊', value: 65},
//           {name: '重庆', value: 66},
//           {name: '台州', value: 67},
//           {name: '南京', value: 67},
//           {name: '滨州', value: 70},
//           {name: '贵阳', value: 71},
//           {name: '无锡', value: 71},
//           {name: '本溪', value: 71},
//           {name: '克拉玛依', value: 72},
//           {name: '渭南', value: 72},
//           {name: '马鞍山', value: 72},
//           {name: '宝鸡', value: 72},
//           {name: '焦作', value: 75},
//           {name: '句容', value: 75},
//           {name: '北京', value: 79},
//           {name: '徐州', value: 79},
//           {name: '衡水', value: 80},
//           {name: '包头', value: 80},
//           {name: '绵阳', value: 80},
//           {name: '乌鲁木齐', value: 84},
//           {name: '枣庄', value: 84},
//           {name: '杭州', value: 84},
//           {name: '淄博', value: 85},
//           {name: '鞍山', value: 86},
//           {name: '溧阳', value: 86},
//           {name: '库尔勒', value: 86},
//           {name: '安阳', value: 90},
//           {name: '开封', value: 90},
//           {name: '济南', value: 92},
//           {name: '德阳', value: 93},
//           {name: '温州', value: 95},
//           {name: '九江', value: 96},
//           {name: '邯郸', value: 98},
//           {name: '临安', value: 99},
//           {name: '兰州', value: 99},
//           {name: '沧州', value: 100},
//           {name: '临沂', value: 103},
//           {name: '南充', value: 104},
//           {name: '天津', value: 105},
//           {name: '富阳', value: 106},
//           {name: '泰安', value: 112},
//           {name: '诸暨', value: 112},
//           {name: '郑州', value: 113},
//           {name: '哈尔滨', value: 114},
//           {name: '聊城', value: 116},
//           {name: '芜湖', value: 117},
//           {name: '唐山', value: 119},
//           {name: '平顶山', value: 119},
//           {name: '邢台', value: 119},
//           {name: '德州', value: 120},
//           {name: '济宁', value: 120},
//           {name: '荆州', value: 127},
//           {name: '宜昌', value: 130},
//           {name: '义乌', value: 132},
//           {name: '丽水', value: 133},
//           {name: '洛阳', value: 134},
//           {name: '秦皇岛', value: 136},
//           {name: '株洲', value: 143},
//           {name: '石家庄', value: 147},
//           {name: '莱芜', value: 148},
//           {name: '常德', value: 152},
//           {name: '保定', value: 153},
//           {name: '湘潭', value: 154},
//           {name: '金华', value: 157},
//           {name: '岳阳', value: 169},
//           {name: '长沙', value: 175},
//           {name: '衢州', value: 177},
//           {name: '廊坊', value: 193},
//           {name: '菏泽', value: 194},
//           {name: '合肥', value: 229},
//           {name: '武汉', value: 273},
//           {name: '大庆', value: 279}
//         ]
//         let geoCoordMap = {
//           '海门': [121.15, 31.89],
//           '鄂尔多斯': [109.781327, 39.608266],
//           '招远': [120.38, 37.35],
//           '舟山': [122.207216, 29.985295],
//           '齐齐哈尔': [123.97, 47.33],
//           '盐城': [120.13, 33.38],
//           '赤峰': [118.87, 42.28],
//           '青岛': [120.33, 36.07],
//           '乳山': [121.52, 36.89],
//           '金昌': [102.188043, 38.520089],
//           '泉州': [118.58, 24.93],
//           '莱西': [120.53, 36.86],
//           '日照': [119.46, 35.42],
//           '胶南': [119.97, 35.88],
//           '南通': [121.05, 32.08],
//           '拉萨': [91.11, 29.97],
//           '云浮': [112.02, 22.93],
//           '梅州': [116.1, 24.55],
//           '文登': [122.05, 37.2],
//           '上海': [121.48, 31.22],
//           '攀枝花': [101.718637, 26.582347],
//           '威海': [122.1, 37.5],
//           '承德': [117.93, 40.97],
//           '厦门': [118.1, 24.46],
//           '汕尾': [115.375279, 22.786211],
//           '潮州': [116.63, 23.68],
//           '丹东': [124.37, 40.13],
//           '太仓': [121.1, 31.45],
//           '曲靖': [103.79, 25.51],
//           '烟台': [121.39, 37.52],
//           '福州': [119.3, 26.08],
//           '瓦房店': [121.979603, 39.627114],
//           '即墨': [120.45, 36.38],
//           '抚顺': [123.97, 41.97],
//           '玉溪': [102.52, 24.35],
//           '张家口': [114.87, 40.82],
//           '阳泉': [113.57, 37.85],
//           '莱州': [119.942327, 37.177017],
//           '湖州': [120.1, 30.86],
//           '汕头': [116.69, 23.39],
//           '昆山': [120.95, 31.39],
//           '宁波': [121.56, 29.86],
//           '湛江': [110.359377, 21.270708],
//           '揭阳': [116.35, 23.55],
//           '荣成': [122.41, 37.16],
//           '连云港': [119.16, 34.59],
//           '葫芦岛': [120.836932, 40.711052],
//           '常熟': [120.74, 31.64],
//           '东莞': [113.75, 23.04],
//           '河源': [114.68, 23.73],
//           '淮安': [119.15, 33.5],
//           '泰州': [119.9, 32.49],
//           '南宁': [108.33, 22.84],
//           '营口': [122.18, 40.65],
//           '惠州': [114.4, 23.09],
//           '江阴': [120.26, 31.91],
//           '蓬莱': [120.75, 37.8],
//           '韶关': [113.62, 24.84],
//           '嘉峪关': [98.289152, 39.77313],
//           '广州': [113.23, 23.16],
//           '延安': [109.47, 36.6],
//           '太原': [112.53, 37.87],
//           '清远': [113.01, 23.7],
//           '中山': [113.38, 22.52],
//           '昆明': [102.73, 25.04],
//           '寿光': [118.73, 36.86],
//           '盘锦': [122.070714, 41.119997],
//           '长治': [113.08, 36.18],
//           '深圳': [114.07, 22.62],
//           '珠海': [113.52, 22.3],
//           '宿迁': [118.3, 33.96],
//           '咸阳': [108.72, 34.36],
//           '铜川': [109.11, 35.09],
//           '平度': [119.97, 36.77],
//           '佛山': [113.11, 23.05],
//           '海口': [110.35, 20.02],
//           '江门': [113.06, 22.61],
//           '章丘': [117.53, 36.72],
//           '肇庆': [112.44, 23.05],
//           '大连': [121.62, 38.92],
//           '临汾': [111.5, 36.08],
//           '吴江': [120.63, 31.16],
//           '石嘴山': [106.39, 39.04],
//           '沈阳': [123.38, 41.8],
//           '苏州': [120.62, 31.32],
//           '茂名': [110.88, 21.68],
//           '嘉兴': [120.76, 30.77],
//           '长春': [125.35, 43.88],
//           '胶州': [120.03336, 36.264622],
//           '银川': [106.27, 38.47],
//           '张家港': [120.555821, 31.875428],
//           '三门峡': [111.19, 34.76],
//           '锦州': [121.15, 41.13],
//           '南昌': [115.89, 28.68],
//           '柳州': [109.4, 24.33],
//           '三亚': [109.511909, 18.252847],
//           '自贡': [104.778442, 29.33903],
//           '吉林': [126.57, 43.87],
//           '阳江': [111.95, 21.85],
//           '泸州': [105.39, 28.91],
//           '西宁': [101.74, 36.56],
//           '宜宾': [104.56, 29.77],
//           '呼和浩特': [111.65, 40.82],
//           '成都': [104.06, 30.67],
//           '大同': [113.3, 40.12],
//           '镇江': [119.44, 32.2],
//           '桂林': [110.28, 25.29],
//           '张家界': [110.479191, 29.117096],
//           '宜兴': [119.82, 31.36],
//           '北海': [109.12, 21.49],
//           '西安': [108.95, 34.27],
//           '金坛': [119.56, 31.74],
//           '东营': [118.49, 37.46],
//           '牡丹江': [129.58, 44.6],
//           '遵义': [106.9, 27.7],
//           '绍兴': [120.58, 30.01],
//           '扬州': [119.42, 32.39],
//           '常州': [119.95, 31.79],
//           '潍坊': [119.1, 36.62],
//           '重庆': [106.54, 29.59],
//           '台州': [121.420757, 28.656386],
//           '南京': [118.78, 32.04],
//           '滨州': [118.03, 37.36],
//           '贵阳': [106.71, 26.57],
//           '无锡': [120.29, 31.59],
//           '本溪': [123.73, 41.3],
//           '克拉玛依': [84.77, 45.59],
//           '渭南': [109.5, 34.52],
//           '马鞍山': [118.48, 31.56],
//           '宝鸡': [107.15, 34.38],
//           '焦作': [113.21, 35.24],
//           '句容': [119.16, 31.95],
//           '北京': [116.46, 39.92],
//           '徐州': [117.2, 34.26],
//           '衡水': [115.72, 37.72],
//           '包头': [110, 40.58],
//           '绵阳': [104.73, 31.48],
//           '乌鲁木齐': [87.68, 43.77],
//           '枣庄': [117.57, 34.86],
//           '杭州': [120.19, 30.26],
//           '淄博': [118.05, 36.78],
//           '鞍山': [122.85, 41.12],
//           '溧阳': [119.48, 31.43],
//           '库尔勒': [86.06, 41.68],
//           '安阳': [114.35, 36.1],
//           '开封': [114.35, 34.79],
//           '济南': [117, 36.65],
//           '德阳': [104.37, 31.13],
//           '温州': [120.65, 28.01],
//           '九江': [115.97, 29.71],
//           '邯郸': [114.47, 36.6],
//           '临安': [119.72, 30.23],
//           '兰州': [103.73, 36.03],
//           '沧州': [116.83, 38.33],
//           '临沂': [118.35, 35.05],
//           '南充': [106.110698, 30.837793],
//           '天津': [117.2, 39.13],
//           '富阳': [119.95, 30.07],
//           '泰安': [117.13, 36.18],
//           '诸暨': [120.23, 29.71],
//           '郑州': [113.65, 34.76],
//           '哈尔滨': [126.63, 45.75],
//           '聊城': [115.97, 36.45],
//           '芜湖': [118.38, 31.33],
//           '唐山': [118.02, 39.63],
//           '平顶山': [113.29, 33.75],
//           '邢台': [114.48, 37.05],
//           '德州': [116.29, 37.45],
//           '济宁': [116.59, 35.38],
//           '荆州': [112.239741, 30.335165],
//           '宜昌': [111.3, 30.7],
//           '义乌': [120.06, 29.32],
//           '丽水': [119.92, 28.45],
//           '洛阳': [112.44, 34.7],
//           '秦皇岛': [119.57, 39.95],
//           '株洲': [113.16, 27.83],
//           '石家庄': [114.48, 38.03],
//           '莱芜': [117.67, 36.19],
//           '常德': [111.69, 29.05],
//           '保定': [115.48, 38.85],
//           '湘潭': [112.91, 27.87],
//           '金华': [119.64, 29.12],
//           '岳阳': [113.09, 29.37],
//           '长沙': [113, 28.21],
//           '衢州': [118.88, 28.97],
//           '廊坊': [116.7, 39.53],
//           '菏泽': [115.480656, 35.23375],
//           '合肥': [117.27, 31.86],
//           '武汉': [114.31, 30.52],
//           '大庆': [125.03, 46.58]
//         }
//
//         let convertData = function (data) {
//           let res = []
//           for (let i = 0; i < data.length; i++) {
//             let geoCoord = geoCoordMap[data[i].name]
//             if (geoCoord) {
//               res.push({
//                 name: data[i].name,
//                 value: geoCoord.concat(data[i].value)
//               })
//             }
//           }
//           return res
//         }
//
//         option = {
//           title: {
//             text: '全国主要城市空气质量 - 百度地图',
//             subtext: 'data from PM25.in',
//             sublink: 'http://www.pm25.in',
//             left: 'center'
//           },
//           tooltip: {
//             trigger: 'item'
//           },
//           bmap: {
//             center: [104.114129, 37.550339],
//             zoom: 5,
//             roam: true,
//             mapStyle: {
//               styleJson: [{
//                 'featureType': 'water',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#d1d1d1'
//                 }
//               }, {
//                 'featureType': 'land',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#f3f3f3'
//                 }
//               }, {
//                 'featureType': 'railway',
//                 'elementType': 'all',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'highway',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#fdfdfd'
//                 }
//               }, {
//                 'featureType': 'highway',
//                 'elementType': 'labels',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'arterial',
//                 'elementType': 'geometry',
//                 'stylers': {
//                   'color': '#fefefe'
//                 }
//               }, {
//                 'featureType': 'arterial',
//                 'elementType': 'geometry.fill',
//                 'stylers': {
//                   'color': '#fefefe'
//                 }
//               }, {
//                 'featureType': 'poi',
//                 'elementType': 'all',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'green',
//                 'elementType': 'all',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'subway',
//                 'elementType': 'all',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'manmade',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#d1d1d1'
//                 }
//               }, {
//                 'featureType': 'local',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#d1d1d1'
//                 }
//               }, {
//                 'featureType': 'arterial',
//                 'elementType': 'labels',
//                 'stylers': {
//                   'visibility': 'off'
//                 }
//               }, {
//                 'featureType': 'boundary',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#fefefe'
//                 }
//               }, {
//                 'featureType': 'building',
//                 'elementType': 'all',
//                 'stylers': {
//                   'color': '#d1d1d1'
//                 }
//               }, {
//                 'featureType': 'label',
//                 'elementType': 'labels.text.fill',
//                 'stylers': {
//                   'color': '#999999'
//                 }
//               }]
//             }
//           },
//           series: [
//             {
//               name: 'pm2.5',
//               type: 'scatter',
//               coordinateSystem: 'bmap',
//               data: convertData(data),
//               symbolSize: function (val) {
//                 return val[2] / 10
//               },
//               encode: {
//                 value: 2
//               },
//               label: {
//                 formatter: '{b}',
//                 position: 'right',
//                 show: false
//               },
//               itemStyle: {
//                 color: 'purple'
//               },
//               emphasis: {
//                 label: {
//                   show: true
//                 }
//               }
//             },
//             {
//               name: 'Top 5',
//               type: 'effectScatter',
//               coordinateSystem: 'bmap',
//               data: convertData(data.sort(function (a, b) {
//                 return b.value - a.value
//               }).slice(0, 6)),
//               symbolSize: function (val) {
//                 return val[2] / 10
//               },
//               encode: {
//                 value: 2
//               },
//               showEffectOn: 'render',
//               rippleEffect: {
//                 brushType: 'stroke'
//               },
//               hoverAnimation: true,
//               label: {
//                 formatter: '{b}',
//                 position: 'right',
//                 show: true
//               },
//               itemStyle: {
//                 color: 'purple',
//                 shadowBlur: 10,
//                 shadowColor: '#333'
//               },
//               zlevel: 1
//             }
//           ]
//         }
//
//         // let option = {
//         //   backgroundColor: '#2c343c',
//         //   visualMap: {
//         //     show: false,
//         //     min: 80,
//         //     max: 600,
//         //     inRange: {
//         //       colorLightness: [0, 1]
//         //     }
//         //   },
//         //   series : [
//         //     {
//         //       name: '访问来源',
//         //       type: 'pie',
//         //       radius: '55%',
//         //       data:[
//         //         {value:235, name:'视频广告'},
//         //         {value:274, name:'联盟广告'},
//         //         {value:310, name:'邮件营销'},
//         //         {value:335, name:'直接访问'},
//         //         {value:400, name:'搜索引擎'},
//         //         {value:400, name:'shouhao'}
//         //       ],
//         //       roseType: 'angle',
//         //       label: {
//         //         normal: {
//         //           textStyle: {
//         //             color: 'rgba(255, 255, 255, 0.3)'
//         //           }
//         //         }
//         //       },
//         //       labelLine: {
//         //         normal: {
//         //           lineStyle: {
//         //             color: 'rgba(255, 255, 255, 0.3)'
//         //           }
//         //         }
//         //       },
//         //       itemStyle: {
//         //         normal: {
//         //           color: '#c23531',
//         //           shadowBlur: 200,
//         //           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         //         }
//         //       }
//         //     }
//         //   ]
//         // };
// // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option)
//       }
    },
    mounted () {
      this.mainMaps()
      // this.drawCharts()
    }
  }


</script>

<style scoped>


</style>
