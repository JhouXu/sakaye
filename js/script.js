/**
 * 自动适应屏幕的大小
 */
let imgWidth = window.innerWidth;

(function () {
    let imgs = document.querySelector(".rotation-chart").querySelectorAll("img");
    //当浏览器窗口发生变化事件
    window.onresize = function () {
        imgWidth = imgWidth < 1200 ? 1200 : window.innerWidth;
        load();
    };

    function load() {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.width = imgWidth + 'px';
        }
    }
    load(); //第一次加载的时候执行
})();

/**
 * 主轮播图
 * 1.实现按钮的切换效果
 * 2.实现按按钮是图片自动轮播
 * 3.实现定时轮播
 */
(function () {
    var images = document.getElementsByClassName('images')[0];
    var navBtnsList = document.getElementsByClassName("btns")[0].children[0];
    var navBtns = document.getElementsByClassName("btns")[0].children[0].children;
    // var innerWidth = window.innerWidth;
    var n = 0,
        timer;

    //按钮切换效果 和 轮播效果
    function bindBtn() {
        navBtns[0].className = 'btns-background';
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].index = i; //遍历三个按钮 分配下标
            navBtns[i].onclick = function () {
                n = this.index; //根据下标来判断是第几张图片
                for (var i = 0; i < navBtns.length; i++) {
                    navBtns[i].className = '';
                }
                this.className = 'btns-background';
                images.style.transform = "translateX(" + n * -imgWidth + "px)";
            }
        };
        navBtnsList.onmouseenter = function () {
            clearInterval(timer);
        };
        navBtnsList.onmouseleave = function () {
            play();
        };
    }

    //自动轮播
    function play() {
        clearInterval(timer);
        timer = setInterval(function () {
            n++;
            n %= 3;
            for (var i = 0; i < navBtns.length; i++) {
                navBtns[i].className = '';
            }
            navBtns[n].className = 'btns-background';
            images.style.transform = "translateX(" + n * -innerWidth + "px)";
        }, 4500);
    }

    bindBtn();
    play();
})();

/**
 * service轮播图
 */
(function () {
    var featuresImg = document.getElementsByClassName('features-img')[0];
    var featuresBtnsList = document.getElementsByClassName("horizontal-line")[0].nextElementSibling;
    var uls = document.getElementsByClassName('features-img-container')[0].nextElementSibling.children[2].children;
    var describeUls = document.getElementsByClassName('describe')[0].children[0];
    var n = 0,
        timer;

    //按钮切换效果 和 轮播效果
    function binduls() {
        uls[0].className = 'features-nav-background';
        for (var i = 0; i < uls.length - 1; i++) {
            uls[i].index = i;
            uls[i].onclick = function () {
                n = this.index; //根据下标来判断是第几张图片
                for (var i = 0; i < uls.length; i++) {
                    uls[i].className = '';
                }
                this.className = 'features-nav-background';
                describeUls.style.transform = "translateY(" + n * -96 + "px)";
                featuresImg.style.transform = "translateY(" + n * -500 + "px)";
            }
        };
        featuresBtnsList.onmouseenter = function () {
            clearInterval(timer);
        };
        featuresBtnsList.onmouseleave = function () {
            play();
        };
    }

    //自动轮播
    function play() {
        clearInterval(timer);
        timer = setInterval(function () {
            n++;
            n %= 4;
            for (var i = 0; i < uls.length; i++) {
                uls[i].className = '';
            }
            uls[n].className = 'features-nav-background';
            describeUls.style.transform = "translateY(" + n * -96 + "px)";
            featuresImg.style.transform = "translateY(" + n * -500 + "px)";
        }, 4500);
    }

    binduls();
    play();
})();



/**
 * 资讯轮播图
 */
(function () {
    var industryNews = document.getElementsByClassName('industry-news')[0];
    var newBtnsList = document.getElementsByClassName('news-btn')[0];
    var newBtns = document.getElementsByClassName('news')[0].children[2].children[0].children;
    var n = 0,
        timer;

    //按钮切换效果 和 轮播效果
    function bindBtn() {
        newBtns[0].className = 'btns-background';
        for (var i = 0; i < newBtns.length; i++) {
            newBtns[i].index = i;
            newBtns[i].onclick = function () {
                n = this.index; //根据下标来判断是第几张图片
                for (var i = 0; i < newBtns.length; i++) {
                    newBtns[i].className = '';
                }
                this.className = 'btns-background';
                industryNews.style.transform = "translateX(" + n * -982 + "px)";
            }
        };
        newBtnsList.onmouseenter = function () {
            clearInterval(timer);
        };
        newBtnsList.onmouseleave = function () {
            play();
        };
    }

    //自动轮播
    function play() {
        clearInterval(timer);
        timer = setInterval(function () {
            n++;
            n %= 4;
            for (var i = 0; i < newBtns.length; i++) {
                newBtns[i].className = '';
            }
            newBtns[n].className = 'btns-background';
            industryNews.style.transform = "translateX(" + n * -982 + "px)";
        }, 3000);
    }

    bindBtn();
    play();
})();




/**
 * 显示具体时间 (格式:xx/xx/xx/)
 */
(function () {
    var time = document.getElementsByClassName("time")[0];
    var spans = time.children;
    var date = new Date();
    var digit = function (dig) { //判断日月分别是不是两位数，若不是前补0
        if (dig > 0 && dig < 10) {
            return '0' + dig;
        }
        return dig;
    }
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    spans[0].innerHTML = y;
    spans[1].innerHTML = digit(m);
    spans[2].innerHTML = digit(d);
})();

/**
 * 表单验证
 *  1.判断姓名（非字符串） 2.判断手机号的长短 3.判断是否为空字符串
 */

(function () {
    var form = document.getElementsByTagName('form')[0];
    var inputs = form.children[0].getElementsByTagName('input');
    var textarea = form.getElementsByTagName('textarea')[0];
    var flag = [];

    for (let i = 0; i < inputs.length - 1; ++i) {
        inputs[i].onblur = inputBlur;
    }


    function inputBlur() {
        var name = this.name;
        var val = this.value;
        val = val.trim();
        var reg_msg = getRegMsg(name);

        if (reg_msg['reg'].test(val)) {
            this.style.border = '1px solid green';
            this.style.boxShadow = '0 0 3px 1px #66ff9c';
            flag[name] = true;
        } else {
            this.style.border = '1px solid red';
            this.style.boxShadow = '0 0 3px 1px #ff6666';
            flag[name] = false;
        }
    }

    textarea.onblur = function () {
        if (this.value !== '') {
            this.style.border = '1px solid green';
            this.style.boxShadow = '0 0 3px 1px #66ff9c';
            flag['textarea'] = true;
        } else {
            this.style.border = '1px solid red';
            this.style.boxShadow = '0 0 3px 1px #ff6666';
            flag['textarea'] = false;
        }
    }

    function getRegMsg(name) {
        var reg = '';
        switch (name) {
            case 'username':
                reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]|[a-zA-Z]{2,20}$/; //中文或者英文 不包括中间的空格 
                break;
            case 'tel':
                reg = /^1[345678]\d{9}$/;
                break;
        }
        return {
            'reg': reg
        };
    }

    form.onsubmit = function () {
        let sum = 0
        for (let i in flag) {
            sum = flag[i] == true ? ++sum : sum;
        }
        if (sum != 3) {
            event.preventDefault();
        }
    }
})();



/**
 * 
 * 快速导航定位
 * 
 */
window.onload = function () {
    // 获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;
    // 回到顶部、底部，按钮
    var prevBtn = document.getElementsByClassName('prev')[0];
    var nextBtn = document.getElementsByClassName('next')[0];
    var timer = null;
    var isTop = true;
    var aggArticle = document.getElementsByClassName('nav-list')[0].children[0].children;
    // 导航栏中主要内容到顶部的距离
    var aggTop = [0, 845, 1593, 2384, 3660, 5420, 6035];
    var n = 0;



    // 滚动条 滚动时触发
    window.onscroll = function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条所在的位置
        if (osTop >= clientHeight && osTop <= 6007) {
            prevBtn.style.display = 'block'; // 显示
            nextBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none'; // 隐藏
            nextBtn.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }


    //回到顶部
    prevBtn.onclick = function () {
        // 设置定时器
        timer = setInterval(function () {
            // 获取滚动条，距离顶部的高度（适配IE浏览器，google浏览器）
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor(-osTop / 15); // 小数点，向下舍入。
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 20);
    }

    //回到底部
    nextBtn.onclick = function () {
        // 设置定时器
        timer = setInterval(function () {
            // 获取滚动条，距离顶部的高度（适配IE浏览器，google浏览器）
            var osBottom = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor((6350 - osBottom) / 15); // 小数点，向下舍入。

            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = (osBottom + iSpeed);
            if (osBottom >= 6333) {
                clearInterval(timer);
            }
        }, 20);
    }

    // 为每一个导航栏按钮添加事件
    // 除去最后的一个li(中英文和搜索框)
    for (let i = 0; i <= aggArticle.length - 2; i++) {
        aggArticle[i].index = i;
        aggArticle[i].onclick = articleClick; //鼠标点击
        aggArticle[i].onmouseenter = articleEenter; //鼠标移入
        aggArticle[i].onmouseleave = articleEleave; //鼠标移出
    }

    function articleClick() {
        n = this.index;
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var iSpeed = Math.floor((aggTop[n] - osTop) / 15);
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
            if (osTop >= aggTop[n] - 20) {
                clearInterval(timer);
            }
        }, 20);
    }

    //移入
    function articleEenter() {
        n = this.index;
        aggArticle[0].className = '';
        for (let i = 0; i <= aggArticle.length - 2; i++) {
            if (i === n) {
                aggArticle[n].className = 'nav-hover';
            }
        }
    }
    aggArticle[aggArticle.length - 1].onmouseenter = function () {
        aggArticle[0].className = 'nav-hover';
    }

    //移出
    function articleEleave() {
        aggArticle[this.index].className = '';
    }
    document.getElementsByClassName('nav-list')[0].children[0].onmouseleave = function () {
        aggArticle[0].className = 'nav-hover';
    }
}


// (function () {
//     console.log("zhixingle");
// })();


/**
 * 
 * 地图定位
 * 
 */
var container = document.getElementById('container');
// 创建地图实例  
var map = new BMap.Map(container);
// 创建点坐标  
var point = new BMap.Point(115.164951, -8.681242);
// 初始化地图，设置中心点坐标和地图级别
map.centerAndZoom(point, 15);
//开启鼠标缩放
map.enableScrollWheelZoom(true);
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes: [
        BMAP_NORMAL_MAP, //普通街道视图
        BMAP_HYBRID_MAP, //卫星和路网的混合视图
        BMAP_SATELLITE_MAP //卫星视图
    ]
}));
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); // 将标注添加到地图中 
