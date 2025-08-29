"use client"

import { useNavigate } from "react-router-dom"

export default function Auth() {
  const navigate = useNavigate()
  return (
    <div className="card">
      <h1 className="h1">Sign in</h1>
      <p className="p">Choose a provider to continue.</p>
      <div className="row">
        <button className="button primary" onClick={() => navigate("/business-details")}>
          Continue with Google
        </button>
        <button className="button" onClick={() => navigate("/business-details")}>
          Continue with Facebook
        </button>
      </div>
      <p className="small" style={{ marginTop: 12 }}>
        UI demo only (no real auth).
      </p>
    </div>
  )
}
