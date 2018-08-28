import React, { Component } from "react";
import JpnTitle from "./jpnTitle.jsx";
import JpnTable from "./jpnTable.jsx";

class JpnList extends Component {
  state = {
    alphabeth: this.props.alphabeth,
    title: this.props.title
  };

  render() {
    return (
      <React.Fragment>
        <JpnTitle title={this.state.title} />
        <JpnTable alphabeth={this.state.alphabeth} />
      </React.Fragment>
    );
  }
}

export default JpnList;
