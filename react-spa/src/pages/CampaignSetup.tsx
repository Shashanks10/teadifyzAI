"use client"

import type React from "react"

import { useAppState } from "@/context/AppState"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function CampaignSetup() {
  const { setProduct, objective } = useAppState()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const onContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setProduct({ title, price, description })
    navigate("/loading")
  }

  return (
    <form className="card" onSubmit={onContinue}>
      <h1 className="h1">Campaign Setup</h1>
      <p className="p">
        Objective: <strong>{objective ?? "—"}</strong>
      </p>
      <div className="row">
        <div className="col">
          <label className="small">Product Title</label>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="col">
          <label className="small">Product Price</label>
          <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
      </div>
      <div className="spacer"></div>
      <label className="small">Product Description</label>
      <textarea className="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <div className="spacer"></div>
      <button className="button primary" type="submit">
        Continue
      </button>
    </form>
  )
}
