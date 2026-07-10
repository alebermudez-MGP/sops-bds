---
layout: default
title: DAG Program Cost & CC Payment Calculator
---

<p>
🏠 <a href="./dag-index">DAG Home</a> &nbsp;|&nbsp;
<a href="./dag-01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./dag-02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./dag-03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./dag-04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./dag-05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./dag-schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./dag-paynow-link">PayNow Link</a> &nbsp;|&nbsp;
<a href="./dag-calculator">Calculator</a>
</p>

---

# 🧮 DAG Program Cost & CC Payment Calculator

💡 Same CC payment formula as BDS — confirmed in [05 — Quick Reference, Section 5](./dag-05-quick-reference#section-5--card-payment-rules): "BDS and DAG continue to use the same percentage for the card payment." Only the branding changes here.

<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .calc-wrap { max-width: 900px; margin: 0 auto; padding: 1.5rem 1rem; font-family: system-ui, sans-serif; }
  .calc-header { background: #1a3c2e; border-radius: 12px 12px 0 0; padding: 1.25rem 1.5rem; display: flex; align-items: center; justify-content: space-between; }
  .calc-header-title { color: #ffffff; font-size: 18px; font-weight: 600; }
  .calc-header-sub { color: #7ec8a0; font-size: 13px; margin-top: 2px; }
  .calc-body { background: #ffffff; border: 1px solid #d4e8dc; border-top: none; border-radius: 0 0 12px 12px; padding: 1.75rem; }

  /* Top row: input + program cost side by side */
  .top-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: end; margin-bottom: 1.5rem; }
  .field-label { font-size: 13px; font-weight: 600; color: #1a3c2e; margin-bottom: 6px; display: block; }
  .field-input { padding: 13px 16px; border: 1.5px solid #b8d9c5; border-radius: 8px; background: #f5fbf7; color: #1a3c2e; font-size: 20px; width: 100%; transition: border-color 0.2s; }
  .field-input:focus { outline: none; border-color: #2eb85c; background: #fff; }
  .field-input::placeholder { color: #a0b8aa; font-size: 16px; }

  .result-box { background: #1a3c2e; border-radius: 8px; padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; height: 100%; }
  .result-label { font-size: 13px; color: #7ec8a0; font-weight: 500; }
  .result-value { font-size: 32px; font-weight: 700; color: #ffffff; }
  .result-copy { display: flex; align-items: center; gap: 10px; }
  .copy-btn-light { background: none; border: none; cursor: pointer; padding: 2px 6px; border-radius: 4px; font-size: 14px; color: #7ec8a0; opacity: 0.7; transition: opacity 0.15s; }
  .copy-btn-light:hover { opacity: 1; }

  .divider { border: none; border-top: 1px solid #e8f3ec; margin: 1.25rem 0; }
  .section-label { font-size: 11px; font-weight: 700; color: #4a7a5e; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.75rem; }

  /* CC grid: two columns */
  .cc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .cc-box { border-radius: 8px; padding: 1.25rem; }
  .cc-box.max { background: #1a3c2e; }
  .cc-box.min { background: #f5fbf7; border: 1px solid #d4e8dc; }
  .cc-tag { display: inline-block; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 20px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
  .cc-tag.max { background: #2eb85c; color: #ffffff; }
  .cc-tag.min { background: #fff3cd; color: #856404; }
  .cc-main-label { font-size: 12px; margin-bottom: 4px; }
  .cc-box.max .cc-main-label { color: #7ec8a0; }
  .cc-box.min .cc-main-label { color: #4a7a5e; }
  .cc-amount { font-size: 36px; font-weight: 700; margin-bottom: 12px; }
  .cc-box.max .cc-amount { color: #ffffff; }
  .cc-box.min .cc-amount { color: #1a3c2e; }
  .cc-amount-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .cc-row { display: flex; justify-content: space-between; align-items: center; font-size: 13px; padding: 7px 0; border-top: 1px solid; gap: 8px; }
  .cc-box.max .cc-row { color: #7ec8a0; border-color: #2a5a42; }
  .cc-box.min .cc-row { color: #4a7a5e; border-color: #d4e8dc; }
  .cc-row-label { flex: 1; }
  .cc-row-val { display: flex; align-items: center; gap: 6px; white-space: nowrap; font-weight: 600; font-size: 15px; }
  .cc-box.max .cc-row-val { color: #ffffff; }
  .cc-box.min .cc-row-val { color: #1a3c2e; }
  .copy-btn { background: none; border: none; cursor: pointer; padding: 2px 4px; border-radius: 4px; font-size: 12px; opacity: 0.6; transition: opacity 0.15s; }
  .copy-btn:hover { opacity: 1; }
  .cc-box.max .copy-btn { color: #7ec8a0; }
  .cc-box.min .copy-btn { color: #4a7a5e; }
  .note-box { background: #fff8e1; border: 1px solid #ffe082; border-radius: 8px; padding: 0.75rem 1rem; font-size: 13px; color: #7a5800; margin-top: 1rem; }
</style>

<div class="calc-wrap">
  <div class="calc-header">
    <div>
      <div class="calc-header-title">DAG Program Cost & CC Payment Calculator</div>
      <div class="calc-header-sub">Enter the enrolled debt amount to calculate</div>
    </div>
  </div>

  <div class="calc-body">

    <!-- Top row: input + program cost -->
    <div class="top-row">
      <div>
        <label class="field-label" for="enrolled">Enrolled Debt Amount ($)</label>
        <input class="field-input" type="number" id="enrolled" placeholder="e.g. 25,000" min="0" oninput="calculate()">
      </div>
      <div class="result-box">
        <span class="result-label">Total Program Cost</span>
        <div class="result-copy">
          <span class="result-value" id="program-cost">$0.00</span>
          <button class="copy-btn-light" onclick="copyVal('program-cost')" title="Copy">⎘</button>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <p class="section-label">CC Payment Options</p>
    <div class="cc-grid">

      <div class="cc-box max">
        <span class="cc-tag max">✓ Max — default</span>
        <div class="cc-main-label">Max CC Amount</div>
        <div class="cc-amount-row">
          <div class="cc-amount" id="max-cc-amount">$0.00</div>
          <button class="copy-btn" onclick="copyVal('max-cc-amount')" title="Copy">⎘</button>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">Fee Amount — Processing on Card</span>
          <div class="cc-row-val"><span id="max-fee">$0.00</span><button class="copy-btn" onclick="copyVal('max-fee')" title="Copy">⎘</button></div>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">CC Processor Fee</span>
          <div class="cc-row-val"><span id="max-processor">$0.00</span><button class="copy-btn" onclick="copyVal('max-processor')" title="Copy">⎘</button></div>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">CC Process Payment Amount</span>
          <div class="cc-row-val"><span id="max-total">$0.00</span><button class="copy-btn" onclick="copyVal('max-total')" title="Copy">⎘</button></div>
        </div>
      </div>

      <div class="cc-box min">
        <span class="cc-tag min">⚠ Min — exception only</span>
        <div class="cc-main-label">Min CC Amount</div>
        <div class="cc-amount-row">
          <div class="cc-amount" id="min-cc-amount">$0.00</div>
          <button class="copy-btn" onclick="copyVal('min-cc-amount')" title="Copy">⎘</button>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">Fee Amount — Processing on Card</span>
          <div class="cc-row-val"><span id="min-fee">$0.00</span><button class="copy-btn" onclick="copyVal('min-fee')" title="Copy">⎘</button></div>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">CC Processor Fee</span>
          <div class="cc-row-val"><span id="min-processor">$0.00</span><button class="copy-btn" onclick="copyVal('min-processor')" title="Copy">⎘</button></div>
        </div>
        <div class="cc-row">
          <span class="cc-row-label">CC Process Payment Amount</span>
          <div class="cc-row-val"><span id="min-total">$0.00</span><button class="copy-btn" onclick="copyVal('min-total')" title="Copy">⎘</button></div>
        </div>
      </div>

    </div>

    <div class="note-box">
      ⚠️ If the MAX CC Process Payment Amount exceeds the first scheduled ACH payment, use the MIN instead. MIN requires Management approval.
    </div>
  </div>
</div>

<script>
function fmt(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function copyVal(id) {
  const el = document.getElementById(id);
  const text = el.textContent.replace('$', '').replace(/,/g, '');
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.parentElement.querySelector('.copy-btn, .copy-btn-light');
    const orig = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => { btn.textContent = orig; }, 1200);
  });
}

function calculate() {
  const enrolled = parseFloat(document.getElementById('enrolled').value) || 0;

  const programCost = enrolled * 0.70;

  let feeRate = 0.03;
  if (enrolled >= 100000) feeRate = 0.015;
  else if (enrolled >= 50000) feeRate = 0.02;
  else if (enrolled >= 15000) feeRate = 0.025;

  const maxFee = Math.round(enrolled * feeRate * 100) / 100;
  const maxProcessor = Math.round(maxFee * 0.04 * 100) / 100;
  const maxTotal = Math.round((maxFee + maxProcessor) * 100) / 100;

  const minFee = Math.round(enrolled * 0.01 * 100) / 100;
  const minProcessor = Math.round(minFee * 0.04 * 100) / 100;
  const minTotal = Math.round((minFee + minProcessor) * 100) / 100;

  document.getElementById('program-cost').textContent = fmt(programCost);
  document.getElementById('max-cc-amount').textContent = fmt(maxFee);
  document.getElementById('max-fee').textContent = fmt(maxFee);
  document.getElementById('max-processor').textContent = fmt(maxProcessor);
  document.getElementById('max-total').textContent = fmt(maxTotal);
  document.getElementById('min-cc-amount').textContent = fmt(minFee);
  document.getElementById('min-fee').textContent = fmt(minFee);
  document.getElementById('min-processor').textContent = fmt(minProcessor);
  document.getElementById('min-total').textContent = fmt(minTotal);
}
</script>

---

<p>
🏠 <a href="./dag-index">DAG Home</a> &nbsp;|&nbsp;
<a href="./dag-01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./dag-02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./dag-03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./dag-04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./dag-05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./dag-schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./dag-paynow-link">PayNow Link</a> &nbsp;|&nbsp;
<a href="./dag-calculator">Calculator</a>
</p>
