export const THEME_STORAGE_KEY = "theme";
export const THEME_CHANGE_EVENT = "themechange";

/*
 * Inlined into <head> so the right theme is applied before first paint.
 * Reads the saved preference ("light" | "dark" | "system"), resolves "system"
 * from prefers-color-scheme, and keeps following the OS while on "system".
 * Exposes window.__setTheme for the switcher, so this is the one place that
 * applies a theme.
 */
export const THEME_SCRIPT = `(function () {
  var KEY = "${THEME_STORAGE_KEY}";
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var root = document.documentElement;
  function read() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "light" || v === "dark" ? v : "system";
    } catch (e) {
      return "system";
    }
  }
  var pref = read();
  function apply() {
    var dark = pref === "dark" || (pref === "system" && mq.matches);
    var scheme = dark ? "dark" : "light";
    if (root.classList.contains("dark") !== dark) root.classList.toggle("dark", dark);
    if (root.style.colorScheme !== scheme) root.style.colorScheme = scheme;
  }
  window.__setTheme = function (next) {
    pref = next;
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    apply();
    window.dispatchEvent(new Event("${THEME_CHANGE_EVENT}"));
  };
  mq.addEventListener("change", apply);
  window.addEventListener("storage", function (e) {
    if (e.key === KEY) {
      pref = read();
      apply();
    }
  });
  // React resets <html> attributes if it ever re-renders the root (e.g. after a hydration mismatch); put the theme back.
  new MutationObserver(apply).observe(root, { attributes: true, attributeFilter: ["class", "style"] });
  apply();
})();`;
