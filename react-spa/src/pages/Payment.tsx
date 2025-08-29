"use client"

import { useAppState } from "@/context/AppState"
import { useNavigate } from "react-router-dom"

const plans = [
  { id: "basic", name: "Basic", price: 19, features: ["Starter campaigns", "Email support"] },
  { id: "pro", name: "Pro", price: 49, features: ["A/B testing", "Priority support"] },
  { id: "enterprise", name: "Enterprise", price: 99, features: ["Advanced analytics", "Dedicated manager"] },
] as const

export default function Payment() {
  const { setPlan } = useAppState()
  const navigate = useNavigate()
  return (
    <>
      <h1 className="h1">Choose a Plan</h1>
      <div className="row">
        {plans.map((p) => (
          <div className="card col" key={p.id}>
            <h2 className="h2">{p.name}</h2>
            <p className="p">
              <strong>${p.price}</strong> / month
            </p>
            <ul className="p">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="spacer"></div>
            <button
              className="button primary"
              onClick={() => {
                setPlan(p.id)
                navigate("/payment-gateway")
              }}
            >
              Select {p.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
