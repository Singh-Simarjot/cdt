import React, { Component } from 'react';

class InternalNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="content-block">
                <ul className="page-navigation">
                <li>
                    {" "}
                    <a href={"#" + this.props.link}> {this.props.title} </a>{" "}
                </li>
                </ul>
            </div>
         );
    }
}
 
export default InternalNav;