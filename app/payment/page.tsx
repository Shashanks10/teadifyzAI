import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check } from "lucide-react"

export default function PaymentPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 ad campaigns",
        "Basic analytics",
        "Email support",
        "Standard templates",
        "Social media integration",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 ad campaigns",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "Multi-platform integration",
        "A/B testing",
        "Conversion tracking",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large businesses and agencies",
      features: [
        "Unlimited ad campaigns",
        "Premium analytics",
        "24/7 phone support",
        "White-label solution",
        "API access",
        "Advanced automation",
        "Custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">TEadify</h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground text-lg">Select the perfect plan for your advertising needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-card border-border ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/payment-gateway" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    Select {plan.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/business-details">
            <Button variant="outline" className="border-border text-card-foreground hover:bg-accent bg-transparent">
              Back to Business Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
