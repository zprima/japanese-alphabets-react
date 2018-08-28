import React, { Component } from "react";

class JpnTitle extends Component {
  state = {
    title: this.props.title
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>{this.state.title}</h2>
        </div>
      </div>
    );
  }
}

export default JpnTitle;
