---
layout: default
title: 01 — Quote Request
---
# 📋 01 — Quote Request

**Trigger:** You received a Quote Request email from a sales agent with the quote request template.

---

## Step 1 — Validate the request before touching Salesforce

Before doing anything in Salesforce, review the template and confirm all of the following. If any item fails, reply to the sales agent immediately and do not proceed until resolved.

<details>
<summary>📝 1.1 — Template is complete</summary>

All required fields must be filled in:

- Type of Business Debt
- Business name
- State
- Lead Generated from
- Lead Sources
- Campaign ID
- Entity type
- Owner's name
- Phone number
- Email address
- Name, balance, frequency and amount per Creditors
- Term
- Payment frequency
- FPD
- Sales Lead
- CC as a payment method
- Industry
- Business start date
- Portfolio
- Score
- Risk Classification

> 💡 If any field is missing, reply (Reply All) requesting the missing information. Continue building the file while you wait — you can add the missing data once received.

</details>

<details>
<summary>🚫 1.2 — State is not restricted</summary>

The following states are not eligible. If the request comes from one of these, reply to the sales agent stating you cannot work with that state and **do not proceed**:

| State | Code |
|-------|------|
| Arizona | AZ |
| Kansas | KS |
| Louisiana | LA |
| West Virginia | WV |
| Wyoming | WY |

</details>

<details>
<summary>✅ 1.3 — Debt type is eligible</summary>

**Allowed:**
- Merchant Cash Advance (MCA)
- Business Line of Credit (LOC)
- Factoring Companies
- Reverse Consolidation Companies

**Not allowed:**
- Payday Loans
- Leasing / Lease-to-Own
- Investment Companies
- Management Companies
- Real Estate Management Companies
- Mortgage Companies

> ⚠️ If the debt type is unclear or does not clearly fall into an allowed category, escalate to Management before proceeding.

</details>

<details>
<summary>📂 1.4 — One debt type per opportunity</summary>

Each opportunity must contain only one type of debt.

- If the merchant has MCA and LOC → create two separate opportunities (one for MCA, one for LOC).
- If the merchant has 2 MCA and 1 LOC → the entire file is handled under BDS, but still as two separate opportunities.

> ⚠️ **Exception:** LOC from OnDeck, Bluevine, or Headway must be treated as MCA. Follow the MCA process for these.

</details>

<details>
<summary>📊 1.5 — Risk Score is present</summary>

The template must include Portfolio, Score, and Risk Classification.

- If Score or Portfolio is missing → return to Sales immediately and request the missing information.
- If a portfolio is referenced but not specified → ask Sales: *"Which portfolio did the Risk Score calculator assign?"*

</details>

---

## Step 2 — 🔍 Check for duplicates in Salesforce

Search for the merchant using **all** of the following before creating anything:

- Business name
- Owner's name
- Email address
- Phone number (use "Search for more results" to expand)

<details>
<summary>⚠️ What to do if a duplicate is found</summary>

- **Active account exists** → do not create a new account. Check if this should be a Concurrent. See [03 — Special Cases](./03-special-cases).
- **Account is in delinquency status** → review notes and see [03 — Special Cases](./03-special-cases) before proceeding.
- **Same contact info, different business name** → do not stop the quote. Proceed and include the following note in your Quote Reply to the sales agent:

> *"Here's the Quote. Please be aware that we have an account under the same merchant's name, phone number, or email address. Please clarify before moving forward with the contract request."*

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
| Profile | BDS |
| Phone | From template |
| Industry | From template |
| Inception Date | Business start date from template |
| Billing State/Province | State from template |
| Campaign ID | From template |

> 🚫 Do not use accented characters (á, é, í, ó, ú) or tildes (ñ). Replace with standard English letters (e.g. José → Jose, Peña → Pena).

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

> 💡 If the merchant has two owners, create a second contact with the co-owner's information and set Title to **Co-Owner**.

Click **Save**.

### 4.1 — Set the Contact Role on the Opportunity

After saving the contact, go to the opportunity page and find the **Contact Roles** section.

1. Click the dropdown → **Edit**
2. Set Role to **Business User**
3. Check **Primary**
4. Click **Save**

> ⚠️ **This step is critical.** If the Contact Role is not set correctly, the owner's information (phone, email, SSN, DOB, etc.) will not populate in the ACH and contract fields.

---

## Step 5 — 💼 Create the Opportunity

From the contact page, scroll down to **Opportunities** → click the arrow → select **New**.

Fill in the following fields:

| Field | Value |
|-------|-------|
| Opportunity name | Business name + Type of debt (e.g. "Royal Pearl Haven Realty MCA") |
| Company name | Select the merchant account |
| Law firm | Price Law |
| Client Service | Rotate among: Dennis Moore / Joaquin Moya / Daysie Young / Mason Price — do not always assign the same person |
| Sales Lead | From template |
| Sales Agent | Who sent the quote request or is closing the deal |
| Close date | 7 days from today |
| Type of debt | From template |
| Stage | Lead |
| Status | Quote Sent (if sending quote) / Quote Pending (if information is missing) |
| Lead Source | From template |

<details>
<summary>📌 Sales Agent rules</summary>

- No need to ask Sales who the assigned agent is.
- The Sales Agent can be changed as long as the Sales Lead remains the same.
- If the Sales Lead is different from what is expected, contact UW Management before proceeding.
- Any request under Sales Lead **Vic Carmine** must be processed under BDS.

</details>

<details>
<summary>📊 Risk Score fields</summary>

Enter the Risk Score information under the Underwriting section:

| Field | Value |
|-------|-------|
| Score | Numeric value from template |
| Risk Classification | Low / Medium / High from template |

</details>

Click **Save**.

---

## Step 6 — 🏦 Add Creditor Entries

From the opportunity page, scroll to **Creditor Entries** → click the arrow → select **New**.

For each creditor listed on the quote request template:

1. Search for the creditor name in the dropdown (copy and paste exactly — do not retype).
2. Enter the amount in the **Original Debt Amount** field.
3. Click **Save**.
4. Repeat for each creditor.

<details>
<summary>🔎 Creditor verification process (Steps 6A → 6D)</summary>

**Step 6A — Check the Creditors Gsheet first (primary source)**
- Search for the creditor name exactly as it appears on the template.
- If found → use the exact spelling from the Gsheet. Do not use the spelling from the Sales email.
- If not found → proceed to Step 6B.

**Step 6B — Web verification**
- Google the creditor name.
- If results are unclear, search again adding keywords: *lending, lender, funding, funder, cash advance, merchant cash advance.*
- Verify the company provides an eligible product type.
- If verified → add to Salesforce using the official company name. Notify Management to add it to the Creditors Gsheet (include the website link).
- If not verified → proceed to Step 6C.

**Step 6C — Request clarification from Sales**
- Reply to the sales agent stating the creditor could not be confirmed.
- If similar names were found, include them and ask if there was a typo.
- If Sales provides updated info → restart at Step 6A.
- If Sales repeats the same name → proceed to Step 6D.

**Step 6D — Request documentation**

Request one or more of the following:
- Bank Statements
- MTD
- Official Website
- Executed Contract with the Creditor

Once received → restart at Step 6A and 6B using the confirmed name.
If documentation cannot be obtained → escalate to Management via Webex.

</details>

<details>
<summary>⏳ Enrollment waiting periods</summary>

> 💡 Note these now — they apply at contract stage.

| Creditor | Minimum wait |
|----------|-------------|
| Standard | 30 days from agreement date. A 25-day exception exists — confirm with Management before applying |
| Fora & McKenzie | 45 days. If funded between 30–45 days, creditor may only be enrolled with at least two additional creditors. A 25-day exception exists — confirm with Management before applying |
| Everest / Vader | 45 days after funding. If funded between 30–45 days, creditor may only be enrolled with at least two additional creditors. A 25-day exception exists — confirm with Management before applying |
| Byzfunder NY LLC | 30 days — note the approximate funded date in the opportunity |
| Blacklisted creditors | ❌ Never eligible |

</details>

<details>
<summary>⚠️ Special creditor scenarios</summary>

**Creditor name contains a slash ( / )**
Use only one name. If Sales provides two, request clarification or ask for the executed contract.

---

**Lendini / Quickfix (also known as Funding Metrics or FM)**

Lendini and Quickfix are the same company. Their funding appears under the names Lendini or Quickfix — this is why we never use "Funding Metrics" or "FM" in Salesforce. Always use **Lendini** or **Quickfix** only.

- ⚠️ Always escalate to Management before proceeding.
- CR requests: do not create the account until approval is obtained.
- US Sales requests: account creation may begin, but do not send the quote until approval is granted.
- If approved, Management will provide the applicable card payment amount.
- If denied, do not include in quote and notify Sales immediately.
- Minimum enrolled debt: **$2,500**. Keep payment terms within **4–5 months**. Maximum **7 months** with Management approval.

---

**Reverse Consolidation Companies**

Ask Sales: *"Are there additional creditors included in this reverse consolidation account?"*
- If yes → include the reverse consolidation company name AND each individual creditor with their balance.
- If no → include only the reverse consolidation company name and total balance.

---

**Third-Party Collection Agency**

- Enter the original lender's name in Salesforce.
- Add a NOTE and a NEXT STEP with the following text (do not alter the meaning):

> *"File is already with 3rd party collection agency so if it does progress through the process the Negotiators know that there is no need to engage communications with the lender; negotiations will be handled directly with the collection agency."*

---

**Creditor not on the Gsheet**
- Quotes may still be issued.
- Add an ALERT in Salesforce.
- 🚫 Do not use placeholder names like "Creditor 1" or "Creditor 2".
- All creditor names must be entered in Capitalized Format (e.g. This Is Capitalized).
- Documentation is not required at the Quote stage but will be required before issuing a contract.

</details>

---

## Step 7 — ⚙️ Schedule Transactions

➡️ Follow the full instructions in [Schedule Transactions](./schedule-transactions).

Come back to Step 8 once Schedule Transactions is complete.

---

## Step 8 — 📝 Complete Underwriting and Pre-Approval fields

After Schedule Transactions is complete, fill in the following fields on the opportunity:

<details>
<summary>Underwriting section</summary>

| Field | Value |
|-------|-------|
| Quote Request Date | Today's date |
| Date of First Payment | FPD from template |
| Attorney Fee Amount Per Payment | $200.00 |
| Last Payment Date with Attorney Fee | Same as FPD |
| Number of Payments with Attorney Fee | 1 |
| Estimated Total Fee Amount at Time of UW | Total Fees saved from Schedule Transactions |
| Payback Amount | Total program cost |
| Savings Fee % UW | Percentage selected during Schedule Transactions |
| Savings Amount | Total debt − Payback amount |

> 💡 If FPD falls on a holiday or weekend, move to the next business day.

</details>

<details>
<summary>Pre-Approval section</summary>

| Field | Value |
|-------|-------|
| Pre-Approval Date | Auto-populated from Quote Request Date |
| PRE APPROVAL - Offer Expiration Date | Auto-populated (7 days after Quote Request Date) |
| PRE APPROVAL - Payment Frequency | From template |
| PRE Approval - Program Length | Term in months |
| First Payment Amount | From the transaction table |

</details>

Click **Save**.

---

## Step 9 — 📧 Send the Quote

From the opportunity page, click the email icon → **Insert a template** → select **BDS Client Quote**.

1. The template will auto-populate most fields.
2. Manually add the **owner's name** using CTRL + SHIFT + V (paste without format).
3. Click **Preview Email** to confirm all information is correct and nothing is missing.
4. Add the sales agent's email address to the **To** field.
5. Subject line must include: **business name + total program cost**.
6. Click **Send**.

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

Reply All to the original quote request email using the **Quote Reply** template (found in Gmail → three dots → Templates).

Include:
- Total Program Cost
- CC Amount
- CC Processor Fee
- CC Process Payment Amount
- Partner: BDS

> 💡 Always add the sales agent to the recipients.

<details>
<summary>💳 Credit Card payment rules</summary>

1. Open the new calculator and enter the enrolled debt amount.
2. The calculator will show Max and Min CC amounts.
3. Always use the **Max** amount.
4. Use the **Min** only if Sales requests an exception and Management approves it.
5. If the calculated CC payment (using Default Card Fee) is greater than the first scheduled ACH payment → use the minimum CC payment (1% of enrolled debt).

> Enter the CC payment information under the **Card Payment Info** section of the opportunity.

</details>

---

## Step 12 — 🔄 Update opportunity status

| Situation | Stage | Status |
|-----------|-------|--------|
| Quote was sent | Lead | Quote Sent |
| Quote not sent — info missing | Lead | Quote Pending |
| Sales is not continuing | Underwriting | Withdrawal |

---

## ⚠️ Important reminders

> 🔴 **Legal professionals:** If the business is related to lawyers, paralegals, or attorneys — check with Management before proceeding.

> 🚫 **Special characters:** Never use accented characters or tildes in any Salesforce field.

> 🚫 **Lumpsum payments:** Not available. The closest alternative is a one-month term with two bi-weekly payments.

> 📨 **Documents and emails from clients not yet enrolled, under Sales Lead Rose Walters:** Must be forwarded to teamnotification@businessdebtninjas.com

> 📨 **Documents and emails from enrolled clients (any sales lead):** Must be forwarded to the CS team at clientsupport@businessdebtsolutions.com

---

## ✅ Quote Request Checklist

- [ ] Template received with all required fields
- [ ] State is not restricted
- [ ] Debt type is eligible
- [ ] One debt type per opportunity (separate opps if needed)
- [ ] Risk Score (Portfolio, Score, Risk Classification) is present
- [ ] Duplicate check completed in Salesforce
- [ ] Account created with all required fields
- [ ] Contact created with all required fields (including State)
- [ ] Contact Role set to Business User / Primary on the opportunity
- [ ] Opportunity created with correct name format (Business Name + Debt Type)
- [ ] All creditors verified and added with correct amounts
- [ ] Schedule Transactions completed — program cost matches BDS Pricing Check
- [ ] Underwriting and Pre-Approval fields completed
- [ ] Quote sent to merchant (subject: business name + total program cost)
- [ ] Notes added to opportunity
- [ ] Quote Reply sent to sales agent (Reply All)
- [ ] CC payment information entered on opportunity
- [ ] Opportunity status updated

---

*Questions or updates → qa@businessdebtsolutions.com — CC ale.b@businessdebtsolutions.com and joshua.a@businessdebtsolutions.com*
