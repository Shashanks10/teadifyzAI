"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CampaignSetupPage() {
  const [currency, setCurrency] = useState("USD")

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
            <CardTitle className="text-2xl text-card-foreground">Campaign Setup</CardTitle>
            <CardDescription className="text-muted-foreground">
              Configure your ad campaign parameters for optimal performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-card-foreground">Product Information</h3>

              <div className="space-y-2">
                <Label htmlFor="product-title" className="text-card-foreground">
                  Product Title
                </Label>
                <Input
                  id="product-title"
                  placeholder="Enter your product name"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-price" className="text-card-foreground">
                  Product Price
                </Label>
                <div className="flex space-x-2">
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="w-24 bg-input text-card-foreground border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                      <SelectItem value="AUD">AUD</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="product-price"
                    type="number"
                    placeholder="99.99"
                    className="flex-1 bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-description" className="text-card-foreground">
                  Product Description
                </Label>
                <Textarea
                  id="product-description"
                  placeholder="Describe your product features and benefits..."
                  className="bg-input text-card-foreground border-border focus:ring-primary min-h-[100px]"
                />
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Campaign Settings</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time" className="text-card-foreground">
                    Start Time
                  </Label>
                  <Input
                    id="start-time"
                    type="datetime-local"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time" className="text-card-foreground">
                    End Time
                  </Label>
                  <Input
                    id="end-time"
                    type="datetime-local"
                    className="bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cta" className="text-card-foreground">
                  Call to Action
                </Label>
                <Select>
                  <SelectTrigger className="bg-input text-card-foreground border-border">
                    <SelectValue placeholder="Select call to action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="learn-more">Learn More</SelectItem>
                    <SelectItem value="shop-now">Shop Now</SelectItem>
                    <SelectItem value="sign-up">Sign Up</SelectItem>
                    <SelectItem value="download">Download</SelectItem>
                    <SelectItem value="book-now">Book Now</SelectItem>
                    <SelectItem value="contact-us">Contact Us</SelectItem>
                    <SelectItem value="get-quote">Get Quote</SelectItem>
                    <SelectItem value="watch-video">Watch Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-card-foreground">
                  Campaign Budget
                </Label>
                <div className="flex space-x-2">
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="w-24 bg-input text-card-foreground border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="CAD">CAD</SelectItem>
                      <SelectItem value="AUD">AUD</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="1000"
                    className="flex-1 bg-input text-card-foreground border-border focus:ring-primary"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Daily budget for your campaign</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-card-foreground">
                  Target Location
                </Label>
                <Input
                  id="location"
                  placeholder="Enter city, state, or country"
                  className="bg-input text-card-foreground border-border focus:ring-primary"
                />
                <p className="text-sm text-muted-foreground">Use Google Places API for precise location targeting</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Link href="/payment-gateway" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border text-card-foreground hover:bg-accent bg-transparent"
                >
                  Back
                </Button>
              </Link>
              <Link href="/loading" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Create Campaign
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
