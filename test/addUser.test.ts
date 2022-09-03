import {
  createUser,
  updateUsername,
} from "../__mocks__/functions-without-context";
import { prismaMock } from "./../singleton";

test("should create new user ", async () => {
  const user = {
    id: "04fcf610-c540-43b1-8cb8-9b7f13b36bca",
    name: "Rich",
    email: "hello@prisma.io",
    acceptTermsAndConditions: true,
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(createUser(user)).resolves.toEqual({
    id: "04fcf610-c540-43b1-8cb8-9b7f13b36bca",
    name: "Rich",
    email: "hello@prisma.io",
    acceptTermsAndConditions: true,
  });
});

test("should update a users name ", async () => {
  const user = {
    id: "1509703f-9a55-43e3-b194-59ba854338d2",
    name: "Rich Haines",
    email: "hello@prisma.io",
  };

  prismaMock.user.update.mockResolvedValue(user);

  await expect(updateUsername(user)).resolves.toEqual({
    id: "1509703f-9a55-43e3-b194-59ba854338d2",
    name: "Rich Haines",
    email: "hello@prisma.io",
  });
});

test("should fail if user does not accept terms", async () => {
  const user = {
    id: "1509703f-9a55-43e3-b194-59ba854338d2",
    name: "Rich Haines",
    email: "hello@prisma.io",
    acceptTermsAndConditions: false,
  };

  prismaMock.user.create.mockRejectedValue(
    new Error("User must accept terms!")
  );

  await expect(createUser(user)).resolves.toEqual(
    new Error("User must accept terms!")
  );
});
