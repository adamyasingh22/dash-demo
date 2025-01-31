import type React from "react"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = "", children }: CardProps) {
  return <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>{children}</div>
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardTitle({ className = "", children }: CardProps) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export function CardDescription({ className = "", children }: CardProps) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardFooter({ className = "", children }: CardProps) {
  return <div className={`px-6 py-4 bg-gray-50 ${className}`}>{children}</div>
}

