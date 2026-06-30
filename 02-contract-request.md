---
layout: default
title: 02 — Contract Request
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

# 📄 02 — Contract Request

**Trigger:** You received a Contract Request email from a sales agent with the contract request template, the previously sent quote, and the required banking documentation.

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
<tr><td>Portfolio</td><td>Must match the portfolio on the contract request template</td></tr>
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

<strong>State on voided check</strong> — The state on the business address must match the state provided by Sales. If it does not match, request clarification before proceeding.<br><br>

<strong>Business name mismatch</strong> — If the business name on the voided check does not match the account name in Salesforce, email Sales:
<blockquote><em>"Hello [Sales Agent], please be aware that the business name on the voided check does not match the business name provided when the account was created. Reply with the correct business name."</em></blockquote>

<strong>Sole Proprietor exception</strong> — The owner's personal name may appear as the Name on Account. This is acceptable as long as you confirm the account is a business account via bank statement or bank letter. No name change is required in Salesforce.
</details>

---

## Step 2 — Find and convert the lead in Salesforce

1. Search for the lead using the business name from the email subject line.
2. Locate the most recent **Lead** record.
3. Click **Convert** on the lead.
4. Choose one of the following:
<ul>
<li><strong>Create all new records</strong> — for new merchants with no existing account.</li>
<li><strong>Continue working on an existing account</strong> — for concurrent merchants. Create a new opportunity under the existing account and contact. Do not select an existing opportunity.</li>
</ul>

The conversion will create an **Account**, a **Contact**, and an **Opportunity**.

> ⚠️ For concurrent merchants, always create a **new opportunity**. Never modify an existing active opportunity. See [03 — Special Cases](./03-special-cases) for concurrent rules.

---

## Step 3 — Complete the Account

Verify and complete all required fields:
<br><br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Account name</td><td>Business name from template</td></tr>
<tr><td>Active</td><td>✅ Check this box</td></tr>
<tr><td>Entity type</td><td>From template</td></tr>
<tr><td>Profile</td><td>BDS</td></tr>
<tr><td>Phone</td><td>From template</td></tr>
<tr><td>Industry</td><td>From template</td></tr>
<tr><td>Inception Date</td><td>Business start date from template</td></tr>
<tr><td>Billing State/Province</td><td>State from template</td></tr>
<tr><td>Campaign ID</td><td>From template</td></tr>
</table>
<br>
🚫 Do not use accented characters (á, é, í, ó, ú) or tildes (ñ). Replace with standard English letters.

---

## Step 4 — Complete the Contact

Verify and complete all required fields:
<br><br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>First and last name</td><td>Owner's name (add middle name if needed)</td></tr>
<tr><td>Title</td><td>Owner</td></tr>
<tr><td>Email</td><td>From template</td></tr>
<tr><td>Phone</td><td>From template</td></tr>
<tr><td>Mobile</td><td>Same as phone if no second number (no dashes, no parentheses)</td></tr>
<tr><td>SSN</td><td>From template — 9 digits, may start with 0</td></tr>
<tr><td>Owners Birthday (DOB)</td><td>From template — must be 18+</td></tr>
<tr><td>Mailing State/Province</td><td>State from template — confirm it populated correctly</td></tr>
</table>
<br>
💡 If the merchant has two owners, create a second contact with the co-owner's information and set Title to <strong>Co-Owner</strong>.

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
<br><br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Opportunity name</td><td>Business name + Type of debt (e.g. "Royal Pearl Haven Realty MCA")</td></tr>
<tr><td>Stage</td><td>Underwriting</td></tr>
<tr><td>Status</td><td>Approved / Send Contract</td></tr>
<tr><td>Type of debt</td><td>From original quote</td></tr>
<tr><td>Date of First Payment (FPD)</td><td>From template — minimum 3–4 business days, up to 7. Extension requires Management approval.</td></tr>
<tr><td>Lead Source</td><td>From original quote/lead</td></tr>
<tr><td>Score</td><td>From lead</td></tr>
<tr><td>Risk Classification</td><td>From lead</td></tr>
</table>
<br>
💡 Review the quote document against the transaction table to confirm all amounts and dates align with what was sent to the merchant.

---

## Step 6 — Add EIN to the Account

Enter the EIN (Tax ID) in the designated field on the account.

> 💡 EIN may arrive in the contract request email. If missing, it is your responsibility to request it from Sales. Leave a note in the opportunity documenting this.

---

## Step 7 — Add Banking Information

Go to the **Account** → **Banking Information** section.

### 7.1 — Enter the banking details

Fill in the following fields from the voided check:
<br><br>
<table>
<tr><th>Field</th><th>How to fill it</th></tr>
<tr><td>Bank Name</td><td>Look up the routing number at <a href="https://www.usbanklocations.com/">usbanklocations.com</a> — enter the routing number and the site will return the official bank name and city. Use the exact name returned by the site.</td></tr>
<tr><td>Routing Number</td><td>9-digit number from the voided check — most of the time the first set of numbers on the bottom left</td></tr>
<tr><td>Account Number</td><td>Middle set of numbers on the bottom of the check. Enter exactly as it appears — see special cases in Step 1.4 for Navy Federal and other exceptions.</td></tr>
<tr><td>Bank Full Address</td><td>Use the bank city returned by usbanklocations.com and enter the city and state.</td></tr>
<tr><td>Name on Account</td><td>Business name as it appears on the voided check. For sole proprietors, the owner's name is acceptable — see Step 1.4.</td></tr>
</table>
<br>
Click <strong>Save</strong>.

### 7.2 — Update Banking Info

After saving, click the **Update Banking Info** button in the upper right corner of the account page. Click **Next** to apply the banking information to all transactions in the Enrollment Plan.

### 7.3 — Verify in Enrollment Plan

> ⚠️ This step cannot be completed until [Schedule Transactions](./schedule-transactions) has been done. Once complete, navigate to the **Opportunity** → **Enrollment Plan** tab. Open any transaction and confirm the banking information has been correctly linked.

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

## Step 9 — Generate the Contract

Once all information is complete:

1. Click the dropdown arrow on the opportunity → select **Create BDS Full Contract**.
2. **Download** the generated document.
3. Open it and review all details against Salesforce:
<ul>
<li>Fees, enrollment amount, FPD</li>
<li>Contract dates (sign date, effective date)</li>
<li>Business name and owner names</li>
<li>SSN / EIN / DOB</li>
<li>Bank (ACH) details vs voided check</li>
</ul>
4. If everything matches → proceed to Send for Signature.

> ⚠️ Contracts can only be generated from <strong>quotes@businessdebtsolutions.com</strong>. If you receive a "no permission" message, you are not using the correct user.

### 9.1 — Send for Signature via DocuSign

<ol>
<li>Click <strong>Send for Signature</strong> → <strong>Next</strong> on the documents screen.</li>
<li><strong>Recipients</strong> — review only, do not modify. Confirm client name and email are correct for Sales Team and Sales Agent.</li>
<li><strong>Email Subject</strong> — copy and paste the business name from notepad. Do not type it manually. Click <strong>Next</strong>.</li>
<li>Add signature and date indicators on the last 4 pages.</li>
<li>Click <strong>Send</strong>.</li>
</ol>

Once sent, the status will show as <strong>Sent for Signature</strong>.

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

## Step 10 — Send the Email Reply to the Sales Agent

Immediately after sending the contract to the client, reply All to the original contract request email using the **Contract Sent Additional Details** template (Gmail → three dots → Templates).

Include:
<ul>
<li>Total Program Cost</li>
<li>CC Amount</li>
<li>CC Processor Fee</li>
<li>CC Process Payment Amount</li>
<li>Partner: BDS</li>
</ul>

Attach a **PDF copy of the contract** to the reply.

> 💡 Make sure to CC <strong>teamnotification@businessdebtninjas.com</strong> on all documents sent to the client when the Sales Lead is Rose Walters.

---

## Step 11 — Add Notes to the Opportunity

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

## Step 12 — Update Opportunity Status

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

> 🚫 **Two ACH forms:** When creating a BDS contract, there will always be two ACH forms that must be completed by the merchant — whether the opportunity has one owner or both an owner and co-owner.

> 📨 **Documents from clients not yet enrolled, under Sales Lead Rose Walters:** CC teamnotification@businessdebtninjas.com on all documents sent to the client.

> 📨 **Documents from enrolled clients (any sales lead):** Forward to clientsupport@businessdebtsolutions.com

---

## ✅ Contract Request Checklist

- [ ] Contract Request template received with all required fields
- [ ] Lead verified in Salesforce — Lead Source, Sales Lead, Sales Agent, Score, Risk Classification, Payment Capacity, Portfolio all present
- [ ] Quote previously sent to client is attached and matches Salesforce data
- [ ] Valid banking documentation attached (voided check or approved alternative)
- [ ] Lead found and converted in Salesforce
- [ ] Account complete (all fields, no special characters)
- [ ] Contact complete (SSN, DOB, State confirmed)
- [ ] Contact Role set to Business User / Primary
- [ ] Opportunity fields complete (FPD, Stage, Status, Lead Source, Score, Risk Classification)
- [ ] EIN added to account (or note left if missing)
- [ ] Banking information entered (Bank Name from usbanklocations.com, Routing, Account, City/State, Name on Account)
- [ ] Update Banking Info button clicked
- [ ] Address added to Account (Billing Address) and Contact (Mailing Address) — Country set to US
- [ ] Address state matches template state
- [ ] Contract generated, downloaded, and reviewed against Salesforce
- [ ] Contract sent for signature via DocuSign
- [ ] Email reply sent to sales agent immediately (Reply All) with contract PDF attached
- [ ] teamnotification@businessdebtninjas.com CC'd if Sales Lead is Rose Walters
- [ ] Notes added to opportunity
- [ ] Opportunity status updated
- [ ] Enrollment Plan banking info verified (after Schedule Transactions)

---

*Questions or updates → qa@businessdebtsolutions.com — CC ale.b@businessdebtsolutions.com and joshua.a@businessdebtsolutions.com*

---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-special-cases">03 — Special Cases</a> &nbsp;|&nbsp;
<a href="./04-quick-reference">04 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a>
</p>
