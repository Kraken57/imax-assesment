"use client"

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { ArrowRight, Shield, Timer, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Connect with Trusted Truckers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The most efficient way to post loads and find reliable truckers. 
              Save time and money with our bidding system.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => router.push("/post-load")}
              >
                Post a Load <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => router.push("/loads")}
              >
                Find Loads
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose LoadLink?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Verified Truckers</h3>
                <p className="text-muted-foreground">
                  All truckers are thoroughly vetted with strict eligibility criteria including accident history and experience.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Timer className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">
                  Track your shipments in real-time and receive important alerts throughout the journey.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Truck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Exclusive Benefits</h3>
                <p className="text-muted-foreground">
                  Truckers get access to discounts on insurance, fuel, maintenance, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of shippers and truckers already using LoadLink
            </p>
            <Button 
              size="lg" 
              onClick={() => router.push("/register")}
            >
              Create Free Account
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6" />
              <span className="font-bold">LoadLink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LoadLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}