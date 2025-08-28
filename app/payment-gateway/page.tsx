import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { CreditCard, Lock } from "lucide-react"

export default function PaymentGatewayPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">TEadify</h1>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl text-card-foreground">Payment Details</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Enter your payment information to complete your subscription
            </CardDescription>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Summary */}
            <div className="bg-accent/20 p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">Order Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Professional Plan</span>
                <span className="font-semibold text-card-foreground">$79/month</span>
              </div>
            </div>

            {/* Card Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number" className="text-card-foreground">
                  Card Number
                </Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-card-foreground">
                    Expiry Date
                  </Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-card-foreground">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardholder-name" className="text-card-foreground">
                  Cardholder Name
                </Label>
                <Input
                  id="cardholder-name"
                  placeholder="John Doe"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h3 className="font-semibold text-card-foreground">Billing Address</h3>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-card-foreground">
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-card-foreground">
                    City
                  </Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code" className="text-card-foreground">
                    Postal Code
                  </Label>
                  <Input
                    id="postal-code"
                    placeholder="10001"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-card-foreground">
                  Country
                </Label>
                <Select>
                  <SelectTrigger className="bg-input text-card-foreground border-border">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Link href="/payment" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border text-card-foreground hover:bg-accent bg-transparent"
                >
                  Back to Plans
                </Button>
              </Link>
              <Link href="/campaign-selection" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Complete Payment
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
