"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#7c3aed]" />
            <span className="font-semibold">Dashboard</span>
          </div>
          <MainNav />
          <div className="bg-[#7c3aed] rounded-xl p-4 text-white">
            <p className="font-medium mb-2">Upgrade to PRO to get access all Features!</p>
            <Button variant="secondary" className="w-full bg-white text-[#7c3aed] hover:bg-gray-100">
              Get Pro Now!
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium">Evano</p>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

