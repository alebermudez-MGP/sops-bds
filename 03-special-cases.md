---
layout: default
title: 03 — Special Cases
---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-special-cases">03 — Special Cases</a> &nbsp;|&nbsp;
<a href="./04-quick-reference">04 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a>
</p>

---

# ⚠️ 03 — Special Cases

This page covers special handling scenarios that fall outside the standard Quote Request and Contract Request flows.

---

## Section 1 — Account Creation: Special Character Restrictions

<details>
<summary>🔤 Special characters (accents / tildes) are not allowed</summary>
<br>
<strong>Purpose</strong><br>
To prevent transaction failures caused by system limitations related to special characters in client account information.
<br><br>
<strong>Policy</strong><br>
Processors have identified that their system cannot properly read account information containing acute accents (e.g., á, é, í, ó, ú) or tildes (e.g., ñ). The presence of these characters has resulted in failed transactions.
<br><br>
<strong>Procedure</strong>
<ul>
<li>Do not input any accented characters, including acute accents or tildes, when creating new client accounts.</li>
<li>Ensure all names and account details are entered using standard English characters only.</li>
<li>If a client's legal information contains these characters, replace them with the closest standard English letter.<br>
Example: <em>"José" → "Jose"</em> &nbsp;|&nbsp; <em>"Peña" → "Pena"</em></li>
</ul>
<br>
💡 This requirement applies to all client accounts, including new enrollments, updates, or corrections.<br><br>
⚠️ If unsure how to proceed with an account name containing special characters, escalate to your supervisor or the processing support team.
</details>

---

## Section 2 — LOC (Line of Credit) and Mixed Debt Scenarios

<details>
<summary>💳 LOC Processing</summary>
<br>
<ul>
<li>LOC accounts will be handled through BDS.</li>
<li>When processing LOC, continue to use the standard plan displayed in Salesforce until further notice.</li>
</ul>
</details>

<details>
<summary>🔀 Mixed Debt Scenario (MCA + LOC)</summary>
<br>
In cases where a client has, for example, 2 MCA loans and 1 LOC, the <strong>entire file must be handled by BDS</strong>.
<br><br>
<strong>Opportunity Creation</strong>
<ul>
<li>Opportunities must be created separately:
<ol>
<li>One opportunity for MCA.</li>
<li>Another separate opportunity for LOC.</li>
</ol>
</li>
<li>Each opportunity must include a clear identifier in the name.<br>
Format: <strong>Business Name + Type of Debt</strong><br>
Example: <em>ABC Company – LOC</em></li>
</ul>
</details>

<details>
<summary>🏦 Reminder — LOC requests from specific lenders</summary>
<br>
Line of Credit (LOC) requests received from <strong>OnDeck, Bluevine, or Headway</strong> should be treated as <strong>Merchant Cash Advances (MCAs)</strong>. Follow the MCA process for these cases.
<br><br>
The Underwriting Department will adjust the terms accordingly to reflect MCA parameters rather than LOC terms.
</details>

---

## Section 3 — Risk Score Calculator

<details>
<summary>📊 What the Risk Score Calculator does</summary>
<br>
The Risk Score calculator determines the appropriate portfolio for a customer and generates recommendations. Its output includes:
<ul>
<li><strong>Portfolio</strong> (defined by Sales)</li>
<li><strong>Score</strong> (numeric value, e.g., 28, 32, 47)</li>
<li><strong>Risk Classification</strong> (Low / Medium / High)</li>
</ul>
</details>

<details>
<summary>📝 Salesforce fields and data entry guidelines</summary>
<br>
The Risk Score will appear under the Underwriting section in Salesforce opportunities, along with the Score and Risk Classification fields. Enter the information provided in these designated spaces.
<br><br>
💡 If the template is missing the Score or Portfolio, return it to Sales immediately and request the missing information.<br><br>
💡 If a portfolio is referenced but not specified, confirm with Sales: <em>"Which portfolio did the Risk Score calculator assign?"</em><br><br>
⚠️ A temporary rule may apply: if BDS volume increases significantly, upper management may pause it and advise continuing to work files under DAG only.<br><br>
💡 If the portfolio is changed based on an underwriting decision, confirm with the Sales agent the updated date for the Score and Risk Classification.
</details>

---

## Section 4 — Processor and Portfolio Change

<details>
<summary>⚙️ Changing Processor and/or Portfolio on existing transactions</summary>
<br>
The system allows you to select between processor options (for example, <strong>Kapcharge</strong> or <strong>Actum</strong>) and also update the portfolio.
<br><br>
Both changes can be applied in a single operation — this makes it easier to replace an incorrect processor while keeping the desired portfolio.
<br><br>
<strong>Procedure</strong>
<ul>
<li>Underwriting typically initiates the change starting from payment one to ensure consistency; from that point on, the system begins updating all related transactions.</li>
<li>After executing the change, verify that the processor is set correctly (e.g., Actum) and that the portfolio matches the expected BDS portfolio.</li>
<li>It is essential to verify that both external transactions and internal fees are correctly reflected before continuing with the process.</li>
</ul>
<br>
💡 Once the operation is completed, the system shows a summary of what was updated — always perform a manual consistency check after.
</details>

---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./04-quick-reference">04 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a>
</p>
