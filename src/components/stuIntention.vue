<template>
    <div id="app">
        <div id="main" style="width: 90%;height: 600px; margin: auto" ref="myEchart"></div>

    </div>
</template>

<script>
  export default {
    name: 'stuIntention', methods: {
      stud () {
        let myChart = this.$echarts.init(this.$refs.myEchart)

        let colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555']
        let bgColor = '#2E2733'

        let itemStyle = {
          star5: {
            color: colors[0]
          },
          star4: {
            color: colors[1]
          },
          star3: {
            color: colors[2]
          },
          star2: {
            color: colors[3]
          }
        }
        //JAVA程序员
        // 剧情策划实习生
        // 商业分析助理、大数据应用助理
        // 软件测试工作
        // Java后端开发
        // 软件研发岗
        // 全栈工程师
        // 测试岗位
        // 计算机运营维护相关
        // 计算机运营维护
        // 前端开发工程师
        // 算法工程师
        // php  前端开发
        // 软件研发岗
        // 技术类
        // 前端
        // 前端、后端开发
        // 软件测试  web开发  java开发
        // java开发工程师，JavaWeb工程师

        let data = [
          {
            name: '技术类',
            itemStyle: {
              color: colors[1]
            },
            children: [{
              name: '前端开发',
              children: [{
                name: '5☆',
                children: [{
                  name: '前端开发'
                }]
              }, {
                name: '4☆',
                children: [{
                  name: 'ios开发'
                }, {
                  name: 'android开发'
                }]
              }]
            }, {
              name: '后端开发',
              children: [{
                name: '5☆',
                children: [{
                  name: 'java开发'
                }]
              }, {
                name: '4☆',
                children: [{
                  name: 'Java web'
                }, {
                  name: '软件研发'
                }]
              }, {
                name: '3☆',
                children: [{
                  name: 'php开发'
                }, {
                  name: '全栈工程师'
                }]
              }]
            }, {
              name: '运维类',
              children: [{
                name: '5☆',
                children: [{
                  name: '计算机运营维护'
                }]
              }, {
                name: '3☆',
                children: [{
                  name: '服务器运维'
                }]
              }]
            },
              {
                name: '算法类',
                children: [{
                  name: '5☆',
                  children: [{
                    name: '算法研发工程师'
                  }]
                }]
              }, {
                name: '测试类',
                children: [{
                  name: '5☆',
                  children: [{
                    name: '测试岗位'
                  }]
                  },{
                  name: '4☆',
                  children: [{
                    name: '软件测试'
                  }]
                }]
              }, {
                name: '数据分析类',
                children: [{
                  name: '4☆',
                  children: [{
                    name: '大数据应用助理'
                  }]
                }, {
                  name: '3☆',
                  children: [{
                    name: '商业分析助理'
                  }]
                }]
              }]
          }, {
            name: '非技术类',
            itemStyle: {
              color: colors[2]
            },
            children: [{
              name: '策划设计',
              children: [{
                name: '3☆',
                children: [{
                  name: '剧情策划实习生'
                }]
              }]
            }]
          }]

        for (let j = 0; j < data.length; ++j) {
          let level1 = data[j].children
          for (let i = 0; i < level1.length; ++i) {
            let block = level1[i].children
            let bookScore = []
            let bookScoreId
            for (let star = 0; star < block.length; ++star) {
              let style = (function (name) {
                switch (name) {
                  case '5☆':
                    bookScoreId = 0
                    return itemStyle.star5
                  case '4☆':
                    bookScoreId = 1
                    return itemStyle.star4
                  case '3☆':
                    bookScoreId = 2
                    return itemStyle.star3
                  case '2☆':
                    bookScoreId = 3
                    return itemStyle.star2
                }
              })(block[star].name)

              block[star].label = {
                color: style.color,
                downplay: {
                  opacity: 0.5
                }
              }

              if (block[star].children) {
                style = {
                  opacity: 1,
                  color: style.color
                }
                block[star].children.forEach(function (book) {
                  book.value = 1
                  book.itemStyle = style

                  book.label = {
                    color: style.color
                  }

                  let value = 1
                  if (bookScoreId === 0 || bookScoreId === 3) {
                    value = 5
                  }

                  if (bookScore[bookScoreId]) {
                    bookScore[bookScoreId].value += value
                  }
                  else {
                    bookScore[bookScoreId] = {
                      color: colors[bookScoreId],
                      value: value
                    }
                  }
                })
              }
            }

            level1[i].itemStyle = {
              color: data[j].itemStyle.color
            }
          }
        }

        let option = {
          backgroundColor: bgColor,
          color: colors,
          series: [{
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
              if (a.depth === 1) {
                return b.getValue() - a.getValue()
              }
              else {
                return a.dataIndex - b.dataIndex
              }
            },
            label: {
              rotate: 'radial',
              color: bgColor
            },
            itemStyle: {
              borderColor: bgColor,
              borderWidth: 2
            },
            levels: [{}, {
              r0: 0,
              r: 40,
              label: {
                rotate: 0
              }
            }, {
              r0: 40,
              r: 105
            }, {
              r0: 115,
              r: 140,
              itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
              },
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
              }
            }, {
              r0: 140,
              r: 145,
              itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
              },
              label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333'
              },
              downplay: {
                label: {
                  opacity: 0.5
                }
              }
            }]
          }]
        }
        myChart.setOption(option)
      },

    },
    mounted () {
      this.stud()
    }
  }
</script>

<style scoped>

</style>
