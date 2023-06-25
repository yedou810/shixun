
var chartDom = document.getElementById('right2');
var myChart4 = echarts.init(chartDom);
var option4;

option4 = {
  title: {
    text: '2022年中国足球球迷性别情况',

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
        { value: 12.7, name: '女性' },
        { value: 87.3, name: '男性' }
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

myChart4.setOption(option4);
