'use client'
import { useState } from 'react'

function fmt(n: number) { return '₹' + n.toLocaleString('en-IN') }

export default function ROICalculator() {
  const [team, setTeam] = useState(5)
  const [hrs, setHrs] = useState(8)
  const [cost, setCost] = useState(500)
  const [leads, setLeads] = useState(50)
  const [deal, setDeal] = useState(25000)

  const mHrs = team * hrs * 4
  const mCost = mHrs * cost
  const mRev = leads * 4 * deal
  const total = mCost + mRev

  return (
    <div className="roi-section">
      <div className="roi-inner">
        <p className="sec-label">ROI calculator</p>
        <h2 className="sec-h">What is manual work actually costing you?</h2>
        <p className="sec-sub">Adjust the sliders to see your real monthly cost of not automating.</p>
        <div className="roi-grid">
          <div className="roi-sliders">
            {[
              { label: 'Team members doing manual work', val: team, set: setTeam, min: 1, max: 20, id: 'team', suffix: '' },
              { label: 'Hours wasted per person, per week', val: hrs, set: setHrs, min: 1, max: 40, id: 'hrs', suffix: 'h' },
              { label: 'Hourly cost per employee (₹)', val: cost, set: setCost, min: 100, max: 2000, id: 'cost', suffix: '', fmt: true },
              { label: 'Leads lost per month', val: leads, set: setLeads, min: 5, max: 500, id: 'leads', suffix: '' },
              { label: 'Average deal value (₹)', val: deal, set: setDeal, min: 5000, max: 500000, id: 'deal', suffix: '', fmt: true },
            ].map(s => (
              <div key={s.id} className="roi-slider-group">
                <label>
                  {s.label}
                  <span>{s.fmt ? fmt(s.val) : s.val + s.suffix}</span>
                </label>
                <input
                  type="range" min={s.min} max={s.max}
                  value={s.val} onChange={e => s.set(+e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className="roi-results">
            <div className="roi-result-row">
              <span className="roi-result-label">Manual hours wasted / month</span>
              <span className="roi-result-val">{mHrs} hrs</span>
            </div>
            <div className="roi-result-row">
              <span className="roi-result-label">Cost of manual labour / month</span>
              <span className="roi-result-val">{fmt(mCost)}</span>
            </div>
            <div className="roi-result-row">
              <span className="roi-result-label">Revenue lost from slow follow-up</span>
              <span className="roi-result-val">{fmt(mRev)}</span>
            </div>
            <div className="roi-result-row">
              <span className="roi-result-label">Total monthly opportunity cost</span>
              <span className="roi-result-val hl">{fmt(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
