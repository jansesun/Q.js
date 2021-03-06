var $ = require('jquery'),
    noop = function () {},
    defer = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        setTimeout;

module.exports = {
    find: $.find,
    contains: $.contains,
    data: $.data,
    cleanData: $.cleanData,
    add: $.event.add,
    remove: $.event.remove,
    clone: $.clone,
    extend: $.extend,
    slice: [].slice,
    noop: noop,
    /**
     * Add class with compatibility for IE & SVG
     *
     * @param {Element} el
     * @param {Strong} cls
     */
    addClass: function (el, cls) {
        if (el.classList) {
            el.classList.add(cls);
        } else {
            var cur = ' ' + (el.getAttribute('class') || '') + ' ';
            if (cur.indexOf(' ' + cls + ' ') < 0) {
                el.setAttribute('class', trim((cur + cls)));
            }
        }
    },
    /**
     * Remove class with compatibility for IE & SVG
     *
     * @param {Element} el
     * @param {Strong} cls
     */
    removeClass: function (el, cls) {
        if (el.classList) {
            el.classList.remove(cls);
        } else {
            var cur = ' ' + (el.getAttribute('class') || '') + ' ',
                tar = ' ' + cls + ' ';
            while (cur.indexOf(tar) >= 0) {
                cur = cur.replace(tar, ' ');
            }
            el.setAttribute('class', trim(cur));
        }
    },
    through: function (s) { return s; },
    warn: function () {
        return (window.console && console.error) ? function (msg) {
                console.error(msg);
            } : noop;
    },
    isObject: function (o) {
        return typeof o === 'object';
    },
    nextTick: function (cb, ctx) {
        ctx ?
            defer(function () { cb.call(ctx) }, 0) :
            defer(cb, 0);
    }
};
