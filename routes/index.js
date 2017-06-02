var express = require('express');
var async = require('async');
var path = require('path');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {

  var lay = fs.readFileSync(path.resolve(__dirname,'../templetes/layout.html'), 'utf-8');
  //TODO 可以做一下缓存
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.write(lay);

  async.parallel([function (cb) {
    setTimeout(function () {
      // console.log('----pageletl01----');
      res.write('<script>bigpipe.set("pageletl01",{"name":"风车车jerry","gender":"男","starsign":"天秤座","fav":"编程、旅游、玩游戏、看电影、听音乐","signature":"努力奋斗，为爱生活"});</script>');
      cb(null);
    }, 500)
  }, function (cb) {
    setTimeout(function () {
      // console.log('----pageletl02----');
      var blahs = [];
      for(var i=0;i<10;i++) {
        blahs.push(Math.floor(Math.random() * 10001))
      }
      res.write('<script>bigpipe.set("pageletl02",' + JSON.stringify(blahs) + ')</script>');
      cb(null);
    }, 3000)

  }, function (cb) {
    setTimeout(function () {
      // console.log('----tppageletm01----');
      res.write('<script>bigpipe.set("tppageletm01",null);</script>');
      cb(null);
    }, 1000)

  }, function (cb) {
    setTimeout(function () {
      // console.log('----tppageletm02----');
      res.write('<script>bigpipe.set("tppageletm02",null);</script>');
      cb(null);
    }, 7000)

  }, function (cb) {
    setTimeout(function () {
      // console.log('----tppageletm03----');
      var articles = [{
        name: 'BigPipe百度百科',
        link: 'http://baike.baidu.com/link?url=sLT1pYVU-Hv99gvyx7zZNOyTX1Grjan-HSV1QnGTXliwFV9IHHeUQH-XazHtuJVlRAncLNYT5iGdTuGdGApzDK'
      }, {
        name: 'Facebook让网站速度提升一倍的BigPipe技术分析',
        link: 'http://limu.iteye.com/blog/765173'
      }, {
        name: '[译]BigPipe：高性能的“流水线技术”网页',
        link: 'http://isux.tencent.com/bigpipe-pipelining-web-pages-for-high-performance.html'
      }, {
        name: 'Bigpipe用Nodejs的实现',
        link: 'https://yuguo.us/weblog/bigpipe-in-nodejs/?utm_source=tuicool&utm_medium=referral'
      }]
      res.write('<script>bigpipe.set("tppageletm03",'+JSON.stringify(articles)+');</script>');
      cb(null);
    }, 3000)

  }, function (cb) {
    setTimeout(function () {
      // console.log('----pageletr01----');
      res.write('<script>bigpipe.set("pageletr01",null);</script>');
      cb(null);
    }, 2000)
  }, function (cb) {
    setTimeout(function () {
      // console.log('----pageletr02----');
      res.write('<script>bigpipe.set("pageletr02",null);</script>');
      cb(null);
    }, 5000)

  }, function (cb) {
    setTimeout(function () {
      // console.log('----pageletr03----');
      res.write('<script>bigpipe.set("pageletr03",null);</script>');
      cb(null);
    }, 4000)

  }], function (err, rlt) {
    res.end();
  })

});

module.exports = router;
