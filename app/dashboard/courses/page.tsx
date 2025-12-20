import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { createCourse } from "./actions";
import { deleteCourse } from "./actions";

export default async function CoursesPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="p-6">
      <form action={createCourse} className="mb-6 space-y-4 max-w-md">
        <h2 className="text-lg font-semibold">Create Course</h2>

        <input
          name="title"
          placeholder="Course title"
          className="w-full border p-2"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price (₹)"
          className="w-full border p-2"
          required
        />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="published" />
          Published
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Course
        </button>
      </form>

      <h1 className="text-xl font-semibold mb-4">Courses</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Published</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="p-2 border">{course.title}</td>
              <td className="p-2 border">{course.price}</td>
              <td className="p-2 border">{course.status}</td>
              <td className="p-2 border text-center">
                <form action={deleteCourse}>
                  <input type="hidden" name="courseId" value={course.id} />
                  <button className="text-red-600">Delete</button>
                </form>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
