import React from 'react'
import "./Content.css"
import Slideprocessed from "./Charts/Slideprocessed";
export default function Content() {
  return (
    <div className="content">
          <div className="row">

              <div className="col-6 card ml-0"><Slideprocessed /></div>
              <div className="col-3 card">card 2</div>
              <div className="col-3 card mr-0">card 2</div>
          </div>
          <div className="row">
              <div className="col-6 card ml-0">card 1</div>
              <div className="col-3 card">card 2</div>
              <div className="col-3 card mr-0">card 2</div>
          </div>
          <div className="row">
              <div className="col-12 card ml-0">card 1</div>
          </div>

 
    </div>
    
  )
}
