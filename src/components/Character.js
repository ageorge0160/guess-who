import React from 'react';
import charactersInfo from 'charactersInfo'

const Character = ({img_url}) {
    return (
      <div className="character">
        <img src={img_url} />
      </div>

    )
  }
}
export default Character
