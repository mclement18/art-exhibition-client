import React, { MouseEvent } from "react"
import { Exhibition } from "../interfaces"
import { address } from "../utils"
import ForcastComponent from "./Forcast"
import ModalComponent from "./Modal"

interface CardProps {
  exhibition: Exhibition
}

const Card = ({exhibition}: CardProps) => {
  const imageUrl = (url: string) => url + '?height=300'

  const showModal = (event: MouseEvent) => {
    event.preventDefault()
    const { Modal } = require('bootstrap')
    const exhibitionModal = new Modal(`#${CSS.escape(exhibition._id)}`)
    exhibitionModal.show()
  }
  
  return (
    <>
      <div className="card mb-3" style={{height: '300px'}}>
        <div className="row g-0 h-100">
          <div className="col-md-4 h-100" style={{cursor: 'pointer'}} onClick={showModal}>
            {
              exhibition.primaryimageurl
                ? <div className="overflow-hidden rounded-start h-100"><img src={imageUrl(exhibition.primaryimageurl)} className="" alt="..." /></div>
                : <div className="bg-secondary rounded-start w-100 h-100"></div>
            }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title card-clickable-title" style={{cursor: 'pointer'}} onClick={showModal}>{exhibition.title}</h5>
              <p className="card-text">{exhibition.shortdescription}</p>
              <p className="card-text"><strong className="small">{exhibition.venue.fullname}</strong></p>
              {address(exhibition) ? <p className="card-text"><small>{address(exhibition)}</small></p> : null}
              <p className="card-text"><small className="text-muted">From: {exhibition.begindate} - To: {exhibition.enddate}</small></p>
              {exhibition.forcast ? <ForcastComponent forcast={exhibition.forcast}/> : null}
            </div>
          </div>
        </div>
      </div>
      <ModalComponent exhibition={exhibition} />
    </>
  )
}

export default Card
