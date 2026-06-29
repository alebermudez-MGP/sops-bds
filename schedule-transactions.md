---
layout: default
title: Schedule Transactions
---
# ⚙️ Schedule Transactions

**This is a supporting reference.** It is called from [01 — Quote Request](./01-quote-request) and [02 — Contract Request](./02-contract-request). It is not a standalone workflow.

💡 Always have both tools open before starting this process:
<ul>
<li>🧮 <a href="https://alebermudez-mgp.github.io/sops-bds/bds-calculator.html">BDS Calculator</a> — Program Cost &amp; CC Payment</li>
<li>📊 <a href="https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?gid=340464856#gid=340464856">Underwriting Pricing Sheet</a> — Plan values by state</li>
</ul>

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
<strong>By debt amount</strong>
<br><br>
<table>
<tr><th>Debt Amount</th><th>Plan to use in Salesforce</th></tr>
<tr><td>Under $15,000</td><td><strong>BDS Services Under $15k</strong> or <strong>Business Debt Solutions Under $15K</strong></td></tr>
<tr><td>$15,000 and over</td><td>Use the plan that matches the merchant's state (see table below)</td></tr>
</table>
<br>
<strong>By state</strong>
<br><br>
<table>
<tr><th>State</th><th>Plan to use in Salesforce</th></tr>
<tr><td>Florida</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Florida plan values)</td></tr>
<tr><td>Georgia</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Georgia plan values)</td></tr>
<tr><td>Idaho</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Idaho plan values)</td></tr>
<tr><td>Michigan</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Michigan plan values)</td></tr>
<tr><td>Minnesota</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Minnesota plan values)</td></tr>
<tr><td>Ohio</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Ohio plan values)</td></tr>
<tr><td>All other states</td><td><strong>BDS Services Standard</strong> or <strong>Business Debt Solutions Standard</strong> (Standard plan values)</td></tr>
</table>
<br>
🚫 Never select a plan with the word <strong>Legal</strong> — these are not in use.
</details>

Click **Next** after selecting the plan.

---

## Step 3 — Enter the plan values

Use the tables below to enter the correct values for each plan. Always verify against the [Underwriting Pricing Sheet](https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?gid=340464856#gid=340464856).

<details>
<summary>📊 Standard Plan — all states not listed below</summary>
<br>
<table>
<tr><th>Field</th><th>Min</th><th>Max</th><th>Notes</th></tr>
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$75.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$50.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00 per creditor</td><td>$75.00 per creditor</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
<tr><td>EPPS Fee</td><td>$9.00</td><td>$9.00</td><td>Always $9.00</td></tr>
<tr><td>Funder Fee</td><td>$50.00</td><td>$75.00</td><td>$50 with Management approval</td></tr>
<tr><td>Legal Plan</td><td>$200.00</td><td>$200.00</td><td>Always $200.00</td></tr>
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
| Start Date | FPD from template | — |
| Months | From template | See program length limits |
| Legal Plan Number of Payments | Always **1** | Exception: if the file requires an update via Edit Existing, this field will be removed — this is expected and does not affect the process |

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

## Step 4 — Calculate Total Cost

Click **Calculate Total Cost**.
<ul>
<li>✅ <strong>If the program cost matches the BDS Pricing Check</strong> → save the Total Fees on a notepad (this is the only place it is displayed). Click <strong>Next</strong> → <strong>Save</strong>.</li>
<li>🔴 <strong>If the program cost does not match</strong> → click <strong>Previous</strong> and adjust the values (Number of Months Added, Savings Fee %) until it matches. Do not proceed until the amounts align.</li>
</ul>

⚠️ Save the Total Fees amount before clicking Next — it will not be shown again.

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
<li>If you came from <strong>Quote Request</strong> → return to <a href="./01-quote-request#step-8----complete-underwriting-and-pre-approval-fields">01 — Quote Request, Step 8</a></li>
<li>If you came from <strong>Contract Request</strong> → return to <a href="./02-contract-request">02 — Contract Request</a></li>
</ul>

---

## ✏️ Editing an existing Schedule Transactions

Use the **Edit Existing** option when an update is needed on a file already scheduled.

⚠️ When using Edit Existing, the following fields will be removed: **Months** and **Legal Plan Number of Payments**. This is expected — these values were already saved the first time the file was worked on.

---

*Questions or updates → qa@businessdebtsolutions.com — CC ale.b@businessdebtsolutions.com and joshua.a@businessdebtsolutions.com*
