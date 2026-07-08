---
layout: default
title: BDS Portfolio — SOPs
---

# 📚 BDS Portfolio — Standard Operating Procedures
This repository contains the standard operating procedures for the BDS (Business Debt Solutions) portfolio underwriting team.

---

## 🗂️ How to use this SOP
Each file covers one complete workflow. Find the one that matches the request you received and follow it start to finish.

---

## 📋 Workflows

### [01 — Quote Request](./01-quote-request)
Use this when a sales agent sends a **Quote Request** email with the quote request template.
You will create the Account, Contact, and Opportunity from scratch and send the quote.

### [02 — Contract Request](./02-contract-request)
Use this when a sales agent sends a **Contract Request** email with the contract request template.
You will convert the existing lead and send the contract.

### [03 — Enrollment](./03-enrollment)
Use this when you receive the **DocuSign notification** confirming the merchant signed the contract.
You will review the signed contract, send the enrollment emails, process the PayNow link, run the Bulk Processor Update (Actum), and record the enrollment.

### [04 — Special Cases](./04-special-cases)
Reference this when a file involves any of the following:

- Concurrent accounts
- Delinquency
- Collection Review
- Portfolio switches
- Re-enrollment

### [05 — Quick Reference Rules](./05-quick-reference)
Reference this for:

- Restricted states
- Eligible vs ineligible creditors
- ACH and payment limits
- Program length limits
- Card payment rules

---

## 🔧 Supporting Reference

### [Schedule Transactions](./schedule-transactions)
Step-by-step instructions for scheduling transactions in Salesforce.
Referenced from Quote Request and Contract Request workflows — not a standalone process.

### [Move Payments (MPR)](./move-payments)
How to process a Move Payment Request on an enrolled BDS opportunity.
Includes the one-move-only rule, previous payment status checks, and the 1 PM EST same-day cutoff.

### [Chirp Review Process](./chirp-review)
How to verify banking information, account ownership, creditor activity, and recent funding using Chirp, including creditor tenure rules, recent funding scenarios, files that need payments paused, and Bank Refresh for returned payments.

---

## 📌 Portfolio Scope
All debt types (MCA, LOC, and others) are processed through BDS.

---

## ❓ Questions or updates
Email **qa@businessdebtsolutions.com** — CC **ale.b@businessdebtsolutions.com** and **joshua.a@businessdebtsolutions.com**

Do not make assumptions — when in doubt, escalate.
