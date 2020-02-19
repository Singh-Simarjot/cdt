import React, { Component } from "react";
import "./loder.scss";
class Loder extends Component {
  state = {};
  render() {
    return (
      <div className="loder">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loder;
