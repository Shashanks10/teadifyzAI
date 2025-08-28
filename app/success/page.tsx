import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Meta-style header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1">
        <div className="bg-background">
          <header className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">f</span>
              </div>
              <span className="text-foreground font-semibold">Meta Business</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              Campaign Active
            </Badge>
          </header>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Campaign Successfully Created!</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your ad campaign is now live on Meta platforms. Our AI has optimized your targeting and budget allocation
              for maximum reach and engagement.
            </p>
          </div>

          {/* Campaign Summary */}
          <Card className="max-w-2xl mx-auto bg-card border-border text-left">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">T</span>
                </div>
                <span>Campaign Summary</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Your campaign details and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Campaign Status</p>
                  <p className="font-semibold text-card-foreground">Active & Running</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Daily Budget</p>
                  <p className="font-semibold text-card-foreground">$50.00 USD</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Target Audience</p>
                  <p className="font-semibold text-card-foreground">2.3M people</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ad Sets Created</p>
                  <p className="font-semibold text-card-foreground">3 optimized sets</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Platforms</p>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    Facebook
                  </Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-700">
                    Instagram
                  </Badge>
                  <Badge variant="outline" className="border-gray-200 text-gray-700">
                    Audience Network
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">View Dashboard</Button>
            </Link>
            <Button variant="outline" className="border-border text-card-foreground hover:bg-accent bg-transparent">
              Download Report
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
