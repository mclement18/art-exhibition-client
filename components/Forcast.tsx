import React from "react"
import { Forcast } from "../interfaces"

interface PeriodProps {
  period: Forcast
}

const Period = ({period}: PeriodProps) => {
  return (
    <div className="d-flex flex-column align-items-center" style={{maxWidth: '86px'}}>
      <span className="fw-light text-center mb-auto" style={{fontSize: '.7em'}}>{period.name}</span>
      <img
        src={period.icon}
        className="rounded"
        height="56"
        width="56"
        title={period.shortForecast}
      />
    </div>
  )
}

interface ForcastProps {
  forcast: Forcast[]
}

const ForcastComponent = ({forcast}: ForcastProps) => {
  return (
    <div className="d-flex align-items-stretch justify-content-evenly w-100">
      {forcast.map((period) => <Period key={period.number} period={period} />)}
    </div>
  )
}

export default ForcastComponent
