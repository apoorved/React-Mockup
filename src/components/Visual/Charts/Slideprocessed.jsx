import React from 'react'
import {BiDotsVertical} from "react-icons/bi";
import "./Slideprocessed.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '15 Nov',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '22 Nov',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '29 Nov',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '6 Dec',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    }
  ];
  
export default function Slideprocessed() {
  return (
    <div className='total'>
        <div className='row1'>
            <span className='col-21'>
                <h2>Slide processed</h2>
            </span>
            <span className="col-30">
                <BiDotsVertical/>
            </span>
        </div>
        <div className='row2'>
            <span className='col-41'>+367</span>
            <span className='col-51'>+358</span>
            <span className='col-61'>+285</span>

        </div>
        <div className='row3'>
            <span className='col-71'>Technician</span>
            <span className='col-81'>Scientist</span>
            <span className='col-91'>Pathologist</span>

        </div>
        <div className='row4'>
          <div className='chart'>
            <AreaChart width={600} height={280} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis data Key="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            

          </div>
        </div>
    </div>
  )
}
