---
layout: default
title: Move Payments (MPR)
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

# 📆 Move Payments (MPR)

**Trigger:** You received a Move Payment Request (MPR) — a request to change the date of a scheduled payment on an enrolled BDS opportunity.

> ⚠️ This process applies to **BDS only**. We do not handle DAG move payment requests.

> ⚠️ **Same-day MPRs must be processed before 1 PM EST.**

---

## Step 1 — 🔍 Verify the payment has not been moved before

A payment can only be moved **once**. Before proceeding:

<details>
<summary>📋 How to check the payment history</summary>
<br>
<ul>
<li><strong>Primary verification (Transaction Table):</strong> confirm the transaction table matches the enrollment plan <strong>perfectly</strong>.</li>
<li>If they do <strong>not</strong> match, a payment has already been moved — you must <strong>not</strong> move it a second time.</li>
<li>Remember: the transaction table remains unchanged unless scheduled transactions are performed. As a last resource for comparison, the <strong>original contract signed by the merchant</strong> shows the original transaction table.</li>
</ul>
<br>
⚠️ If you encounter any discrepancies, complete a thorough review of the notes, the enrollment plan, and the transaction table before reaching out to your immediate manager or supervisor.
</details>

---

## Step 2 — ✅ Determine whether the MPR can be completed

1. **Identify the previous payment** — locate the payment that occurs before the payment you are requesting to move.
2. **Check the status of the previous payment:**

| Previous payment status | Can the payment be moved? |
|------------------------|---------------------------|
| Cleared | ✅ Yes — proceed |
| Processed | 🚫 No — stop and document the note below |
| Delinquency-related status | ⚠️ Verify first (see below) |

<details>
<summary>🚫 If the previous payment is Processed</summary>
<br>
Stop the process and document the following note:
<br><br>
<em>"Previous payment is Processed; payments can only be moved once the prior payment is Cleared."</em>
</details>

<details>
<summary>⚠️ If the previous payment has a delinquency-related status</summary>
<br>
<ul>
<li>Verify whether the payment has been <strong>brought up to date</strong>.</li>
<li>If it has been brought up to date → proceed, the payment may be moved.</li>
<li>If it has <strong>not</strong> been brought up to date → do not move the payment at this time.</li>
</ul>
</details>

3. **Review the MPR notes** — if the notes clearly explain the delinquent payment status and required action, follow that guidance. If the notes are unclear, proceed to the next step.
4. **Contact the MPR requester** — confirm whether the delinquent payment has been brought up to date or is still pending, and clarify the expected next action.
5. **Document the outcome** — record the payment status reviewed, any validation performed, and whether clarification from the requester was required.

---

## Step 3 — 📆 Move the payment

1. Open the **Opportunity → Enrollment Plan**.
2. Find the payment transaction you need to move and click on its **Transaction Name**.
3. In the transaction detail, update **Transaction Date** to the new date.
4. Click **Save**.

---

## Step 4 — 🔍 Double-check your updates

- The payment shows the **new date**.
- The related fee transactions show the **new payment date + 7 days**.
- Amounts and statuses remain **unchanged**.

---

## Step 5 — 🗒️ Add the audit note and notify the requester

1. In Notes, write:

> Moved payment from [old date] to [new date]. Updated related fee transactions to [new date].

2. Notify the requester using this template:

> Hi [Name], the payment on Opportunity [Link] was moved from [old date] to [new date].

---

## ⚠️ Important reminders

- BDS only — do not process DAG move payment requests.
- Same-day MPRs must be processed before **1 PM EST**.
- A payment can only be moved **once**.
- The previous payment must be **Cleared** — never move a payment when the prior one is Processed.
- Any discrepancy → review notes, enrollment plan, and transaction table thoroughly before escalating to your manager or supervisor.

---

## ✅ Move Payment Checklist

- [ ] Request received for a BDS opportunity (not DAG)
- [ ] Same-day request → processed before 1 PM EST
- [ ] Transaction table matches the enrollment plan (payment not moved before)
- [ ] Previous payment status verified (Cleared)
- [ ] MPR notes reviewed / requester contacted if unclear
- [ ] Transaction Date updated and saved
- [ ] Fee transactions verified at new date + 7 days
- [ ] Amounts and statuses unchanged
- [ ] Audit note added
- [ ] Requester notified

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
