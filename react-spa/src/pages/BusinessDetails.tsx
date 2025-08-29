"use client"

import { useAppState } from "@/context/AppState"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function BusinessDetails() {
  const { setBusiness } = useAppState()
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")
  const [industry, setIndustry] = useState("")
  const [gst, setGst] = useState("")
  const navigate = useNavigate()

  const onContinue = () => {
    setBusiness({ name, website, industry, gst })
    navigate("/payment")
  }

  return (
    <div className="card">
      <h1 className="h1">Business Details</h1>
      <div className="row">
        <div className="col">
          <label className="small">Business Name</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col">
          <label className="small">Website</label>
          <input
            className="input"
            placeholder="https://..."
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className="spacer"></div>
      <div className="row">
        <div className="col">
          <label className="small">Industry</label>
          <input className="input" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </div>
        <div className="col">
          <label className="small">GST (optional)</label>
          <input
            className="input"
            placeholder="GST number (optional)"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
          />
        </div>
      </div>
      <div className="spacer"></div>
      <button className="button primary" onClick={onContinue}>
        Continue to Payment
      </button>
    </div>
  )
}
