import React, { Component } from 'react';
import Icon from './Icon';



class IconGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="icon-grid">
                <h3>Navigation</h3>
                <div className="icon-list">
                    <Icon iconName="Add" iconShow="fa fa-plus" />
                    <Icon iconName="Add alt" iconShow="fa fa-plus-circle" />
                    <Icon iconName="Edit" iconShow="fa fa-pencil" />
                    <Icon iconName="Sort Descending" iconShow="fa fa-sort-desc" />
                    <Icon iconName="Sort Ascending" iconShow="fa fa-sort-asc" />
                    <Icon iconName="Refresh" iconShow="fa fa-refresh" />
                    <Icon iconName="Recycle" iconShow="fa fa-recycle" />
                    <Icon iconName="Add Image" iconShow="fa fa-picture-o" />
                    <Icon iconName="History" iconShow="fa fa-history" />
                    <Icon iconName="Menu Bar" iconShow="fa fa-bars" />
                    <Icon iconName="Direction Arrow" iconShow="fa fa-arrows" />
                    <Icon iconName="Check" iconShow="fa fa-check-circle-o" />
                    <Icon iconName="Eye" iconShow="fa fa-eye" />
                </div>
            </div>
         );
    }
}
 
export default IconGrid;