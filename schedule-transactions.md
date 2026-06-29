# ⚙️ Schedule Transactions

**This is a supporting reference.** It is called from [01 — Quote Request](./01-quote-request) and [02 — Contract Request](./02-contract-request.md). It is not a standalone workflow.

> 💡 Always have both tools open before starting this process:
> - 🧮 [BDS Calculator](https://alebermudez-mgp.github.io/sops-bds/bds-calculator.html) — Program Cost & CC Payment
> - 📊 [Underwriting Pricing Sheet](https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?gid=340464856#gid=340464856) — Plan values by state

---

## Step 1 — Open Schedule Transactions

From the opportunity page, click **Schedule Transactions**.

The system will display the creditors linked to the opportunity. Verify they are correct, then click **Next**.

> ⚠️ If any creditor is missing or incorrect, go back to the opportunity and fix the Creditor Entries before proceeding.

---

## Step 2 — Select the correct plan

<details>
<summary>📋 Which plan do I use?</summary>

### By debt amount

| Debt Amount | Plan to use in Salesforce |
|-------------|--------------------------|
| Under $15,000 | **BDS Services Under $15k** or **Business Debt Solutions Under $15K** |
| $15,000 and over | Use the plan that matches the merchant's state (see table below) |

### By state

| State | Plan to use in Salesforce |
|-------|--------------------------|
| Florida | **BDS Services Standard** or **Business Debt Solutions Standard** (Florida plan values) |
| Georgia | **BDS Services Standard** or **Business Debt Solutions Standard** (Georgia plan values) |
| Idaho | **BDS Services Standard** or **Business Debt Solutions Standard** (Idaho plan values) |
| Michigan | **BDS Services Standard** or **Business Debt Solutions Standard** (Michigan plan values) |
| Minnesota | **BDS Services Standard** or **Business Debt Solutions Standard** (Minnesota plan values) |
| Ohio | **BDS Services Standard** or **Business Debt Solutions Standard** (Ohio plan values) |
| All other states | **BDS Services Standard** or **Business Debt Solutions Standard** (Standard plan values) |

> 🚫 Never select a plan with the word **Legal** — these are not in use.

</details>

Click **Next** after selecting the plan.

---

## Step 3 — Enter the plan values

Use the tables below to enter the correct values for each plan. Always verify against the [Underwriting Pricing Sheet](https://docs.google.com/spreadsheets/d/11NV7r-1ElP4VAdZkbB66d7KYGjql22-x21LE7FAZz1E/edit?gid=340464856#gid=340464856).

<details>
<summary>📊 Standard Plan — all states not listed below</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 per creditor | $75.00 per creditor | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | — | 1.50% | — |
| Number of Months Added | 0 | 6 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 35% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Florida Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 per creditor | $50.00 per creditor | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | — | 3.75% | — |
| Number of Months Added | 1 | 1 | — |
| Estimated Settlement % | 50% | 55% | Below 55% requires Management approval |
| Savings Fee | 10% | 35% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Georgia Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 per creditor | $75.00 per creditor | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | — | 3.75% | — |
| Number of Months Added | 1 | 1 | — |
| Estimated Settlement % | 50% | 55% | Below 55% requires Management approval |
| Savings Fee | 10% | 35% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Idaho Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 | $75.00 | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | 0 | 0 | — |
| Number of Months Added | 0 | 0 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 30% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Michigan Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 | $75.00 | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | — | 1.50% | — |
| Number of Months Added | 0 | 6 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 30% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Minnesota Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 | $75.00 | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | 0 | 0 | — |
| Number of Months Added | 0 | 0 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 30% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Ohio Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 | $75.00 | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | 0 | 0 | — |
| Number of Months Added | 0 | 0 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 30% | Cannot go below plan minimum |

</details>

<details>
<summary>📊 Under $15k Plan</summary>

| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| EPPS Fee | $9.00 | $9.00 | Always $9.00 |
| Funder Fee | $50.00 | $75.00 | $50 with Management approval |
| Legal Plan | $200.00 | $200.00 | Always $200.00 |
| Monthly Maintenance Fee | $99.00 | $99.00 | Always $99.00 |
| Months Added Fee | 0 | 0 | — |
| Number of Months Added | 0 | 0 | — |
| Estimated Settlement % | 50% | 65% | Below 55% requires Management approval |
| Savings Fee | 10% | 35% | Cannot go below plan minimum |

</details>

### Fields that apply to all plans

| Field | Value | Notes |
|-------|-------|-------|
| Frequency | Bi-weekly | See exceptions below |
| Start Date | FPD from template | — |
| Months | From template | See program length limits |
| Legal Plan Number of Payments | Always **1** | Exception: if the file requires an update via Edit Existing, this field will be removed — this is expected and does not affect the process |

<details>
<summary>⚠️ Payment frequency exceptions</summary>

- **Monthly payments** → never used.
- **Weekly payments** → only permitted when ALL three conditions are met:
  - Debt amount is higher than expected, AND
  - Term is structured at 36 months on a bi-weekly basis, AND
  - Calculated ACH exceeds $10,000

> 🚫 The ACH payment amount must never exceed $10,000 under any circumstances.

</details>

<details>
<summary>📏 Program length limits</summary>

| Debt Amount | Max Term | Extension |
|-------------|----------|-----------|
| Under $15,000 | 8 months | Up to 10 months with Management approval |
| $15,000.01 – $80,000 | 20 months | Depends on Management approval |
| $80,000.01 and over | 24 months | Depends on Management approval |

> 💡 Exceptions apply as long as Est. Savings is not showing as negative and Management approves.

> 💡 **FM / Lendini / Quickfix deals:** Keep payment terms within 4–5 months. Maximum 7 months with Management approval.

</details>

---

## Step 4 — Calculate Total Cost

Click **Calculate Total Cost**.

- ✅ **If the program cost matches the BDS Pricing Check** → save the Total Fees on a notepad (this is the only place it is displayed). Click **Next** → **Save**.
- 🔴 **If the program cost does not match** → click **Previous** and adjust the values (Number of Months Added, Savings Fee %) until it matches. Do not proceed until the amounts align.

> ⚠️ Save the Total Fees amount before clicking Next — it will not be shown again.

---

## Step 5 — Verify the transaction table

Once saved, the transaction table will populate on the opportunity. Verify:

- Payment dates are correct
- Amounts look consistent with the program terms
- First payment amount matches what will go into the Underwriting fields

---

## ↩️ Return to your workflow

- If you came from **Quote Request** → return to [01 — Quote Request, Step 8](./01-quote-request.md#step-8----complete-underwriting-and-pre-approval-fields)
- If you came from **Contract Request** → return to [02 — Contract Request](./02-contract-request)

---

## ✏️ Editing an existing Schedule Transactions

Use the **Edit Existing** option when an update is needed on a file already scheduled.

> ⚠️ When using Edit Existing, the following fields will be removed: **Months** and **Legal Plan Number of Payments**. This is expected — these values were already saved the first time the file was worked on.

---

*Questions or updates → qa@businessdebtsolutions.com — CC ale.b@businessdebtsolutions.com and joshua.a@businessdebtsolutions.com*
