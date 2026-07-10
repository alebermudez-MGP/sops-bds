---
layout: default
title: DAG Schedule Transactions
---

<p>
🏠 <a href="./dag-index">DAG Home</a> &nbsp;|&nbsp;
<a href="./dag-01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./dag-02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./dag-03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./dag-04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./dag-05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./dag-schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./dag-paynow-link">PayNow Link</a>
</p>

---

# ⚙️ DAG Schedule Transactions

**This is a supporting reference.** It is called from [DAG 01 — Quote Request](./dag-01-quote-request) and [DAG 02 — Contract Request](./dag-02-contract-request). It is not a standalone workflow.

💡 Always have both tools open before starting this process:
<ul>
<li>🧮 <a href="https://alebermudez-mgp.github.io/sops-bds/dag-calculator.html">DAG Calculator</a> — Program Cost &amp; CC Payment</li>
<li>📊 <a href="https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?pli=1&gid=340464856#gid=340464856">Underwriting Pricing Sheet</a> — Plan values by state</li>
</ul>

> ⚠️ Confirmed: the DAG Calculator uses the **same per-state values** as the BDS calculator (Funder Fee, Legal Plan base, Monthly Maintenance, Estimated Settlement %, Savings Fee %). The processor is **Actum** for DAG (confirmed) — the calculator field itself may display as "EPPS Fee" internally, same as BDS; this is just the field label, not a different processor.

---

## Step 1 — Open Schedule Transactions

From the opportunity page, click **Schedule Transactions**.

The system will display the creditors linked to the opportunity. Verify they are correct, then click **Next**.

⚠️ If any creditor is missing or incorrect, go back to the opportunity and fix the Creditor Entries before proceeding.

---

## Step 2 — Select the correct plan

<details>
<summary>📋 Which plan do I use?</summary>
<br>
⚠️ There is no separate Salesforce plan per state — for both DAG and BDS, only two plan options exist by debt amount: <strong>Standard</strong> and <strong>Under $15K</strong>. The per-state tables in Step 3 (Florida, Georgia, Idaho, Michigan, Minnesota, Ohio) are <strong>reference value tables only</strong> — they tell you which numbers to manually enter into the fields, not a separate plan to select.
<br><br>
<strong>By debt amount</strong>
<br><br>
<table>
<tr><th>Debt Amount</th><th>Plan to select in Salesforce</th></tr>
<tr><td>Under $15,000</td><td>Under $15K Plan</td></tr>
<tr><td>$15,000 and over</td><td>Standard Plan — then use the values that match the merchant's state (see Step 3)</td></tr>
</table>
<br>
🚫 Never select a plan with the word <strong>Legal</strong> — these are not in use.
</details>

Click **Next** after selecting the plan.

---

## Step 3 — Enter the plan values

💡 The headers below ("Florida Plan," "Georgia Plan," etc.) are value-lookup tables, not separate Salesforce plan options — you always select **Standard** or **Under $15K** in Step 2, then manually enter the values from the table matching the merchant's state. Always verify against the <a href="https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?pli=1&gid=340464856#gid=340464856">Underwriting Pricing Sheet</a>.

<details>
<summary>📊 Standard Plan — all states not listed below</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$75.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>—</td><td>1.50%</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>6</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>35%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Florida Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$50.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>—</td><td>3.75%</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>1</td><td>1</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>55%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>35%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Georgia Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$75.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>—</td><td>3.75%</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>1</td><td>1</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>55%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>35%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Idaho Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>30%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Michigan Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>—</td><td>1.50%</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>6</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>30%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Minnesota Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>30%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Ohio Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>30%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

<details>
<summary>📊 Under $15k Plan</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>Actum Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Actum Setup Fee</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00 per creditor</td><td>$200.00 per creditor</td><td>Always $200.00 — no cap (different from BDS)</td></tr>
<tr><td>Monthly Maintenance Fee</td><td>$99.00</td><td>$99.00</td><td>Always $99.00</td></tr>
<tr><td>Months Added Fee</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Number of Months Added</td><td>0</td><td>0</td><td>—</td></tr>
<tr><td>Estimated Settlement %</td><td>50%</td><td>65%</td><td>Below 55% requires Management approval</td></tr>
<tr><td>Savings Fee</td><td>10%</td><td>35%</td><td>Cannot go below plan minimum</td></tr>
</table>
</details>

### Fields that apply to all plans

| Field | Value | Notes |
|-------|-------|-------|
| Frequency | Bi-weekly | See exceptions below |
| Start Date | FPD from template | UW may schedule up to 7 business days |
| Months | From template | See program length limits below |
| Legal Plan Number of Payments | Always **4** | ⚠️ Different from BDS (1 payment). Exception: if the file requires an update via Edit Existing, this field will be removed — this is expected and does not affect the process |

<details>
<summary>⚠️ Payment frequency exceptions</summary>
<br>
<ul>
<li><strong>Monthly payments</strong> → never used.</li>
<li><strong>Weekly payments</strong> → only permitted when ALL three conditions are met:
  <ul>
  <li>Debt amount is higher than expected, AND</li>
  <li>Term is structured at 36 months on a bi-weekly basis, AND</li>
  <li>Calculated ACH exceeds $10,000</li>
  </ul>
</li>
</ul>
🚫 The ACH payment amount must never exceed $10,000 under any circumstances.
</details>

<details>
<summary>📏 Program length limits</summary>
<br>
<table>
<tr><th>Debt Amount</th><th>Max Term</th><th>Extension</th></tr>
<tr><td>Under $15,000</td><td>8 months</td><td>Up to 10 months with Management approval</td></tr>
<tr><td>$15,000.01 – $80,000</td><td>20 months</td><td>Depends on Management approval</td></tr>
<tr><td>$80,000.01 and over</td><td>24 months</td><td>Depends on Management approval</td></tr>
</table>
<br>
💡 Exceptions apply as long as Est. Savings is not showing as negative and Management approves.<br><br>
💡 <strong>FM / Lendini / Quickfix deals:</strong> Keep payment terms within 4–5 months. Maximum 7 months with Management approval.
</details>

---

## Step 3.1 — Select the Compensation Template

After entering all plan values, select the **DAG Standard** compensation template — this applies regardless of which state/debt-amount plan was used in Step 2.

> ⚠️ Default processor is always **Actum** for DAG plans.

---

## Step 4 — Calculate Total Cost

Click **Calculate Total Cost**.
<ul>
<li>✅ <strong>If the program cost matches the DAG Pricing Check</strong> → save the Total Fees on a notepad (this is the only place it is displayed). Click <strong>Next</strong> → <strong>Save</strong>.</li>
<li>🔴 <strong>If the program cost does not match</strong> → click <strong>Previous</strong> and adjust the values (Number of Months Added, Savings Fee %) until it matches. Do not proceed until the amounts align.</li>
</ul>

⚠️ Save the Total Fees amount before clicking Next — it will not be shown again.

Reference: <a href="https://docs.google.com/document/d/156OXggoKn6nzNuFvCBZqw4i_M_2vCq6fKjkloeC_Vk4/edit?pli=1&tab=t.0#heading=h.jzzycl8bbzdb">SOP — Pricing Check</a>

---

## Step 5 — Verify the transaction table

Once saved, the transaction table will populate on the opportunity. Verify:
<ul>
<li>Payment dates are correct</li>
<li>Amounts look consistent with the program terms</li>
<li>First payment amount matches what will go into the Underwriting fields</li>
</ul>

---

## ↩️ Return to your workflow

<ul>
<li>If you came from <strong>Quote Request</strong> → return to <a href="./dag-01-quote-request#step-8----complete-underwriting-and-pre-approval-fields">DAG 01 — Quote Request, Step 8</a></li>
<li>If you came from <strong>Contract Request</strong> → return to <a href="./dag-02-contract-request">DAG 02 — Contract Request</a></li>
</ul>

---

## ✏️ Editing an existing Schedule Transactions

Use the **Edit Existing** option when an update is needed on a file already scheduled.

⚠️ When using Edit Existing, the following fields will be removed: **Months**, **Actum Fee**, **Actum Setup Fee**, and **Legal Plan Number of Payments**. This is expected — these values were already saved the first time the file was worked on.

---

*Questions or updates → qa@dag-law.com — CC joshua.a@businessdebtsolutions.com and ale.b@businessdebtsolutions.com*

---

<p>
🏠 <a href="./dag-index">DAG Home</a> &nbsp;|&nbsp;
<a href="./dag-01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./dag-02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./dag-03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./dag-04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./dag-05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./dag-schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./dag-paynow-link">PayNow Link</a>
</p>
