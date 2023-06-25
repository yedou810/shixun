
var chartDom = document.getElementById('left2');
var myChart2 = echarts.init(chartDom);
var option2;

option2 = {
  title:{
    text:'2022年中国足球球迷学历情况',
    color:"#333"},
  xAxis: {
    type: 'category',
    data: ['高中及以下', '大学专科', '大学本科', '硕士及以上']
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

myChart2.setOption(option2);