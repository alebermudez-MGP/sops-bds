---
layout: default
title: DAG 01 — Quote Request
---

<p>
🏠 <a href="./dag-index">DAG Home</a> &nbsp;|&nbsp;
<a href="./dag-01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./dag-02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./dag-03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./dag-04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./dag-05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./dag-schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./dag-paynow-link">PayNow Link</a> &nbsp;|&nbsp;
<a href="https://alebermudez-mgp.github.io/sops-bds/dag-calculator.html">Calculator</a>
</p>

---

# 📋 DAG 01 — Quote Request

**Trigger:** You received a Quote Request email in the Quotes Inbox, with the business name in the subject line and the quote request template.

> 📌 **Portfolio Scope:** DAG only processes **Merchant Cash Advances (MCA)**. LOC from OnDeck, Bluevine, or Headway is treated as MCA. See [05 — Quick Reference, Section 0](./dag-05-quick-reference#section-0--portfolio-scope) for the full rule, including the **Kapitus exception** (any file with Kapitus goes to DAG regardless of other creditors).

---

## Step 1 — Validate the request before touching Salesforce

Before doing anything in Salesforce, review the template and confirm all of the following. If any item fails, reply to the sales agent immediately and do not proceed until resolved.

<details>
<summary>📝 1.1 — Template is complete</summary>
<br>
All required fields must be filled in:
<ul>
<li>Type of Business Debt</li>
<li>Business name</li>
<li>State</li>
<li>Lead Generated from</li>
<li>Lead Sources</li>
<li>Campaign ID</li>
<li>Entity type</li>
<li>Owner's name</li>
<li>Phone number</li>
<li>Email address</li>
<li>Name, balance, frequency and amount per Creditors</li>
<li>Term</li>
<li>Payment frequency</li>
<li>FPD</li>
<li>Sales Lead</li>
<li>CC as a payment method</li>
<li>Industry</li>
<li>Business start date</li>
<li>Portfolio</li>
<li>Score</li>
<li>Risk Classification</li>
</ul>
<br>
💡 If any field is missing, reply (Reply All) asking Sales to provide it or confirm what is missing. While waiting, continue building the file — you can add the missing data once received.
<br><br>
Template example:
```
Hey, Sales Agent. Here's the Quote, please provide a Type of Business Debt ASAP.
```
</details>

<details>
<summary>🚫 1.2 — State is not restricted</summary>
<br>
The following states are not eligible. If the request comes from one of these, reply to the sales agent stating you cannot work with that state and <strong>do not proceed</strong>:
<br><br>
<table>
<tr><th>State</th><th>Code</th></tr>
<tr><td>Arizona</td><td>AZ</td></tr>
<tr><td>Kansas</td><td>KS</td></tr>
<tr><td>Louisiana</td><td>LA</td></tr>
<tr><td>West Virginia</td><td>WV</td></tr>
<tr><td>Wyoming</td><td>WY</td></tr>
</table>
<br>
📍 <strong>Puerto Rico</strong> is not restricted, but requires extra steps before the Contract — see <a href="./dag-04-special-cases#section-7--puerto-rico-files">04 — Special Cases, Section 7</a>.
</details>

<details>
<summary>✅ 1.3 — Debt type is eligible</summary>
<br>
<strong>Allowed:</strong>
<ul>
<li>Merchant Cash Advance (MCA)</li>
<li>Business Line of Credit (LOC) — treated as MCA when from OnDeck, Bluevine, or Headway</li>
<li>Factoring Companies</li>
<li>Reverse Consolidation Companies</li>
</ul>
<strong>Not allowed:</strong>
<ul>
<li>Payday Loans</li>
<li>Leasing / Lease-to-Own</li>
<li>Investment Companies</li>
<li>Management Companies</li>
<li>Real Estate Management Companies</li>
<li>Mortgage Companies</li>
</ul>
⚠️ If the debt type is unclear or does not clearly fall into an allowed category, escalate to Management before proceeding.
</details>

<details>
<summary>📂 1.4 — Kapitus rule</summary>
<br>
Unlike BDS, DAG does not split by debt type into separate opportunities — see Portfolio Scope above. Instead, the key rule to check here is Kapitus:
<ul>
<li>Any file involving <strong>Kapitus</strong> must be submitted through the <strong>DAG portfolio only</strong>.</li>
<li>If a file includes multiple creditors and Kapitus is one of them, the <strong>entire file must be placed within DAG</strong>, regardless of the other creditors involved. No exceptions.</li>
</ul>
</details>

<details>
<summary>📊 1.5 — Risk Score is present</summary>
<br>
The Risk Score Calculator determines the appropriate portfolio for a customer and generates: Portfolio, Score (numeric, e.g. 28, 32, 47), and Risk Classification (Low / Medium / High).
<ul>
<li>If the Score or Portfolio is missing → return to Sales immediately and request the missing information.</li>
<li>If a portfolio is referenced but not specified → ask Sales the question below.</li>
<li>If the portfolio is changed based on an underwriting decision → confirm with the Sales agent the updated date for the Score and Risk Classification.</li>
</ul>

```
Which portfolio did the Risk Score calculator assign?
```

💡 <strong>Temporary rule:</strong> if BDS volume increases significantly, Upper Management may pause it and advise continuing to work files under DAG only.
</details>

---

## Step 2 — 🔍 Check for duplicates in Salesforce

Search for the merchant using **all** of the following before creating anything:
<ul>
<li>Business name</li>
<li>Owner's name</li>
<li>Email address</li>
<li>Phone number (use "Search for more results" to expand)</li>
</ul>

<details>
<summary>⚠️ What to do if a duplicate is found</summary>
<br>
<ul>
<li><strong>Active account exists</strong> → do not create a new account. Check if this should be a Concurrent. See <a href="./dag-04-special-cases">04 — Special Cases</a>.</li>
<li><strong>Account is in delinquency status</strong> → review notes and see <a href="./dag-04-special-cases">04 — Special Cases</a> before proceeding.</li>
<li><strong>Same contact info, different business name</strong> → do not stop the quote. Proceed and include the following note in your Quote Reply to the sales agent:</li>
</ul>

```
Here's the Quote. Please be aware that we have an account under the same merchant's name, phone number, or email address. Please clarify before moving with the contract request.
```

Leave proper notes in the file.
</details>

---

## Step 3 — 🏢 Create the Account

Go to Salesforce → Accounts → New → Select **Business** → Next.

Fill in the following fields using the information from the quote request template:

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

> 🚫 Do not use accented characters (á, é, í, ó, ú) or tildes (ñ). Replace with standard English letters (e.g. José → Jose, Peña → Pena). Processors cannot read these characters and transactions will fail.

Click **Save**.

---

## Step 4 — 👤 Create the Contact and set the Contact Role

From the account page, scroll down to the **Contacts** section → click the arrow → select **New**.

Fill in the following fields:

| Field | Value |
|-------|-------|
| First and last name | Owner's name from template (add middle name if needed) |
| Title | Owner |
| Email | From template |
| Phone | From template |
| Mobile | Same as phone if no second number (no dashes, no parentheses) |
| SSN | If provided in template |
| Owners Birthday (DOB) | If provided in template |
| Mailing State/Province | State from template — confirm it populated correctly |

💡 If the merchant has two owners, create a second contact with the co-owner's information and set Title to **Co-Owner**.

Click **Save**.

### 4.1 — Set the Contact Role on the Opportunity

After saving the contact, go to the opportunity page and find the **Contact Roles** section.

<ol>
<li>Click the dropdown → <strong>Edit</strong></li>
<li>Set Role to <strong>Business User</strong></li>
<li>Check <strong>Primary</strong></li>
<li>Click <strong>Save</strong></li>
</ol>

> ⚠️ **This step is critical.** If the Contact Role is not set correctly, the owner's information (phone, email, SSN, DOB, etc.) will not populate in the ACH and contract fields.

---

## Step 5 — 💼 Create the Opportunity

From the contact page, scroll down to **Opportunities** → click the arrow → select **New**.

Fill in the following fields:

| Field | Value |
|-------|-------|
| Opportunity name | Business name + Type of debt (e.g. "Royal Pearl Haven Realty MCA") |
| Company name | Select the merchant account |
| Client Service | Rotate among: James Jordan / Mark McGuire / Jane White / Jeffrey Gates — do not always assign the same person |
| Sales Lead | From template |
| Sales Agent | Who sends the quote request or is closing the deal |
| Close date | 7 days/week after |
| Type of debt | From template (see Portfolio Scope note above) |
| Stage | Lead |
| Status | Quote Sent (if sending quote) / Quote Pending (if information is missing) |
| Lead Source | From template |

💡 Unlike BDS, DAG opportunities do not use a "Law firm" field.

<details>
<summary>📌 Sales Agent / Sales Lead rules</summary>
<br>
<ul>
<li>No need to ask Sales who the assigned Sales Agent is.</li>
<li>The Sales Agent can be changed as long as the Sales Lead remains the same (e.g. moved from Agent X to Agent Y, provided both report to the same Sales Lead).</li>
<li>No changes should be made if the Sales Lead is different. If the file arrives under a different Sales Lead/Agent than expected, contact UW Management before proceeding.</li>
<li>Any quote under Sales Lead <strong>Vic Carmine</strong> is done only through BDS by default.</li>
</ul>
⚠️ <strong>Exception:</strong> if the company specifically requires it, a Vic Carmine file may be processed under DAG as a documented exception approved by Management. Do not move a Vic Carmine file to DAG on your own judgment.
</details>

<details>
<summary>📊 Risk Score fields</summary>
<br>
Enter the Risk Score information under the Underwriting section:
<br><br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Score</td><td>Numeric value from template</td></tr>
<tr><td>Risk Classification</td><td>Low / Medium / High from template</td></tr>
</table>
</details>

Click **Save**.

---

## Step 6 — 🏦 Add Creditor Entries

On the opportunity, look for **Creditors entries** → click the arrow → **New**.

For each creditor listed on the quote request template:

1. Look up the creditor on the dropdown menu (copy and paste exactly — do not retype).
2. Add the amount of debt in **Original debt amount**.
3. Click **Save**.
4. Repeat for each creditor. This populates the creditor table.

<details>
<summary>🔎 Creditor verification process (Steps 6A → 6D)</summary>
<br>
<strong>Step 6A — Creditors Gsheet (primary source)</strong>
<ul>
<li>Search for the creditor name exactly as provided by Sales.</li>
<li>If an exact or single clear match is found → use the exact spelling from the Gsheet, not the Sales spelling.</li>
<li>If no match → proceed to Step 6B.</li>
</ul>
<strong>Step 6B — Web verification</strong>
<ul>
<li>Google the creditor name. If unclear, search again with: lending, lender, funding, funder, cash advance, merchant cash advance.</li>
<li>Verify the company provides an eligible product type on its official website.</li>
<li>If verified → add to CRM using the official name. Notify Management to add it to the Gsheet (include the website link).</li>
<li>If not verified → proceed to Step 6C.</li>
</ul>
<strong>Step 6C — Sales clarification</strong>
<ul>
<li>Reply to Sales that the creditor name could not be confirmed. Include similar names found online and ask about typos.</li>
<li>If Sales provides updated details → restart at 6A/6B.</li>
<li>If Sales repeats the same information → proceed to Step 6D.</li>
</ul>
<strong>Step 6D — Documentation request</strong>
<ul>
<li>Request Bank Statements, MTD, Official Website, or Executed Contract with the Creditor.</li>
<li>Once received → repeat 6A/6B with the confirmed name.</li>
<li>If documentation cannot be obtained → escalate to Management.</li>
</ul>
</details>

<details>
<summary>⏳ Enrollment waiting periods</summary>
<br>
💡 Note these now — they apply at contract stage. See <a href="./dag-05-quick-reference#section-2--eligible-vs-ineligible-creditors">05 — Quick Reference, Section 2</a> for the full table, including Byzfunder NY LLC (45 days for DAG) and the 25/40-day exceptions.
</details>

<details>
<summary>⚠️ Special creditor scenarios</summary>
<br>
<strong>Creditor name contains a slash ( / )</strong><br>
Use only one name. If Sales provides two, request clarification or the executed contract.
<br><br><hr>
<strong>Lendini / Quickfix (also known as Funding Metrics or FM)</strong><br><br>
Lendini and Quickfix are the same company. Never use "Funding Metrics" or "FM" in Salesforce. Always use <strong>Lendini</strong> or <strong>Quickfix</strong> only.
<ul>
<li>⚠️ Always escalate to Management before proceeding.</li>
<li>CR requests: approval must be obtained before account creation.</li>
<li>US Sales requests: already approved — you may move forward.</li>
<li>If approved, Management will provide the applicable card payment amount.</li>
<li>If denied, do not include in quote and notify Sales immediately.</li>
<li>Minimum enrolled debt: <strong>$2,500</strong>. Keep payment terms within <strong>4–5 months</strong>. Maximum <strong>7 months</strong> with Management approval.</li>
</ul>
<br><hr>
<strong>Reverse Consolidation Companies</strong> — ask Sales the question below:

```
Are there additional creditors included in this reverse consolidation account?
```

<ul>
<li>If yes → include the reverse consolidation company name AND each individual creditor with their balance. Example:</li>
</ul>

```
Quality Funding Solutions – $90,000
Creditor 1 – $XX,XXX
Creditor 2 – $XX,XXX
```

<ul>
<li>If no → include only the reverse consolidation company name and total balance. Example:</li>
</ul>

```
Quality Funding Solutions – $90,000
(No additional creditors involved.)
```

<br><hr>
<strong>Third-Party Collection Agency</strong>
<ul>
<li>Enter the original lender's name in CRM.</li>
<li>Add a NOTE and an ALERT with this exact text:</li>
</ul>

```
File is already with 3rd party collection agency so if it does progress through the process the Negotiators know that there is no need to engage communications with the lender; negotiations will be handled directly with the collection agency.
```

<hr>
<strong>Creditor not on the Gsheet</strong>
<ul>
<li>Quotes may still be issued. Documentation is not required at Quote stage, required before Contract.</li>
<li>Creditor names must be Capitalized Format (e.g. This Is Capitalized). No placeholders like "Creditor 1."</li>
</ul>
</details>

---

## Step 7 — ⚙️ Schedule Transactions

➡️ Follow the full instructions in [DAG Schedule Transactions](./dag-schedule-transactions).

Come back to Step 8 once complete.

---

## Step 8 — 📝 Complete Underwriting and Pre-Approval fields

After Schedule Transactions is complete, fill in the following fields on the opportunity:

<details>
<summary>Underwriting section</summary>
<br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Quote Request Date</td><td>Today's date</td></tr>
<tr><td>Date of First Payment (FPD)</td><td>3–4 up to 7 business days. Extension requires Management approval.</td></tr>
<tr><td>Attorney fee amount per payment</td><td>$200.00</td></tr>
<tr><td>Last payment date with attorney fee</td><td>Same as FPD</td></tr>
<tr><td>Number of payments with attorney fee</td><td><strong>4</strong> (different from BDS, which uses 1)</td></tr>
<tr><td>Estimated Total Fee Amount at Time of UW</td><td>Total Fees saved from Schedule Transactions</td></tr>
<tr><td>Payback Amount</td><td>Total program cost</td></tr>
<tr><td>Savings Fee % UW</td><td>Percentage selected during Schedule Transactions</td></tr>
<tr><td>Savings Amount</td><td>Total debt − Payback amount</td></tr>
</table>
<br>
💡 If FPD falls on a holiday or weekend, move to the next business day.
</details>

<details>
<summary>Pre-Approval section</summary>
<br>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Pre-Approval Date</td><td>Auto-populated from Quote Request Date</td></tr>
<tr><td>PRE APPROVAL - Offer Expiration Date</td><td>Auto-populated (7 days/week after Quote Request Date)</td></tr>
<tr><td>PRE APPROVAL - Payment Frequency</td><td>From template</td></tr>
<tr><td>PRE Approval - Program Length</td><td>Term in months</td></tr>
<tr><td>First Payment Amount</td><td>From the transaction table</td></tr>
</table>
<br>
Also complete: Lead source (from the quote request, if not already set on the Opportunity in Step 5).
</details>

Click **Save**.

---

## Step 9 — 📧 Send the Quote

From the opportunity page, click the email icon → **Insert a template** → select **DAG Client Quote**.

1. The template will auto-populate most fields.
2. Manually add the **owner's name** using CTRL + SHIFT + V (paste without format).
3. Click **Preview Email** to confirm all information is correct and nothing is missing.
4. Add the sales agent's email address to the **To** field.
5. Subject line must include: **business name + total program cost**.
6. Click **Send**.

> 🔴 If the quote request involves Lawyers, Paralegals, Attorneys, or any legal assistant/professional, check with Management before proceeding.

---

## Step 10 — 🗒️ Add notes to the opportunity

After sending the quote, add a note with the following information:

```
Quote sent
Total Fees: $[amount]
FPD: [date]
Creditors and balances:
- [Creditor name]: $[amount]
- [Creditor name]: $[amount]
```

---

## Step 11 — ↩️ Send the Quote Reply to the sales agent

Reply All to the original quote request email using the Quote Reply template (Gmail → three dots → Templates).

Include:
<ul>
<li>Total Program Cost</li>
<li>CC Amount</li>
<li>CC Processor Fee</li>
<li>CC Process Payment Amount</li>
<li>Partner: DAG</li>
</ul>

💡 Always add the sales agent to the recipients.

<details>
<summary>💳 Credit Card payment rules</summary>
<br>
<ol>
<li>Open the <a href="https://alebermudez-mgp.github.io/sops-bds/dag-calculator.html">DAG Program Cost & CC Payment Calculator</a> and enter the enrolled debt amount.</li>
<li>The calculator will show Max and Min CC amounts.</li>
<li>Always use the <strong>Max</strong> amount.</li>
<li>Use the <strong>Min</strong> only if Sales requests an exception and Management approves it.</li>
<li>If the calculated CC payment (using Default Card Fee) is greater than the first scheduled ACH payment → use the minimum CC payment (1% of enrolled debt).</li>
</ol>
Enter the CC payment information under the <strong>Card Payment Info</strong> section of the opportunity. See <a href="./dag-paynow-link">PayNow Link</a> for how to generate it in TRIFI.
</details>

---

## Step 12 — 🔄 Update opportunity status

| Situation | Stage | Status |
|-----------|-------|--------|
| Quote was sent | Lead | Quote Sent |
| Quote not sent — info missing | Lead | Quote Pending |
| Sales is not continuing | Underwriting | Withdrawn |

💡 The Underwriting stage and Withdrawn status continue to be used when we switch an opportunity to the other portfolio — see [04 — Special Cases](./dag-04-special-cases#section-4--portfolio-switches).

---

## ⚠️ Important reminders

> 🔴 **Legal professionals:** If the business is related to lawyers, paralegals, or attorneys — check with Management before proceeding.

> 🚫 **Special characters:** Never use accented characters or tildes in any Salesforce field.

> 🚫 **Lumpsum payments:** Not available. The closest alternative is a one-month term with two bi-weekly payments.

> 💰 **Deals under $5,000 (single creditor, Funding Metrics/Lendini/QuickFix Micro Advance):** quote goes directly to the sales agent. Minimum enrolled debt lowered to $2,500. Keep terms within 4–5 months; up to 7 months with Management approval.

> 📨 **Documents and emails from clients not yet enrolled, under Sales Lead Rose Walters:** Must be forwarded to teamnotification@businessdebtninjas.com (same rule as BDS — not universal to all Sales Leads).

> 📨 **Documents and emails from enrolled clients (any sales lead):** Must be forwarded to the CS team at clientsupport@dag-law.com

---

## ✅ Quote Request Checklist

- [ ] Template received with all required fields
- [ ] Debt type confirmed MCA (or LOC treated as MCA / Kapitus rule applied)
- [ ] State is not restricted (Puerto Rico → follow Section 7 special steps)
- [ ] Risk Score (Portfolio, Score, Risk Classification) present
- [ ] Duplicate check completed in Salesforce
- [ ] Account created with all required fields (Profile: DAG, no special characters)
- [ ] Contact created with all required fields (including State)
- [ ] Contact Role set to Business User / Primary on the opportunity
- [ ] Opportunity created with correct name format (Business Name + Debt Type), Client Service rotated
- [ ] Vic Carmine exception confirmed with Management, if applicable
- [ ] All creditors verified and added with correct amounts
- [ ] Schedule Transactions completed — program cost matches DAG Pricing Check
- [ ] Underwriting and Pre-Approval fields completed (4 attorney fee payments)
- [ ] Quote sent to merchant (subject: business name + total program cost)
- [ ] Notes added to opportunity
- [ ] Quote Reply sent to sales agent (Reply All)
- [ ] CC payment information entered on opportunity
- [ ] Opportunity status updated

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
<a href="./dag-paynow-link">PayNow Link</a> &nbsp;|&nbsp;
<a href="https://alebermudez-mgp.github.io/sops-bds/dag-calculator.html">Calculator</a>
</p>
