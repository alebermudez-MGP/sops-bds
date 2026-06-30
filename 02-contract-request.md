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

Before doing anything in Salesforce, review the email and confirm all of the following.

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
<summary>📎 1.2 — Required documents are attached</summary>
<br>
The following must be included with the contract request:
<ul>
<li><strong>Quote previously sent to the client</strong> — confirm the program cost, FPD, and creditors match what was quoted.</li>
<li><strong>Valid voided check</strong> — primary banking document required for enrollment.</li>
</ul>
If a voided check is not available, the following combination is accepted <strong>without prior approval</strong>:
<ul>
<li>Bank Letter <strong>AND</strong> Most Recent Bank Statement</li>
</ul>
Any other documentation requires <strong>Sales Management approval</strong> documented in the same email thread.<br><br>
⚠️ Starter checks and direct deposit forms are <strong>not accepted</strong>.
</details>

<details>
<summary>🏦 1.3 — Voided check is valid</summary>
<br>
A valid voided check must include:
<ul>
<li>Routing number (9 digits)</li>
<li>Account number</li>
<li>Business name (printed by the bank)</li>
<li>Bank name</li>
</ul>
<strong>Special cases:</strong>
<br><br>
<strong>Bank of America</strong> — Use the ACH routing number labeled under the bank name. Do not use the wire routing number.
<br><br>
<strong>Bluevine</strong> — Voided checks may only show a logo. Banking services are provided by Coastal Community Bank (Member FDIC). Verify by entering routing number <strong>125109019</strong> — it should populate as Coastal Community Bank.
<br><br>
<strong>Navy Federal Credit Union</strong> — Omit the prefix 001 or 002 from the account number. These are internal identifiers. Example: if VC shows 0017151093775, enter <strong>7151093775</strong>.
<br><br>
<strong>State on voided check</strong> — The state on the business address of the voided check must match the state provided by Sales. If it does not match, request clarification before proceeding.
<br><br>
<strong>Business name mismatch</strong> — If the business name on the voided check does not match the account name in Salesforce, email Sales:
<blockquote><em>"Hello [Sales Agent], please be aware that the business name on the voided check does not match the business name provided when the account was created. Reply with the correct business name."</em></blockquote>
<strong>Sole Proprietor exception</strong> — If the merchant is a sole proprietor, the owner's personal name may appear as the Name on Account. This is acceptable as long as you confirm the account is a business account (via bank statement or bank letter). No name change is required in Salesforce.
</details>

---

## Step 2 — Find the lead in Salesforce

Search for the lead using the business name from the email subject line.

1. Locate the most recent **Lead** record for this merchant.
2. Click **Convert** on the lead.
3. Choose one of the following:
<ul>
<li><strong>Create all new records</strong> — for new merchants with no existing account.</li>
<li><strong>Continue working on an existing account</strong> — for concurrent merchants. Create a new opportunity under the existing account and contact. Do not select an existing opportunity.</li>
</ul>

The conversion process will create an **Account**, a **Contact**, and an **Opportunity**.

> ⚠️ For concurrent merchants, always create a **new opportunity**. Never modify an existing active opportunity. See [03 — Special Cases](./03-special-cases) for concurrent rules.

---

## Step 3 — Complete the Account

Verify and complete all required fields on the account:
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

Verify and complete all required fields on the contact:
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

### 4.1 — Confirm Contact Role on the Opportunity

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

Verify all opportunity fields are complete. Pay special attention to:
<br><br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Opportunity name</td><td>Business name + Type of debt (e.g. "Royal Pearl Haven Realty MCA")</td></tr>
<tr><td>Stage</td><td>Underwriting</td></tr>
<tr><td>Status</td><td>Approved / Send Contract</td></tr>
<tr><td>Type of debt</td><td>From original quote</td></tr>
<tr><td>Date of First Payment (FPD)</td><td>From template — 3–4 business days minimum, up to 7. Extension requires Management approval.</td></tr>
<tr><td>Lead Source</td><td>From original quote</td></tr>
</table>
<br>

> 💡 Review the quote document against the transaction table to confirm the information matches or is reasonably aligned with what was sent to the merchant.

---

## Step 6 — Add Banking Information

Go to the **Account** → Banking Information section and enter the following from the voided check:
<ul>
<li>Bank name</li>
<li>Routing number — verify at <a href="https://www.usbanklocations.com/">usbanklocations.com</a> to retrieve bank name and city</li>
<li>Account number</li>
<li>Bank full address</li>
<li>Name on Account</li>
</ul>

Click **Save**.

Then click **Update Banking Info** (upper right corner of the account). Click **Next** to confirm. Navigate to the Opportunity → Enrollment Plan to verify banking information is correctly linked to the transactions.

After adding banking information, add the address to both the **Account** and the **Contact**. Retrieve from the voided check or banking documentation. If only a PO box is provided, look up the address and confirm with Sales before proceeding.

---

## Step 7 — Add EIN to the Account

Enter the EIN (Tax ID) in the designated field on the account.

> 💡 EIN may arrive in the contract request email. If missing, it is your responsibility to request it from Sales. Leave a note in the opportunity documenting this.

---

## Step 8 — ACH vs Banking Info QA Revision

Before generating the contract:
<ol>
<li>Take a screenshot showing the bank account information section in Salesforce along with all other relevant details.</li>
<li>Collect a screenshot of the merchant's voided check (or bank statement showing routing and account numbers).</li>
<li>Send both screenshots to the Webex chat: <strong>🟦 "ACH vs Banking Info QA Revision"</strong></li>
<li>Wait for QA approval before proceeding.</li>
</ol>

> 🔔 Do not skip this step. Missing it can lead to delays, additional documentation requests, and a negative client experience.

---

## Step 9 — Generate the Contract

Once QA approves, generate the contract from the opportunity:

1. Click the dropdown arrow → select **Create DAG Full Contract**.
2. **Download** the generated document.
3. Open it and review all details against Salesforce:
<ul>
<li>Fees, enrollment amount, FPD</li>
<li>Contract dates (sign date, effective date)</li>
<li>Business name and owner names</li>
<li>SSN / EIN / DOB</li>
<li>Bank (ACH) details vs voided check</li>
</ul>
4. If everything matches → click **Send for Signature**.
5. Immediately after sending to the client, forward a copy to the sales agent from the underwriting inbox. No exceptions.

> ⚠️ Contracts can only be generated from **quotes@businessdebtsolutions.com**. If you receive a "no permission" message, you are not using the correct user.

<details>
<summary>📋 DocuSign — Send for Signature steps</summary>
<br>
<ol>
<li>Click <strong>Send for Signature</strong> → <strong>Next</strong> on the documents screen.</li>
<li><strong>Recipients</strong> — review only, do not modify. Confirm client name and email are correct for Sales Team and Sales Agent.</li>
<li><strong>Email Subject</strong> — copy and paste the business name from notepad. Do not type it manually. Click <strong>Next</strong>.</li>
<li>Add signature and date indicators on the last 4 pages.</li>
<li>Click <strong>Send</strong>.</li>
</ol>
Once sent, the status will show as <strong>Sent for Signature</strong>.
</details>

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

## Step 10 — Add Notes to the Opportunity

After sending the contract, add a note with the following information:

```
Contract sent
Total Fees: $[amount]
FPD: [date]
Creditors and balances:
- [Creditor name]: $[amount]
Banking Info Review
Business Name matches: Y
```

> 💡 If the quote and contract request arrived at the same time (combined request), do not send the quote separately — send only the contract. Include both the quote notes and the contract notes in a single note entry.

---

## Step 11 — Send the Email Reply to the Sales Agent

Reply All to the original contract request email using the **Contract Sent Additional Details** template (Gmail → three dots → Templates).

Include:
<ul>
<li>Total Program Cost</li>
<li>CC Amount</li>
<li>CC Processor Fee</li>
<li>CC Process Payment Amount</li>
<li>Partner: BDS</li>
</ul>

Attach a **PDF copy of the contract** to the reply.

> 💡 Also forward a copy of all documents sent to the merchant to: **teamnotification@businessdebtninjas.com**

---

## Step 12 — Update Opportunity Status

| Situation | Stage | Status |
|-----------|-------|--------|
| Contract sent | Underwriting | Approved / Send Contract |
| Waiting for missing documents | Underwriting | Send Contract |
| Contract sent with incomplete docs | Underwriting | Send Contract — add Next Step: "Missing documents to enroll" |

> ⚠️ Do NOT move to Enrollment Pending until all required documents are received and verified.

---

## ⚠️ Important reminders

> 🔴 **Legal professionals:** If the business is related to lawyers, paralegals, or attorneys — check with Management before proceeding.

> 🚫 **Special characters:** Never use accented characters or tildes in any Salesforce field.

> 🚫 **Two ACH forms:** When creating a BDS contract, there will always be two ACH forms that must be completed by the merchant — whether the opportunity has one owner or both an owner and co-owner.

> 📨 **Documents from clients not yet enrolled, under Sales Lead Rose Walters:** Forward to teamnotification@businessdebtninjas.com

> 📨 **Documents from enrolled clients (any sales lead):** Forward to clientsupport@businessdebtsolutions.com

---

## ✅ Contract Request Checklist

- [ ] Contract Request template received with all required fields
- [ ] Quote previously sent to client is attached
- [ ] Valid banking documentation attached (voided check or approved alternative)
- [ ] Lead found in Salesforce and converted
- [ ] Account complete (all fields, no special characters)
- [ ] Contact complete (SSN, DOB, State confirmed)
- [ ] Contact Role set to Business User / Primary
- [ ] Opportunity fields complete (FPD, Stage, Status, Lead Source)
- [ ] EIN added to account (or note left if missing)
- [ ] Banking information entered and Updated Banking Info button clicked
- [ ] Address added to Account and Contact
- [ ] ACH vs Banking Info QA screenshot sent to Webex and approved
- [ ] Contract generated, downloaded, and reviewed against Salesforce
- [ ] Contract sent for signature via DocuSign
- [ ] Contract copy forwarded to sales agent immediately after sending
- [ ] Notes added to opportunity
- [ ] Email reply sent to sales agent (Reply All) with contract PDF attached
- [ ] Copy forwarded to teamnotification@businessdebtninjas.com
- [ ] Opportunity status updated

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
