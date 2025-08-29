"use client"

import type React from "react"

import { useAppState } from "@/context/AppState"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function PaymentGateway() {
  const { plan, setPaid } = useAppState()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onPay = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setPaid(true)
      navigate("/campaign-selection")
    }, 1000)
  }

  return (
    <div className="card" style={{ maxWidth: 520 }}>
      <h1 className="h1">Payment Gateway</h1>
      <p className="p">
        Plan: <strong>{plan ?? "—"}</strong>
      </p>
      <form onSubmit={onPay}>
        <label className="small">Cardholder Name</label>
        <input className="input" placeholder="Name on card" required />
        <div className="spacer"></div>
        <label className="small">Card Number</label>
        <input className="input" placeholder="4242 4242 4242 4242" required />
        <div className="spacer"></div>
        <div className="row">
          <div className="col">
            <label className="small">Expiry</label>
            <input className="input" placeholder="MM/YY" required />
          </div>
          <div className="col">
            <label className="small">CVC</label>
            <input className="input" placeholder="CVC" required />
          </div>
        </div>
        <div className="spacer"></div>
        <button className="button primary" disabled={loading}>
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
      <p className="small" style={{ marginTop: 10 }}>
        Mock payment UI (no real Stripe).
      </p>
    </div>
  )
}
