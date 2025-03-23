"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Truck } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx"; // Utility for conditional class names

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  // Function to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo / Home Button */}
        <Button
          variant="ghost"
          className="flex items-center space-x-2"
          onClick={() => router.push("/")}
        >
          <Truck className="h-6 w-6" />
          <span className="font-bold text-xl">LoadLink</span>
        </Button>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center space-x-4">
          {[
            { name: "Browse Loads", path: "/loads" },
            { name: "Post Load", path: "/post-load" },
            { name: "Benefits", path: "/benefits" },
            { name: "Login", path: "/login", variant: "default" }
          ].map(({ name, path, variant }) => (
            <Button
              key={path}
              variant={variant || "ghost"}
              onClick={() => router.push(path)}
              className={clsx(
                "transition-colors",
                isActive(path) ? "underline decoration-2 decoration-primary" : ""
              )}
            >
              {name}
            </Button>
          ))}
          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
