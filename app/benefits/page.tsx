"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Fuel, Hotel, Shield, PenTool as Tool, Utensils } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BenefitsPage() {
  const router = useRouter()

  const benefits = [
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Get access to the most competitive insurance rates in the industry",
      discount: "Up to 25% off",
    },
    {
      icon: Fuel,
      title: "Fuel Discounts",
      description: "Save on fuel at major truck stops across the country",
      discount: "Save $0.50/gallon",
    },
    {
      icon: Tool,
      title: "Maintenance & Parts",
      description: "Discounted rates on parts and service at certified locations",
      discount: "20% off parts",
    },
    {
      icon: Hotel,
      title: "Lodging",
      description: "Special rates at partner hotels and truck stops",
      discount: "15% off stays",
    },
    {
      icon: Utensils,
      title: "Food & Dining",
      description: "Exclusive deals at restaurants and truck stop dining",
      discount: "10% off meals",
    },
    {
      icon: Battery,
      title: "Tires & Batteries",
      description: "Premium products at discounted prices",
      discount: "30% off select items",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive Benefits for Truckers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Join LoadLink and get access to incredible savings and benefits designed specifically for truckers
            </p>
            <Button 
              size="lg"
              onClick={() => router.push("/register")}
            >
              Join Now
            </Button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary">{benefit.discount}</p>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => router.push("/register")}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Start Saving Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of truckers already saving with LoadLink's exclusive benefits program
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
    </div>
  )
}