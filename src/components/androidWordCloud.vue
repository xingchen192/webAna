<template>
  <div id="app" style="text-align: center;width: 90%; margin: auto;margin-top: 2%">
    <div id="main" style="width: 100%;height:600px;margin:0 auto"></div>
  </div>
</template>
<script>
require('echarts-wordcloud')
export default {
  name: 'androidWordCloud',
  data() {
    return {
      datas: []
    }
  },
  methods: {
    requestData() {
      let _this = this;
      this.$axios({
        method: 'get',
        url: 'http://localhost:9000/data/type',
        params: {
          name: 'android'
        }
      }).then(function (re) {
        // console.log(re.data)

        _this.datas = re.data;
        _this.showWords()
      })
    },
    showWords() {
      let myChart = this.$echarts.init(document.getElementById('main'))
      let data = this.datas

      let option = {
        tooltip: {
          show: true,
          position: 'top',
          textStyle: {
            fontSize: 30
          }
        },
        backgroundColor: '#800000',
        series: [{
          type: 'wordCloud',
          gridSize: 12,
          sizeRange: [20, 70],
          rotationRange: [-90, 90],
          // rotationStep: 45,
          shape: 'circle',
          width: '90%',
          height: '90%',
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
      myChart.on('dblclick', function (params) {
        for(let i=0;i < data.length;i++){
          if(data[i].name === params.data.name){
            data.splice(i,1)
            myChart.setOption(option)
            break
          }
        }
      })
      myChart.setOption(option)
    }
  },
  mounted() {
    this.requestData()
  }
}
</script>
