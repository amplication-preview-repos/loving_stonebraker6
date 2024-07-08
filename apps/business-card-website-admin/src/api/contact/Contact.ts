import { Business } from "../business/Business";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phone: string | null;
  email: string | null;
  address: string | null;
  business?: Business | null;
};
