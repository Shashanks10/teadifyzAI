import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function BusinessDetailsPage() {
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
            <CardTitle className="text-2xl text-card-foreground">Business Details</CardTitle>
            <CardDescription className="text-muted-foreground">
              Tell us about your business to create targeted ad campaigns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="business-name" className="text-card-foreground">
                  Business Name
                </Label>
                <Input
                  id="business-name"
                  placeholder="Your Business Name"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-card-foreground">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="bg-input text-card-foreground border-border">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="about" className="text-card-foreground">
                About Your Business
              </Label>
              <Textarea
                id="about"
                placeholder="Describe your business, products, or services..."
                className="bg-input text-card-foreground border-border focus:ring-primary min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-card-foreground">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="City, State/Country"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-card-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-card-foreground">
                Business Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="business@example.com"
                className="bg-input text-card-foreground border-border focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gst" className="text-card-foreground">
                GST Number (Optional)
              </Label>
              <Input
                id="gst"
                placeholder="Enter GST number if applicable"
                className="bg-input text-card-foreground border-border focus:ring-primary"
              />
              <p className="text-sm text-muted-foreground">Provide your GST number for tax compliance (optional)</p>
            </div>

            <div className="flex space-x-4 pt-4">
              <Link href="/auth" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border text-card-foreground hover:bg-accent bg-transparent"
                >
                  Back
                </Button>
              </Link>
              <Link href="/payment" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue to Payment
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
