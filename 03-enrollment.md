---
layout: default
title: 03 — Enrollment
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

# ✍️ 03 — Enrollment

**Trigger:** You received the DocuSign email notification confirming the merchant signed the contract.

This workflow covers everything from the signed contract to the completed enrollment: reviewing the signed contract, sending the enrollment emails, processing the PayNow link, updating the processor, and recording the enrollment after the Customer Service (CS) report.

> ⚠️ Do NOT move the file to **Enrollment Pending** or send it to Accounting until **all required documents** have been received and verified. See [Missing Documentation](#missing-documentation-received-after-the-contract-was-signed) below.

---

## Part A — When you receive the signed contract

---

## Step 1 — 📥 Confirm and save the signed contract

1. Confirm the email is from **DocuSign** (envelope notification) and contains the signed contract.
2. **Download** the signed PDF.
3. **Save it into the opportunity** (Files tab).

---

## Step 2 — 🔍 Review the signed contract against Salesforce

Open the client record in Salesforce and compare **field by field**:

| Item | Must match |
|------|------------|
| Fees / Enrollment amount / FPD | Salesforce system and contract |
| Contract dates | Sign date, effective date |
| Business name and Owner names | Salesforce |
| Signatures | See signature rules below |
| SSN / EIN / DOB | Value in the system or supporting ID |
| Bank (ACH) details | Voided check provided |

<details>
<summary>✍️ Signature rules — acceptable vs not acceptable</summary>
<br>
<strong>Acceptable:</strong>
<ul>
<li>Signed via DocuSign envelope with signer name and date displayed on the signature page.</li>
<li>The printed name on the signature matches an authorized owner signatory in the contract or CRM.</li>
</ul>
<strong>NOT acceptable:</strong>
<ul>
<li>No DocuSign certificate / the signature appears to be a pasted image without envelope evidence.</li>
<li>The signed name does not match the owner or authorized signer on the contract.</li>
<li>Missing signature — a dot or a line instead of a signature.</li>
</ul>
</details>

<details>
<summary>🔢 SSN, EIN, DOB and ACH verification</summary>
<br>
<ul>
<li>Compare the SSN / EIN / DOB on the contract against the values stored in Salesforce.</li>
<li>If the SSN/TIN is masked in the system but visible on the contract, check that the <strong>last 4 digits match</strong>.</li>
<li>Check the routing and account numbers against the voided check provided by the client.</li>
<li>If the contract only shows masked numbers (e.g. ******1234), verify the last 4 digits match the voided check and that the account holder name matches.</li>
</ul>
<br>
⚠️ If any of these do <strong>not</strong> match → <strong>escalate to Management</strong> before continuing.
</details>

Once every check passes:

1. Add this note to the client record:

> DocuSign review complete — fees/dates/signature/SSN/ACH verified by [Your Name] on [YYYY-MM-DD].

2. Confirm the signed contract is attached to the record (Files tab).

---

## Step 3 — 🎉 Send the Congratulations email

Send the Congratulations email to the client using the template: <a href="https://businessdebtsolutions.lightning.force.com/lightning/r/02sUv00000en4puIAA/view" target="_blank"><strong>Congratulations on Enrolling with Business Debt Solutions</strong></a>.

> ⚠️ Do NOT include the PayNow link in this email. That comes in the next step, in a separate email.

---

## Step 4 — 💳 Request and process the PayNow link

1. Ask **Management** for the PayNow link.
2. Paste the link into **Card Payment Info → PayNow Link** on the opportunity.
3. Send the **Secure Payment Link** email using the **BDS paynow link template**:

<details>
<summary>📧 Secure Payment Link email rules</summary>
<br>
<ul>
<li><strong>To:</strong> Client</li>
<li><strong>BCC:</strong> Sales Agent — <strong>always</strong> BCC the sales agent on this email.</li>
<li>Paste the PayNow link in the <strong>body</strong> of the email.</li>
</ul>
</details>

---

## Step 5 — 📅 Update the Underwriting Section and Status

1. Open the **Underwriting Section** in the client record.
2. Set **Sign Contract Date** to the date on the DocuSign certificate (or the date printed on the signature page).
3. Identify the **Sales Lead** before updating the status:

| Sales Lead | Status to set |
|------------|---------------|
| Rose Walters | Sign Contract / Pre-Welcome Call |
| Vic Carmine / Domenic Nardini | Sign Contract / Enrollment Pending |

---

## Step 6 — 🔄 Bulk Processor Update (Actum)

After completing the enrollment steps for a BDS opportunity, this additional step is **mandatory**.

1. On the opportunity, click the **Bulk Processor Update** button. It displays two options: **Kapcharge / Actum**.
2. Select **Actum** and **1** as the payment number (Underwriting always initiates the change from payment one to ensure consistency).
3. A confirmation will appear asking whether you want to change all payments to Actum starting from the selected payment → **confirm**.
4. The system applies the changes to the transactions and the associated fees, then shows a summary of what was updated.
5. Perform the **manual consistency check**:

<details>
<summary>✅ Manual consistency check</summary>
<br>
<ul>
<li>Processor is set to <strong>Actum</strong>.</li>
<li>Portfolio matches the expected <strong>BDS</strong> portfolio.</li>
<li>Both <strong>external transactions</strong> and <strong>internal fees</strong> are correctly reflected.</li>
</ul>
<br>
💡 The button also allows changing the processor and the portfolio in a single operation — useful to replace an incorrect processor while keeping the desired portfolio.
</details>

> ⚠️ Reminder: BDS opportunities run on **Actum**. The Kapcharge processor is only used when a manager or supervisor communicates it in advance.

---

## Step 7 — 💾 Final save and notes

1. Confirm the signed contract is attached.
2. Confirm the **PayNow Link** field is populated.
3. Add a final note in the client record summarizing what was done and who did it.

---

## Part B — When you receive the email from BDS Customer Service (CS)

---

## Step 8 — 📊 Record the enrollment in the Google Sheet

1. Open the CS email and **copy the ID** of the file from the body of the email.
2. Open the **BDS Enrollments 2026** Google Sheet (accounting intake).
3. Add a **new row for each client/file** listed in the CS report, filling the following columns with values from the report:

<details>
<summary>📋 Columns to fill</summary>
<br>
<ul>
<li>BDS ID</li>
<li>Clients Name</li>
<li>Biz Name</li>
<li>Debt Amount</li>
<li>Expected Earn Fee</li>
<li>Program Term</li>
<li>Signed Date</li>
<li>Enrollment Date</li>
<li>First Payment Date</li>
<li>Enrolled?</li>
<li>If no, why?</li>
<li>Exception</li>
<li>Which?</li>
<li>Sales Agent</li>
<li>Sales Lead</li>
<li>Enrolled By</li>
<li>Month</li>
</ul>
</details>

4. Move the CS email to the **Enrolled files** label.

---

## Step 9 — 🗒️ Add the enrollment review notes

After reviewing an enrollment, add the following notes to the opportunity:

> Contract Review
> Creditors' names capitalized and correct: Y
> Business Address complete: Y
> (EFT) Authorization to debit bank account complete and correct: Y
> 1st Payment Date updated: Y/N
> DocuSign review complete — fees, dates, signature, SSN, and ACH verified by [Your Name] on [YYYY-MM-DD]

---

## 📞 Pre-Welcome Call scenarios

<details>
<summary>✏️ Contract changes needed after the Pre-Welcome Call</summary>
<br>
<ul>
<li>After the Pre-Welcome Call, determine if any contract changes are required.</li>
<li>If changes are needed, UW will receive the signed contract.</li>
<li>UW will then complete the enrollment process.</li>
<li>The file should <strong>remain in "Pre-Welcome Call" status</strong>.</li>
<li>This applies even if there is a previous note indicating the Pre-Welcome Call was completed.</li>
</ul>
</details>

<details>
<summary>📎 Pending documents received</summary>
<br>
Once documents are received, begin by reviewing them and check if there is an existing Pre-Welcome Call (PWC) note.
<br><br>
<strong>If a PWC note exists:</strong>
<ol>
<li>Change the status to <strong>Pre-Welcome Call (PWC)</strong>.</li>
<li>Save the file.</li>
<li>Then update the status to <strong>Enrollment Pending</strong>.</li>
<li>Save the file again.</li>
</ol>
<strong>If no PWC note exists:</strong>
<ol>
<li>Change the status to <strong>Pre-Welcome Call (PWC)</strong>.</li>
<li>Leave the file in this status.</li>
</ol>
</details>

---

## 📄 Missing documentation received after the contract was signed

When a contract was sent with incomplete documentation (Next Step: "Missing documents to enroll" — see [02 — Contract Request](./02-contract-request)) and the missing documents arrive:

1. The Sales Agent must send an email to UW confirming the documents have been received.
2. UW reviews the documentation and compares it against the information used in the **signed contract**.

<details>
<summary>✅ If the information MATCHES the signed contract</summary>
<br>
UW may move the file to <strong>Enrollment Pending</strong> provided that:
<ul>
<li>The FPD has <strong>not passed</strong>, and</li>
<li>The FPD is <strong>not scheduled for the same day</strong>.</li>
</ul>
<br>
⚠️ If the FPD is scheduled for the <strong>following day</strong>, the Sales Agent is responsible for ensuring the client has sufficient funds available, as Accounting may activate the account within hours after the file is moved to Enrollment Pending.
<br><br>
Additionally, UW must:
<ul>
<li>Leave notes confirming the documents were received and verified.</li>
<li><strong>Remove the "Missing documents to enroll" note from the Next Step field</strong> — without exception.</li>
</ul>
</details>

<details>
<summary>🚫 If the information does NOT match the signed contract</summary>
<br>
<ul>
<li>A <strong>new contract</strong> must be prepared and signed again.</li>
<li>UW will prepare the updated contract and notify Sales once it has been sent for signature.</li>
<li>The file must remain in <strong>"Send Contract" status</strong> until the corrected contract has been fully executed.</li>
</ul>
</details>

---

## ⚠️ Important reminders

- Do NOT move the file to Enrollment Pending or send it to Accounting until all required documents are received.
- Always BCC the sales agent on the Secure Payment Link email.
- The Bulk Processor Update to **Actum** is mandatory for every BDS enrollment.
- If SSN, DOB, EIN, ACH, or signature checks fail → escalate to Management before continuing.
- Escalations: QA → **qa@businessdebtsolutions.com** · Management → **joshua.a@businessdebtsolutions.com**

---

## ✅ Enrollment Checklist

- [ ] DocuSign email confirmed and signed contract downloaded
- [ ] Signed contract saved into the opportunity (Files tab)
- [ ] Contract reviewed field-by-field against Salesforce (fees, FPD, dates, names)
- [ ] Signature verified as an acceptable DocuSign signature
- [ ] SSN / EIN / DOB verified against the system
- [ ] ACH details verified against the voided check
- [ ] DocuSign review note added
- [ ] Congratulations email sent to client (without PayNow link)
- [ ] PayNow link requested from Management and pasted into Card Payment Info → PayNow Link
- [ ] Secure Payment Link email sent (To: client, BCC: sales agent, link in body)
- [ ] Sign Contract Date set from the DocuSign certificate
- [ ] Status set according to the Sales Lead (Rose Walters vs Vic Carmine / Domenic Nardini)
- [ ] Bulk Processor Update completed — Actum, from payment 1
- [ ] Manual consistency check done (processor, portfolio, transactions, fees)
- [ ] Final save with notes
- [ ] CS email received → row added to BDS Enrollments 2026 sheet
- [ ] CS email moved to the Enrolled files label
- [ ] Enrollment review notes added

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
