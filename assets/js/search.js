/*
 * Site-wide search for the BDS Portfolio SOP site.
 * Loads /search.json once, expands the typed query using the domain
 * synonym map in search-synonyms.js, scores every entry, and renders
 * clickable results (title + snippet) in a dropdown under the search box.
 *
 * Depends on: search-synonyms.js (window.SOP_SYNONYMS) loaded before this file.
 * Expects markup (added in _layouts/default.html):
 *   <input id="sop-search-input" data-baseurl="{{ site.baseurl }}">
 *   <div id="sop-search-results"></div>
 */
(function () {
  var indexPromise = null;

  function loadIndex(baseurl) {
    if (indexPromise) return indexPromise;
    indexPromise = fetch(baseurl + '/search.json')
      .then(function (res) {
        if (!res.ok) throw new Error('search.json responded ' + res.status);
        return res.json();
      })
      .catch(function (err) {
        console.error('SOP search: could not load search.json', err);
        return [];
      });
    return indexPromise;
  }

  function expandQuery(query) {
    var q = query.toLowerCase().trim();
    var terms = new Set();
    if (!q) return terms;
    terms.add(q);
    var dict = window.SOP_SYNONYMS || {};
    Object.keys(dict).forEach(function (key) {
      var group = [key].concat(dict[key]);
      var matched = group.some(function (term) {
        return q.indexOf(term) !== -1 || term.indexOf(q) !== -1;
      });
      if (matched) {
        group.forEach(function (term) { terms.add(term); });
      }
    });
    return terms;
  }

  function scoreEntry(entry, terms) {
    var score = 0;
    var title = (entry.title || '').toLowerCase();
    var content = (entry.content || '').toLowerCase();
    terms.forEach(function (term) {
      if (!term) return;
      if (title.indexOf(term) !== -1) score += 5;
      if (content.indexOf(term) !== -1) score += 1;
    });
    return score;
  }

  function snippet(content, terms) {
    var text = content || '';
    var lower = text.toLowerCase();
    var idx = -1;
    terms.forEach(function (term) {
      if (idx !== -1 || !term) return;
      var found = lower.indexOf(term);
      if (found !== -1) idx = found;
    });
    if (idx === -1) idx = 0;
    var start = Math.max(0, idx - 40);
    var end = Math.min(text.length, idx + 100);
    var s = text.slice(start, end).trim();
    return (start > 0 ? '…' : '') + s + (end < text.length ? '…' : '');
  }

  function render(container, results, terms) {
    container.innerHTML = '';
    if (!results.length) {
      var empty = document.createElement('div');
      empty.className = 'sop-search-empty';
      empty.textContent = 'No matches in this SOP.';
      container.appendChild(empty);
      container.hidden = false;
      return;
    }
    results.forEach(function (entry) {
      var a = document.createElement('a');
      a.className = 'sop-search-result';
      a.href = entry.url;

      var titleEl = document.createElement('div');
      titleEl.className = 'sop-search-result-title';
      titleEl.textContent = entry.title;

      var snippetEl = document.createElement('div');
      snippetEl.className = 'sop-search-result-snippet';
      snippetEl.textContent = snippet(entry.content, terms);

      a.appendChild(titleEl);
      a.appendChild(snippetEl);
      container.appendChild(a);
    });
    container.hidden = false;
  }

  function init() {
    var input = document.getElementById('sop-search-input');
    var results = document.getElementById('sop-search-results');
    if (!input || !results) return;

    var baseurl = input.getAttribute('data-baseurl') || '';
    var debounceTimer = null;

    input.addEventListener('input', function () {
      var query = input.value;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        if (!query || query.trim().length < 2) {
          results.hidden = true;
          results.innerHTML = '';
          return;
        }
        loadIndex(baseurl).then(function (index) {
          var terms = expandQuery(query);
          var scored = index
            .map(function (entry) { return { entry: entry, score: scoreEntry(entry, terms) }; })
            .filter(function (r) { return r.score > 0; });
          scored.sort(function (a, b) { return b.score - a.score; });
          render(results, scored.slice(0, 15).map(function (r) { return r.entry; }), terms);
        });
      }, 150);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        results.hidden = true;
        input.blur();
      }
    });

    document.addEventListener('click', function (e) {
      if (e.target !== input && !results.contains(e.target)) {
        results.hidden = true;
      }
    });

    input.addEventListener('focus', function () {
      if (input.value.trim().length >= 2 && results.innerHTML) {
        results.hidden = false;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
