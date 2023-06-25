
function get_left1() {
    $.ajax({
        url:"/get_left1",
        type:"post",
        success:function (datas) {

           option1.series[0].data=datas['age']

           myChart1.setOption(option1);
        },
        error:function () {

        }


    })

}





function get_left2() {
    $.ajax({
        url:"/get_left2",
        type:"post",
        success:function (datas) {

           option2.series[0].data=datas['education']

           myChart2.setOption(option2);
        },
        error:function () {

        }


    })

}



function get_center2() {
    $.ajax({
        url:"/get_center2",
        type:"post",
        success:function (datas) {

           option5.series[0].data=datas['sport']

           myChart5.setOption(option5);
        },
        error:function () {

        }


    })

}








setInterval(get_left1,1000)
setInterval(get_left2,1000)
setInterval(get_center2,1000)

