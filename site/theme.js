// Light/dark toggle shared by every page. The saved choice is applied earlier by a
// one-line inline script in each <head> (so there's no flash); this file wires up the
// button. With no saved choice, the site follows the device setting.
(() => {
  const root = document.documentElement;
  const darkQuery = matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.dataset.theme || (darkQuery.matches ? 'dark' : 'light');

  const sync = () => document.querySelectorAll('.theme-toggle').forEach(btn => {
    const dark = current() === 'dark';
    btn.dataset.current = dark ? 'dark' : 'light';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = btn.getAttribute('aria-label');
  });

  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode: works for this page only */ }
    sync();
  }));

  darkQuery.addEventListener('change', sync);
  sync();
})();
