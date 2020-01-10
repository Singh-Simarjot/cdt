import React, { Component } from "react";

const Context = React.createContext();

export class ProjectsContext extends Component {
  state = { selectedZoneType:null, allOptions:[] };

  onSlideChange = selectedZoneType => {
    this.setState({ selectedZoneType });
  };
  getAllOptions = data => {
    console.log(data)
    this.setState({allOptions:data,selectedZoneType:this.state.selectedZoneType===null?data[0]:this.state.selectedZoneType})
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onSlideChange: this.onSlideChange, getOptions:this.getAllOptions }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
