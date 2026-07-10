---
layout: default
title: DAG 03 — Enrollment
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

# ✍️ DAG 03 — Enrollment

**Trigger:** You received the DocuSign email notification confirming the merchant signed the contract, and (separately) the follow-up input from Customer Service (CS) to Accounting.

This workflow covers everything from the signed contract to the completed enrollment: reviewing the signed contract, sending the enrollment emails, processing the PayNow link, and recording the enrollment after the Customer Service (CS) report.

> ⚠️ Do NOT move the file to Enrollment Pending or send it to Accounting until all required documents have been received and verified.

---

## Quick summary checklist

- [ ] Download signed contract from DocuSign email and save it into the opportunity
- [ ] Review contract vs Salesforce (fees, dates, signatures, business name, owner names)
- [ ] Verify signature is an acceptable DocuSign signature
- [ ] Confirm SSN / EIN / DOB match system data
- [ ] Confirm ACH info matches voided check
- [ ] If OK, send "Congratulations on Enrolling with Debtors Advocacy Group" email to client
- [ ] Generate the PayNow link directly in TRIFI (UW self-service — see [PayNow Link](./dag-paynow-link)) → paste into Card Payment Info → PayNow Link
- [ ] Send Secure Payment Link email (DAG paynow link template), BCC sales agent
- [ ] Update Underwriting Section → Sign Contract Date, set status per Sales Lead rule
- [ ] Save all files and leave notes
- [ ] After CS email is received, add the info to the DAG Enrollments 2026 Google Sheet

---

## Part A — When you receive the DocuSign email

### Step 1 — 📥 Confirm and save the signed contract

Confirm the email is from DocuSign (envelope notification) and contains the signed contract. Download the signed PDF and save it into the opportunity.

### Step 2 — 🔍 Review the signed contract against Salesforce

Compare field-by-field:

| Item | Must match |
|------|------------|
| Fees / Enrollment amount / FPD | Salesforce and contract |
| Contract dates | Sign date, effective date |
| Business name and Owner names | Salesforce |
| Signatures | See signature rules below |
| SSN / EIN / DOB | Value in the system or supporting ID |
| Bank (ACH) details | Voided check provided |

<details>
<summary>✍️ Signature rules</summary>
<br>
<strong>Acceptable:</strong> signed via DocuSign envelope with signer name and date on the signature page; printed name matches an authorized owner signatory in the contract or CRM.
<br><br>
<strong>Not acceptable:</strong> no DocuSign certificate / pasted image without envelope evidence; signed name does not match the owner/authorized signer; missing signature (a dot or line instead).
</details>

<details>
<summary>🔢 SSN, EIN, DOB and ACH verification</summary>
<br>
If SSN/TIN is masked in the system but visible on the contract, check the last 4 digits match. Check routing/account numbers against the voided check. If numbers do not match, escalate.
</details>

When review is complete, add a note:
```
DocuSign review complete — fees/dates/signature/SSN/ACH verified by [Your Name] on [YYYY-MM-DD].
```
— and attach the signed contract to the record.

### Step 3 — 🎉 Send the Congratulations email

Send **"Congratulations on Enrolling with Debtors Advocacy Group"** using the company template. Do **not** include the PayNow link yet.

### Step 4 — 💳 Generate and process the PayNow link

1. UW generates the PayNow link directly in **TRIFI** — it is not requested from Management. See [PayNow Link](./dag-paynow-link) for the full generation steps.
2. Paste the link into **Card Payment Info → PayNow Link**.
3. Send the **Secure Payment Link** email using the DAG paynow link template — **To:** Client, **BCC:** Sales Agent (always).

### Step 5 — 📅 Update the Underwriting Section and Status

Set **Sign Contract Date** to the date on the DocuSign certificate. Identify the Sales Lead before updating status:

| Sales Lead | Status to set |
|------------|---------------|
| Rose Walters | Sign Contract / Pre-Welcome Call |
| Vic Carmine / Domenic Nardini | Sign Contract / Enrollment Pending |

> 💡 Vic Carmine files should default to BDS — see [01 — Quote Request](./dag-01-quote-request#step-5----create-the-opportunity). This status rule only applies if the file is a documented DAG exception approved by Management.

### Step 6 — 💾 Final save and notes

Confirm the signed contract is attached, the PayNow Link field is populated, and add a final note summarizing what was done and by whom.

---

## Part B — When you receive the email from DAG Customer Service (CS)

### Step 7 — 📊 Record the enrollment in the Google Sheet

1. Open the CS email and copy the ID of the file from the body.
2. Open the **DAG Enrollments 2026** Google Sheet.
3. Add a new row for each client/file, filling: DAG ID, Clients Name, Biz Name, Debt Amount, Expected Earn Fee, Program Term, Signed Date, Enrollment Date, First Payment Date, Enrolled?, If no/why, Exception, Which?, Sales Agent, Sales Lead, Enrolled By, Month.
4. Move the CS email to the **Enrolled files** label.

### Step 8 — 🗒️ Add the enrollment review notes

```
Contract Review
Creditors' names capitalized and correct: Y
Business Address complete: Y
(EFT) Authorization to debit bank account complete and correct: Y
1st Payment Date updated: Y/N
DocuSign review complete — fees, dates, signature, SSN, and ACH verified by [Your Name] on [YYYY-MM-DD]
```

---

## 📞 Pre-Welcome Call scenarios

<details>
<summary>✏️ Contract changes needed after the Pre-Welcome Call</summary>
<br>
If changes are needed, UW receives the signed contract and completes the enrollment process. The file should remain in "Pre-Welcome Call" status — even if there is a previous note indicating the Pre-Welcome Call was completed.
</details>

<details>
<summary>📎 Pending documents received</summary>
<br>
Check if there is an existing Pre-Welcome Call (PWC) note.
<br><br>
<strong>If a PWC note exists:</strong> change status to Pre-Welcome Call (PWC) → Save → update to Enrollment Pending → Save again.
<br><br>
<strong>If no PWC note exists:</strong> change status to Pre-Welcome Call (PWC) and leave the file in this status.
</details>

---

## 📄 Required Documentation for Enrollment

The standard, primary required document is a **Voided Check**. If the client has a valid reason for not providing one, the accepted alternative (no approval needed) is **Bank Letter + Most Recent Bank Statement**.

Any other documentation is an exception requiring prior approval from Sales Management, documented in the same email thread requesting the contract. UW must return any contract request involving alternative documentation without that approval.

<details>
<summary>📋 UW Workflow for Incomplete Documentation</summary>
<br>
UW may send contracts even if complete documentation has not yet been received, provided:
<ul>
<li>The file is NOT moved to Enrollment Pending or sent to Accounting until all required documents are received.</li>
<li>UW leaves clear notes indicating the contract was sent with incomplete documentation.</li>
<li>UW updates the "Next Step" field with the exact wording below (no exceptions):</li>
</ul>

```
Missing documents to enroll
```

</details>

<details>
<summary>📄 Post-Signature Documentation Recovery</summary>
<br>
Once missing documents arrive, Sales confirms receipt by email. UW compares the documentation against the signed contract:
<br><br>
<strong>If it matches</strong> — UW may move the file to Enrollment Pending provided the FPD has not passed and is not scheduled for the same day. If FPD is the following day, Sales is responsible for ensuring sufficient client funds, since Accounting may activate the account within hours. UW must leave notes confirming verification and remove the "Missing documents to enroll" note without exception.
<br><br>
<strong>If it does not match</strong> — a new contract must be prepared and signed again. The file remains in "Send Contract" status until the corrected contract is fully executed.
</details>

---

## ⚠️ Important reminders

- Do NOT move the file to Enrollment Pending or send it to Accounting until all required documents are received.
- The PayNow link is generated by UW directly in TRIFI — see [PayNow Link](./dag-paynow-link). It is not requested from Management.
- Always BCC the sales agent on the Secure Payment Link email.
- If SSN, DOB, EIN, ACH, or signature checks fail → escalate to Management before continuing.
- Escalations: qa@dag-law.com — CC joshua.a@businessdebtsolutions.com and ale.b@businessdebtsolutions.com.

---

## ✅ Enrollment Checklist

- [ ] DocuSign email confirmed and signed contract downloaded
- [ ] Signed contract saved into the opportunity
- [ ] Contract reviewed field-by-field against Salesforce
- [ ] Signature verified as acceptable
- [ ] SSN / EIN / DOB verified against the system
- [ ] ACH details verified against the voided check
- [ ] DocuSign review note added
- [ ] Congratulations email sent (without PayNow link)
- [ ] PayNow link generated in TRIFI (see [PayNow Link](./dag-paynow-link)) and pasted into Card Payment Info → PayNow Link
- [ ] Secure Payment Link email sent (BCC sales agent)
- [ ] Sign Contract Date set; status set per Sales Lead
- [ ] Final save with notes
- [ ] CS email received → row added to DAG Enrollments 2026 sheet
- [ ] CS email moved to Enrolled files label
- [ ] Enrollment review notes added

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
