export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Article = {
  category: string;
  slug: string;
  title: string;
  description: string;
  section?: string; // e.g. "Section 194J", "Rule 88A" — shown as a stamp badge
  tags: string[];
  content: string; // markdown
  lastUpdated: string; // ISO date
};

export const categories: Category[] = [
  {
    slug: "gst",
    name: "GST / Indirect Tax",
    description: "Input tax credit, GSTR filings, e-invoicing, and reverse charge rules.",
  },
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "TDS/TCS sections, ITR filing, amendments, and assessment procedure.",
  },
  {
    slug: "corporate-law",
    name: "Corporate Law",
    description: "Companies Act compliance, ROC filings, and MCA procedures.",
  },
  {
    slug: "compliance-calendar",
    name: "Compliance Calendar",
    description: "Due dates and filing windows across GST, TDS, ROC, and payroll.",
  },
];

export const articles: Article[] = [
  {
    category: "gst",
    slug: "input-tax-credit-rules",
    title: "Input Tax Credit: Eligibility and Reversal Rules",
    description:
      "When ITC can be claimed, the matching requirement under GSTR-2B, and reversal triggers under Rule 42/43.",
    section: "Section 16, Rule 42/43",
    tags: ["ITC", "GSTR-2B", "reversal", "input tax credit"],
    lastUpdated: "2026-04-10",
    content: `## Who can claim ITC

A registered person can claim input tax credit on goods or services used in the course of business, subject to four conditions under Section 16(2):

- Possession of a valid tax invoice or debit note
- Receipt of the goods or services
- Tax actually paid to the government by the supplier
- Return filed under Section 39

## GSTR-2B matching

ITC is now auto-populated in GSTR-2B on a static, month-wise basis. Claim only the credit reflected in GSTR-2B for the relevant period — provisional credit outside this statement is no longer available.

## When ITC must be reversed

| Trigger | Rule | Treatment |
|---|---|---|
| Exempt supply mix | Rule 42 | Proportionate reversal on input/input services |
| Capital goods used for both taxable and exempt supply | Rule 43 | Reversed over a 60-month useful life |
| Payment not made within 180 days | Rule 37 | ITC reversed, re-claimed once paid |
| Non-business use | Section 17(1) | Reversed on the business-use proportion |

## Practical note for filing

Reconcile GSTR-2B against the purchase register every month before filing GSTR-3B. Mismatches are the single largest cause of ITC notices during scrutiny.`,
  },
  {
    category: "gst",
    slug: "gstr-3b-itc-set-off-sequence",
    title: "GSTR-3B: ITC Set-Off Sequence Under Rule 88A",
    description:
      "The mandatory order for utilising IGST, CGST, and SGST credit before cash payment, with a worked example.",
    section: "Rule 88A, Section 49",
    tags: ["GSTR-3B", "set-off", "Rule 88A", "IGST"],
    lastUpdated: "2026-03-22",
    content: `## The set-off hierarchy

Rule 88A requires IGST credit to be fully exhausted first, before any CGST or SGST credit is used:

1. IGST credit → set off against IGST liability, then CGST liability, then SGST liability, in any order
2. CGST credit → set off against CGST liability first, then IGST liability
3. SGST credit → set off against SGST liability first, then IGST liability
4. CGST credit cannot be used against SGST liability, and vice versa

## Worked example

Liability: IGST ₹40,000, CGST ₹25,000, SGST ₹25,000. Available credit: IGST ₹50,000, CGST ₹10,000, SGST ₹10,000.

- IGST credit ₹50,000 covers IGST liability (₹40,000) with ₹10,000 left over
- The remaining ₹10,000 IGST credit is applied against CGST liability, leaving ₹15,000 CGST payable in cash
- CGST credit ₹10,000 covers part of the remaining CGST — recompute against actual balances before filing
- SGST credit ₹10,000 covers part of SGST liability; the balance is paid in cash

## Tally journal reference

Post the set-off as a journal entry debiting Output CGST/SGST/IGST and crediting Input IGST/CGST/SGST in the sequence above, followed by a separate cash ledger entry for any balance payable.`,
  },
  {
    category: "income-tax",
    slug: "section-194j-professional-fees",
    title: "Section 194J: TDS on Professional and Technical Fees",
    description:
      "Applicable rates, threshold limits, and the distinction between professional and technical services.",
    section: "Section 194J",
    tags: ["TDS", "194J", "professional fees", "technical services"],
    lastUpdated: "2026-02-14",
    content: `## Rate and threshold

TDS under Section 194J applies at:

- 10% on professional fees (legal, medical, engineering, accountancy, architecture, technical consultancy)
- 2% on fees for technical services and for royalty in the nature of consideration for sale of computer software
- 2% on payments to call centres

The threshold for deduction is ₹30,000 in a financial year, per payee, per category of payment.

## Professional vs. technical services

Professional services involve the exercise of intellectual skill dependent on individual qualification (a CA's audit fee, a lawyer's opinion). Technical services involve managerial, technical, or consultancy services, often reliant on equipment or systems rather than individual expertise.

## Common filing errors

- Deducting under the wrong sub-rate (10% vs 2%) when the service is a hybrid
- Missing the threshold check when payments to the same vendor are split across multiple invoices in a year
- Not reconciling 26Q data against the vendor's PAN before filing, causing TRACES mismatches`,
  },
  {
    category: "income-tax",
    slug: "epf-section-7q-14b-interest-damages",
    title: "EPF: Section 7Q Interest and Section 14B Damages",
    description:
      "How interest and damages are computed on delayed PF remittance, including the revised 1% per month flat rate.",
    section: "Section 7Q, Section 14B",
    tags: ["EPF", "7Q", "14B", "PF interest", "damages"],
    lastUpdated: "2026-01-18",
    content: `## Section 7Q — interest on delayed payment

Interest is charged at 12% per annum (simple interest) for every day of delay between the due date and the actual date of remittance of PF contributions.

## Section 14B — damages for default

Damages are levied in addition to interest, as a penalty for delayed payment. Under the revised framework, damages are computed at a flat rate of 1% per month of delay (rather than the earlier slab-based structure that scaled with the length of default).

## Worked treatment for arrear ECR

Where UAN generation is delayed and contributions are remitted late through an arrear Electronic Challan-cum-Return:

1. Compute the number of days between the statutory due date (15th of the following month) and the actual remittance date
2. Apply Section 7Q interest at 12% p.a. on the delayed contribution amount
3. Apply Section 14B damages at 1% per month (pro-rated for part-months) on the same base
4. Remit interest and damages separately from the principal contribution, under the correct EPFO challan heads`,
  },
  {
    category: "corporate-law",
    slug: "nidhi-prayas-budget-classification",
    title: "Nidhi Prayas: Expense Head Classification for Budget Compliance",
    description:
      "How to classify travel, hardware, and overhead spend against approved budget heads under Nidhi Prayas guidelines.",
    section: "Nidhi Prayas Guidelines",
    tags: ["Nidhi Prayas", "budget compliance", "expense classification"],
    lastUpdated: "2025-12-02",
    content: `## Approved expense heads

Nidhi Prayas grants are released against a fixed budget structure, typically covering Manpower, Consumables, Business Travel, Contingency, and Equipment/Capital heads. Spend must be tracked against the specific head it was sanctioned under.

## Reclassifying excess spend

Where actual spend on one head (for example, Business Travel) exceeds the sanctioned allocation, the excess cannot simply remain unclassified. Two options are available:

- Reallocate from an underutilised head within the same reporting period, with a documented justification note
- Carry the excess forward for approval in the next milestone report, flagged explicitly to the program office

## Classifying hardware purchases

Hardware bought for prototyping or testing is generally booked under Equipment/Capital rather than Consumables, unless the specific line item was pre-approved as a consumable in the sanctioned budget. When in doubt, classify against the head that matches the item's expected useful life — items with multi-year utility belong under Capital, single-use or short-life items under Consumables.`,
  },
  {
    category: "compliance-calendar",
    slug: "monthly-gst-tds-due-dates",
    title: "Monthly GST and TDS Due Date Reference",
    description: "A quick-reference table of recurring monthly and quarterly compliance deadlines.",
    section: "Compliance Calendar",
    tags: ["due dates", "GSTR-1", "GSTR-3B", "TDS payment", "24Q", "26Q"],
    lastUpdated: "2026-05-01",
    content: `## Monthly

| Filing | Due date |
|---|---|
| GSTR-1 (monthly filers) | 11th of the following month |
| GSTR-3B (monthly filers) | 20th of the following month |
| TDS payment | 7th of the following month |
| PF (ECR) | 15th of the following month |
| ESI contribution | 15th of the following month |

## Quarterly

| Filing | Due date |
|---|---|
| GSTR-1 (QRMP scheme) | 13th of the month following the quarter |
| TDS return (Form 24Q / 26Q) | 31st of the month following the quarter |
| Advance tax instalments | 15 Jun / 15 Sep / 15 Dec / 15 Mar |

## Annual

| Filing | Due date |
|---|---|
| GSTR-9 (annual return) | 31 December of the following financial year |
| ITR (non-audit cases) | 31 July |
| ITR (audit cases) | 31 October |`,
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getArticleBySlug(
  categorySlug: string,
  articleSlug: string
): Article | undefined {
  return articles.find(
    (a) => a.category === categorySlug && a.slug === articleSlug
  );
}

export function getAllArticles(): Article[] {
  return articles;
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.section?.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}
