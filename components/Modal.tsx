import React from "react"
import { Exhibition } from "../interfaces"
import { address } from "../utils"
import ForcastComponent from "./Forcast"

interface ModalProps {
  exhibition: Exhibition
}

const ModalComponent = ({exhibition}: ModalProps) => {
  const imageUrl = (url: string) => url + '?height=600'
  const mapsUrl = () => `https://www.google.com/maps/place/${exhibition.location[0]},${exhibition.location[1]}`
  
  const curator = () => {
    if (exhibition.people) {
      return exhibition.people[0]
    }
  }
  
  return (
    <div className="modal fade" id={exhibition._id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="card" style={{height: '600px'}}>
              <div className="row g-0 h-100">
                <div className="col-md-4 h-100" style={{cursor: 'pointer'}}>
                  {
                    exhibition.primaryimageurl
                      ? <div className="overflow-hidden rounded-start h-100"><a href={exhibition.url} target="_blank" rel="noreferrer"><img src={imageUrl(exhibition.primaryimageurl)} className="" alt="..." /></a></div>
                      : <div className="bg-secondary rounded-start w-100 h-100"></div>
                  }
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title card-clickable-title" style={{cursor: 'pointer'}}><a href={exhibition.url} target="_blank" rel="noreferrer">{exhibition.title}</a></h3>
                    {
                      curator
                        ? <h6 className="card-subtitle mb-2 text-muted text-end">{curator()?.displayname}</h6>
                        : null
                    }
                    <p className="card-text py-1 small overflow-scroll" style={{maxHeight: '250px'}}>{exhibition.textiledescription}</p>
                    <p className="card-text">
                      <span className="me-3"><strong className="small">{exhibition.venue.fullname}</strong></span>
                      {
                        address(exhibition)
                          ? <span><small>
                            {
                              exhibition.location.length
                              ? <a href={mapsUrl()} target="_blank" rel="noreferrer">{address(exhibition)}</a>
                              : address(exhibition)
                            }
                          </small></span>
                          : null
                      }
                      </p>
                    <p className="card-text"><small className="text-muted">From: {exhibition.begindate} - To: {exhibition.enddate}</small></p>
                    {exhibition.forcast ? <ForcastComponent forcast={exhibition.forcast}/> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
