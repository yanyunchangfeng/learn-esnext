
import Img from 'src/assets/img/yanyunchangfeng.png';

{
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function () {
            callback && callback.call()
        }, 1000)
    };
    ajax(function () {
        console.log('timeout1')
    })
}
{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000)
        })
    };
    ajax().then(function () {
        console.log('promise', 'timeout2')
    })
}
{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000)
        })
    };
    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 2000)
        })
    }).then(function () {
        console.log('timeout3')
    })

}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw Error('出错了')
            }
        })
    }
    ajax(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err)
    })
    ajax(3).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err)
    })
}

{
    //所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }
    function showImg(imgs) {
        imgs.forEach(img => document.body.append(img))
    }
    // Promise.all([
    //     loadImg(Img),
    //     loadImg(Img),
    //     loadImg(Img),
    // ]).then(showImg)
}

{
    //有一个图片加载完成就添加到页面
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }
    function showImg(img) {
        let p = document.createElement('p');
        p.append(img);
        document.body.append(p)
    }
    Promise.race([
        loadImg(Img),
        loadImg(Img),
        loadImg(Img)
    ]).then(showImg)
}
