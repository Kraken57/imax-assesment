"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Truck } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navbar() {
  const router = useRouter()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Button 
          variant="ghost" 
          className="flex items-center space-x-2"
          onClick={() => router.push("/")}
        >
          <Truck className="h-6 w-6" />
          <span className="font-bold text-xl">LoadLink</span>
        </Button>
        <div className="ml-auto flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/loads")}
          >
            Browse Loads
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => router.push("/post-load")}
          >
            Post Load
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => router.push("/benefits")}
          >
            Benefits
          </Button>
          <Button 
            variant="default" 
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}