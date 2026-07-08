---
layout: default
title: Chirp Review Process
---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./move-payments">Move Payments (MPR)</a>
</p>

---

# 🐦 Chirp Review Process

How UW reviews completed Chirp verifications, documents findings in Salesforce, and handles Bank Refresh requests for returned payments. **Applies to both BDS and DAG.**

---

## 🚦 Quick Decision Table

Use this first. If your finding is listed here, this tells you what to do and who to notify — click **Detail** only if you need the full steps or an email/note template.

| Finding | Continue? | Notify | Notes Required? | Detail |
|---|---|---|---|---|
| Account/routing match, no recent funding | 🟢 Yes | — | ✅ | [Sec. 7](#sec7) |
| Account number mismatch | 🔴 No, pending clarification | Sales | ✅ | [Sec. 8](#sec8) |
| Routing number mismatch | 🔴 No, pending clarification | Sales | ✅ | [Sec. 9](#sec9) |
| Bank completely different | 🔴 No, pending clarification | Sales | ✅ | [Sec. 10](#sec10) |
| Credit Union / FCU mismatch | 🟡 Case by case | Sales, if docs needed | ✅ | [Sec. 11](#sec11) |
| Account name / owner name issue | 🟡 Case by case, review docs | Sales, if docs needed | ✅ | [Sec. 12](#sec12) |
| Recent funding, one creditor only | 🔴 No | Sales / UW Mgmt if payment exists | ✅ | [Sec. 16](#sec16) |
| Recent funding, multiple creditors | 🟢 Yes, without that creditor | Sales | ✅ | [Sec. 16](#sec16) |
| Same creditor, multiple positions, one deposit | 🟡 Case by case | Sales | ✅ | [Sec. 18](#sec18) |
| Debt below minimum after removal | 🔴 No | Sales / UW Mgmt / Accounting | ✅ | [Sec. 17](#sec17) |
| Creditor close to tenure | 🟡 Yes, work last | — | ✅ | [Sec. 15](#sec15) |
| Deposit may not be new funding | 🟡 Case by case | UW Mgmt if unclear | ✅ | [Sec. 22](#sec22) |
| Payments need to pause | 🔴 Hold file | CS | ✅ | [Sec. 20](#sec20) |
| Bank Refresh completed | ⚪ N/A | CS | ✅ | [Sec. 24](#sec24) |
| Bank Refresh unavailable | ⚪ N/A | CS | ✅ | [Sec. 24](#sec24) |
| No completed Chirp (Bank Refresh request) | ⚪ N/A | CS | ✅ | [Sec. 24](#sec24) |

> ⚠️ Not listed here, or still unclear after reading the detail section? Escalate to UW Management before moving the file forward.

---

## 📑 Índice

<details>
<summary>🔑 Acceso y Setup (1–6)</summary>
<br>
<ul>
<li><a href="#sec1">1. Purpose</a></li>
<li><a href="#sec2">2. Scope</a></li>
<li><a href="#sec3">3. When to Review Chirp</a></li>
<li><a href="#sec4">4. How to Find a File in Chirp</a></li>
<li><a href="#sec5">5. Required Salesforce Update</a></li>
<li><a href="#sec6">6. Open the Chirp Request</a></li>
</ul>
</details>

<details>
<summary>🏦 Revisión Bancaria y Discrepancias (7–12)</summary>
<br>
<ul>
<li><a href="#sec7">7. Banking Information Review</a></li>
<li><a href="#sec8">8. Account Number Mismatch</a></li>
<li><a href="#sec9">9. Routing Number Mismatch</a></li>
<li><a href="#sec10">10. Different Bank in Chirp</a></li>
<li><a href="#sec11">11. Credit Union / FCU Accounts</a></li>
<li><a href="#sec12">12. Account Name and Owner Name</a></li>
</ul>
</details>

<details>
<summary>💰 Depósitos, Tenure y Funding de Creditores (13–18)</summary>
<br>
<ul>
<li><a href="#sec13">13. Deposits and Withdrawals Review</a></li>
<li><a href="#sec14">14. Creditor Tenure Rules</a></li>
<li><a href="#sec15">15. Creditor Close to Tenure</a></li>
<li><a href="#sec16">16. Recent Funding Found</a></li>
<li><a href="#sec17">17. If Debt Drops Below the Minimum</a></li>
<li><a href="#sec18">18. Same Creditor With Multiple Positions</a></li>
</ul>
</details>

<details>
<summary>💳 Transacciones, Pagos y Bank Refresh (19–24)</summary>
<br>
<ul>
<li><a href="#sec19">19. Card Payment and ACH Handling</a></li>
<li><a href="#sec20">20. Files That Need to Be Placed on Hold</a></li>
<li><a href="#sec21">21. Creditor Name Differences</a></li>
<li><a href="#sec22">22. Transactions That May Not Be New Funding</a></li>
<li><a href="#sec23">23. When the Lender Does Not Show in Transactions</a></li>
<li><a href="#sec24">24. Bank Refresh for Returned Payments</a></li>
</ul>
</details>

<details>
<summary>🗒️ Documentación y Checklist Final (25–26)</summary>
<br>
<ul>
<li><a href="#sec25">25. Salesforce Notes</a></li>
<li><a href="#sec26">26. Final Checklist</a></li>
</ul>
</details>

---

## 🔑 Acceso y Setup

### Section 1 — Purpose {: #sec1}

This SOP explains how UW should review completed Chirp verifications, identify banking or creditor findings, document the file in Salesforce, and handle Bank Refresh requests for returned payments.

More specific scenarios should always be escalated to UW Management if there is any doubt before moving the file forward.

### Section 2 — Scope {: #sec2}

This SOP applies to:

- New Chirp verifications completed by clients.
- Chirp findings identified during UW review.
- Returned payment reviews using **Bank Refresh**.
- Files that require Sales, CS, Accounting, or UW Management involvement as a result of a Chirp finding.
- Both the **BDS** and **DAG** portfolios.

### Section 3 — When to Review Chirp {: #sec3}

At this moment, we do not have a system notification that alerts us when a client completes Chirp. Because of this, the team must review Chirp several times during the day and keep the review process organized and fair.

<details>
<summary>🔑 Portal link and credentials</summary>
<br>
<ul>
<li>Chirp portal: <a href="https://portal.chirp.digital/admin/dashboard">https://portal.chirp.digital/admin/dashboard</a></li>
<li>Credentials will be provided when requested.</li>
</ul>
<br>
⚠️ Credentials should <strong>not</strong> be shared without approval.
</details>

### Section 4 — How to Find a File in Chirp {: #sec4}

<details>
<summary>📋 Step-by-step</summary>
<br>
Once logged into Chirp:
<ol>
<li>Go to the left menu.</li>
<li>Click <strong>Request</strong>.</li>
<li>Review only files with <strong>Initial Status: Verified</strong>.</li>
<li>Compare the customer name against the <a href="https://docs.google.com/spreadsheets/d/1sSZXKhNlxpMXROnUJkL6M3GgVaBpbn0Br1VHjtYUbEA/edit?gid=0#gid=0">Chirp control sheet</a>.</li>
</ol>
</details>

<details>
<summary>✅ If the customer is already in the sheet</summary>
<br>
Do not work the file again.
</details>

<details>
<summary>🆕 If the customer is not in the sheet</summary>
<br>
Start the review and update the sheet with:
<ul>
<li>Customer name</li>
<li>Review date</li>
<li>Reviewer name</li>
<li>Any relevant comment</li>
</ul>
</details>

### Section 5 — Required Salesforce Update {: #sec5}

> ⚠️ **This step cannot be skipped.** Complete it before continuing with the full review.

<details>
<summary>✅ How to update Salesforce</summary>
<br>
Go to the <strong>Underwriting</strong> section in the opportunity and update:
<br><br>
<strong>Completed Chirped Link</strong> — enter the date when the client completed Chirp.
<br><br>
If the field already has a date, review it and update it if needed based on the most recent Chirp completion date.
</details>

### Section 6 — Open the Chirp Request {: #sec6}

<details>
<summary>🔍 Steps</summary>
<br>
Click the hyperlink under <strong>Code</strong>. This will open the request details.
<br><br>
Important — use only the section: <strong>Response (Information Returned)</strong>.
<br><br>
Do <strong>not</strong> use: <strong>Request (Information Entered)</strong>. The request section contains the information entered by us when the Chirp request was created, so it should not be used to validate the client's banking information.
</details>

---

## 🏦 Revisión Bancaria y Discrepancias

### Section 7 — Banking Information Review {: #sec7}

Review the following information under **Response (Information Returned)**:

- Account number
- Routing number
- Account name
- Owner name

Also review all accounts available in the account dropdown, not only the account selected by default.

**Banking findings — quick actions:**

| Finding | Action |
|---|---|
| Account number matches | 🟢 Continue review |
| Routing number matches | 🟢 Continue review |
| Account number does not match | 🔴 Contact Sales |
| Routing number does not match | 🔴 Contact Sales for clarification |
| Bank is completely different | 🔴 Contact Sales |
| Credit Union / FCU mismatch | 🟡 Review case by case |
| Account name does not match | 🟡 Review docs and ownership |
| Account seems to belong to another person/business | 🔴 Contact Sales before moving forward |

### Section 8 — Account Number Mismatch {: #sec8}

If the account number in Chirp does not match Salesforce or the banking documents, contact Sales. Sales must confirm one of the following:

1. The client will provide banking documents for the account used in Chirp.
2. The client will complete a new Chirp with the account number currently on file.

<details>
<summary>✉️ Sales Template</summary>
<br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, the account number used by the client in Chirp does not match the account number currently on file.
<br><br>
To continue with the review, please confirm how the client will proceed:
<ol>
<li>Provide banking documents for the account number used in Chirp, or</li>
<li>Complete a new Chirp using the account number currently on file.</li>
</ol>
Thank you.
</details>

### Section 9 — Routing Number Mismatch {: #sec9}

If the account number matches but the routing number does not match, ask Sales to clarify the discrepancy before moving forward.

<details>
<summary>✉️ Sales Template</summary>
<br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, the account number matches, but the routing number does not match the information we have on file.
<br><br>
Could you please clarify this discrepancy so we can confirm how to proceed?
<br><br>
Thank you.
</details>

If the routing issue is still unclear, escalate it to UW Management.

### Section 10 — Different Bank in Chirp {: #sec10}

If Salesforce shows one bank and Chirp shows a completely different bank, Sales must confirm one of these options:

1. The client completes Chirp with the bank account currently on file.
2. The client provides banking documents for the bank account used in Chirp.

Add clear notes in Salesforce.

<details>
<summary>✉️ Sales Template</summary>
<br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, Chirp shows a completely different bank than the one on file in Salesforce.
<br><br>
Could you please confirm how the client will proceed:
<ol>
<li>Complete Chirp with the bank account currently on file, or</li>
<li>Provide banking documents for the bank account used in Chirp.</li>
</ol>
Thank you.
</details>

### Section 11 — Credit Union / FCU Accounts {: #sec11}

Credit Union or FCU accounts may show the account number in a different format. However, UW should not automatically approve every mismatch.

Review these cases case by case. If needed, request a bank statement to confirm the account type and banking information.

The file can continue only if the information supports that it is the correct account and there are no other concerns.

### Section 12 — Account Name and Owner Name {: #sec12}

The account name should match the business information as closely as possible. Also confirm the owner name.

If the account is under the owner's name and the business is not a sole prop, or if the account name looks completely different, review the documents provided by Sales.

The file can continue only if:

- The documents support that the account belongs to the business.
- The account is connected to the business name.
- There is no indication that the documents were modified.

Add a clear note explaining why the account name was accepted.

---

## 💰 Depósitos, Tenure y Funding de Creditores

### Section 13 — Deposits and Withdrawals Review {: #sec13}

Scroll down to **Deposits and Withdrawals**. Review if any enrolled creditor made recent deposits into any of the client's accounts.

Important:

- Review all accounts received through Chirp.
- Do not review only the selected account.
- Compare creditor name, amount, transaction date, and description.
- Confirm if the transaction is actually new funding before making a decision.

### Section 14 — Creditor Tenure Rules {: #sec14}

Most creditors require **30 natural days** from the most recent funding date before enrollment. Some creditors require **45 natural days**.

| Creditor Requirement | Standard Tenure | Exception Tenure |
|---|---:|---:|
| 30-day creditor | 30 natural days | 25 natural days |
| 45-day creditor | 45 natural days | 40 natural days |

> ⚠️ All days are **natural days**, including weekends. The **exception tenure requires UW Management approval**, or an existing UW-approved process for that specific creditor — it is not a default option.

### Section 15 — Creditor Close to Tenure {: #sec15}

If the creditor is close to meeting the required tenure, do not automatically disqualify the file.

<details>
<summary>🔄 Process</summary>
<br>
<ol>
<li>Leave a clear note.</li>
<li>Add the next step date.</li>
<li>Ask the team to work that creditor last.</li>
<li>Continue the file once the creditor reaches the eligible date.</li>
</ol>
</details>

<details>
<summary>🗒️ Note Example</summary>
<br>
<em>"Chirp review completed. [Creditor Name] was funded on [Funding Date]. Please work this creditor last. File can continue after [Eligible Date]."</em>
</details>

### Section 16 — Recent Funding Found {: #sec16}

If recent funding is found, first confirm if the file has one creditor or multiple creditors.

<details>
<summary>1️⃣ Scenario A — Only One Creditor</summary>
<br>
If the file has only one creditor and that creditor does not meet the tenure requirement, the file cannot continue at that moment.
<br><br>
Action:
<ol>
<li>Notify Sales.</li>
<li>Add clear Salesforce notes.</li>
<li>If a card payment already exists, notify UW Management.</li>
</ol>
<br>
<strong>Sales Template:</strong>
<br><br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, we found that <strong>[Creditor Name]</strong> was recently funded on <strong>[Funding Date]</strong>.
<br><br>
At this moment, the creditor does not meet the required funding tenure, so the file cannot continue.
<br><br>
Please follow up once the client meets the required timeframe.
<br><br>
Thank you.
</details>

<details>
<summary>🔢 Scenario B — Multiple Creditors</summary>
<br>
If the file has multiple creditors and only one does not qualify:
<ol>
<li>Remove the creditor that does not meet the tenure.</li>
<li>Confirm the remaining debt amount.</li>
<li>Confirm the correct term.</li>
<li>Send an updated contract with the remaining creditors.</li>
<li>Notify Sales.</li>
<li>Add clear Salesforce notes.</li>
</ol>
⚠️ The client must complete the PW Call again if creditor information changed.
<br><br>
<strong>Sales Template:</strong>
<br><br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, we found that <strong>[Creditor Name]</strong> was recently funded on <strong>[Funding Date]</strong> and does not meet the required tenure.
<br><br>
UW will remove this creditor and send an updated contract with the remaining creditors that qualify.
<br><br>
Please contact the client and ask them to sign the updated contract once received.
<br><br>
Thank you.
</details>

### Section 17 — If Debt Drops Below the Minimum {: #sec17}

If removing a creditor causes the remaining enrolled debt to fall below the minimum program requirement, the file cannot continue.

<details>
<summary>🔄 Action</summary>
<br>
<ol>
<li>Move the file to the correct not-qualified status.</li>
<li>Notify Sales.</li>
<li>Add clear Salesforce notes.</li>
<li>If a payment already exists, notify UW Management so Accounting can review the adjustment or refund.</li>
</ol>
<br>
The note must include:
<ul>
<li>Creditor removed</li>
<li>Funding date</li>
<li>Remaining debt amount</li>
<li>Reason the file no longer qualifies</li>
</ul>
</details>

### Section 18 — Same Creditor With Multiple Positions {: #sec18}

If the same creditor has more than one position enrolled and Chirp shows one recent deposit, do not remove all positions automatically. Ask Sales which position the deposit belongs to.

<details>
<summary>✉️ Sales Template</summary>
<br>
Hi Sales Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, we found a recent deposit from <strong>[Creditor Name]</strong> on <strong>[Funding Date]</strong>.
<br><br>
We currently have more than one position enrolled for this creditor. Could you please confirm which position this deposit belongs to? We need to remove the correct position until it qualifies.
<br><br>
Thank you.
</details>

---

## 💳 Transacciones, Pagos y Bank Refresh

### Section 19 — Card Payment and ACH Handling {: #sec19}

<details>
<summary>💳 If Card Payment Was Already Processed</summary>
<br>
Do not request a new PayNow or another card payment. Notify UW Management so Accounting can review any adjustment needed.
<br><br>
Also confirm that the card payment is not higher than the first payment after the file is updated.
</details>

<details>
<summary>💳 If Card Payment Was Not Processed</summary>
<br>
Update the card payment through the same page used to create PayNow links.
</details>

<details>
<summary>🏦 ACH Timing</summary>
<br>
If the ACH is scheduled for the next day, it can usually remain the same because the new amount should be lower after removing a creditor.
<br><br>
If the ACH is scheduled for the same day, confirm the cutoff before making changes.
<br><br>
Cutoff time: <strong>1:00 PM EST</strong>.
<br><br>
If the file is already too advanced in the process, contact UW Management before moving the status.
</details>

### Section 20 — Files That Need to Be Placed on Hold {: #sec20}

If the file cannot continue at that moment, especially when payments need to be paused, update Salesforce to:

**Stage:** Underwriting
**Status:** Returned File / Needs Review

Then email Customer Service and ask them to pause the payments. The CS email must include:

- Business name
- Reason payments need to be paused
- What needs to be reviewed or corrected
- Resume date, if known
- If the resume date is not known, confirm that UW will notify CS once payments can be resumed

<details>
<summary>✉️ CS Template — Resume Date Unknown</summary>
<br>
Hi CS Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, we identified that the file needs to be placed on hold due to <strong>[reason]</strong>.
<br><br>
The file has been updated to:
<br>
<strong>Stage:</strong> Underwriting<br>
<strong>Status:</strong> Returned File / Needs Review
<br><br>
Please pause the payments while UW completes the required review/correction.
<br><br>
At this moment, we do not have a confirmed date to resume payments. UW will notify CS once payments can be resumed.
<br><br>
Thank you.
</details>

<details>
<summary>✉️ CS Template — Resume Date Known</summary>
<br>
Hi CS Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, we identified that the file needs to be placed on hold due to <strong>[reason]</strong>.
<br><br>
The file has been updated to:
<br>
<strong>Stage:</strong> Underwriting<br>
<strong>Status:</strong> Returned File / Needs Review
<br><br>
Please pause the payments while UW completes the required review/correction.
<br><br>
Payments can be resumed on <strong>[date]</strong>.
<br><br>
Thank you.
</details>

### Section 21 — Creditor Name Differences {: #sec21}

Sometimes the creditor name in Chirp does not match exactly with Salesforce. This can happen because Chirp or the bank transaction may show a DBA name, servicing name, funding descriptor, shortened name, or related entity name.

<details>
<summary>🔠 Examples</summary>
<br>
<table>
<tr><th>Salesforce Name</th><th>Chirp / Transaction Name</th></tr>
<tr><td>Expansion Capital Group</td><td>Expansion Capital Funding</td></tr>
<tr><td>One River Funding</td><td>One River Services LLC</td></tr>
<tr><td>Biz2Credit</td><td>B2C ABS FUNDI</td></tr>
<tr><td>Lendini</td><td>Funding Metrics</td></tr>
<tr><td>MCA Funding LLC</td><td>MCA Servicing</td></tr>
</table>
</details>

Do not treat this as an issue automatically. Validate if both names belong to the same creditor using:

- Creditor GSheet
- Prior notes
- Available documentation
- UW Management confirmation, if needed

If both names refer to the same creditor, the file can continue with clear notes. If the legal name in the contract needs to be updated, send an updated contract and notify Sales.

### Section 22 — Transactions That May Not Be New Funding {: #sec22}

Not every deposit is new funding. Some transactions may be:

- Returned ACH payments
- Reversed deductions
- PMNT RCVD
- Small adjustments
- Card processor deposits
- Deposits from processors like Stripe

Before treating a deposit as new funding, review: transaction description, amount, related deductions, creditor name, and the debt amount in Salesforce.

If the amount is very small compared to the enrolled debt, review carefully before making a decision. If unsure, escalate to UW Management.

### Section 23 — When the Lender Does Not Show in Transactions {: #sec23}

The enrolled lender does not always need to appear in Chirp transactions. This does not automatically mean there is an issue.

If the banking information matches and no recent funding is found, the file can continue.

### Section 24 — Bank Refresh for Returned Payments {: #sec24}

Bank Refresh is a separate workflow used when UW receives an email with the subject:

**`Client Returned Payment - [Business Name] ([Portfolio-ID#])`**

The goal is to confirm if the client has enough available balance to process the returned payment. For now, CS will continue processing the payment — UW will only confirm the available balance after using Bank Refresh.

The **Bank Refresh** button is located at the top of the Chirp request.

| Scenario | Action |
|---|---|
| 🟢 Button active/green | Click refresh and provide the updated balance |
| 🔴 Button greyed out | Tell CS the refresh was not available |
| ⚪ No completed Chirp | Tell CS the balance cannot be confirmed |

<details>
<summary>🔄 Process</summary>
<br>
<ol>
<li>Open the client's Chirp request.</li>
<li>Confirm there is a completed Chirp.</li>
<li>Click <strong>Bank Refresh</strong> if available.</li>
<li>Confirm the available balance after the refresh.</li>
<li>Reply all to the CS email.</li>
<li>Add clear Salesforce notes (see Section 25).</li>
</ol>
</details>

<details>
<summary>✉️ Scenario A — Bank Refresh Available</summary>
<br>
Hi CS Team,
<br><br>
As per our Chirp bank refresh for <strong>[Business Name]</strong>, the available balance in the client's account is <strong>$[amount]</strong> as of <strong>[date/time]</strong>.
<br><br>
Please proceed as needed.
<br><br>
Thank you.
</details>

<details>
<summary>✉️ Scenario B — Bank Refresh Not Available</summary>
<br>
Hi CS Team,
<br><br>
As per our Chirp review for <strong>[Business Name]</strong>, the Bank Refresh option is not available at this time, so we were not able to confirm the updated account balance.
<br><br>
Please proceed based on your internal process.
<br><br>
Thank you.
</details>

<details>
<summary>✉️ Scenario C — No Completed Chirp</summary>
<br>
Hi CS Team,
<br><br>
As per our review for <strong>[Business Name]</strong>, there is no completed Chirp available at this time, so we are not able to confirm the client's updated account balance.
<br><br>
Please proceed based on your internal process.
<br><br>
Thank you.
</details>

---

## 🗒️ Documentación y Checklist Final

### Section 25 — Salesforce Notes {: #sec25}

Every Chirp review must be documented in Salesforce. At minimum, the note should include:

- Chirp review date
- Completed Chirped Link date updated
- Banking review result
- Account name review
- Owner name review
- Creditor activity found
- Funding date, if applicable
- Action taken
- Sales or CS notification
- Updated contract sent, if applicable
- Next step date, if applicable
- Bank Refresh result, if applicable

<details>
<summary>🗒️ Clean Review</summary>
<br>
<em>"Chirp reviewed on [date]. Completed Chirped Link field updated in Salesforce. Account number and routing number match. Account name and owner name reviewed. No recent funding identified. File can continue."</em>
</details>

<details>
<summary>🗒️ Account Mismatch</summary>
<br>
<em>"Chirp reviewed on [date]. Completed Chirped Link field updated in Salesforce. Account number does not match account on file. Sales notified to confirm whether client will provide banking docs or complete a new Chirp with the account on file. Awaiting response."</em>
</details>

<details>
<summary>🗒️ Routing Mismatch</summary>
<br>
<em>"Chirp reviewed on [date]. Completed Chirped Link field updated in Salesforce. Account number matches; routing number does not match information on file. Sales notified to clarify discrepancy. Awaiting response."</em>
</details>

<details>
<summary>🗒️ Recent Funding — Creditor Removed</summary>
<br>
<em>"Chirp reviewed on [date]. Completed Chirped Link field updated in Salesforce. Recent funding identified from [Creditor Name] on [Funding Date]. Creditor does not meet tenure requirement. Creditor removed and updated contract sent with remaining qualifying creditors. Sales notified. PW Call to be redone."</em>
</details>

<details>
<summary>🗒️ Payment Pause</summary>
<br>
<em>"Chirp reviewed on [date]. File placed on hold due to [reason]. Stage updated to Underwriting and Status updated to Returned File / Needs Review. CS notified to pause payments. Resume date is [date] / pending confirmation."</em>
</details>

<details>
<summary>🗒️ Bank Refresh Completed</summary>
<br>
<em>"Chirp returned payment review completed on [date/time]. Bank Refresh completed. Available balance: $[amount]. CS notified by reply-all email."</em>
</details>

<details>
<summary>🗒️ Bank Refresh Not Available</summary>
<br>
<em>"Chirp returned payment review completed on [date/time]. Bank Refresh was not available (button greyed out). CS notified that balance cannot be confirmed at this time."</em>
</details>

<details>
<summary>🗒️ No Completed Chirp</summary>
<br>
<em>"Returned payment review attempted on [date/time]. No completed Chirp found for this client. CS notified that balance cannot be confirmed."</em>
</details>

### Section 26 — Final Checklist {: #sec26}

Before closing the Chirp review, confirm:

- [ ] Chirp control sheet was updated.
- [ ] Completed Chirped Link date was updated in Salesforce.
- [ ] Response section was reviewed, not Request section.
- [ ] Account number was reviewed.
- [ ] Routing number was reviewed.
- [ ] Account name was reviewed.
- [ ] Owner name was reviewed.
- [ ] All accounts were reviewed.
- [ ] Deposits and withdrawals were reviewed.
- [ ] Recent funding was identified or ruled out.
- [ ] Sales was notified if needed.
- [ ] CS was notified if payments need to be paused.
- [ ] Updated contract was sent if needed.
- [ ] Salesforce notes were added.

---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./move-payments">Move Payments (MPR)</a>
</p>
