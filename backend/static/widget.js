/*!
 * FitScan size-finder widget
 * Add to any product page:
 *   <script src="https://YOUR-HOST/widget.js"
 *           data-store-key="YOUR_STORE_KEY"
 *           data-category="jeans"                 (tops, jeans, kurta, shirt, ...)
 *           data-gender="F"                       (optional: F or M, otherwise the shopper chooses)
 *           data-size-selector="#size-select"     (optional: a <select> to auto-fill)
 *           data-button-text="Find my size"></script>
 * The page also receives a "fitscan:size" event:  {size, p_fit, category}
 */
(function () {
  var script = document.currentScript;
  if (!script) return;
  var ORIGIN = new URL(script.src).origin;
  var key = script.getAttribute("data-store-key") || "";
  var category = script.getAttribute("data-category") || "";
  var gender = script.getAttribute("data-gender") || "";
  var sel = script.getAttribute("data-size-selector") || "";
  var text = script.getAttribute("data-button-text") || "Find my size";
  var overlay, frame;

  function close() { if (overlay) { overlay.remove(); overlay = null; frame = null; document.body.style.overflow = ""; } }

  function open() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.setAttribute("style", "position:fixed;inset:0;background:rgba(15,20,25,.55);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:12px;");
    var box = document.createElement("div");
    box.setAttribute("style", "position:relative;background:#fff;border-radius:16px;width:min(520px,100%);height:min(760px,100%);overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.35);");
    var x = document.createElement("button");
    x.textContent = "×"; x.setAttribute("aria-label", "Close");
    x.setAttribute("style", "position:absolute;top:8px;right:10px;z-index:2;border:0;background:#fff;border-radius:999px;width:34px;height:34px;font-size:22px;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.2)");
    x.onclick = close;
    frame = document.createElement("iframe");
    var q = "?store=" + encodeURIComponent(key) + "&category=" + encodeURIComponent(category) + (gender ? "&gender=" + gender : "");
    frame.src = ORIGIN + "/embed" + q;
    frame.setAttribute("allow", "camera");
    frame.setAttribute("title", "FitScan size finder");
    frame.setAttribute("style", "border:0;width:100%;height:100%;");
    box.appendChild(x); box.appendChild(frame); overlay.appendChild(box);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
  }

  function applySize(size) {
    if (!sel) return;
    var el = document.querySelector(sel);
    if (!el) return;
    if (el.tagName === "SELECT") {
      for (var i = 0; i < el.options.length; i++) {
        var o = el.options[i];
        if (o.value === size || o.text.trim() === size || o.text.trim().indexOf(size + " ") === 0) {
          el.selectedIndex = i; el.dispatchEvent(new Event("change", { bubbles: true })); break;
        }
      }
    }
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGIN || !e.data || typeof e.data !== "object") return;
    if (e.data.type === "fitscan:size") {
      applySize(e.data.size);
      window.dispatchEvent(new CustomEvent("fitscan:size", { detail: e.data }));
      if (e.data.close) close();
    } else if (e.data.type === "fitscan:close") { close(); }
  });

  function mount() {
    var btn = document.createElement("button");
    btn.type = "button"; btn.textContent = "📏 " + text;
    btn.setAttribute("style", "font:600 15px system-ui,sans-serif;padding:12px 18px;border-radius:10px;border:1.5px solid #0f766e;background:#fff;color:#0f766e;cursor:pointer");
    btn.onclick = open;
    script.parentNode.insertBefore(btn, script.nextSibling);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
