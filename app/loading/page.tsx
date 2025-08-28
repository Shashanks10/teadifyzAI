"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const steps = [
    "Analyzing your business profile...",
    "AI is generating campaign strategies...",
    "Creating optimized ad sets...",
    "Configuring audience targeting...",
    "Finalizing campaign setup...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => router.push("/adsets-preview"), 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-border">
        <CardContent className="p-8 text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <h1 className="text-2xl font-bold text-card-foreground">TEadify</h1>
          </div>

          {/* Animated Loading Circle */}
          <div className="relative w-24 h-24 mx-auto">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-border"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-primary"
                style={{
                  strokeDasharray: `${2 * Math.PI * 40}`,
                  strokeDashoffset: `${2 * Math.PI * 40 * (1 - progress / 100)}`,
                  transition: "stroke-dashoffset 0.1s ease-in-out",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-card-foreground">Creating Your Campaign</h2>
            <p className="text-muted-foreground animate-pulse">{steps[currentStep]}</p>
          </div>

          {/* Floating Dots Animation */}
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
