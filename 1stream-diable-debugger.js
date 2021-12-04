// ==UserScript==
// @name         1stream.top disable debugger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       al
// @match        http://1stream.top/*
// @icon         https://www.google.com/s2/favicons?domain=1stream.top
// @run-at        document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.eval = () => {};
})();
