import { MobileNav } from "@/components/mobile-nav"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input" 

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <MobileNav />
        <div className="flex flex-1 items-center justify-between">
          <h1 className="text-xl font-semibold">Hello Evano 👋</h1>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-[200px] lg:w-[300px]" />
          </div>
        </div>
      </div>
    </header>
  )
}

