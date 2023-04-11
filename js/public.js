//点击返回顶部
function goTop() {

    var timer = setInterval(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var speed = Math.floor(-scrollTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
        if (scrollTop == 0) {
            clearInterval(timer);
        }
    }, 30);
}

