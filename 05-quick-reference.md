---
layout: default
title: 05 — Quick Reference
---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a>
</p>

---

# 📌 05 — Quick Reference Rules

Fast lookup for restricted states, eligible/ineligible creditors, ACH and payment limits, program length limits, and card payment rules.

---

## Section 1 — Restricted States

<details>
<summary>🚫 States we do not work with</summary>
<br>
<ul>
<li>Arizona (AZ)</li>
<li>Kansas (KS)</li>
<li>Louisiana (LA)</li>
<li>West Virginia (WV)</li>
<li>Wyoming (WY)</li>
</ul>
<br>
💡 If a sales agent sends a Quote Request with one of the above states, reply stating that we cannot work with that specific state.
</details>

---

## Section 2 — Eligible vs Ineligible Creditors

<details>
<summary>✅ Eligible Creditor Types (Allowed)</summary>
<br>
Only the following creditor types may be enrolled:
<ul>
<li>Merchant Cash Advances (MCA)</li>
<li>Business Lines of Credit (LOC)</li>
<li>Factoring Companies</li>
<li>Reverse Consolidation Companies</li>
</ul>
</details>

<details>
<summary>🚫 Ineligible Creditor Types (Not Allowed)</summary>
<br>
The following creditor types must not be enrolled:
<ul>
<li>Payday Loans</li>
<li>Leasing / Lease-to-Own Companies</li>
<li>Investment Companies</li>
<li>Management Companies</li>
<li>Real Estate Management Companies</li>
<li>Mortgage Companies</li>
</ul>
<br>
⚠️ This list is not exhaustive. If the creditor type is unclear or does not clearly fall into an eligible category, escalate to Management for review.
<br><br>
🌎 <strong>Geographic Requirement:</strong> The creditor must be located and operating within the United States.
</details>

<details>
<summary>⏳ Enrollment Waiting Period (Debt Aging)</summary>
<br>
Before adding a creditor for enrollment, confirm the debt meets the required aging criteria:
<table>
<tr><th>Creditor</th><th>Minimum Aging</th></tr>
<tr><td>Standard rule</td><td>30 calendar days from the agreement date</td></tr>
<tr><td>Fora &amp; McKenzie</td><td>45 calendar days</td></tr>
<tr><td>Everest / Vader</td><td>45 days after funding</td></tr>
<tr><td>Byzfunder NY LLC</td><td>30 days old for DAG — UW must note the opportunity with the approx. funded date</td></tr>
<tr><td>Blacklisted creditors</td><td>Remain ineligible regardless of timing</td></tr>
</table>
</details>

<details>
<summary>🔠 Creditor name and Gsheet rules</summary>
<br>
<ul>
<li>Always search the Creditors Gsheet first (primary source of truth) and copy the exact spelling — never use alternate spellings from Sales communications.</li>
<li>Creditor names entered in SF must use Capitalized Format (e.g., This Is Capitalized).</li>
<li>If the creditor is not on the Gsheet, add an ALERT in CRM. Quotes may still be issued; documentation is not required at the Quote stage but is required prior to issuing a Contract.</li>
<li>Placeholder entries such as "Creditor 1" or "Creditor 2" are not permitted.</li>
<li>If a creditor name contains a slash (/), use only one creditor name — never both. If Sales provides two names, request clarification or request the executed contract.</li>
</ul>
</details>

<details>
<summary>🔒 Lendini / Quickfix (Management Approval Required)</summary>
<br>
<ul>
<li>Always escalate to Management.</li>
<li>CR requests: approval must be obtained before account creation.</li>
<li>US Sales requests: account creation may begin, but Quotes must not be sent until approval is granted.</li>
<li>If approved, Management will provide the applicable card payment amount (if required).</li>
<li>If denied, do not include in Quote and notify Sales immediately.</li>
<li>Approved creditor names only: <strong>Lendini</strong> or <strong>Quickfix</strong> (do not use Funding Metrics or FM).</li>
</ul>
</details>

---

## Section 3 — ACH and Payment Limits

<details>
<summary>💰 ACH cap</summary>
<br>
The calculated ACH amount must <strong>never exceed $10,000</strong> under any circumstances.
</details>

<details>
<summary>📅 Payment frequency guidelines</summary>
<br>
<ul>
<li>The only standard payment frequency we use is <strong>bi-weekly</strong>.</li>
<li>We do not work with a monthly payment frequency.</li>
<li>Weekly payments are only permitted in specific cases as instructed by Underwriting Pricing guidance.</li>
</ul>
</details>

---

## Section 4 — Program Length Limits

<details>
<summary>📏 Max term by debt amount</summary>
<br>
<table>
<tr><th>Debt Amount (From)</th><th>Debt Amount (To)</th><th>Max Months</th><th>With Approval</th></tr>
<tr><td>$0</td><td>$15,000.00</td><td>Up to 8</td><td>Up to 10</td></tr>
<tr><td>$15,000.01</td><td>$79,999.99</td><td>Up to 20</td><td>Depends</td></tr>
<tr><td>$80,000.01</td><td>Higher</td><td>Up to 24</td><td>Depends</td></tr>
</table>
<br>
💡 Exceptions apply as long as there are approvals, and as long as the Estimated Savings is not showing as negative.
</details>

<details>
<summary>💵 Deals under $5,000 / Funding Metrics (FM) deals</summary>
<br>
<ul>
<li>For deals with Funding Metrics (Lendini / QuickFix / Micro Advance) creditors, a quote is provided directly to the sales agent.</li>
<li>Minimum enrolled debt for Funding Metrics creditors: <strong>$2,500.00</strong>.</li>
<li>Keep payment terms within the <strong>4- to 5-month</strong> range.</li>
<li>A maximum term of <strong>up to 7 months</strong> may be used with management approval.</li>
</ul>
</details>

<details>
<summary>🚫 Lumpsum option</summary>
<br>
Effective immediately, the Lumpsum payment option is <strong>not available</strong>.
<br><br>
The closest available alternative is a one-month term structured into two bi-weekly payments.
</details>

---

## Section 5 — Card Payment Rules

<details>
<summary>💳 Card Payment Calculator guidelines</summary>
<br>
<ul>
<li>The calculator provides a Max and Min range. Underwriting should always work with the <strong>Max amount</strong>.</li>
<li>The Min amount should only be used if an exception is requested by Sales and approved by Management.</li>
<li>BDS and DAG continue to use the same percentage for the card payment.</li>
<li>If the Card Payment calculated using the Default Card Fee is greater than the first scheduled ACH payment, use the <strong>minimum Card Payment (1% of the enrolled debt)</strong> instead.</li>
<li>This exception applies only when the calculated Card Payment exceeds the first ACH payment — the goal is to ensure the Card Payment never exceeds the first scheduled ACH.</li>
</ul>
</details>

<details>
<summary>📋 General card payment rule</summary>
<br>
<ul>
<li>Any card payment amount must be confirmed with Management before entry into the system.</li>
<li>Card payment is not required for enrollment.</li>
<li>Always add the card payment information under the Card Payment Information section of the opportunity.</li>
</ul>
</details>

---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a>
</p>
