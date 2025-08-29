export default function Dashboard() {
  return (
    <>
      <h1 className="h1">Dashboard</h1>
      <div className="row">
        <div className="kpi col">
          <strong>CTR</strong>
          <div className="p">3.2%</div>
        </div>
        <div className="kpi col">
          <strong>Conversions</strong>
          <div className="p">128</div>
        </div>
        <div className="kpi col">
          <strong>Spend</strong>
          <div className="p">$1,240</div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="row">
        {["Spring Sale", "Lead Gen Q3", "Brand Lift Test"].map((name) => (
          <div className="card col" key={name}>
            <div className="h2">{name}</div>
            <p className="p">Status: Active</p>
            <p className="p">Budget: $50/day</p>
          </div>
        ))}
      </div>
    </>
  )
}
