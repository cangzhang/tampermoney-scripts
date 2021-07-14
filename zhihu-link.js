// ==UserScript==
// @name         Open zhihu link directly 直接打开知乎链接
// @namespace    https://github.com/cangzhang/tampermoney-scripts
// @version      0.2
// @description  跳过中转页面, 直接打开知乎链接
// @author       alcheung
// @match        https://www.zhihu.com/*
// @match        https://zhuanlan.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?domain=greasyfork.org
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function isLink(href = ``) {
    return /https?:\/\/link\.zhihu\.com\/\?target=/.test(href);
  }

  function getTarget(href = ``, ev) {
    let realUrl = ``;
    if (isLink(href)) {
      ev.preventDefault();
      ev.stopPropagation();
      const url = new URL(href);
      const search = new URLSearchParams(url.search);
      realUrl = search.get(`target`);
    }
    return realUrl;
  }

  document.addEventListener(
    `click`,
    (ev) => {
      const el = ev.target;
      let targetUrl;
      switch (el.tagName) {
        case `SPAN`: {
          if (el.className.includes(`visible`)) {
            const anchor = el.parentNode;
            targetUrl = getTarget(anchor.href, ev);
          }
          break;
        }
        case `A`: {
          targetUrl = getTarget(el.href, ev);
          break;
        }
        default:
          break;
      }

      if (targetUrl) {
        window.open(targetUrl, `_blank`);
      }
    },
    false
  );
})();
