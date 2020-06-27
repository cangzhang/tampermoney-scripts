// ==UserScript==
// @name         [Bilibili.com] Auto disable danmu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto disable danmu layer for Bilibili.com.
// @author       Al Cheung
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const targetSelector = `#bilibiliPlayer .bilibili-player-video-danmaku-root .bilibili-player-video-danmaku-switch.bui-switch > input`;

    const task = setInterval(() => {

        const target = document.querySelector(targetSelector);

        if (target && target.click) {
            target.checked && target.click();
            clearInterval(task)
        }

    }, 1000);
})();
