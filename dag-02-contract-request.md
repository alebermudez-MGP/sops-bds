---
layout: default
title: DAG 02 — Contract Request
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

# 📄 DAG 02 — Contract Request

**Trigger:** Sales agents submit contract requests directly via the new calculator (business/merchant information → risk calculation → quote). Once completed, a lead is automatically created in Salesforce under the business name, and the sales agent emails the UW inbox with the business name in the subject line and the Contract Request Template attached.

> ⚠️ A Contract Request must always come with:
> - The **Contract Request template** (completed)
> - The **quote previously sent to the client**
> - A **valid voided check** or approved banking documentation alternative

---

## Step 1 — Validate the request before touching Salesforce

Before doing anything in Salesforce, review both the email and the lead record.

<details>
<summary>📝 1.1 — Template is complete</summary>
<br>
The Contract Request template must include all of the following fields:
<ul>
<li>Portfolio (BDS / DAG)</li>
<li>Type of Business Debt</li>
<li>State</li>
<li>Entity type</li>
<li>Industry</li>
<li>Business start date</li>
<li>CC as a payment method (Yes / No)</li>
<li>Phone number</li>
<li>Email address</li>
<li>SSN</li>
<li>DOB</li>
<li>EIN</li>
<li>Campaign ID</li>
<li>FPD</li>
</ul>
<br>
💡 If any field is missing, reply (Reply All) requesting the missing information before proceeding.<br><br>
⚠️ SSN must be 9 digits and may start with 0. <strong>Never share SSN in chats or emails.</strong><br>
⚠️ DOB must correspond to a person older than 18 years old.
</details>

<details>
<summary>🔍 1.2 — Verify the lead in Salesforce</summary>
<br>
Before converting, open the lead and verify the following fields are populated:
<br><br>
<table>
<tr><th>Field</th><th>What to check</th></tr>
<tr><td>Lead Source</td><td>Must be present</td></tr>
<tr><td>Sales Lead</td><td>Must be present — if different from what is expected, contact UW Management before proceeding</td></tr>
<tr><td>Sales Agent</td><td>Must be present — it is OK if it does not match the agent sending the contract request, as long as the Sales Lead is the same</td></tr>
<tr><td>Score</td><td>Must be present — numeric value assigned by the Risk Score calculator</td></tr>
<tr><td>Risk Classification</td><td>Must be present — Low / Medium / High</td></tr>
<tr><td>Payment Capacity</td><td>Must be present — e.g. Tight – Some strain, Comfortable, etc.</td></tr>
<tr><td>Portfolio</td><td>Must match the portfolio on the contract request template (DAG)</td></tr>
</table>
<br>
💡 If Score, Risk Classification, or Payment Capacity is missing → return to Sales immediately and request the missing information before proceeding.
</details>

<details>
<summary>📄 1.3 — Quote is attached and matches</summary>
<br>
The sales agent must attach the quote previously sent to the client. Review it and confirm:
<ul>
<li>Business name matches</li>
<li>Total Program Cost matches what is in Salesforce</li>
<li>FPD matches the template</li>
<li>Creditors and amounts are consistent with what was quoted</li>
</ul>
If the quote does not match Salesforce data, do not proceed — clarify with Sales before generating the contract.
</details>

<details>
<summary>📎 1.4 — Banking documentation is attached and valid</summary>
<br>
The following must be included with the contract request:
<br><br>
<strong>Primary (preferred):</strong>
<ul>
<li>Valid Voided Check</li>
</ul>
<strong>Accepted alternative (no approval needed):</strong>
<ul>
<li>Bank Letter <strong>AND</strong> Most Recent Bank Statement</li>
</ul>
Any other documentation requires <strong>Sales Management approval</strong> documented in the same email thread.<br><br>
⚠️ Starter checks and direct deposit forms are <strong>not accepted</strong>.<br><br>

<strong>Voided check must include:</strong>
<ul>
<li>Routing number (9 digits)</li>
<li>Account number</li>
<li>Business name (printed by the bank)</li>
<li>Bank name</li>
</ul>

<strong>Special cases:</strong><br><br>

<strong>Bank of America</strong> — Use the ACH routing number labeled under the bank name. Do not use the wire routing number.<br><br>

<strong>Bluevine</strong> — Voided checks may only show a logo. Banking services are provided by Coastal Community Bank (Member FDIC). Verify by entering routing number <strong>125109019</strong> — it should populate as Coastal Community Bank. Reference: <a href="https://www.bluevine.com/">bluevine.com</a><br><br>

<strong>Navy Federal Credit Union</strong> — Omit the prefix 001 or 002 from the account number. These are internal identifiers and should not be entered in Salesforce. Example: if VC shows 0017151093775, enter <strong>7151093775</strong>.<br><br>

<strong>State on voided check</strong> — The state on the business address must match the state provided by Sales. If it does not match, request clarification before proceeding. If Sales confirms the account should be updated to match the VC state, adjust and proceed. If Sales confirms the business is not located in that state, do not proceed — inform Sales the VC must reflect the state where the business operates.<br><br>

<strong>Business name mismatch</strong> — If the business name on the voided check does not match the account name in Salesforce, email Sales:

```
Hello (Sales Agent), please be aware that the Business name on the voided check does not match the business name provided when the account was created. Reply with the correct business name.
```

<strong>Sole Proprietor exception</strong> — The owner's personal name may appear as the Name on Account. This is acceptable as long as you confirm the account is a business account via bank statement or bank letter. No name change is required in Salesforce. The DBA does not need to appear on bank records.
</details>

---

## Step 2 — Find and convert the lead in Salesforce

<ol>
<li>Search for the lead using the business name from the email subject line. Locate the most recent file created under the lead — download it for use during the process and for completing Salesforce information.</li>
<li>Click <strong>Convert</strong> on the lead.</li>
<li>Choose one of the following:
<ul>
<li><strong>Create all new records</strong> — for new merchants with no existing account.</li>
<li><strong>Continue working on an existing account</strong> — for concurrent merchants. Create a new opportunity under the existing account and contact. Do not select an existing opportunity.</li>
</ul>
</li>
</ol>

> ⚠️ For concurrent merchants, always create a **new opportunity**. Never modify an existing active opportunity. See [04 — Special Cases](./dag-04-special-cases#section-1--concurrent-accounts) for concurrent rules.

The conversion will create an **Account**, a **Contact**, and an **Opportunity**.

UW will then review the information, complete the scheduled transactions, verify first due dates, and complete any remaining underwriting review steps. Review the quote document against the transaction table to confirm the information matches or is reasonably aligned with what was sent to the merchant.

---

## Step 3 — Complete the Account

Verify and complete all required fields:

| Field | Value |
|-------|-------|
| Account name | Business name from template |
| Active | ✅ Check this box |
| Entity type | From template |
| Profile | DAG |
| Phone | From template |
| Industry | From template |
| Inception Date | Business start date from template |
| Billing State/Province | State from template |
| Campaign ID | From template |

🚫 Do not use accented characters (á, é, í, ó, ú) or tildes (ñ). Replace with standard English letters.

---

## Step 4 — Complete the Contact

Verify and complete all required fields:

| Field | Value |
|-------|-------|
| First and last name | Owner's name (add middle name if needed) |
| Title | Owner |
| Email | From template |
| Phone | From template |
| Mobile | Same as phone if no second number (no dashes, no parentheses) |
| SSN | From template — 9 digits, may start with 0 |
| Owners Birthday (DOB) | From template — must be 18+ |
| Mailing State/Province | State from template — confirm it populated correctly |

💡 If the merchant has two owners, create a second contact with the co-owner's information and set Title to **Co-Owner**.

### 4.1 — Set the Contact Role on the Opportunity

Go to the opportunity → Contact Roles section:
<ol>
<li>Click the dropdown → <strong>Edit</strong></li>
<li>Set Role to <strong>Business User</strong></li>
<li>Check <strong>Primary</strong></li>
<li>Click <strong>Save</strong></li>
</ol>

> ⚠️ This step is critical. If the Contact Role is not set correctly, the owner's information will not populate in the ACH and contract fields.

---

## Step 5 — Complete the Opportunity

Verify all opportunity fields are complete:

| Field | Value |
|-------|-------|
| Opportunity name | Business name + Type of debt (e.g. "Royal Pearl Haven Realty MCA") |
| Client Service | James Jordan / Mark McGuire / Jane White / Jeffrey Gates |
| Stage | Underwriting |
| Status | Approved / Send Contract |
| Type of debt | From original quote |
| Date of First Payment (FPD) | From template — minimum 3–4 business days, up to 7. Extension requires Management approval. |
| Lead Source | From original quote/lead |
| Score | From lead |
| Risk Classification | From lead |

💡 Unlike BDS, DAG opportunities do not use a "Law firm" field.

Sales Lead / Sales Agent rules — same as [01 — Quote Request, Step 5](./dag-01-quote-request#step-5----create-the-opportunity), including the Vic Carmine exception.

💡 Review the quote document against the transaction table to confirm all amounts and dates align with what was sent to the merchant.

---

## Step 6 — Add SSN / DOB / EIN

- SSN, DOB, and EIN (Tax ID) must be on the account/contact in Salesforce.
- EIN may be missing — it is UW's responsibility to request it from Sales. Leave a note in the opportunity documenting this.
- Sometimes DOB/EIN arrive in the contract request email itself.

---

## Step 7 — Add Banking Information

Go to the **Account** → **Banking Information** section. A voided check is requested at this point — it may already be attached to the account, or attached to the contract request email. See Step 1.4 above for full voided check / bank letter / bank statement requirements and special cases (Bank of America, Bluevine, Navy Federal, sole proprietor).

### 7.1 — Enter the banking details

Fill in the following fields from the voided check:

| Field | How to fill it |
|-------|-----------------|
| Bank Name | Look up the routing number at <a href="https://www.usbanklocations.com/">usbanklocations.com</a> — enter the routing number and the site will return the official bank name and city. Use the exact name returned by the site. |
| Routing Number | 9-digit number from the voided check — most of the time the first set of numbers on the bottom left |
| Account Number | Middle set of numbers on the bottom of the check. Enter exactly as it appears — see special cases in Step 1.4 for Navy Federal and other exceptions. |
| Bank Full Address | Use the bank city returned by usbanklocations.com and enter the city and state. |
| Name on Account | Business name as it appears on the voided check. For sole proprietors, the owner's name is acceptable — see Step 1.4. |

Click **Save**.

### 7.2 — Update Banking Info

After saving, click the **Update Banking Info** button in the upper right corner of the account page. Click **Next** to apply the banking information to all transactions in the Enrollment Plan.

### 7.3 — Verify in Enrollment Plan

> ⚠️ This step cannot be completed until [DAG Schedule Transactions](./dag-schedule-transactions) has been done. Once complete, navigate to the **Opportunity** → **Enrollment Plan** tab. Open any transaction and confirm the banking information has been correctly linked.

---

## Step 8 — Add Address to Account and Contact

After saving the banking information, add the business address to both the **Account** and the **Contact**.

### 8.1 — Where to get the address

Use the following hierarchy:
<ol>
<li><strong>Voided check</strong> — use the business address printed on the check (primary source).</li>
<li><strong>If the address is missing or shows a PO Box</strong> → search for the business address online and ask Sales to confirm it is correct before proceeding.</li>
<li><strong>Sales confirms or provides the correct address</strong> → enter it and proceed.</li>
</ol>

### 8.2 — Add address to the Account

Go to the Account → **Address Information** section:
<ul>
<li>Enter the business address in the <strong>Billing Address</strong> fields: street, city, state, zip.</li>
<li>Set <strong>Country</strong> to <strong>US</strong> (not United States).</li>
<li>Confirm the <strong>Billing State/Province</strong> matches the state on the template.</li>
</ul>

### 8.3 — Add address to the Contact

Go to the Contact → **Details** tab → **Address Information** section:
<ul>
<li>Enter the same business address in the <strong>Mailing Address</strong> fields: street, city, state, zip.</li>
<li>Set <strong>Country</strong> to <strong>US</strong> (not United States).</li>
<li>Confirm the <strong>Mailing State/Province</strong> populated correctly.</li>
</ul>

> ⚠️ The state on the business address of the voided check must match the state provided by Sales when the account was created. If they do not match, request clarification before proceeding.

---

## Step 9 — Schedule Transactions

Since the quote was sent externally by Sales, UW has not yet created the program. Before generating the contract, you must build the plan.

➡️ Follow the full instructions in [DAG Schedule Transactions](./dag-schedule-transactions).

Come back to Step 10 once Schedule Transactions is complete.

> ⚠️ Total Program Cost must never exceed the amount previously quoted to the client. If unachievable, escalate to Management before proceeding.

---

## Step 10 — Complete Underwriting and Pre-Approval fields

After Schedule Transactions is complete, fill in the following fields on the opportunity:

<details>
<summary>Underwriting section</summary>
<br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Date of First Payment</td><td>FPD from template</td></tr>
<tr><td>Attorney Fee Amount Per Payment</td><td>$200.00</td></tr>
<tr><td>Last Payment Date with Attorney Fee</td><td>Same as FPD</td></tr>
<tr><td>Number of Payments with Attorney Fee</td><td><strong>4</strong> (different from BDS, which uses 1)</td></tr>
<tr><td>Estimated Total Fee Amount at Time of UW</td><td>Total Fees saved from Schedule Transactions</td></tr>
<tr><td>Payback Amount</td><td>Total program cost — must not exceed the amount quoted to the client</td></tr>
<tr><td>Savings Fee % UW</td><td>Percentage selected during Schedule Transactions</td></tr>
<tr><td>Savings Amount</td><td>Total debt − Payback amount</td></tr>
</table>
<br>
💡 If FPD falls on a holiday or weekend, move to the next business day.
</details>

> ⚠️ Before continuing, confirm the Total Program Cost matches or is below what was quoted to the client. If there is any discrepancy that cannot be resolved, escalate to Management before generating the contract.

Click **Save**.

---

## Step 11 — Generate the Contract

Once all information is complete:

<ol>
<li>Click the dropdown arrow on the opportunity → select <strong>"Create DAG full contract."</strong></li>
<li><strong>Download</strong> the generated document to (a) verify the information is correct, and (b) send it to Sales for review with the client during calls.</li>
<li>Open it and review all details against Salesforce:
<ul>
<li>Fees, enrollment amount, FPD</li>
<li>Contract dates (sign date, effective date)</li>
<li>Business name and owner names</li>
<li>SSN / EIN / DOB</li>
<li>Bank (ACH) details vs voided check</li>
</ul>
</li>
<li>If everything matches → proceed to Send for Signature.</li>
</ol>

> ⚠️ Contracts can only be generated from the **quotes@dag-law.com** user (unlike BDS, which also allows quotes@businessdebtsolutions.com — DAG has only one authorized user). If you receive a "no permission" message, you are not using the correct user.

### 11.1 — Send for Signature via DocuSign

<ol>
<li>Click <strong>Send for Signature</strong> → <strong>Next</strong> on the documents screen.</li>
<li><strong>Recipients</strong> — review only, do not modify. Confirm client name and email are correct for Sales Team and Sales Agent. Check whether you are working with <strong>Fintrilo</strong> or <strong>Business Debt Ninjas</strong> to avoid sending to the wrong one.</li>
<li><strong>Email Subject</strong> — copy and paste the business name from notepad. Do not type it manually. Click <strong>Next</strong>.</li>
<li>Add signature and date indicators on the last 4 pages.</li>
<li>Click <strong>Send</strong>.</li>
</ol>

Once sent, the status will show as **Sent for Signature**. Notify Underwriting and Sales that the contract has been sent, and attach the document.

<details>
<summary>🔧 DocuSign Actions</summary>
<br>
<ul>
<li><strong>Void Envelope</strong> — use when a change is requested to a sent contract or when Sales requests it.</li>
<li><strong>Correct Envelope</strong> — correct errors like incorrect email addresses without resending. If correcting an email, first change it in Contact Roles.</li>
<li><strong>View Envelope</strong> — check if the client has viewed the document.</li>
<li><strong>Send Reminder</strong> — use when Sales requests a DocuSign resend and no updates were recently made.</li>
</ul>
💡 If Salesforce fails, DocuSign still holds all information and allows resending, correcting, or voiding.
</details>

---

## Step 12 — Send the Email Reply to the Sales Agent

Immediately after sending the contract to the client, reply All to the original contract request email using the required template (Gmail → three dots → Templates).

Include:
<ul>
<li>Total Program Cost</li>
<li>CC Amount</li>
<li>CC Processor Fee</li>
<li>CC Process Payment Amount</li>
<li>Partner: DAG</li>
</ul>

Attach a **PDF copy of the contract** to the reply.

> 💡 Any documents requested by the Sales Department to be sent to the Merchant must also be forwarded to **teamnotification@businessdebtninjas.com** — but only when the Sales Lead is Rose Walters (same rule as BDS, not universal to all leads).

---

## Step 13 — Add Notes to the Opportunity

After sending the contract and the email reply, add a note with the following:

```
Contract sent
Total Fees: $[amount]
FPD: [date]
Creditors and balances:
- [Creditor name]: $[amount]
Banking Info Review
Business Name matches: Y
```

> 💡 If the quote and contract request arrived at the same time, do not send the quote separately — send only the contract. Include both the quote and contract note content in a single note entry.

---

## Step 14 — ACH vs Banking Info QA Revision

<ol>
<li>Complete the contract details in full, and take a screenshot that clearly shows the bank account information section, along with all other relevant details.</li>
<li>Collect a screenshot of the merchant's voided check (or a bank statement displaying the account and routing numbers).</li>
<li>Send both screenshots to the Webex chat titled <strong>"ACH vs Banking Info QA Revision."</strong></li>
<li>Wait for QA approval before sending the contract to the client.</li>
</ol>

🔔 **Reminder:** Missing or skipping this step can lead to unnecessary delays, additional documentation requests, and may negatively impact the client experience.

---

## Step 15 — Update Opportunity Status

To maintain accurate reporting, all files must follow this status path regardless of whether a quote was sent:

| Step | Stage | Status |
|------|-------|--------|
| 1 — Always set first | Lead | Quote Sent |
| 2 — Once contract is sent | Underwriting | Approved / Send Contract |
| Contract sent with incomplete docs | Underwriting | Send Contract — add Next Step: "Missing documents to enroll" |

> ⚠️ Do NOT skip the Quote Sent status even if no quote was sent. This is required to maintain order in the reports.

> ⚠️ Do NOT move to Enrollment Pending until all required documents are received and verified.

---

## ⚠️ Important reminders

> 🔴 **Legal professionals:** If the business is related to lawyers, paralegals, or attorneys — check with Management before proceeding.

> 🚫 **Special characters:** Never use accented characters or tildes in any Salesforce field.

> 📍 **Puerto Rico:** VC or Bank Statement required before Contract — see [04 — Special Cases, Section 7](./dag-04-special-cases#section-7--puerto-rico-files).

> 📨 **Documents from clients not yet enrolled, under Sales Lead Rose Walters:** CC teamnotification@businessdebtninjas.com on all documents sent to the client.

> 📨 **Documents from enrolled clients (any sales lead):** Forward to clientsupport@dag-law.com

---

## ✅ Contract Request Checklist

- [ ] Contract Request template received with all required fields
- [ ] Lead verified in Salesforce — Lead Source, Sales Lead, Sales Agent, Score, Risk Classification, Payment Capacity, Portfolio all present
- [ ] Quote previously sent to client is attached and matches Salesforce data
- [ ] Valid banking documentation attached (voided check or approved alternative)
- [ ] Lead found and converted in Salesforce
- [ ] Account complete (Profile: DAG, no special characters)
- [ ] Contact complete (SSN, DOB, EIN — or note left if EIN missing)
- [ ] Contact Role set to Business User / Primary
- [ ] Opportunity fields complete (FPD, Stage, Status, Lead Source, Score, Risk Classification, Client Service rotated)
- [ ] EIN added to account (or note left if missing)
- [ ] Banking information entered (Bank Name from usbanklocations.com, Routing, Account, City/State, Name on Account)
- [ ] Update Banking Info button clicked
- [ ] Address added to Account (Billing Address) and Contact (Mailing Address) — Country set to US
- [ ] Address state matches template state
- [ ] Schedule Transactions completed — Total Program Cost does not exceed the quoted amount
- [ ] Underwriting fields completed (4 attorney fee payments)
- [ ] Contract generated from quotes@dag-law.com, downloaded, reviewed against Salesforce
- [ ] ACH vs Banking Info QA Revision screenshots sent to Webex, approval received
- [ ] Contract sent for signature via DocuSign
- [ ] Email reply sent to sales agent immediately (Reply All) with contract PDF attached
- [ ] teamnotification@ CC'd if Sales Lead is Rose Walters
- [ ] Notes added to opportunity
- [ ] Opportunity status updated
- [ ] Enrollment Plan banking info verified (after Schedule Transactions)

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
