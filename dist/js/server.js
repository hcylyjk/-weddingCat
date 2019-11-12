let http = require('http');
let fs = require('fs');
let server = http.createServer();
server.on('request', function (req, res) {
    console.log('用户发起了请求');
    console.log(req.url);
    var urlArr = req.url.split('/')
    // console.log(urlArr);
    var urlSuf = urlArr[1].split('.')
    console.log(urlSuf);
    var imgSuf = []
    var cssSuf = []
    var jsSuf = []
    var jsonSuf = []
    var phpSuf = []
    if (urlArr[1] == 'json') {
        jsonSuf = urlArr[urlArr.length-1].split('.')
    }
    if (urlArr[1] == 'php') {
        phpSuf = urlArr[urlArr.length-1].split('.')
    }
    if (urlArr[1] == 'img') {
        imgSuf = urlArr[urlArr.length-1].split('.')
    }
    if (urlArr[1] == 'css') {
        cssSuf = urlArr[2].split('.')
    }
    if (urlArr[1] == 'js') {
        jsSuf = urlArr[2].split('.')
    }
    if (urlSuf[1] == 'ico') {
        return;
    } else if (req.url == '/lingege.html') {
        fs.readFile('../html/w_hotel.html', 'utf-8', function (err, data) {
            if (!err) {
                res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
                res.end(data);
            }
        })
    }else if (urlSuf[1] == 'html') {
        fs.readFile('../html'+req.url, 'utf-8', function (err, data) {
            if (!err) {
                res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
                res.end(data);
            }
        })
    } else if (imgSuf[imgSuf.length-1] == 'jpg') {
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'image/jpeg');
                res.end(data);//结束响应，返回数据
            }
        });
    }else if (imgSuf[imgSuf.length-1] == 'png') {
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'image/png');
                res.end(data);//结束响应，返回数据
            }
        });
    } else if (cssSuf[cssSuf.length-1] == 'css') {
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'text/css');
                res.end(data);//结束响应，返回数据
            }
        });
    }else if (jsSuf[jsSuf.length-1] == 'js') {
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'text/javascript');
                res.end(data);//结束响应，返回数据
            }
        });
    }else if (jsonSuf[jsonSuf.length-1] == 'json') {
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'text/php');
                res.end(data);//结束响应，返回数据
            }
        });
    }else if (phpSuf[phpSuf.length-1] == 'php') {
        console.log('..' + req.url);
        fs.readFile('..' + req.url, function (err, data) {
            if (!err) {
                res.setHeader('Content-type', 'text/php');
                res.end(data);//结束响应，返回数据
            }
        });
    }else {
        res.writeHead(404, { "Content-type": "text/html;charset=UTF-8" });
        res.end('404')
    }
})
server.listen('6868', '10.36.147.198', function () {
    console.log('服务器已启动');
})