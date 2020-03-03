// ==UserScript==
// @name         Github.com: Add profile link to nav.
// @namespace    https://greasyfork.org/zh-CN/scripts/397263
// @version      0.2
// @description  Add profile link to nav bar.
// @author       Al Cheung
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const $ = document.querySelector.bind(document);
    const headerList = $(`nav.d-flex`);
    const a = document.createElement(`a`);
    a.className = `js-selected-navigation-item Header-link  mr-3`;
    a.innerText = `My Profile`;
    const userName = $(`details > summary > img`).alt.replace(`@`, '');
    a.href = `//github.com/${userName}`;
    headerList.appendChild(a);
})();