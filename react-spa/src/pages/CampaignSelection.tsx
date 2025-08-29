"use client"

import { useAppState } from "@/context/AppState"
import { useNavigate } from "react-router-dom"

const metaObjectives = ["Brand Awareness", "Lead Form", "Website Visit", "Website Purchase"] as const
const googleObjectives = ["Search Leads", "App Promotion", "YouTube Views", "Smart Shopping"] as const

export default function CampaignSelection() {
  const { setObjective } = useAppState()
  const navigate = useNavigate()

  const onPick = (obj: (typeof metaObjectives)[number]) => {
    setObjective(obj)
    navigate("/campaign-setup")
  }

  return (
    <>
      <h1 className="h1">Select Platform & Objective</h1>
      <div className="row">
        <div className="card col">
          <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <h2 className="h2">META</h2>
            <span className="meta-badge">
              <span className="logo-meta" /> Verified
            </span>
          </div>
          <p className="p">Choose your campaign objective.</p>
          <div className="row">
            {metaObjectives.map((obj) => (
              <button key={obj} className="button" onClick={() => onPick(obj)}>
                {obj}
              </button>
            ))}
          </div>
        </div>

        <div className="card col coming-soon">
          <h2 className="h2">GOOGLE</h2>
          <p className="p">Campaign objectives</p>
          <div className="row">
            {googleObjectives.map((obj) => (
              <button key={obj} className="button" disabled>
                {obj}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
