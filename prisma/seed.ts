import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@edtech.com",
      password,
      role: "ADMIN",
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
