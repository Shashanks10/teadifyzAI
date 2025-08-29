"use client"

import type React from "react"
import { createContext, useContext, useMemo, useState } from "react"

type Business = {
  name?: string
  website?: string
  industry?: string
  gst?: string // optional
}

type Plan = "basic" | "pro" | "enterprise" | null

type Objective = "Brand Awareness" | "Lead Form" | "Website Visit" | "Website Purchase" | null

type Product = {
  title?: string
  price?: string
  description?: string
}

type AppState = {
  business: Business
  setBusiness: (b: Business) => void
  plan: Plan
  setPlan: (p: Plan) => void
  objective: Objective
  setObjective: (o: Objective) => void
  product: Product
  setProduct: (p: Product) => void
  paid: boolean
  setPaid: (v: boolean) => void
}

const Ctx = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [business, setBusiness] = useState<Business>({})
  const [plan, setPlan] = useState<Plan>(null)
  const [objective, setObjective] = useState<Objective>(null)
  const [product, setProduct] = useState<Product>({})
  const [paid, setPaid] = useState(false)

  const value = useMemo(
    () => ({ business, setBusiness, plan, setPlan, objective, setObjective, product, setProduct, paid, setPaid }),
    [business, plan, objective, product, paid],
  )
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useAppState() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider")
  return ctx
}
