import React from 'react';

const Character = ({img_url}) {
    return (
      <div className="character">
        <img src={img_url} />
      </div>

    )
  }
}
export default Character
