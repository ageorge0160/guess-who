import React from 'react';
// import Character from 'Character'

export class CharacterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      characters=[]
    }
  }
  render() {
    return (
      <div className="character-grid">
        {this.state.characters.map(character => {
          <div className="character-card">
            <img src={character.img_url} />
          </div>
        })}
        <p> This will be the body where the board goes in the component </p>
      </div>
    )
  }
}
export default CharacterGrid
