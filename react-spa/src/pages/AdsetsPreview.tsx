"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Adset = { id: number; title: string; audience: string; budget: string }

const adsets: Adset[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Ad Set ${i + 1}`,
  audience: i % 2 === 0 ? "Lookalike 1%" : "Interest: Tech",
  budget: `$${(10 + i * 2).toFixed(2)}/day`,
}))

export default function AdsetsPreview() {
  const [showPay, setShowPay] = useState(false)
  const [processing, setProcessing] = useState(false)
  const navigate = useNavigate()

  const startPayment = () => setShowPay(true)
  const submitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => navigate("/success"), 1200)
  }

  return (
    <>
      <h1 className="h1">AdSets Preview</h1>
      <div className="row">
        {adsets.map((a) => (
          <div className="card col" key={a.id}>
            <div className="h2">{a.title}</div>
            <p className="p">Audience: {a.audience}</p>
            <p className="p">Budget: {a.budget}</p>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="center">
        <button className="button primary" onClick={startPayment}>
          Launch ADS
        </button>
      </div>

      {showPay && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Payment for Meta">
          <div className="modal">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 className="h2">Payment for Meta</h2>
              <span className="meta-badge">
                <span className="logo-meta" /> Meta
              </span>
            </div>
            <hr className="hr" />
            <form onSubmit={submitPayment}>
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
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button className="button primary" disabled={processing} type="submit">
                  {processing ? "Processing…" : "Pay & Launch"}
                </button>
                <button type="button" className="button" onClick={() => setShowPay(false)} disabled={processing}>
                  Cancel
                </button>
                {processing && <div className="spinner" aria-hidden="true"></div>}
              </div>
              <p className="small" style={{ marginTop: 10 }}>
                Mock payment in modal. No real charges.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
