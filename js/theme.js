/* MV theme bootstrap — run in <head> before CSS paints.
   Sets <html data-theme> from saved preference or OS setting. */
(function () {
  var t = null;
  try { t = localStorage.getItem('mv-theme'); } catch (e) { }
  if (t !== 'dark' && t !== 'light') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = t;
})();
