import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const data = JSON.parse(req.body);

  const updatedTest = await prisma.test.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
    },
  });
  res.json(updatedTest);
};
