/**
 * Single source of truth for deployed contract addresses.
 * apps/api, mobile/backend, and mobile/frontend all import from here —
 * never hardcode a contract address in app code.
 */
export const CONTRACTS = {
  testnet: {
    escrow: "CAEYSVTKTCZYTSMPD7CU3NOFYOO4S5V6LJLGRNV7LKTNZ65N66PCHLMC",
    atomicSwapA: "SET_ME_AFTER_FIRST_DEPLOY",
    zkVerifierRegistry: "SET_ME_AFTER_FIRST_DEPLOY",
  },
  mainnet: {
    escrow: "",
    atomicSwapA: "",
    zkVerifierRegistry: "",
  },
} as const;

export type Network = keyof typeof CONTRACTS;

export interface CashRequest {
  id: string;
  claim_url: string;
  qr_payload: string;
  status: "pending" | "locked" | "released" | "refunded";
}
