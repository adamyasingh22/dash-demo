import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CRM Dashboard",
  description: "A modern CRM dashboard built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1 w-full">
            <Header />
            <main className="p-4 sm:p-6 lg:p-8 bg-[#f7f4ff]">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

