import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const listProducts = async () => {
    return prisma.product.findMany()
}