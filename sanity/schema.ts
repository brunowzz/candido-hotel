import { type SchemaTypeDefinition } from "sanity";
import user from "./lib/user";
import account from "./lib/account";
import booking from "./lib/booking";
import hotelRoom from "./lib/hotelRoom";
import review from "./lib/review";
import verificationToken from "./lib/verificationToken";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, account, booking, hotelRoom, review, verificationToken],
};
