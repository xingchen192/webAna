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
    data () {
      return {
        allData: [],

      }
    },
    methods: {
      requestData () {

        const _this = this
        this.$axios({
          method: 'get',
          url: 'http://localhost:9000/data/allDatas',
          // responseType:'stream'
        })
          .then(function (response) {
            // console.log(response.data)

            _this.allData = response.data
            _this.mainMaps()
            // console.log(_this.allData)
            // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
          })
      },
      mainMaps () {
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
        *
        android{'杭州':19,'福州':3,'泉州':1,'邯郸':1,'南京':11,'重庆':5,'北京':50,'嘉兴':2,'上海':41,'昆明':1,'南充':1,'肇庆':1,'成都':5,'长沙':2,'惠州':1,'苏州':9,'厦门':5,'石家庄':1,'天津':1,'广州':26,'郑州':1,'无锡':3,'深圳':87,'宁波':1,'湖北':1,'合肥':6,'珠海':2,'大连':1,'武汉':6,'太原':1,'济南':2,'西安':6}
        c {'杭州':23,'福州':1,'南京':7,'重庆':1,'莆田':2,'北京':39,'上海':93,'常州':2,'南充':1,'成都':2,'苏州':7,'南宁':1,'天津':1,'广州':30,'郑州':1,'无锡':2,'深圳':43,'宁波':1,'金华':1,'合肥':3,'珠海':1,'青岛':2,'武汉':1,'济南':1,'西安':5}
        java {'杭州':23,'福州':3,'南京':11,'重庆':6,'北京':88,'嘉兴':1,'上海':64,'成都':10,'长沙':14,'苏州':4,'厦门':5,'石家庄':2,'天津':2,'广州':39,'郑州':9,'无锡':1,'深圳':54,'宁波':4,'贵阳':2,'合肥':1,'珠海':1,'青岛':2,'大连':1,'威海':1,'南昌':1,'武汉':7,'廊坊':1,'西安':3}
        python {'杭州':18,'福州':2,'南京':1,'徐州':1,'重庆':2,'北京':46,'上海':60,'成都':4,'长沙':2,'苏州':6,'天津':2,'广州':16,'郑州':2,'海口':1,'无锡':1,'深圳':38,'宁波':1,'合肥':1,'珠海':1,'青岛':7,'大连':1,'武汉':3,'西安':5}
        web {'杭州':23,'福州':3,'南京':6,'重庆':2,'北京':43,'嘉兴':1,'上海':64,'沈阳':2,'温州':2,'成都':14,'长沙':3,'苏州':7,'南宁':3,'厦门':1,'东莞':1,'天津':1,'广州':29,'郑州':4,'无锡':1,'深圳':47,'宁波':6,'合肥':3,'青岛':3,'大连':3,'武汉':7,'太原':1,'济南':7,'萍乡':1,'西安':7}
        测试 {'杭州':40,'徐州':3,'绍兴':1,'佛山':1,'嘉兴':4,'上海':71,'成都':14,'惠州':2,'苏州':19,'东莞':7,'天津':3,'合肥':7,'珠海':4,'南昌':1,'武汉':15,'衡阳':1,'西安':7,'邯郸':1,'南京':18,'湖州':1,'重庆':3,'乌鲁木齐':2,'北京':45,'沈阳':1,'常州':2,'长沙':1,'烟台':2,'南宁':2,'厦门':3,'广州':21,'郑州':3,'无锡':2,'深圳':72,'贵阳':1,'青岛':3,'大连':1,'威海':1,'镇江':2}
        网络工程师 {'南宁':3,'厦门':1,'东莞':1,'石家庄':2,'天津':1,'杭州':6,'福州':1,'广州':10,'泉州':1,'南京':4,'徐州':2,'荆州':1,'重庆':2,'无锡':1,'深圳':12,'北京':16,'佛山':2,'宁波':1,'青岛':2,'大连':2,'南昌':1,'上海':18,'武汉':2,'昆明':1,'成都':4,'长沙':3,'西安':2}
        *
        * */

        let allDs = this.allData

        // [{
        //    job:'sdf',
        //     value:{
        //              }
        // }
        // ]
        let allmap = []

        let year = []
        let datas = []
        for (let i = 0, j = 0; i < allDs.length; i++) {
          if (year.indexOf(allDs[i].jobName) === -1) {
            year[j] = allDs[i].jobName
            j++
          }
          if (allmap.indexOf(allDs[i].name) === -1) {
            allmap.push(allDs[i].name)
          }
        }
        // console.log(year)
        // console.log(allmap)
        for (let i = 0; i < year.length; i++) {
          datas[i] = {}
        }
        // console.log(allDs)
        for (let i = 0; i < allDs.length; i++) {
          if (year.indexOf(allDs[i].jobName) !== -1) {
            let index = year.indexOf(allDs[i].jobName)
            // console.log(index)
            datas[index][allDs[i].name] = allDs[i].value
            // });

          }

        }


        mapFeatures.forEach(function (v) { // 地区名称
            // console.log(v.properties.name)

            // for (let da in datas){
            //   if (Object.prototype.hasOwnProperty.call(da, v.properties.name)){
            if (allmap.indexOf(v.properties.name) !== -1) {
              let name = v.properties.name
              geoCoordMap[name] = v.properties.cp
            } // 地区经纬度
            // }

          }
        )
        // console.log(geoCoordMap)
        var colors = [
          ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
          ['#37A2DA', '#67E0E3', '#32C5E9', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3', '#9D96F5', '#8378EA', '#8378EA'],
          ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78', '#73A373', '#73B9BC', '#7289AB', '#91CA8C', '#F49F42'],
        ]
        var colorIndex = 0
        var mapData = []
        for (let i = 0; i < year.length; i++) {
          mapData[i] = []
        }
        $(function () {
          // var mapData = [
          //   [],
          //   [],
          //   [],
          //   [],
          //   [],
          //   [],
          //   []
          // ]

          /*柱子Y名称*/
          var categoryData = []
          var barData = []
          for (let key in geoCoordMap) {
            for (let i = 0; i < datas.length; i++) {
              if (datas[i][key] > 0) {
                mapData[i].push({
                  'year': 'android',
                  'name': key,
                  'value': datas[i][key],
                })
              }
            }
            // if (d1[key] != null) {
            //   mapData[0].push({
            //     'year': 'android',
            //     'name': key,
            //     'value': d1[key],
            //   })
            // }
            // if (d2[key] != null) {
            //   mapData[1].push({
            //     'year': 'c',
            //     'name': key,
            //     'value': d2[key],
            //   })
            // }
            // if (d3[key] != null) {
            //   mapData[2].push({
            //     'year': 'java',
            //     'name': key,
            //     'value': d3[key],
            //   })
            // }
            // if (d4[key] != null) {
            //   mapData[3].push({
            //     'year': 'python',
            //     'name': key,
            //     'value': d4[key],
            //   })
            // }
            // if (d5[key] != null) {
            //   mapData[4].push({
            //     'year': 'web',
            //     'name': key,
            //     'value': d5[key],
            //   })
            // }
            // if (d6[key] != null) {
            //   mapData[5].push({
            //     'year': '测试',
            //     'name': key,
            //     'value': d6[key],
            //   })
            // }
            // if (d7[key] != null) {
            //   mapData[6].push({
            //     'year': '网络工程师',
            //     'name': key,
            //     'value': d7[key],
            //   })
            // }
          }

          console.log(mapData)
          for (var i = 0; i < mapData.length; i++) {

            // console.log(mapData[i])
            // console.log('___________________________')
            mapData[i].sort(function (a, b) {
              if (a.value != null && b.value != null) {
                return a.value - b.value
              } else {
                return -1
              }
            })
            // console.log(mapData[i])
            barData.push([])
            categoryData.push([])
            for (var j = 0; j < mapData[i].length; j++) {
              barData[i].push(mapData[i][j].value)
              categoryData[i].push(mapData[i][j].name)
              if (j === 30) {
                break
              }
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
    },
    mounted () {
      this.requestData()
      // this.mainMaps()
      // this.drawCharts()
    }
  }


</script>

<style scoped>


</style>
