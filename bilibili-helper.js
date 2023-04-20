// ==UserScript==
// @name         [Bilibili] my helper
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Control video play speed with your keyboard
// @author       alcheung<cangzan@gmail.com>
// @match        https://www.bilibili.com/video/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @require      https://cdn.jsdelivr.net/npm/toastify-js@latest/src/toastify.js
// @resource     IMPORTED_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// ==/UserScript==

(function () {
    'use strict';

    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);

    const style = document.createElement('style');
    document.head.appendChild(style);

    const Steps = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
    const toast = window.Toastify({
        text: '1x',
        duration: 1500,
        position: 'center',
        className: 'b-toast'
    });
    toast.toastElement = toast.buildToast();

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
        toast.options.text = Steps[next] + 'x';

        const rect = video.getBoundingClientRect();
        toast.options.style.marginTop = rect.top + rect.height / 2;
        toast.options.style.left = rect.left + rect.width / 2;

        style.textContent = `.b-toast {
          margin: 0;
          top: ${rect.top + rect.height * 0.1}px !important;
          left: ${rect.left + rect.width / 2}px;
          transform: translateX(-50%) !important;
          background: rgba(28,28,28,.8);
          font-size: 1rem;
          padding: 1ex 2ex;
        }`;

        toast.hideToast();
        toast.showToast();
    }

    document.addEventListener('keydown', onChange)
})();