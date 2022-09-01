import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("-----------------");
  console.log(`Start seeding ...`);

  await prisma.user.create({
    data: {
      name: "Joe",
      email: "joe@prisma.io",
      profile: {
        create: { bio: "Software Developer" },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  console.dir(allUsers);

  console.log("-----------------");
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
