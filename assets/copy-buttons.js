/*
 * Copy-to-clipboard buttons for note/template blocks across the BDS SOP site.
 * Lets agents copy Salesforce note text and email templates without having
 * to manually select the text first.
 *
 * Scope: everything inside .main-content. Targets:
 *   1. <pre> — fenced code blocks (Salesforce note templates in
 *      01-quote-request.md / 02-contract-request.md). Always get a button.
 *   2. <blockquote> whose text does NOT start with an emoji. Blockquotes
 *      that start with 💡 ⚠️ 🚫 🔴 📨 📖 etc. are tips/warnings, not
 *      copy-paste note text, and are intentionally skipped.
 *   3. <details> whose <summary> contains 🗒️ and wraps an <em> template
 *      (the "Note Example" / Section 25 Salesforce Notes blocks in
 *      chirp-review.md).
 *
 * Buttons are inserted as children of the existing block (not new sibling
 * wrappers), so the adjacent-sibling spacing rules in style.scss
 * (e.g. ".page-content h2 + details") keep working unchanged.
 */
(function () {
  var PICTOGRAPH_RE = /^\s*\p{Extended_Pictographic}/u;

  function copyText(text, btn) {
    var original = btn.textContent;

    function finish(ok) {
      btn.textContent = ok ? '✅ Copiado' : '⚠️ No se pudo copiar';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 1500);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { finish(true); },
        function () { fallbackCopy(text, finish); }
      );
    } else {
      fallbackCopy(text, finish);
    }
  }

  function fallbackCopy(text, finish) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    finish(ok);
  }

  function blockText(el) {
    var clone = el.cloneNode(true);
    clone.querySelectorAll('br').forEach(function (br) {
      br.replaceWith('\n');
    });
    return clone.textContent;
  }

  function makeButton(getText, extraClass) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'sop-copy-btn' + (extraClass ? ' ' + extraClass : '');
    btn.textContent = '📋 Copiar';
    btn.setAttribute('aria-label', 'Copiar texto');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      copyText(getText(), btn);
    });
    return btn;
  }

  function addButtons() {
    var scope = document.querySelector('.main-content') || document;

    // 1) Fenced code blocks — always templates.
    scope.querySelectorAll('pre').forEach(function (pre) {
      if (pre.classList.contains('sop-copy-target')) return;
      var text = blockText(pre).replace(/\n+$/, '');
      pre.classList.add('sop-copy-target');
      pre.insertBefore(makeButton(function () { return text; }), pre.firstChild);
    });

    // 2) Note-style blockquotes (skip tip/warning blockquotes that start with an emoji).
    scope.querySelectorAll('blockquote').forEach(function (bq) {
      if (bq.classList.contains('sop-copy-target')) return;
      var text = blockText(bq).trim();
      if (!text || PICTOGRAPH_RE.test(text)) return;
      bq.classList.add('sop-copy-target');
      bq.insertBefore(makeButton(function () { return text; }), bq.firstChild);
    });

    // 3) 🗒️ note-example <details> blocks wrapping an <em> template.
    scope.querySelectorAll('details').forEach(function (det) {
      var summary = det.querySelector('summary');
      if (!summary || summary.textContent.indexOf('🗒️') === -1) return;
      var em = det.querySelector('em');
      if (!em || em.dataset.sopCopyDone) return;
      em.dataset.sopCopyDone = '1';
      var text = blockText(em).replace(/^["“]|["”]$/g, '').trim();
      var btn = makeButton(function () { return text; }, 'sop-copy-btn-inline');
      em.parentNode.insertBefore(btn, em.nextSibling);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addButtons);
  } else {
    addButtons();
  }
})();
