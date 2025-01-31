"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, BarChart, Package, DollarSign, Megaphone, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart,
  },
  {
    title: "Product",
    href: "/product",
    icon: Package,
  },
  {
    title: "Income",
    href: "/income",
    icon: DollarSign,
  },
  {
    title: "Promote",
    href: "/promote",
    icon: Megaphone,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors",
            pathname === item.href && "bg-[#7c3aed] text-white hover:bg-[#7c3aed]",
          )}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}

