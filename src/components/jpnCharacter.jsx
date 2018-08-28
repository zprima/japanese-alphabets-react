import React, { Component } from "react";

class JpnCharacter extends Component {
  state = {
    character: this.props.character
  };

  paintChar(character) {
    if (character.jpn) {
      return (
        <div style={{ textAlign: "center" }}>
          <div>{character.en}</div>
          <div style={{ color: "red", fontSize: 24 }}>{character.jpn}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const displayChar = {
      en: this.state.character.en,
      jpn: this.state.character.jpn && this.state.character.jpn.v
    };

    return this.paintChar(displayChar);
  }
}

export default JpnCharacter;
