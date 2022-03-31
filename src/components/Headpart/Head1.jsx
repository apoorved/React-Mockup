import React from 'react';
import "./Head1.css";
import {AiOutlineArrowRight} from "react-icons/ai"

export default function Head1() {
  return (
    <div className="Cont">
      <div className='Cont2'>
        
        <h2 className='Dashboards'>Dashboards</h2>
        <div className='heading'>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
          <label class="form-check-label" for="flexCheckDefault">
          All Technician
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
          <label class="form-check-label" for="flexCheckChecked">
          All Scientist
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckchecked" checked/>
          <label class="form-check-label" for="flexCheckDefault">
          All Pathologist
          </label>
          </div>
        </div>
      </div>
      <div className='Side'>
        <div className="backcont">
          <div className='Back'>Back to Slide ID Manager</div>
          <div className='Backicon'><AiOutlineArrowRight/></div>
        </div>
        <button type="button" class="btn-primary" data-bs-toggle="button" autocomplete="off">Week</button>
        <button type="button" class="btn-primary" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Month</button>
        <button type="button" class="btn-primary" data-bs-toggle="button" autocomplete="off"> Custom</button>
       
      </div>
    </div>
  )
}
