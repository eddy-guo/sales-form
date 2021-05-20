import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const createdTest = await prisma.otherdocuments.create({
    data,
  });

  res.json(createdTest);
};
