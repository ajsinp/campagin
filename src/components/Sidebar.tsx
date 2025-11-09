"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Campaigns", href: "/campaign" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-8"> Campaign Manager</h2>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`p-2 rounded-md ${
              path === href ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
