import React from 'react';
// import charactersInfo from '../src/data/charactersInfo.js'
import Character from './Character';

export class CharacterGrid extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     characters=[]
  //   }
  // }
  render() {
    return (
      <div className="character-grid">
        <table>
          <th>Slytherin</th>
            <tr>
              <td>{charactersInfo[0].name}</td>
              <td>{charactersInfo[1].name}</td>
              <td>{charactersInfo[2].name}</td>
              <td>{charactersInfo[3].name}</td>

              <td>{charactersInfo[4].name}</td>
              <td>{charactersInfo[5].name}</td>
              <td>{charactersInfo[6].name}</td>
              <td>{charactersInfo[7].name}</td>
            </tr>
          <th>Ravenclaw</th>
            <tr>
              <td>{charactersInfo[8].name}</td>
              <td>{charactersInfo[9].name}</td>
              <td>{charactersInfo[10].name}</td>
              <td>{charactersInfo[11].name}</td>

              <td>{charactersInfo[12].name}</td>
              <td>{charactersInfo[13].name}</td>
              <td>{charactersInfo[14].name}</td>
              <td>{charactersInfo[15].name}</td>
            </tr>
          <th>Gryffindor</th>
            <tr>
              <td>{charactersInfo[16].name}</td>
              <td>{charactersInfo[17].name}</td>
              <td>{charactersInfo[18].name}</td>
              <td>{charactersInfo[19].name}</td>

              <td>{charactersInfo[20].name}</td>
              <td>{charactersInfo[21].name}</td>
              <td>{charactersInfo[22].name}</td>
              <td>{charactersInfo[23].name}</td>
            </tr>
          <th>Ravenclaw</th>
            <tr>
              <td>{charactersInfo[24].name}</td>
              <td>{charactersInfo[25].name}</td>
              <td>{charactersInfo[26].name}</td>
              <td>{charactersInfo[27].name}</td>

              <td>{charactersInfo[28].name}</td>
              <td>{charactersInfo[29].name}</td>
              <td>{charactersInfo[30].name}</td>
              <td>{charactersInfo[31].name}</td>
            </tr>
        </table>
      </div>
    )
  }
}
export default CharacterGrid
