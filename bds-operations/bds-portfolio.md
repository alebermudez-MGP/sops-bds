# BDS Portfolio - Standard Operating Procedure

| Metadata | Details |
|----------|---------|
| **Department** | Underwriting |
| **SOP Name** | BDS Portfolio |
| **Effective Date** | 10/20/2025 |
| **Last Updated** | 6/26/2026 |
| **Version** | 1.0 |

---

## 📋 Overview

All debts such as **MCA (Merchant Cash Advances)**, **LOC (Line of Credit)**, and other types will be processed through **BDS (Business Debt Solutions)**.

---

## 🔤 Account Creation Standards – Special Character Restrictions

### Purpose
To prevent transaction failures caused by system limitations related to special characters in client account information.

### Policy Update ⚠️
**Effective immediately:** Processors have identified that their system cannot properly read account information containing:
- **Acute accents** (á, é, í, ó, ú)
- **Tildes** (ñ)

These characters have resulted in **failed transactions**.

### Procedure Requirements

When creating new client accounts:

❌ **DO NOT input:**
- Accented characters (acute accents or tildes)

✅ **DO:**
- Use **standard English characters only**
- Replace accented characters with their standard equivalents:
  - José → Jose
  - Peña → Pena
  - María → Maria

### Important Notes
- This applies to **all client accounts** (new enrollments, updates, corrections)
- If unsure, **escalate to your supervisor**

---

## 💰 Deals Under $5,000 (Single Creditor)

For deals with **enrolled debt under $5,000** and a **single creditor**:

### Funding Metrics (Lendini QuickFix Micro Advance)
- **Quote provided directly to sales agent** ✓
- **Minimum enrolled debt lowered to $2,500.00** (previously $5,000)
- **Payment terms:** 4-5 months (standard)
- **Maximum term:** Up to 7 months **with management approval** 📞

---

## ❌ Lumpsum Option

**Effective immediately:** Lumpsum payment option is **NOT AVAILABLE**.

### Alternative Option
The closest available alternative is a **one-month term** structured into **two bi-weekly payments**.

**Example:**
- Total program: $1,000
- Split into 2 bi-weekly payments: $500 each (instead of lump sum)

---

## 🆕 New Sales Process

Sales agents now use a **new calculator** to submit contract requests directly.

### Calculator Capabilities
The calculator allows agents to enter merchant information to:
- ✅ Calculate risk
- ✅ Generate a quote
- ✅ Auto-create lead in Salesforce

### Steps to Follow When Receiving a Contract Request

#### 1️⃣ Search for Lead
Search for the lead in Salesforce using the **business name**.

#### 2️⃣ Locate Recent Lead
Find the most recent lead for completing Salesforce information.

#### 3️⃣ Convert the Lead
Click **"Convert"** on the lead.

#### 4️⃣ Choose Creation Option
Select one of the following:
- **Create all new records**, OR
- **Continue working on an existing account**

#### 5️⃣ Handle Concurrent Merchants
If the merchant is **concurrent** (same business, different lender):
- Create a **NEW opportunity** under the existing account and contact
- ⚠️ Do NOT reuse existing opportunity (could modify active deal)

#### 6️⃣ Complete Data Entry
Fill in all required data for:
- Account
- Contact
- Opportunity

Data entered should fully support the **contract generation process**.

#### 7️⃣ UW Review
The UW team will:
- Review the information
- Complete scheduled transactions
- Verify first due dates
- Complete remaining underwriting steps

#### 8️⃣ Quote Verification
Review the quote document against the transaction table created in Salesforce to confirm **information matches** or is **reasonably aligned** with what was sent to the merchant.

---

## 👤 How to Create an Account?

An account is created when a sales representative has **closed a deal** and needs to add a merchant to Salesforce to send a quote and later a contract.

### Process Overview

#### Step 1: Receive Contract Request Email
Requests arrive with:
- Business name in subject line
- Specific template with merchant details

**⚠️ If information is missing**, reply asking to provide or confirm what's missing.

#### Step 2: Check for Duplicates (CRITICAL)
Before creating the account, **search for duplicates** to confirm the merchant doesn't already exist:

Search by:
- ✅ Name of the business
- ✅ Owner's name
- ✅ Email
- ✅ Phone number (search for more results)

**If duplicate found:** Do not create. Inform sales agent.

#### Step 3: Create Account in Salesforce

**Path:** Salesforce > New > Business > Next

**Account Information to Fill:**
- Account name
- ☑️ Check the "Active" box
- Entity type
- Profile: **BDS**
- Phone
- Industry
- Inception Date

**Address Information:**
- Billing State/Province (add state code)

**Lead Information:**
- Campaign ID

**Final Step:** Click **Save**

---

## 📞 How to Create a Contact?

Contacts represent the owner(s) of the business.

### Steps

#### Step 1: Scroll Down to Contacts Section
On the right column, click the **arrow** next to "Contacts" → Select **New**

#### Step 2: Enter Contact Information
Copy and paste from the Quote request to ensure **correct information**:

**Required Fields:**
- First and Last Name (add middle name if needed)
- **Title:** Owner (or Co-Owner if multiple)
- Email
- Phone Number
- Mobile (if different from phone, use same number with **no dashes, no parentheses**)
- Social Security Number (if provided)
- Date of Birth (if provided)

**⚠️ Important:**
- SSN should **never be shared** in chats or emails
- SSN is **9 digits** and can start with 0
- DOB must be for someone **18+ years old**

#### Step 3: Verify State
Check that the State/Province was correctly added.

#### Step 4: Multiple Owners
If the merchant has **two owners**:
- Create a **new contact** for each owner
- Set title to **"Co-Owner"** for additional owners

#### Step 5: Save
Click **Save** when all information is entered.

---

## 🎯 How to Create an Opportunity?

Opportunities represent the deal itself.

### Steps

#### Step 1: Navigate to Opportunities
On the contact record, look for **Opportunities** → Click arrow → Select **New**

#### Step 2: Enter Opportunity Information

| Field | Instructions |
|-------|--------------|
| **Opportunity Name** | Business Name + Type of Debt (e.g., "ABC Company - MCA") |
| **Company Name** | Select the Merchant account name from dropdown |
| **Law Firm** | Price Law |
| **Client Service** | Dennis Moore / Joaquin Moya / Daysie Young / Mason Price |
| **Sales Lead** | From the template provided |
| **Sales Agent** | Who sends the quote request or is closing the deal |
| **Close Date** | 7 days/week after current date |
| **Type of Debt** | From quote request (MCA, LOC, etc.) |

### ⚠️ Important Reminders

**1. Sales Agent Assignment**
- ❌ Do **NOT** ask Sales department who the assigned agent is
- ✅ It's provided in the template

**2. Sales Lead Changes**
- ✅ Sales Agent **CAN** be changed (moved between agents)
- ❌ **ONLY if they report to the SAME Sales Lead**
- ❌ Do **NOT** change if Sales Lead is different

**3. Creditor Information (Auto-Populated)**
- **Total Confirmed Debt Amount:** No longer manually entered
- **Number of Enrolled Creditors:** Auto-populated, NOT editable

---

## 📊 Stage and Status Process

Use the appropriate combination based on the situation:

### Sending a Quote
| Field | Value |
|-------|-------|
| **Stage** | Lead |
| **Status** | Quote Sent |

### Quote Not Sent (Missing Information)
| Field | Value |
|-------|-------|
| **Stage** | Lead |
| **Status** | Quote Pending |

### Disregarding the Deal (Sales Not Continuing)
| Field | Value |
|-------|-------|
| **Stage** | Underwriting |
| **Status** | Withdrawal |

---

## 🔐 Creditor & Underwriting Verification Process

### Purpose
Ensure only **negotiable and policy-approved debts** are enrolled, reducing operational risk.

### Eligible Creditor Types ✅

Only enroll these types:
- Merchant Cash Advances (MCA)
- Business Lines of Credit (LOC)
- Factoring Companies
- Reverse Consolidation Companies

### Ineligible Creditor Types ❌

**Do NOT enroll:**
- Payday Loans
- Leasing / Lease-to-Own Companies
- Investment Companies
- Management Companies
- Real Estate Management Companies
- Mortgage Companies

**Note:** If unclear, **escalate to Management**.

### Geographic Requirement
Creditor must be located and operating within the **United States**.

---

## ⏱️ Enrollment Waiting Period (Aging Requirements)

Before enrolling, confirm the debt meets minimum aging:

| Creditor Type | Minimum Age |
|---------------|------------|
| **Standard** | 30 calendar days from agreement date |
| **Fora & McKenzie** | 45 calendar days |
| **Everest / Vader** | 45 days after funding |
| **Byzfunder NY LLC** | 30 days old (UW notes approx funded date) |
| **Blacklisted Creditors** | ❌ Ineligible regardless of timing |

---

## 🔍 Creditor Verification Workflow

### Step 1: Creditors Verification (Primary)
- Check official creditor database
- Search for creditor name (copy/paste exactly from Sales)
- **If match found:** Use exact spelling
- **If NO match:** Proceed to Step 2

### Step 2: Web Verification
- Google search using creditor name
- If unclear, search with keywords: *lending, lender, funding, funder, cash advance, MCA*
- Verify company offers **eligible product**
- **If successful:** Add to CRM using official verified name
- **If unsuccessful:** Proceed to Step 3

### Step 3: Sales Clarification
- Reply to Sales indicating creditor name could not be confirmed
- Include similar names found online
- Ask if there was a **typo or missing information**
- **If Sales provides update:** Restart at Step 1
- **If same info repeated:** Proceed to Step 4

### Step 4: Documentation Request
Request one or more of:
- Bank Statements
- MTD (Month-to-Date)
- Official Website
- Executed Contract with Creditor

Repeat Steps 1-2 with confirmed creditor name.
**If still cannot confirm:** Escalate to Management.

---

## 🚫 States We Do NOT Work With

If a sales agent sends a quote request with these states, **reply that we cannot work in that state**:

- 🚫 Arizona (AZ)
- 🚫 Kansas (KS)
- 🚫 Louisiana (LA)
- 🚫 West Virginia (WV)
- 🚫 Wyoming (WY)

---

## 📞 Contact & Support

**Questions about this SOP?**
- Reach out to: **Operaciones**

**Related SOPs:**
- Coming soon

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 6/26/2026 | Initial version |

---

**Last Updated:** June 26, 2026  
**Next Review Date:** September 2026
