import React, { Component } from "react";
import { vowels, consonants } from "../utils/mappings.js";
import JpnCharacter from "../components/jpnCharacter.jsx";

class JpnTable extends Component {
  state = {
    alphabeth: this.props.alphabeth
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="jpn">
            <table className="table">
              <tbody>
                {vowels.map((v, vi) => (
                  <tr key={v + "_" + vi}>
                    {consonants.map((c, ci) => (
                      <td key={c + "_" + ci}>
                        <JpnCharacter
                          key={c + v}
                          character={{
                            en: c + v,
                            jpn: this.state.alphabeth.find(i => i.k === c + v)
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default JpnTable;
