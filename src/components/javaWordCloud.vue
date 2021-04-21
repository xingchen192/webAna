<template>
    <div id="app" style="text-align: center;width: 90%; margin: auto;margin-top: 2%">
        <div id="main" style="width: 100%;height:600px;margin:0 auto"></div>
    </div>
</template>
<script>
  require('echarts-wordcloud')
  export default {
    name: 'javaWordCloud',
    data () {
      return {
        datas:[]
      }
    },
    methods: {
      requestData() {
        let _this = this;
        this.$axios({
          method: 'get',
          url: 'http://localhost:9000/data/type',
          params: {
            name: 'java'
          }
        }).then(function (re) {
          // console.log(re.data)

          _this.datas = re.data;
          _this.showWords()
        })
      },
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
          backgroundColor:'#4B0082',
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
        myChart.on('dblclick', function (params) {
          for(let i=0;i < datas.length;i++){
            if(datas[i].name === params.data.name){
              datas.splice(i,1)
              myChart.setOption(option)
              break
            }
          }
        })

        myChart.setOption(option)
      }
    },
    mounted () {
      this.requestData()
    }
  }
</script>

