"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const campaignData = [
  {
    id: 1,
    name: "Summer Sale Campaign",
    status: "Active",
    budget: "$150/day",
    spent: "$1,245",
    impressions: "45.2K",
    clicks: "1,234",
    ctr: "2.73%",
    adSets: [
      { id: 1, name: "Young Adults 18-25", budget: "$50", performance: 85 },
      { id: 2, name: "Parents 25-40", budget: "$60", performance: 92 },
      { id: 3, name: "Professionals 30-45", budget: "$40", performance: 78 },
    ],
  },
  {
    id: 2,
    name: "Brand Awareness Drive",
    status: "Active",
    budget: "$100/day",
    spent: "$890",
    impressions: "32.1K",
    clicks: "856",
    ctr: "2.67%",
    adSets: [
      { id: 4, name: "Tech Enthusiasts", budget: "$45", performance: 88 },
      { id: 5, name: "Early Adopters", budget: "$55", performance: 94 },
    ],
  },
  {
    id: 3,
    name: "Product Launch",
    status: "Paused",
    budget: "$200/day",
    spent: "$2,156",
    impressions: "67.8K",
    clicks: "2,034",
    ctr: "3.00%",
    adSets: [
      { id: 6, name: "Premium Customers", budget: "$80", performance: 96 },
      { id: 7, name: "Loyal Users", budget: "$70", performance: 89 },
      { id: 8, name: "New Prospects", budget: "$50", performance: 82 },
    ],
  },
]

const analyticsData = [
  { name: "Mon", impressions: 4000, clicks: 120, conversions: 24 },
  { name: "Tue", impressions: 3000, clicks: 98, conversions: 18 },
  { name: "Wed", impressions: 5000, clicks: 150, conversions: 32 },
  { name: "Thu", impressions: 4500, clicks: 135, conversions: 28 },
  { name: "Fri", impressions: 6000, clicks: 180, conversions: 38 },
  { name: "Sat", impressions: 5500, clicks: 165, conversions: 35 },
  { name: "Sun", impressions: 4800, clicks: 144, conversions: 30 },
]

export default function DashboardPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null)

  const selectedCampaignData = campaignData.find((c) => c.id === selectedCampaign)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">TEadify Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              3 Active Campaigns
            </Badge>
            <Button variant="outline" className="border-border text-foreground hover:bg-accent bg-transparent">
              Create Campaign
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-card border-border">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="campaigns"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Campaigns
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardDescription className="text-muted-foreground">Total Spent</CardDescription>
                  <CardTitle className="text-2xl text-card-foreground">$4,291</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardDescription className="text-muted-foreground">Impressions</CardDescription>
                  <CardTitle className="text-2xl text-card-foreground">145.1K</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardDescription className="text-muted-foreground">Clicks</CardDescription>
                  <CardTitle className="text-2xl text-card-foreground">4,124</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardDescription className="text-muted-foreground">Avg. CTR</CardDescription>
                  <CardTitle className="text-2xl text-card-foreground">2.84%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+0.3% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Weekly Performance</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Impressions and clicks over the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--card-foreground))",
                      }}
                    />
                    <Line type="monotone" dataKey="impressions" stroke="#8b5cf6" strokeWidth={2} />
                    <Line type="monotone" dataKey="clicks" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Campaign List */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Active Campaigns</h2>
                {campaignData.map((campaign) => (
                  <Card
                    key={campaign.id}
                    className={`bg-card border-border cursor-pointer transition-all hover:border-primary ${
                      selectedCampaign === campaign.id ? "border-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setSelectedCampaign(campaign.id)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-card-foreground">{campaign.name}</CardTitle>
                          <CardDescription className="text-muted-foreground">Budget: {campaign.budget}</CardDescription>
                        </div>
                        <Badge
                          variant={campaign.status === "Active" ? "default" : "secondary"}
                          className={
                            campaign.status === "Active"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-gray-100 text-gray-800 border-gray-200"
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Spent</p>
                          <p className="font-semibold text-card-foreground">{campaign.spent}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">CTR</p>
                          <p className="font-semibold text-card-foreground">{campaign.ctr}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Impressions</p>
                          <p className="font-semibold text-card-foreground">{campaign.impressions}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Clicks</p>
                          <p className="font-semibold text-card-foreground">{campaign.clicks}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Ad Sets Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedCampaignData ? `${selectedCampaignData.name} - Ad Sets` : "Select a Campaign"}
                </h2>
                {selectedCampaignData ? (
                  <div className="space-y-4">
                    {selectedCampaignData.adSets.map((adSet) => (
                      <Card key={adSet.id} className="bg-card border-border">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg text-card-foreground">{adSet.name}</CardTitle>
                              <CardDescription className="text-muted-foreground">
                                Budget: {adSet.budget}/day
                              </CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${
                                adSet.performance >= 90
                                  ? "border-green-200 text-green-700 bg-green-50"
                                  : adSet.performance >= 80
                                    ? "border-yellow-200 text-yellow-700 bg-yellow-50"
                                    : "border-red-200 text-red-700 bg-red-50"
                              }`}
                            >
                              {adSet.performance}% Performance
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Performance Score</span>
                              <span className="text-card-foreground">{adSet.performance}%</span>
                            </div>
                            <Progress value={adSet.performance} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="bg-card border-border">
                    <CardContent className="flex items-center justify-center h-40">
                      <p className="text-muted-foreground">Click on a campaign to view its ad sets</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Conversion Trends</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Daily conversions over the last week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--card-foreground))",
                        }}
                      />
                      <Bar dataKey="conversions" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Click-Through Rate</CardTitle>
                  <CardDescription className="text-muted-foreground">CTR performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                      data={analyticsData.map((item) => ({
                        ...item,
                        ctr: ((item.clicks / item.impressions) * 100).toFixed(2),
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--card-foreground))",
                        }}
                      />
                      <Line type="monotone" dataKey="ctr" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Analytics Table */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Campaign Performance Details</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Comprehensive metrics for all campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-card-foreground">Campaign</th>
                        <th className="text-left py-2 text-card-foreground">Status</th>
                        <th className="text-left py-2 text-card-foreground">Budget</th>
                        <th className="text-left py-2 text-card-foreground">Spent</th>
                        <th className="text-left py-2 text-card-foreground">Impressions</th>
                        <th className="text-left py-2 text-card-foreground">Clicks</th>
                        <th className="text-left py-2 text-card-foreground">CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaignData.map((campaign) => (
                        <tr key={campaign.id} className="border-b border-border/50">
                          <td className="py-3 text-card-foreground font-medium">{campaign.name}</td>
                          <td className="py-3">
                            <Badge
                              variant={campaign.status === "Active" ? "default" : "secondary"}
                              className={
                                campaign.status === "Active"
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : "bg-gray-100 text-gray-800 border-gray-200"
                              }
                            >
                              {campaign.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-muted-foreground">{campaign.budget}</td>
                          <td className="py-3 text-card-foreground">{campaign.spent}</td>
                          <td className="py-3 text-card-foreground">{campaign.impressions}</td>
                          <td className="py-3 text-card-foreground">{campaign.clicks}</td>
                          <td className="py-3 text-card-foreground">{campaign.ctr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
