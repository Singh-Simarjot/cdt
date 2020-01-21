import React, { Component } from 'react';
import "./icon.scss"

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="px-ratio">
                <div className="grid">
                    <h6 className="icon-name">{this.props.iconName}</h6>
                    <div className="icon-preview">
                        <span>
                        <i class={this.props.iconShow} aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Icon;