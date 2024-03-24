import { db } from "~/services/db.server";
export type { User } from "@prisma/client";

export const getUsers = () => db.user.findMany();
