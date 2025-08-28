"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  businessName?: string
}

interface AuthContextType {
  user: User | null
  login: (provider: "google" | "facebook") => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      setIsLoading(false)
    }
    checkAuth()
  }, [])

  const login = async (provider: "google" | "facebook") => {
    setIsLoading(true)
    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setUser({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      businessName: "Example Business",
    })
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
