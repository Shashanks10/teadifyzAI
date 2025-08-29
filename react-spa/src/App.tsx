import { Routes, Route, Navigate, Link } from "react-router-dom"
import { AppStateProvider } from "./context/AppState"
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import BusinessDetails from "./pages/BusinessDetails"
import Payment from "./pages/Payment"
import PaymentGateway from "./pages/PaymentGateway"
import CampaignSelection from "./pages/CampaignSelection"
import CampaignSetup from "./pages/CampaignSetup"
import LoadingPage from "./pages/LoadingPage"
import AdsetsPreview from "./pages/AdsetsPreview"
import Success from "./pages/Success"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <AppStateProvider>
      <div className="app-shell">
        <header className="app-header">
          <Link to="/" className="brand">
            TEadify
          </Link>
          <nav className="nav">
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/business-details" element={<BusinessDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-gateway" element={<PaymentGateway />} />
            <Route path="/campaign-selection" element={<CampaignSelection />} />
            <Route path="/campaign-setup" element={<CampaignSetup />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/adsets-preview" element={<AdsetsPreview />} />
            <Route path="/success" element={<Success />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="app-footer">© {new Date().getFullYear()} TEadify</footer>
      </div>
    </AppStateProvider>
  )
}
