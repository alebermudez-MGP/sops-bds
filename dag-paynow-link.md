---
layout: default
title: DAG PayNow Link
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

# 💳 DAG PayNow Link — Generation & Sending

**Trigger:** You need to send a client a secure card payment link (PayNow) — during enrollment ([03 — Enrollment](./dag-03-enrollment), Step 4) or any other time UW needs to collect a card payment.

> 💡 UW generates the link directly in **TRIFI** — it is **not requested from Management**. Access credentials are provided by Management. Same rules as BDS, different platform.

---

## Part A — Generate the PayNow Link (TRIFI)

### Step 1 — 🔑 Log In

- Portal: <a href="https://trifimerchants.transactiongateway.com/merchants/product_manager.php?Action=ProductManager&tid=4e81bb16c15bc0a3568d96e69eaaf23a">TRIFI Merchants Product Manager</a>
- Credentials are provided by **Management**.

### Step 2 — 🧾 Open Collect Checkout

Once logged in, in the left column, scroll down and select **Collect Checkout**.

### Step 3 — 🔗 Open the Button Generator

Click **Button Generator** to start creating a payment link.

### Step 4 — ➕ Create a Product

<details>
<summary>📋 Steps</summary>
<br>
<ol>
<li>Click the blue link: <em>"Click here to create your products first."</em></li>
<li>You'll be taken to the <strong>Products</strong> page.</li>
<li>Select <strong>New Item</strong> in the top-right corner.</li>
</ol>
</details>

### Step 5 — ⚙️ Configure the Product

Fill in the following fields:

| Field | Value |
|---|---|
| **SKU** | Client's case number `[DAG-XXX]` |
| **Descripción** | Business name + the label below |
| **Costo** | CC Process Payment Amount |

Copyable label suffix for the **Descripción** field:

```
DAG Partial Payment Fee
```

> ⚠️ Confirm the exact SKU/Descripción label with Management/QA before treating it as final.

Once completed, click **Save**.

### Step 6 — 🔗 Generate the Payment Link

You'll be redirected to the Products page. Next to the product you just created, select **Create Link** (in blue).

Copy the generated link — you'll paste it into the client's file in Salesforce in Part B.

---

## Part B — Send the PayNow Link to the Client

### Step 1 — 📥 Paste the Link in Salesforce

<details>
<summary>📋 Steps</summary>
<br>
<ol>
<li>Locate the Opportunity.</li>
<li>Paste the link in: <strong>Card Payment Info → PayNow Link</strong>.</li>
<li>Save the changes.</li>
</ol>
</details>

### Step 2 — ✉️ Send the PayNow Email

<details>
<summary>📋 Steps</summary>
<br>
<ol>
<li>Go to the Envelope and click <strong>Send</strong>.</li>
<li>Use the official template: <strong>Secure Payment Link email</strong> (DAG PayNow link template).</li>
<li><strong>To:</strong> Client. <strong>BCC:</strong> Sales Agent — always BCC the sales agent.</li>
<li>Paste the PayNow link in the <strong>body</strong> of the email.</li>
</ol>
</details>

---

## ⚠️ Important Reminders

- UW generates the PayNow link directly in TRIFI — do **not** ask Management for it (same rule as BDS, different platform).
- TRIFI access credentials are provided by Management.
- Do **not** include the PayNow link in the "Congratulations on Enrolling with Debtors Advocacy Group" email — it always goes in a separate Secure Payment Link email.
- Always BCC the Sales Agent on the Secure Payment Link email.

---

## ✅ PayNow Link Checklist

- [ ] Logged in to TRIFI with credentials from Management
- [ ] Collect Checkout → Button Generator opened
- [ ] Product created with correct SKU (case number) and Descripción (business name + "DAG Partial Payment Fee")
- [ ] Costo set to the CC Process Payment Amount
- [ ] Product saved
- [ ] Payment link generated via Create Link
- [ ] Link pasted into Salesforce → Card Payment Info → PayNow Link
- [ ] Opportunity saved
- [ ] Secure Payment Link email sent (To: client, BCC: sales agent, link in body, DAG template)

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
