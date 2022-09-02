import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("-----------------");
  console.log(`Start seeding ...`);

  await prisma.user.create({
    data: {
      name: "Joe",
      email: "joe@mail.com",
      profile: {
        create: {
          bio: "Software Developer",
          role: "DEVELOPER",
        },
      },
    },
  });
  await prisma.user.create({
    data: {
      name: "Sierra",
      email: "sierra@mail.com",
      profile: {
        create: {
          bio: "Project manager for he household",
          role: "USER",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  console.table(allUsers);

  await prisma.board.create({
    data: {
      name: "Platform Launch",
      columns: {
        create: [
          {
            name: "Todo",
            tasks: {
              create: [
                {
                  title: "Build UI for onboarding flow",
                  description: "",
                  status: "Todo",
                  subTasks: {
                    create: [
                      {
                        title: "Sign up page",
                        isCompleted: true,
                      },
                      {
                        title: "Sign in page",
                        isCompleted: false,
                      },
                      {
                        title: "Welcome page",
                        isCompleted: false,
                      },
                    ],
                  },
                },
                {
                  title: "Build UI for search",
                  description: "",
                  status: "Todo",
                  subTasks: {
                    create: [
                      {
                        title: "Search page",
                        isCompleted: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Doing",
            tasks: {
              create: [
                {
                  title: "Design settings and search pages",
                  description: "",
                  status: "Doing",
                  subTasks: {
                    create: [
                      {
                        title: "Settings - Account page",
                        isCompleted: true,
                      },
                      {
                        title: "Settings - Billing page",
                        isCompleted: true,
                      },
                      {
                        title: "Search page",
                        isCompleted: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Done",
            tasks: {
              create: [
                {
                  title: "Conduct 5 wireframe tests",
                  description:
                    "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
                  status: "Done",
                  subTasks: {
                    create: [
                      {
                        title: "Complete 5 wireframe prototype tests",
                        isCompleted: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
  await prisma.board.create({
    data: {
      name: "Marketing Plan",
      columns: {
        create: [
          {
            name: "Todo",
            tasks: {
              create: [
                {
                  title: "Plan Product Hunt launch",
                  description: "",
                  status: "Todo",
                  subTasks: {
                    create: [
                      {
                        title: "Find hunter",
                        isCompleted: false,
                      },
                      {
                        title: "Gather assets",
                        isCompleted: false,
                      },
                      {
                        title: "Draft product page",
                        isCompleted: false,
                      },
                      {
                        title: "Notify customers",
                        isCompleted: false,
                      },
                      {
                        title: "Notify network",
                        isCompleted: false,
                      },
                      {
                        title: "Launch!",
                        isCompleted: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Doing",
            tasks: {
              create: [],
            },
          },
          {
            name: "Done",
            tasks: {
              create: [],
            },
          },
        ],
      },
    },
  });
  await prisma.board.create({
    data: {
      name: "Roadmap",
      columns: {
        create: [
          {
            name: "Now",
            tasks: {
              create: [
                {
                  title: "Launch version one",
                  description: "",
                  status: "",
                  subTasks: {
                    create: [
                      {
                        title: "Launch privately to our waitlist",
                        isCompleted: false,
                      },
                      {
                        title: "Launch publicly on PH, HN, etc.",
                        isCompleted: false,
                      },
                    ],
                  },
                },
                {
                  title:
                    "Review early feedback and plan next steps for roadmap",
                  description:
                    "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                  status: "Done",
                  subTasks: {
                    create: [
                      {
                        title: "Interview 10 customers",
                        isCompleted: false,
                      },
                      {
                        title:
                          "Review common customer pain points and suggestions",
                        isCompleted: false,
                      },
                      {
                        title: "Outline next steps for our roadmap",
                        isCompleted: false,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Next",
            tasks: {
              create: [],
            },
          },
          {
            name: "Later",
            tasks: {
              create: [],
            },
          },
        ],
      },
    },
  });

  const allBoards = await prisma.board.findMany({
    include: {
      columns: true,
    },
  });
  console.table(allBoards);

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
