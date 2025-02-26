import { createTRPCRouter } from "@/server/api/trpc";
import { createEscrow } from "./create";
import { readEscrow } from "./read";
import { addTaker, refund } from "./update";

// Register individual routes to the escrow sub-router
export const escrowRouter = createTRPCRouter({
  create: createEscrow,
  read: readEscrow,
  addTaker: addTaker,
  refund: refund
});
