/**
 * Instantiates `PrismaClient` and stores it in `globalThis`
 * Will only instantiate PrismaClient if it's not on the globalThis object
 * Otherwise it returns the already existing instance
 * Basically, a singleton pattern.
 * Docs here: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
 */

import { PrismaClient } from "@prisma/client";

const NODE_ENV = process.env.NODE_ENV;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}


