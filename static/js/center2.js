
var chartDom = document.getElementById('center2');
var myChart5 = echarts.init(chartDom);
var option5;

option5 = {
  title:{
    text:'全球主要球类运动球迷渗透率',
    color:"#333"},
  xAxis: {
    type: 'category',
    data: [
      '足球',
      '篮球',
      '板球',
      '网球',
      '排球',
      '乒乓球',
      '曲棍球',
      '棒球',
      '高尔夫',
      '橄榄球'
    ]
  },
  yAxis: {
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
      data: [],
      type: 'bar'
    }
  ]
};

 myChart5.setOption(option5);
