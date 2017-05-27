/*! svg.easing.js - v2.0.0 - 2016-04-25
 * https://github.com/wout/svg.easing.js
 * Copyright (c) 2016 Wout Fierens; Licensed MIT */
!function () {
    var a = {
        quadIn: function (a) {
            return Math.pow(a, 2)
        }, quadOut: function (a) {
            return -(Math.pow(a - 1, 2) - 1)
        }, quadInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
        }, cubicIn: function (a) {
            return Math.pow(a, 3)
        }, cubicOut: function (a) {
            return Math.pow(a - 1, 3) + 1
        }, cubicInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
        }, quartIn: function (a) {
            return Math.pow(a, 4)
        }, quartOut: function (a) {
            return -(Math.pow(a - 1, 4) - 1)
        }, quartInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
        }, quintIn: function (a) {
            return Math.pow(a, 5)
        }, quintOut: function (a) {
            return Math.pow(a - 1, 5) + 1
        }, quintInOut: function (a) {
            return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
        }, sineIn: function (a) {
            return -Math.cos(a * (Math.PI / 2)) + 1
        }, sineOut: function (a) {
            return Math.sin(a * (Math.PI / 2))
        }, sineInOut: function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        }, expoIn: function (a) {
            return 0 == a ? 0 : Math.pow(2, 10 * (a - 1))
        }, expoOut: function (a) {
            return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
        }, expoInOut: function (a) {
            return 0 == a ? 0 : 1 == a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
        }, circIn: function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }, circOut: function (a) {
            return Math.sqrt(1 - Math.pow(a - 1, 2))
        }, circInOut: function (a) {
            return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, backIn: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, backOut: function (a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }, backInOut: function (a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, swingFromTo: function (a) {
            var b = 1.70158;
            return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, swingFrom: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, swingTo: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, bounce: function (a) {
            var b, c = 7.5625, d = 2.75;
            return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
        }, bounceOut: function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, elastic: function (a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        }
    };
    for (let key in a)SVG.easing[key] = a[key]
}();
