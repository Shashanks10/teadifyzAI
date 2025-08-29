"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LoadingPage() {
  const navigate = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => navigate("/adsets-preview"), 1200)
    return () => clearTimeout(t)
  }, [navigate])
  return (
    <div className="center" style={{ minHeight: 320, flexDirection: "column", gap: 12 }}>
      <div className="spinner"></div>
      <div className="p">Generating AI ad sets…</div>
    </div>
  )
}
