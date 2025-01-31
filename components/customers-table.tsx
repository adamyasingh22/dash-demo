import { Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  // ... other customers data
]

export function CustomersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Customers</CardTitle>
        <CardDescription>Active Members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search" className="pl-10 w-full px-3 py-2 border rounded-lg" />
            </div>
            <select className="px-4 py-2 border rounded-lg w-full sm:w-auto">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Customer Name</th>
                <th className="pb-4 hidden sm:table-cell">Company</th>
                <th className="pb-4 hidden md:table-cell">Phone Number</th>
                <th className="pb-4 hidden lg:table-cell">Email</th>
                <th className="pb-4 hidden xl:table-cell">Country</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.email} className="border-t">
                  <td className="py-4 font-medium">{customer.name}</td>
                  <td className="py-4 hidden sm:table-cell">{customer.company}</td>
                  <td className="py-4 hidden md:table-cell">{customer.phone}</td>
                  <td className="py-4 hidden lg:table-cell">{customer.email}</td>
                  <td className="py-4 hidden xl:table-cell">{customer.country}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        customer.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
          <p className="text-sm text-gray-500">Showing data 1 to 8 of 256K entries</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, "...", 40].map((page, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  page === 1 ? "bg-[#7c3aed] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

