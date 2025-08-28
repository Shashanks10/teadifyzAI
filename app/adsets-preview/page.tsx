"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, Users, Target, DollarSign, MapPin, CreditCard, Lock, Loader2 } from "lucide-react"

export default function AdSetsPreviewPage() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)
  const [showPaymentGateway, setShowPaymentGateway] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const adSets = [
    {
      id: 1,
      name: "Premium Audience - Age 25-35",
      audience: "25-35 years, High Income",
      budget: "$50/day",
      reach: "12,000-15,000",
      location: "New York, NY",
      interests: ["Technology", "Shopping", "Business"],
      status: "Ready to Launch",
    },
    {
      id: 2,
      name: "Young Professionals - Urban",
      audience: "22-30 years, College Educated",
      budget: "$35/day",
      reach: "8,500-11,000",
      location: "San Francisco, CA",
      interests: ["Career", "Lifestyle", "Innovation"],
      status: "Ready to Launch",
    },
    {
      id: 3,
      name: "Family Focused - Suburban",
      audience: "30-45 years, Parents",
      budget: "$40/day",
      reach: "10,000-13,000",
      location: "Chicago, IL",
      interests: ["Family", "Home", "Education"],
      status: "Ready to Launch",
    },
    {
      id: 4,
      name: "Tech Enthusiasts - Metro",
      audience: "25-40 years, Tech Workers",
      budget: "$45/day",
      reach: "9,000-12,000",
      location: "Seattle, WA",
      interests: ["Technology", "Gadgets", "Innovation"],
      status: "Ready to Launch",
    },
    {
      id: 5,
      name: "Creative Professionals",
      audience: "24-38 years, Creative Industry",
      budget: "$38/day",
      reach: "7,500-10,000",
      location: "Los Angeles, CA",
      interests: ["Design", "Art", "Media"],
      status: "Ready to Launch",
    },
    {
      id: 6,
      name: "Health & Wellness Focus",
      audience: "28-42 years, Health Conscious",
      budget: "$42/day",
      reach: "11,000-14,000",
      location: "Austin, TX",
      interests: ["Health", "Fitness", "Wellness"],
      status: "Ready to Launch",
    },
    {
      id: 7,
      name: "Business Owners - SMB",
      audience: "35-50 years, Entrepreneurs",
      budget: "$55/day",
      reach: "6,000-8,500",
      location: "Miami, FL",
      interests: ["Business", "Entrepreneurship", "Growth"],
      status: "Ready to Launch",
    },
    {
      id: 8,
      name: "Students & Recent Grads",
      audience: "18-26 years, Education",
      budget: "$25/day",
      reach: "15,000-18,000",
      location: "Boston, MA",
      interests: ["Education", "Career", "Technology"],
      status: "Ready to Launch",
    },
    {
      id: 9,
      name: "Luxury Shoppers",
      audience: "30-50 years, High Disposable Income",
      budget: "$65/day",
      reach: "5,000-7,000",
      location: "Beverly Hills, CA",
      interests: ["Luxury", "Fashion", "Premium Brands"],
      status: "Ready to Launch",
    },
    {
      id: 10,
      name: "Remote Workers",
      audience: "25-40 years, Work from Home",
      budget: "$48/day",
      reach: "13,000-16,000",
      location: "Denver, CO",
      interests: ["Remote Work", "Productivity", "Technology"],
      status: "Ready to Launch",
    },
  ]

  const handleLaunchAds = () => {
    setShowPaymentPopup(true)
  }

  const handleProceedToPayment = () => {
    setShowPaymentGateway(true)
  }

  const handleProcessPayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowPaymentPopup(false)
      setShowPaymentGateway(false)
      router.push("/success")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">TEadify</h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">AdSets Preview</h2>
          <p className="text-muted-foreground text-lg">
            Review your AI-generated ad sets before launching your campaign
          </p>
        </div>

        {/* AdSets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adSets.map((adSet) => (
            <Card key={adSet.id} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-card-foreground">{adSet.name}</CardTitle>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{adSet.status}</Badge>
                </div>
                <CardDescription className="text-muted-foreground">AdSet #{adSet.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">{adSet.audience}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">Budget: {adSet.budget}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">Reach: {adSet.reach}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-card-foreground">{adSet.location}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-card-foreground">Interests:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {adSet.interests.map((interest, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-secondary/50 text-secondary-foreground"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Launch Button */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-accent/20 p-4 rounded-lg border border-border text-center max-w-2xl">
            <h3 className="font-semibold text-card-foreground mb-2">Campaign Summary</h3>
            <p className="text-muted-foreground text-sm">
              Total Daily Budget: $443 • Estimated Total Reach: 97,000-129,500 people
            </p>
          </div>

          <div className="flex space-x-4">
            <Link href="/loading">
              <Button variant="outline" className="border-border text-card-foreground hover:bg-accent bg-transparent">
                Back to Campaign
              </Button>
            </Link>
            <Button onClick={handleLaunchAds} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Launch ADS
            </Button>
          </div>
        </div>

        <Dialog open={showPaymentPopup} onOpenChange={setShowPaymentPopup}>
          <DialogContent className="sm:max-w-md bg-card border-border">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3 text-card-foreground">
                {/* Meta Logo */}
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">f</span>
                </div>
                <span>Payment for Meta</span>
              </DialogTitle>
            </DialogHeader>

            {!showPaymentGateway ? (
              <div className="space-y-6 py-4">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">
                    Complete your payment to launch your Meta advertising campaign
                  </p>
                  <div className="bg-accent/20 p-3 rounded-lg border border-border">
                    <p className="font-semibold text-card-foreground">Campaign Total: $443/day</p>
                    <p className="text-sm text-muted-foreground">10 AdSets • Estimated reach: 97K-129K</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowPaymentPopup(false)}
                    className="flex-1 border-border text-card-foreground hover:bg-accent bg-transparent"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleProceedToPayment}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 py-4">
                {!isProcessing ? (
                  <>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-card-foreground">
                          Card Number
                        </Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="bg-input border-border text-card-foreground pl-10"
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-card-foreground">
                            Expiry Date
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="bg-input border-border text-card-foreground"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-card-foreground">
                            CVV
                          </Label>
                          <Input id="cvv" placeholder="123" className="bg-input border-border text-card-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-card-foreground">
                          Cardholder Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="bg-input border-border text-card-foreground"
                        />
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span>Your payment information is secure and encrypted</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        onClick={() => setShowPaymentGateway(false)}
                        className="flex-1 border-border text-card-foreground hover:bg-accent bg-transparent"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleProcessPayment}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Pay $443
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <div className="space-y-2">
                      <p className="font-semibold text-card-foreground">Processing Payment...</p>
                      <p className="text-sm text-muted-foreground">Please wait while we process your payment</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
