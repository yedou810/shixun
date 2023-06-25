

var chartDom = document.getElementById('left1');
var myChart1 = echarts.init(chartDom);
var option1;

option1 = {
  title:{
    text:'2022年中国足球球迷年龄情况',
    color:"#333"},
  xAxis: {
    type: 'category',
    data: ['24岁以下', '25-34岁', '35-44岁', '45岁及以上']
  },
  yAxis: {
    name: "单位:%",
    type: 'value'

  },
  series: [
    {
      label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
      data: [ ],
      type: 'bar'
    }
  ]
};

myChart1.setOption(option1);
