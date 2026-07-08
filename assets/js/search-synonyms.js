/*
 * Domain-specific synonym map for the BDS Portfolio SOP site.
 *
 * This is NOT a general English thesaurus. Every entry only maps terms
 * that are used interchangeably *inside these SOPs* — abbreviations,
 * full expansions, tool names, and the Spanish terms Ale uses in
 * practice. Add new entries here as new abbreviations/phrasing appear
 * in future SOP pages; no code changes needed elsewhere.
 *
 * Format: "canonical key": ["alt term 1", "alt term 2", ...]
 * Matching is bidirectional and case-insensitive — searching any key
 * OR any of its listed terms will pull in the whole group.
 */
window.SOP_SYNONYMS = {
  "paynow": ["pay now", "paynow link", "secure payment link", "payment link", "card payment link", "collect checkout", "button generator", "link de pago", "enlace de pago", "nmi"],
  "bcc": ["copia oculta", "cco", "blind copy", "hidden copy"],
  "fpd": ["first payment date", "primer pago", "fecha del primer pago", "date of first payment"],
  "pwc": ["pre-welcome call", "pre welcome call", "pw call", "llamada de bienvenida"],
  "ach": ["bank transfer", "direct debit", "transferencia bancaria", "electronic check"],
  "cc": ["credit card", "card payment", "tarjeta de credito", "pago con tarjeta"],
  "sf": ["salesforce"],
  "cs": ["customer service", "servicio al cliente", "clientsupport"],
  "uw": ["underwriting", "suscripcion"],
  "mpr": ["move payment request", "move payments", "mover pago", "move a payment"],
  "chirp": ["bank verification", "banking verification", "verificacion bancaria", "chirp review"],
  "bank refresh": ["refresh", "available balance", "saldo disponible", "returned payment balance"],
  "tenure": ["aging", "waiting period", "natural days", "dias naturales", "periodo de espera", "funding tenure"],
  "mismatch": ["discrepancy", "does not match", "doesnt match", "no coincide", "no match", "does not match salesforce"],
  "hold": ["pause", "paused", "on hold", "returned file needs review", "pausar", "detener", "pause payments"],
  "concurrent": ["second position", "additional creditor", "cuenta concurrente", "concurrent account"],
  "delinquency": ["delinquent", "collections review", "default", "morosidad", "collection review"],
  "actum": ["bulk processor update", "processor", "procesador", "bds services plan"],
  "kapcharge": ["processor", "procesador", "business debt solutions plan"],
  "docusign": ["signed contract", "envelope", "signature", "firma", "contrato firmado", "sobre", "send for signature"],
  "voided check": ["cheque anulado", "banking documentation", "bank letter", "bank statement"],
  "ein": ["tax id", "tax identification number"],
  "ssn": ["social security number"],
  "dob": ["date of birth", "birthday", "fecha de nacimiento", "owners birthday"],
  "creditor": ["lender", "funder", "acreedor", "prestamista"],
  "funding": ["deposit", "financiamiento", "fondeo", "deposito", "recent funding"],
  "returned payment": ["bounced", "nsf", "declined", "pago devuelto", "pago rechazado", "client returned payment"],
  "enrollment": ["enrolled", "inscripcion", "enrollment pending"],
  "opportunity": ["opp", "oportunidad", "expediente", "file", "client file"],
  "quote": ["cotizacion", "quote request", "quote sent"],
  "contract": ["contrato", "contract request", "send contract"],
  "program cost": ["payback amount", "total fees", "costo del programa", "total program cost"],
  "savings": ["estimated savings", "ahorro", "savings amount", "savings fee"],
  "escalate": ["escalation", "notify management", "escalar", "contact management"],
  "schedule transactions": ["transaction table", "enrollment plan", "plan de pagos"],
  "risk score": ["score", "risk classification", "clasificacion de riesgo", "payment capacity"],
  "restricted states": ["ineligible states", "estados restringidos", "state not eligible"],
  "eligible creditor": ["allowed creditor", "acreedor permitido", "eligible debt type"],
  "congratulations email": ["welcome email", "correo de bienvenida"],
  "management": ["supervisor", "gerencia", "uw management"],
  "sales agent": ["sales rep", "agente de ventas"],
  "sales lead": ["lead source"],
  "bulk processor update": ["change processor", "actum kapcharge"],
  "lendini": ["quickfix", "funding metrics", "fm"],
  "reverse consolidation": ["reverse consolidation company"],
  "third-party collection agency": ["collection agency", "3rd party collection"],
  "voided check special cases": ["bank of america", "bluevine", "navy federal"]
};
