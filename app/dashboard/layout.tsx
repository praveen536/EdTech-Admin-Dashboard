import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="font-bold mb-4">EdTech Admin</h2>
        <nav className="space-y-3">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/courses">Courses</Link>
        </nav>
      </aside>
      <section className="flex-1 p-6">{children}</section>
    </div>
  );
}
