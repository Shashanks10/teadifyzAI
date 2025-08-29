"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Facebook, Chrome, Clock } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CampaignSelectionPage() {
  const [leadDialogOpen, setLeadDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLeadForm = () => {
    setLeadDialogOpen(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/campaign-setup?platform=meta&objective=lead-form")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">TEadify</h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Platform</h2>
          <p className="text-muted-foreground">Select the advertising platform to create your campaign</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* META Card */}
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-card-foreground">META</CardTitle>
              <CardDescription className="text-muted-foreground">Facebook & Instagram Advertising</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/campaign-setup?platform=meta&objective=brand-awareness">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-border text-card-foreground hover:bg-accent bg-transparent text-sm"
                  >
                    Brand Awareness
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLeadForm}
                  className="w-full h-12 border-border text-card-foreground hover:bg-accent bg-transparent text-sm"
                >
                  Lead Form
                </Button>
                <Link href="/campaign-setup?platform=meta&objective=website-visit">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-border text-card-foreground hover:bg-accent bg-transparent text-sm"
                  >
                    Website Visit
                  </Button>
                </Link>
                <Link href="/campaign-setup?platform=meta&objective=website-purchase">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-border text-card-foreground hover:bg-accent bg-transparent text-sm"
                  >
                    Website Purchase
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* GOOGLE Card */}
          <Card className="bg-card border-border opacity-60 relative">
            <div className="absolute inset-0 bg-background/50 rounded-lg flex items-center justify-center z-10">
              <div className="text-center">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-lg font-semibold text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Chrome className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-card-foreground">GOOGLE</CardTitle>
              <CardDescription className="text-muted-foreground">Google Ads & YouTube Advertising</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  disabled
                  className="w-full h-12 border-border text-muted-foreground bg-transparent text-sm"
                >
                  Search Ads
                </Button>
                <Button
                  variant="outline"
                  disabled
                  className="w-full h-12 border-border text-muted-foreground bg-transparent text-sm"
                >
                  Display Ads
                </Button>
                <Button
                  variant="outline"
                  disabled
                  className="w-full h-12 border-border text-muted-foreground bg-transparent text-sm"
                >
                  YouTube Ads
                </Button>
                <Button
                  variant="outline"
                  disabled
                  className="w-full h-12 border-border text-muted-foreground bg-transparent text-sm"
                >
                  Shopping Ads
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/payment-gateway">
            <Button variant="outline" className="border-border text-card-foreground hover:bg-accent bg-transparent">
              Back to Payment
            </Button>
          </Link>
        </div>
      </div>

      {leadDialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Creating a Lead Form"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">m</span>
              </div>
              <h3 className="text-lg font-semibold">Lead Form Creation For Meta</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Creating a Lead Form for your Ad. Please wait...</p>

            <div className="flex items-center justify-center py-6">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Secured payment interface. Do not refresh this window.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
