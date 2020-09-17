// ==UserScript==
// @name         Github.com: Add profile link to nav.
// @namespace    https://greasyfork.org/zh-CN/scripts/397263
// @version      0.4
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
    a.className = `js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15`;
    a.innerText = `My Profile`;
    const userName = $(`details > summary > img`).alt.replace(`@`, '');
    a.href = `//github.com/${userName}`;
    headerList.appendChild(a);
})();
