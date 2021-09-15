javascript: (function () {
  document.title = window.location.hostname;
  var target = document.querySelector('title');
  var observer = new MutationObserver(function () {
    if (document.title !== window.location.hostname) {
      document.title = window.location.hostname;
    }
  });
  var config = { characterData: false, attributes: false, childList: true, subtree: false };
  observer.observe(target, config);
})()
