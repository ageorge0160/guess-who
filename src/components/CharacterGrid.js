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
        <Character />
      </div>
    )
  }
}
export default CharacterGrid
