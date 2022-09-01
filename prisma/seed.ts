import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("-----------------");
  console.log(`Start seeding ...`);

  // await prisma.user.create({
  //   data: {
  //     name: "Joe",
  //     email: "joe@prisma.io",
  //     profile: {
  //       create: { bio: "Software Developer" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  console.dir(allUsers);

  await prisma.task.create({
    data: {
      title: "Build UI for onboarding flow",
      description: "",
      status: "Todo",
      subTask: {
        create: {
          title: "Sign up page",
          isCompleted: true,
        },
      },
    },
  });

  const allTasks = await prisma.task.findMany({
    include: {
      subTask: true,
    },
  });
  console.dir(allTasks);

  // await prisma.column.create({
  //   data: {
  //     name: "Platform Launch"
  //   }
  // })

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
