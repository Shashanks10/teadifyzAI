import { Link } from "react-router-dom"

export default function Success() {
  return (
    <div className="center" style={{ minHeight: 320, flexDirection: "column", gap: 12 }}>
      <div className="h1">Success! Your campaign is live.</div>
      <p className="p">We’ve launched your ads and started tracking performance.</p>
      <div className="row">
        <Link to="/dashboard" className="button primary">
          Go to Dashboard
        </Link>
        <Link to="/" className="button">
          Home
        </Link>
      </div>
    </div>
  )
}
