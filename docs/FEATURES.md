# Feature Map and User Journey

## A beginner-friendly daily flow

| Step | User action | System behaviour |
|---|---|---|
| 1 | Add a material | Makes it selectable in transactions; creates no stock yet. |
| 2 | Save a purchase draft | Captures supplier, quantity, and cost safely. |
| 3 | Confirm incoming goods | Adds the quantity to stock and records an audit event. |
| 4 | Save a sales draft | Captures customer, quantity, and selling rate. |
| 5 | Confirm dispatch | Reduces stock and keeps an auditable record. |
| 6 | Mark delivery complete | Stores driver/vehicle follow-through and delivery confirmation. |

## Product decisions

### Draft before confirmation

Real shops often start entering a document before materials arrive or before a vehicle leaves. Drafts make that normal workflow safe: no stock is affected until an intentional confirmation.

### Keep related work in the same place

The purchase screen can add a new supplier, and the sales screen can add a new customer. This removes an unnecessary trip through a separate master-data page.

### Make the next action obvious

The interface uses clear task names—such as “Confirm & add stock” and “Confirm dispatch”—rather than internal accounting language. Empty screens explain exactly what to do first.

### Owner visibility without extra work

Changes to important records create audit entries. Admins can review module-specific audit history, manage users, purge old audit records based on a retention period, and export a safe business-data snapshot.

## Operating modules

- **Overview:** daily KPIs, recent stock events, and initial setup guidance.
- **Inventory:** materials, stock-on-hand, reorder levels, and operational history.
- **Purchases and suppliers:** incoming-stock recording and vendor management.
- **Sales and customers:** invoices, dispatch confirmation, and customer records.
- **Finance:** payment accounts, expense categories, expense entry, and cash visibility.
- **Operations:** quotes, delivery status, and document links.
- **Reports:** sales, purchases, expenses, receivables, payables, daily closing, and low-stock alerts.
- **Team and profile:** user access, profile details, password changes, session logout, and audit controls.
