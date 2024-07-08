import { Business } from "../business/Business";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  name: string | null;
  business?: Business | null;
};
