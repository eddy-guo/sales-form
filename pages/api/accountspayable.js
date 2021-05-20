import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const createdTest = await prisma.accountspayable.create({
    data,
  });

  res.json(createdTest);
};
