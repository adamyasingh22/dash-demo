import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export function Sidebar() {
  return (
    <div className="lg:w-64 lg:flex-shrink-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r lg:block hidden">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-full bg-[#7c3aed]" />
          <span className="font-semibold">Dashboard</span>
        </div>

        <div className="space-y-4">
          <MainNav />

          <div className="bg-[#7c3aed] rounded-xl p-4 text-white">
            <p className="font-medium mb-2">Upgrade to PRO to get access all Features!</p>
            <Button variant="secondary" className="w-full bg-white text-[#7c3aed] hover:bg-gray-100">
              Get Pro Now!
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium">Evano</p>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

