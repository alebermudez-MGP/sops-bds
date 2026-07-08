---
layout: default
title: PayNow Link
---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./move-payments">Move Payments (MPR)</a> &nbsp;|&nbsp;
<a href="./chirp-review">Chirp Review Process</a>
</p>

---

# 💳 PayNow Link — Generation & Sending

**Trigger:** You need to send a client a secure card payment link (PayNow) — during enrollment ([03 — Enrollment](./03-enrollment), Step 4) or any other time UW needs to collect a card payment.

> 💡 UW generates the link directly in NMI — it is **not requested from Management**. Access credentials for NMI are provided by Management.

---

## Part A — Generate the PayNow Link (NMI)

### Step 1 — 🔑 Log In

- Portal: <a href="https://secure.nmi.com/merchants/login.php">https://secure.nmi.com/merchants/login.php</a>
- Credentials are provided by **Management**.

### Step 2 — 🧾 Open Collect Checkout

Once logged in, you'll land on the main page. In the left column, scroll down and select **Collect Checkout**.

### Step 3 — 🔗 Open the Button Generator

After selecting Collect Checkout, you'll be taken to a new page. Click **Button Generator** to start creating a payment link.

### Step 4 — ➕ Create a Product

<details>
<summary>📋 Steps</summary>
<br>
<ol>
<li>In the center of the screen, click the blue link: <em>"Click here to create your products first."</em></li>
<li>You'll be taken to the <strong>Products</strong> page.</li>
<li>Select <strong>New Item</strong> in the top-right corner.</li>
</ol>
</details>

### Step 5 — ⚙️ Configure the Product

Fill in the following fields:

| Field | Value |
|---|---|
| **SKU** | Client's case number `[BDS-XXX]` |
| **Descripción** | Business name + `"BDS Partial Payment Fee"` |
| **Costo** | CC Process Payment Amount |

> ⚠️ This wording is inferred by analogy, not confirmed — verify the exact SKU/Descripción label with Management/QA before treating it as final.

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
<li>Use the official template: <strong>Secure Payment Link email</strong> (BDS PayNow link template).</li>
<li><strong>To:</strong> Client. <strong>BCC:</strong> Sales Agent — always BCC the sales agent.</li>
<li>Paste the PayNow link in the <strong>body</strong> of the email.</li>
</ol>
</details>

---

## ⚠️ Important Reminders

- UW generates the PayNow link directly in NMI — do **not** ask Management for it.
- NMI access credentials are provided by Management.
- Do **not** include the PayNow link in the Congratulations email — it always goes in a separate Secure Payment Link email.
- Always BCC the Sales Agent on the Secure Payment Link email.
- If a card payment has already been processed, do not create a new PayNow link — see [Chirp Review Process, Section 19](./chirp-review#sec19).

---

## ✅ PayNow Link Checklist

- [ ] Logged in to NMI with credentials from Management
- [ ] Collect Checkout → Button Generator opened
- [ ] Product created with correct SKU (case number) and Descripción (business name + portfolio fee label)
- [ ] Costo set to the CC Process Payment Amount
- [ ] Product saved
- [ ] Payment link generated via Create Link
- [ ] Link pasted into Salesforce → Card Payment Info → PayNow Link
- [ ] Opportunity saved
- [ ] Secure Payment Link email sent (To: client, BCC: sales agent, link in body, BDS template)

---

<p>
🏠 <a href="./">Home</a> &nbsp;|&nbsp;
<a href="./01-quote-request">01 — Quote Request</a> &nbsp;|&nbsp;
<a href="./02-contract-request">02 — Contract Request</a> &nbsp;|&nbsp;
<a href="./03-enrollment">03 — Enrollment</a> &nbsp;|&nbsp;
<a href="./04-special-cases">04 — Special Cases</a> &nbsp;|&nbsp;
<a href="./05-quick-reference">05 — Quick Reference</a> &nbsp;|&nbsp;
<a href="./schedule-transactions">Schedule Transactions</a> &nbsp;|&nbsp;
<a href="./move-payments">Move Payments (MPR)</a> &nbsp;|&nbsp;
<a href="./chirp-review">Chirp Review Process</a>
</p>
