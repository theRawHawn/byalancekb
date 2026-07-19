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
  section?: string; // e.g. "Section 393", "Rule 88A" — shown as a stamp badge
  tags: string[];
  content: string; // markdown
  lastUpdated: string; // ISO date
};

export const categories: Category[] = [
  {
    slug: "gst",
    name: "GST / Indirect Tax",
    description: "Input tax credit, GSTR filings, e-invoicing, and the GST 2.0 rate structure.",
  },
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "TDS/TCS, ITR filing, and the transition from the 1961 Act to the Income Tax Act, 2025.",
  },
  {
    slug: "payroll-labour-codes",
    name: "Payroll & Labour Codes",
    description: "EPF, ESI, gratuity, and the four Labour Codes that replaced them from November 2025.",
  },
  {
    slug: "corporate-law",
    name: "Corporate Law",
    description: "Companies Act compliance, ROC filings, and grant/budget compliance.",
  },
  {
    slug: "compliance-calendar",
    name: "Compliance Calendar",
    description: "Due dates across GST, TDS, ITR, ROC, and payroll for FY 2025-26 / FY 2026-27.",
  },
];

export const articles: Article[] = [
  // ---------------- GST ----------------
  {
    category: "gst",
    slug: "gst-2-0-rate-rationalisation",
    title: "GST 2.0: The September 2025 Rate Rationalisation",
    description:
      "The four-slab structure is gone. What changed, which goods moved where, and what it means for pricing and ITC.",
    section: "56th GST Council Meeting",
    tags: ["GST 2.0", "rate rationalisation", "56th council meeting", "slabs"],
    lastUpdated: "2026-07-01",
    content: `## What changed

At its 56th meeting on 3 September 2025, the GST Council approved the most significant rate overhaul since GST launched in 2017. The revised structure took effect **22 September 2025**.

The old five-tier system — 0%, 5%, 12%, 18%, 28% — has been collapsed into three working slabs:

| Old slab | What happened |
|---|---|
| 12% | Abolished. ~99% of items moved to 5% (dairy, personal care, packaged snacks, medical devices); the remainder moved to 18%. |
| 28% | Abolished. ~90% of items moved to 18% (ACs, TVs, small cars); the remaining ~10% (luxury and sin goods) moved to a new 40% slab. |
| New 40% slab | Applies to luxury and sin goods: pan masala, aerated/caffeinated drinks, tobacco products, and premium vehicles. |

The **0% (nil-rated)** category also expanded: individual health and life insurance premiums (previously 18%), 33 lifesaving medicines (previously 12%), and educational stationery are now nil-rated.

## Compensation cess

Compensation cess was scrapped from 22 September 2025 on most goods. It continues only on pan masala, gutkha, cigarettes, chewing tobacco, and bidis, until the loan and interest obligations under the compensation cess account are fully discharged.

## What this means for billing and ITC

- Re-check the HSN/SAC-to-rate mapping in your billing software — do not rely on last year's rate card.
- A rate reduction on its own does **not** trigger an ITC reversal obligation. Reversal under Rule 42/43 is only required where a supply became genuinely exempt on or after 22 September 2025.
- Reprice existing contracts and standing quotations that reference the old 12%/28% slabs before invoicing against them.
- Late filing, interest, and penalty provisions are unchanged by the rate reform — only the rates moved, not the compliance framework.`,
  },
  {
    category: "gst",
    slug: "input-tax-credit-rules",
    title: "Input Tax Credit: Eligibility and Reversal Rules",
    description:
      "When ITC can be claimed, the GSTR-2B matching requirement, and reversal triggers under Rule 42/43.",
    section: "Section 16, Rule 42/43",
    tags: ["ITC", "GSTR-2B", "reversal", "input tax credit"],
    lastUpdated: "2026-04-10",
    content: `## Who can claim ITC

A registered person can claim input tax credit on goods or services used in the course of business, subject to four conditions under Section 16(2) of the CGST Act:

- Possession of a valid tax invoice or debit note
- Receipt of the goods or services
- Tax actually paid to the government by the supplier
- Return filed under Section 39

These provisions sit under the **CGST Act, 2017**, which is unaffected by the Income Tax Act, 2025 transition — GST and income tax are separate statutes.

## GSTR-2B matching

ITC is auto-populated in GSTR-2B on a static, month-wise basis. Claim only the credit reflected in GSTR-2B for the relevant period — provisional credit outside this statement is not available.

## When ITC must be reversed

| Trigger | Rule | Treatment |
|---|---|---|
| Exempt supply mix | Rule 42 | Proportionate reversal on input/input services |
| Capital goods used for both taxable and exempt supply | Rule 43 | Reversed over a 60-month useful life |
| Payment not made within 180 days | Rule 37 | ITC reversed, re-claimed once paid |
| Non-business use | Section 17(1) | Reversed on the business-use proportion |
| Supply became exempt under GST 2.0 rate changes | Rule 42 | Reversal applies only from 22 September 2025, not retrospectively |

## Practical note for filing

Reconcile GSTR-2B against the purchase register every month before filing GSTR-3B. Mismatches remain the single largest cause of ITC notices during scrutiny — this did not change with the GST 2.0 rate reform.`,
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

This sequencing is untouched by the GST 2.0 rate rationalisation — only the rates applied to outward supply changed, not the set-off mechanics.

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
    category: "gst",
    slug: "e-invoicing-threshold-applicability",
    title: "E-Invoicing: Current Threshold and Who Must Comply",
    description:
      "The ₹5 crore turnover test, how it's calculated at the PAN level, exemptions, and the 30-day IRP reporting rule.",
    section: "Notification No. 10/2023-CT",
    tags: ["e-invoicing", "IRN", "IRP", "threshold", "e-invoice"],
    lastUpdated: "2026-06-20",
    content: `## The current threshold

E-invoicing is mandatory for businesses whose **aggregate annual turnover (AATO) exceeds ₹5 crore** in any financial year since GST began (FY 2017-18 onward). This has been the threshold since 1 August 2023 (Notification No. 10/2023-Central Tax) and, as of mid-2026, has not been lowered further.

## The test that catches people off guard

Once a business crosses ₹5 crore in **any** financial year since 2017-18, e-invoicing applies to it **permanently** — even if turnover later drops back below ₹5 crore. It is not a rolling current-year test.

The threshold is also tested at the **PAN level**, not per GSTIN. If a business holds multiple GST registrations under one PAN, turnover across all of them is aggregated to test the ₹5 crore limit.

## 30-day reporting window

For businesses with AATO of ₹10 crore or more, e-invoices must be reported to the Invoice Registration Portal (IRP) within **30 days** of the invoice date; reporting after that window is rejected by the portal. This 30-day rule was extended down from businesses over ₹100 crore to those over ₹10 crore effective 1 April 2025.

## What's covered and what's exempt

E-invoicing applies to B2B invoices, exports, supplies to SEZ units, and debit/credit notes tied to these. **B2C transactions are not covered.**

Certain categories remain exempt regardless of turnover: SEZ units (as suppliers), banks and insurers, NBFCs, goods transport agencies, passenger transport services, and cinema ticket sellers.

## Practical filing note

E-invoicing does not replace GSTR-1 — but e-invoice data auto-populates into GSTR-1, which materially cuts manual entry. Reconcile the auto-populated GSTR-1 against your billing register before filing rather than assuming the auto-population is complete.`,
  },

  {
    category: "income-tax",
    slug: "income-tax-act-2025-transition-guide",
    title: "The Income Tax Act, 2025: What Actually Changed on 1 April 2026",
    description:
      "The 1961 Act is repealed. A practitioner's guide to the Tax Year concept, section renumbering, and what stayed the same.",
    section: "Income Tax Act, 2025",
    tags: ["Income Tax Act 2025", "new tax act", "tax year", "transition"],
    lastUpdated: "2026-07-05",
    content: `## The headline

The **Income Tax Act, 2025** came into force on **1 April 2026**, fully repealing and replacing the Income Tax Act, 1961. It applies to Tax Year 2026-27 onward. Income earned up to 31 March 2026 continues to be governed by the 1961 Act — your ITR for FY 2025-26 (AY 2026-27), filed in 2026, is still an old-Act return.

The government's stated intent is consolidation, not a change in tax policy: **rates, exemptions, and deductions are unchanged**. What changed is structure — the old Act had swollen to 800+ sections after six decades of amendments; the new Act runs to 536 sections across 23 chapters, with clearer language and fewer cross-references.

## "Tax Year" replaces "Previous Year" / "Assessment Year"

The dual Previous Year / Assessment Year concept is gone. There is now a single **Tax Year**, which simplifies return references but means every internal template, engagement letter, and client communication that refers to "AY" needs updating for periods from April 2026 onward.

## Section renumbering — the ones that matter day to day

| Old (1961 Act) | New (2025 Act) | Subject |
|---|---|---|
| Section 194J | Section 393(1) | TDS on professional/technical fees |
| Section 87A | Section 157 | Tax rebate |
| Section 234F | Section 428 | Late filing fee |
| Section 44AB | (renumbered, same audit trigger logic) | Tax audit |

Do not assume a section number you know from the 1961 Act still means the same thing — the renumbering is not sequential or predictable, and it touches nearly every commonly cited section.

## What did not change

- Tax rates and slabs for individuals, HUFs, and companies
- Existing deductions and exemptions, unless separately amended by a Finance Act
- The choice between old and new tax regimes
- Pending assessments and appeals for periods before 1 April 2026 continue under the 1961 Act — there is no retrospective reopening

## Practical checklist for the transition

- Re-map every section reference in your SOPs, checklists, and client-facing templates
- Update TDS return and certificate form names (see the Section 393 / TDS article for the full form mapping)
- Brief clients that "AY 2026-27" was the last cycle under the old Act — from Tax Year 2026-27, statements and correspondence will use the new terminology
- Because the transition is recent, cross-check specific section numbers against the Income Tax Department's official mapping tool before citing them in formal opinions — secondary sources vary slightly on some of the less common sections`,
  },
  {
    category: "income-tax",
    slug: "section-194j-professional-fees",
    title: "TDS on Professional Fees: Section 194J → Section 393(1)",
    description:
      "The ₹50,000 threshold, 10%/2% rates, and what changed in section number, forms, and payment codes from April 2026.",
    section: "Section 393(1) (was 194J)",
    tags: ["TDS", "194J", "393", "professional fees", "technical services"],
    lastUpdated: "2026-07-08",
    content: `## Old section, new number

TDS on professional and technical fees was governed by **Section 194J** of the Income Tax Act, 1961. From **1 April 2026**, the same provision is covered by **Section 393(1)** of the Income Tax Act, 2025 [Sl. No. 6(iii).D(a) and (b) of the TDS table]. The underlying deduction logic is unchanged — only the citation and reporting codes moved.

## Rate and threshold

- **10%** on professional fees (legal, medical, engineering, accountancy, architecture, technical consultancy) and on director's remuneration
- **2%** on fees for technical services and on royalty in the nature of consideration for sale of computer software
- Threshold: **₹50,000** in a financial/tax year, per payee — raised from ₹30,000 with effect from **1 April 2025** (Budget 2025), and carried forward unchanged into the 2025 Act

## Payment codes

Deductors should now use payment code **1027** for professional fees and **1026** for technical services when filing.

## Forms — what got renamed

| Old form | New form | Purpose |
|---|---|---|
| Form 16A | Form 131 | TDS certificate for non-salary payments |
| Form 26Q | Form 140 | Quarterly TDS return for resident non-salary payments |
| Form 16 | Form 130 | Annual TDS certificate for salary |
| Form 24Q | Form 138 | Quarterly TDS return for salary |

Q4 FY 2025-26 returns (covering payments up to 31 March 2026) still use the **old** form numbers and section citations, even if filed after 1 April 2026 — the governing law follows the date of the underlying transaction, not the filing date. From Tax Year 2026-27 (Q1, due 31 July 2026) onward, use the new forms.

*Form renumbering was still being finalised across official and practitioner sources through mid-2026 — cross-check the exact form number against TRACES/CBDT guidance before a filing, particularly for the less common certificate forms.*

## Professional vs. technical services

Professional services involve the exercise of intellectual skill dependent on individual qualification (a CA's audit fee, a lawyer's opinion) — taxed at 10%. Technical services involve managerial, technical, or consultancy services, often reliant on equipment or systems — taxed at 2%.

## Common filing errors

- Deducting under the wrong sub-rate (10% vs 2%) for a hybrid service
- Missing the ₹50,000 threshold check when payments to the same vendor are split across multiple invoices in a year
- Citing Section 194J on a Tax Year 2026-27 transaction instead of Section 393(1)
- Not reconciling the new TDS return (Form 140) against the vendor's PAN before filing`,
  },
  {
    category: "income-tax",
    slug: "itr-filing-due-dates-ay2026-27",
    title: "ITR Filing Due Dates: AY 2026-27",
    description:
      "The staggered due-date structure now in force — salaried, non-audit business/professional, audit, and transfer pricing cases.",
    section: "Section 428 (was 234F)",
    tags: ["ITR", "due dates", "AY 2026-27", "tax audit"],
    lastUpdated: "2026-07-10",
    content: `## The structure is no longer a single date

For AY 2026-27 (FY 2025-26), a new provision under the Finance Act, 2026 splits the non-audit deadline by return type — this is a permanent structural change, not a one-off extension.

| Category | Forms | Due date |
|---|---|---|
| Salaried / no business income | ITR-1, ITR-2 | 31 July 2026 |
| Business/professional income, no audit required | ITR-3, ITR-4 | 31 August 2026 |
| Accounts requiring audit | — | 31 October 2026 |
| Transfer pricing cases (Section 92E report) | — | 30 November 2026 |
| Tax audit report | — | 30 September 2026 (one month before the ITR due date for audit cases) |

## Late filing fee

The late filing fee under the old Section 234F is now **Section 428** of the Income Tax Act, 2025, but the amounts are unchanged: ₹1,000 where total income does not exceed ₹5 lakh, ₹5,000 otherwise.

## Revised and belated returns

Budget 2026 extended the revised-return window: a return can now be revised up to **31 March 2027** for AY 2026-27, up from the earlier 31 December cutoff. This gives a materially longer correction window than prior years — confirm the exact belated-return cutoff against the current Income Tax Department notification before advising a client close to year-end, as secondary sources vary slightly on this point.

## Note on which Act governs this filing

Even though the Income Tax Act, 2025 is now in force, the ITR filed in 2026 for FY 2025-26 (AY 2026-27) relates to income earned before 1 April 2026 and is therefore governed entirely by the **Income Tax Act, 1961**. The first return filed under the new Act's provisions will be for Tax Year 2026-27, filed in the 2027 cycle.`,
  },

  {
    category: "income-tax",
    slug: "tds-on-purchase-of-goods-194q",
    title: "TDS on Purchase of Goods: Section 194Q (Now Under Section 393)",
    description:
      "The ₹50 lakh / ₹10 crore turnover test, why Section 206C(1H) no longer matters, and how GST is treated in the calculation.",
    section: "Section 393 (was 194Q)",
    tags: ["194Q", "393", "TCS", "206C(1H)", "purchase of goods"],
    lastUpdated: "2026-06-25",
    content: `## The rule

A buyer must deduct TDS at **0.1%** on purchases of goods from a resident seller once the aggregate value from that seller exceeds **₹50 lakh** in a financial year — but only if the buyer's turnover in the *preceding* financial year exceeded **₹10 crore**. TDS is deducted on the amount exceeding ₹50 lakh, not the full purchase value.

If the seller hasn't furnished a valid PAN, the rate rises to **5%** under the PAN-quoting provisions.

Under the Income Tax Act, 2025, this obligation sits inside the consolidated **Section 393** TDS table rather than as a standalone section — the rate and threshold logic carries over unchanged.

## Section 206C(1H) no longer exists — stop tracking it

Section 206C(1H) (TCS on sale of goods, the seller-side mirror of 194Q) was **abolished with effect from 1 April 2025**. Before that date, where both provisions could apply to the same transaction, 194Q took precedence and the seller didn't need to collect TCS. From FY 2025-26 onward, that overlap question is moot — **194Q is now the sole provision governing tax at source on goods purchases.** If your checklist still references 206C(1H) as something to reconcile against, remove it.

## GST treatment

CBDT Circular No. 13/2021 (30 June 2021) clarified that TDS under Section 194Q is computed on the purchase value **excluding GST**, provided GST is separately indicated on the invoice or in the contract.

## Filing and deposit

- Deposit TDS via Challan ITNS 281 within **7 days** of the month-end (for March deductions, by 30 April)
- Report quarterly in the return that replaced Form 26Q (see the Section 393 TDS article for the current form number)
- Issue the TDS certificate to the seller within 15 days of the return due date

## What's excluded

Transactions on which TDS is deductible under another provision (e.g., Section 194O for e-commerce operators), purchases from non-resident sellers without an Indian business connection, transactions in securities/commodities on recognised exchanges, and purchases by government entities not carrying on business.`,
  },

  {
    category: "payroll-labour-codes",
    slug: "four-labour-codes-overview",
    title: "The Four Labour Codes: What Changed From 21 November 2025",
    description:
      "29 central labour laws — including the EPF Act and ESI Act — consolidated into four codes. What's in force and what's still settling.",
    section: "Wage / IR / SS / OSH Codes",
    tags: ["labour codes", "wage code", "social security code", "50% wage rule"],
    lastUpdated: "2026-07-12",
    content: `## The consolidation

On **21 November 2025**, the Government of India notified all four Labour Codes as enforceable law, consolidating 29 separate central labour statutes:

- **Code on Wages, 2019** — minimum wage, timely payment, and a national floor wage
- **Industrial Relations Code, 2020** — unions, retrenchment, layoffs, dispute resolution, fixed-term employment
- **Code on Social Security, 2020** — subsumes the EPF Act 1952, ESI Act, Payment of Gratuity Act, and Maternity Benefit Act
- **Occupational Safety, Health and Working Conditions Code, 2020** — workplace safety and welfare

## The rule that changes every payroll calculation: the 50% wage definition

The Codes introduce a uniform definition of "wages" and require that **basic pay plus dearness allowance make up at least 50% of total compensation**. Where allowances currently push basic pay below that threshold, the excess is added back to "wages" for the purpose of computing PF, gratuity, and other statutory dues.

This is already in force and is the single biggest reason to restructure CTC templates now rather than at the next inspection — it directly increases the wage base used for EPF and gratuity calculations for employees whose salary structure leans heavily on allowances.

## What is settled vs. still stabilising

- **In force nationwide since 21 November 2025:** the Codes themselves, including the wage definition
- **Central rules:** draft rules were circulated for comment (30–45 day windows closing between late January and mid-February 2026); the operational detail is still being finalised through 2026
- **State rules:** implementation is uneven. As of mid-2026, a number of states (Madhya Pradesh, Uttar Pradesh, Gujarat, Karnataka, Haryana, Uttarakhand, Jharkhand, Odisha, Bihar, Chhattisgarh, Assam) have notified final rules; several large industrial states (Maharashtra, Tamil Nadu, Kerala, Punjab, Rajasthan, Telangana, Andhra Pradesh, West Bengal) remained in draft
- **Gig and platform worker provisions** (aggregator contribution rates, gratuity insurance) await separate central notification

## What this means for practice

Because labour is a concurrent subject, the rules that actually govern day-to-day compliance depend on where your client's employees are based — check both the Central rules and the specific state's notified rules before advising, and revisit this at least quarterly while state-level rule-making is still catching up.`,
  },
  {
    category: "payroll-labour-codes",
    slug: "epf-interest-and-7q-14b",
    title: "EPF: Current Interest Rate, and Interest/Damages on Delayed Remittance",
    description:
      "The FY 2025-26 interest rate, and how Section 7Q interest and Section 14B damages are computed on late PF payments.",
    section: "EPF Scheme / Code on Social Security",
    tags: ["EPF", "7Q", "14B", "PF interest", "damages"],
    lastUpdated: "2026-07-01",
    content: `## Current interest rate

The EPFO has declared an interest rate of **8.25% per annum** for FY 2025-26, unchanged from FY 2024-25 — the third consecutive year at this rate. Interest is calculated monthly on the closing balance but credited to member accounts only at year-end (31 March).

## Where this sits after the Labour Code transition

The Employees' Provident Funds Act, 1952 and its Scheme are being subsumed into the **Code on Social Security, 2020**, which has been in force since 21 November 2025. An **Employees' Provident Funds Scheme, 2026** has since been notified to align the scheme with the new Code. Because this framework was still being finalised through 2026, confirm the current governing instrument (1952 Scheme vs. 2026 Scheme) and the applicable section numbers before citing them in a formal filing or client note.

## Interest on delayed payment (historically Section 7Q)

Interest is charged at **12% per annum** (simple interest) for every day of delay between the statutory due date and the actual date of remittance of PF contributions.

## Damages for default (historically Section 14B)

Damages are levied in addition to interest, as a penalty for delayed payment, computed at a flat rate of **1% per month** of delay (pro-rated for part-months) — the current framework, replacing the earlier slab-based structure that scaled with the length of default.

## Worked treatment for arrear ECR

Where UAN generation is delayed and contributions are remitted late through an arrear Electronic Challan-cum-Return:

1. Compute the number of days between the statutory due date (15th of the following month) and the actual remittance date
2. Apply interest at 12% p.a. on the delayed contribution amount
3. Apply damages at 1% per month (pro-rated) on the same base
4. Remit interest and damages separately from the principal contribution, under the correct EPFO challan heads

## Wage ceiling

The statutory wage ceiling for mandatory EPF coverage remains **₹15,000/month** as of mid-2026, though the 50% wage-definition rule under the Labour Codes (see the Labour Codes overview) changes what counts toward that ceiling for many salary structures, even without the ceiling figure itself moving.`,
  },

  // ---------------- Corporate Law ----------------
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
    category: "corporate-law",
    slug: "roc-annual-filing-aoc4-mgt7",
    title: "ROC Annual Filing: AOC-4 and MGT-7 Due Dates",
    description:
      "How the AOC-4 and MGT-7 deadlines flow from the AGM date, the per-day late fee, and what's different for small companies and OPCs.",
    section: "Section 137, Section 92",
    tags: ["AOC-4", "MGT-7", "ROC", "annual return", "AGM"],
    lastUpdated: "2026-06-10",
    content: `## The filings

Every company registered under the Companies Act, 2013 must file two annual forms with the Registrar of Companies, regardless of turnover or whether it transacted at all during the year:

- **Form AOC-4** (financial statements, under Section 137) — within **30 days** of the AGM
- **Form MGT-7** / **MGT-7A** (annual return, under Section 92) — within **60 days** of the AGM

Small companies (paid-up capital ≤ ₹4 crore and turnover within the prescribed limit) and OPCs file the simplified **MGT-7A** instead of MGT-7.

## How the dates actually land

Both deadlines are anchored to the AGM date, not a fixed calendar date. For a company with a 31 March year-end, the AGM must be held by **30 September**. If the AGM is held exactly on that date, AOC-4 falls due around **30 October** and MGT-7 around **29 November**. If the AGM is held earlier — say 15 August — both deadlines pull forward accordingly (AOC-4 by 14 September, MGT-7 by 14 October in that example).

OPCs work differently: AOC-4 is due within **180 days** of financial year-end (around 27 September for a 31 March year-end, since an OPC has no AGM requirement), and MGT-7A within a further 60 days (around 27 November).

## Penalties

Late filing attracts an additional fee of **₹100 per day per form**, uncapped — a 100-day delay on AOC-4 alone adds ₹10,000 over the normal filing fee. Persistent non-filing can escalate to penalties under Sections 92 and 137 on the company and its officers, and eventually to ROC strike-off proceedings.

## Note on periodic relief windows

MCA has, in past cycles, issued circulars giving a penalty-free window to clear pending AOC-4/MGT-7 filings (for example, a scheme extending the FY 2024-25 deadline to 31 January 2026 without additional fees), and separately a facilitation scheme allowing a reduced additional-fee rate for clearing older defaults. These windows are time-boxed and announced individually — check the current MCA circular before assuming one is open, rather than relying on last year's relief scheme.`,
  },
  {
    category: "corporate-law",
    slug: "msme-45-day-payment-rule-43bh",
    title: "The MSME 45-Day Payment Rule: Section 43B(h)",
    description:
      "Why unpaid dues to a Udyam-registered micro or small enterprise get disallowed if not paid within 15 or 45 days.",
    section: "Section 43B(h)",
    tags: ["MSME", "43B(h)", "Udyam", "45 day rule", "MSMED Act"],
    lastUpdated: "2026-06-01",
    content: `## The rule

Section 43B(h), effective from **1 April 2024**, links a buyer's tax deduction for amounts payable to a Micro or Small Enterprise to how quickly the buyer actually pays:

- **15 days** — if there is no written agreement on payment terms
- **45 days** — if there is a written agreement, and this is a hard ceiling; an agreement specifying 60 days is only enforceable up to 45 days under Section 15 of the MSMED Act, 2006

If payment isn't made within the applicable period, the expense is **disallowed in that financial year** and can only be claimed as a deduction in the year the payment is actually made — regardless of the buyer's accounting method.

## Who it applies to

- The **supplier** must be registered under the MSMED Act as a Micro or Small Enterprise (not Medium — Medium enterprises are excluded), and must be a manufacturer or service provider (not a trader — traders were brought into Udyam registration only for Priority Sector Lending purposes, not for this rule)
- The **buyer's own registration status is irrelevant** — this applies to any buyer purchasing from a covered MSME supplier
- It covers goods and services, including certain capital expenditure where the underlying deduction would otherwise fall under Sections 30–36

## Verify Udyam status before you rely on the exemption

You cannot assess 43B(h) exposure without checking whether each vendor actually holds Micro/Small Udyam registration — trader-only vendors and Medium enterprises fall outside the rule entirely. Build a vendor Udyam-status check into onboarding rather than discovering the gap at year-end.

## The separate interest exposure

Beyond the tax disallowance, delayed payment under the MSMED Act also attracts **compound interest at three times the RBI bank rate**, which is itself **not deductible** for income tax purposes — a second, separate cost from the 43B(h) disallowance.

## Year-end control point

Run a vendor ageing report against Udyam-registered Micro/Small suppliers before 31 March every year. Any balance outstanding past its 15- or 45-day window as of year-end is a same-year disallowance, not a timing issue that resolves itself before the return is filed — unlike other Section 43B items, there is no "paid before the due date of filing the return" relief here.

*Section 43B(h) sits within a renumbered framework under the Income Tax Act, 2025 — confirm the current section citation before using it in a formal opinion issued after 1 April 2026.*`,
  },

  {
    category: "compliance-calendar",
    slug: "monthly-gst-tds-due-dates",
    title: "Compliance Calendar: FY 2025-26 / AY 2026-27 Due Dates",
    description:
      "Recurring monthly, quarterly, and annual filing deadlines — GST, TDS, ITR, and payroll — updated for the current cycle.",
    section: "Compliance Calendar",
    tags: ["due dates", "GSTR-1", "GSTR-3B", "TDS payment", "ITR", "labour codes"],
    lastUpdated: "2026-07-15",
    content: `## Monthly

| Filing | Due date |
|---|---|
| GSTR-1 (monthly filers) | 11th of the following month |
| GSTR-3B (monthly filers) | 20th of the following month |
| TDS payment | 7th of the following month |
| PF (ECR) | 15th of the following month |
| ESI contribution | 15th of the following month |

GST filing due dates were not changed by the September 2025 GST 2.0 rate reform — only the rates moved.

## Quarterly

| Filing | Due date |
|---|---|
| GSTR-1 (QRMP scheme) | 13th of the month following the quarter |
| TDS return — Form 138 (salary, was 24Q) / Form 140 (non-salary, was 26Q) | 31 Jul / 31 Oct / 31 Jan / 31 May |
| Advance tax instalments | 15 Jun / 15 Sep / 15 Dec / 15 Mar |

TDS return form numbers changed from Tax Year 2026-27 onward (see the Section 393 TDS article for the full mapping). Returns covering transactions up to 31 March 2026 still use the old form numbers, even if filed after 1 April 2026.

## Annual — Income Tax (AY 2026-27)

| Filing | Due date |
|---|---|
| ITR-1 / ITR-2 (salaried, no business income) | 31 July 2026 |
| ITR-3 / ITR-4 (business/professional, non-audit) | 31 August 2026 |
| Tax audit report | 30 September 2026 |
| ITR — audit cases | 31 October 2026 |
| ITR — transfer pricing cases | 30 November 2026 |
| Revised return | 31 March 2027 |
| GSTR-9 (annual GST return) | 31 December of the following financial year |

## Annual — Corporate (Companies Act)

| Filing | Due date |
|---|---|
| AGM (31 March year-end companies) | 30 September |
| AOC-4 | Within 30 days of AGM |
| MGT-7 / MGT-7A | Within 60 days of AGM |
| DIR-3 KYC | 30 September |
| MSME 45-day payment check | Ongoing — review vendor ageing before 31 March, not just at filing time |

## What to watch through the rest of 2026

- **State-level Labour Code rules** are still being notified unevenly — recheck payroll compliance obligations by state, not just centrally, before year-end
- **Section renumbering** under the Income Tax Act, 2025 affects citations in engagement letters, notices, and client communication from Tax Year 2026-27 onward
- Confirm any date in this table against the GST/Income Tax portal before a filing — due dates are periodically extended by CBDT/CBIC circular, and this table reflects the position as of mid-July 2026`,
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
