import React, { Component } from "react";
import "./sidebarNav.scss";
 
import { Link } from 'react-router-dom';
class SidebarNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidebarNav">
        <h4>Pages</h4>
        <ul>
        <li>
            <Link to="/project">Pages</Link>
          </li>
          <li>
          <Link to="/project/addnew">Create New Page</Link>
            <a></a>
          </li>
          
        </ul>
        <br/>
        
        <h4>Navigation</h4>
       <ul>
        <li> <Link to="/project/navigation">Create Navigation</Link>
            
          </li>
          </ul>
      </div>
    );
  }
}

export default SidebarNav;
