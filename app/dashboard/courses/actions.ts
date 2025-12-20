"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function createCourse(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const published = formData.get("published") === "on";

  if (!title || !description || isNaN(price)) {
    throw new Error("Invalid input");
  }

  await prisma.course.create({
    data: {
      title,
      description,
        price,
      status: published ? "PUBLISHED" : "DRAFT", // ✅ FIX
      instructor: {
        connect: {
          id: session.user.id, // ✅ FIX
        },
      },
    },
  });

  redirect("/dashboard/courses");
}

export async function deleteCourse(formData: FormData) {
  const courseId = formData.get("courseId") as string;

  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  await prisma.course.delete({
    where: { id: courseId },
  });

  redirect("/dashboard/courses");
}
