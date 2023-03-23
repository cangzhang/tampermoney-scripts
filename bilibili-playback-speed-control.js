// ==UserScript==
// @name         [Bilibili] keyboard shortcut for controlling video playback speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Control video playback speed with your keyboard
// @author       alcheung<cangzan@gmail.com>
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const Steps = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];

    function onChange(ev) {
        const { key } = ev;
        if (![">", "<"].includes(key)) {
            return;
        }

        let video = document.querySelector('video');
        let current = +(video.playbackRate);
        if (!Steps.includes(current)) {
            video.playbackRate = 1;
            return;
        }

        const quicker = key === ">";
        let idx = Steps.indexOf(current);
        let next = idx + 1;
        if (quicker) {
            if (next === Steps.length) {
                next = 2; // set speed back to 1
            }
        } else {
            next = idx - 1;
            if (next === -1) {
                next = 2;
            }
        }

        video.playbackRate = Steps[next];
        console.info(`Playback rate set to ${Steps[next]}`);
    }

    document.addEventListener('keydown', onChange)
})();