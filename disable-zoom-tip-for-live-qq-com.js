// ==UserScript==
// @name      企鹅直播禁用缩放提醒 Disable zoom tip for live.qq.com
// @namespace    https://greasyfork.org/zh-CN/scripts/395988
// @version      1.0
// @description  Disable zoom tip for live.qq.com
// @author       Al Cheung
// @match        *://live.qq.com/
// @require      https://cdn.staticfile.org/js-cookie/2.2.1/js.cookie.min.js
// ==/UserScript==

(function() {
    'use strict';

    window.Cookies.set('zoomtip', 1, { expires: 360 });
})();