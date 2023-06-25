

var chartDom = document.getElementById('right1');
var myChart3 = echarts.init(chartDom);
var option3;

option3 = {
  title: {
    text: '2022年世界杯中国球迷收看频率',

    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      label: {
                normal: {
                    show: true,
                    formatter: '{b}:{c}%'
                }
            },
      data: [
        { value: 4, name: '只看亮点' },
        { value: 8, name: '每场比赛' },
        { value: 8, name: '整个赛季的几场比赛' },
        { value: 9, name: '不打算看' },
        { value: 10, name: '每天几场比赛' },
        { value: 11, name: '每天一场比赛' },
        { value: 22, name: '只看决赛' },
        { value: 27, name: '每周几场比赛' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

 myChart3.setOption(option3);
