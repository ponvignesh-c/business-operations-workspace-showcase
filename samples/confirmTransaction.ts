/**
 * Illustrative sample: confirming a draft should be the only point at which
 * stock changes. This is a simplified showcase excerpt, not production code.
 */
type Draft = { id: string; status: 'DRAFT' | 'CONFIRMED'; quantity: number };
type Inventory = { available: number };

export function confirmIncomingPurchase(draft: Draft, inventory: Inventory) {
  if (draft.status !== 'DRAFT') throw new Error('Only a draft can be confirmed.');
  if (draft.quantity <= 0) throw new Error('Quantity must be greater than zero.');

  return {
    document: { ...draft, status: 'CONFIRMED' as const },
    inventory: { ...inventory, available: inventory.available + draft.quantity },
    audit: { action: 'purchase_confirmed', documentId: draft.id },
  };
}
