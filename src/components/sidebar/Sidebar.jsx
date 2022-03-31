import React from 'react';
import "./Sidebar.css";
import {FaUserPlus, FaUserCog, FaSignOutAlt}  from "react-icons/fa";
import {BiListPlus} from "react-icons/bi";
import {GoGraph} from "react-icons/go";


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrap">
            <div className="sidebarmenu">
                <h3 className='sidebartitle'>My profile</h3>
                <ul className="sidebarlist"></ul>
                    <li className="sidebarlistitem">
                        USER   
                    </li>
                    <li className="sidebarlistitem active">
                        <GoGraph className="sidebaricon"/> 
                        Dashboard 
                    </li>
                    <li className="sidebarlistitem">
                        <FaUserPlus className="sidebaricon" />
                        Add New User
                    </li>
                    <li className="sidebarlistitem">
                        <FaUserCog className="sidebaricon"/>
                        Manage User
                    </li>
                    <li className="sidebarlistitem">
                        <BiListPlus className="sidebaricon" />
                        Manage List Items
                    </li>
                    <li className="sidebarlistitem">
                        <FaSignOutAlt className="sidebaricon" />
                        Signout
                    </li>
            </div>
        </div>

    </div>

  )
}
