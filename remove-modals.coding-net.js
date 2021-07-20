// ==UserScript==
// @name         Remove fucking modals 移除 coding.net 强制弹窗
// @namespace    https://github.com/cangzhang/tampermoney-scripts
// @version      0.1
// @description  remove all modals that are showed when visiting coding.net
// @author       alcheung
// @match        *://*.coding.com/*
// @match        *://*.coding.net/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let removed = false;
  const handle = setInterval(() => {
    const modals = document.querySelectorAll(
      `body > [style$=" position: relative;"]`
    );
    if (modals.length > 0 && !removed) {
      [...modals].forEach((modal) => {
        modal.parentNode.removeChild(modal);
      });
      removed = true;
      console.info(`[tampermonkey: Remove fucking modals] 弹窗已移除`);
      clearInterval(handle);
    }
  }, 1500);
})();
