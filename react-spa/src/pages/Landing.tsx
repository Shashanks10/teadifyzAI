"use client"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Landing() {
  const [url, setUrl] = useState("")
  const navigate = useNavigate()
  return (
    <div className="row">
      <div className="col">
        <div className="h1 text-balance">Promote your ads the smart way.</div>
        <p className="p">Enter a URL to get started, or sign in to manage campaigns.</p>
        <div className="row">
          <input
            className="input"
            placeholder="https://your-website.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="button primary" onClick={() => navigate("/auth")}>
            Continue
          </button>
        </div>
        <div className="spacer"></div>
        <Link to="/auth" className="button ghost">
          Sign in
        </Link>
      </div>
    </div>
  )
}
