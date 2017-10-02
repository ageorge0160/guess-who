import React from 'react';



class Character extends React.Component {
  render() {
    return React.createElement('button', {}, <img src='../src/images/draco_malfoy.jpg' alt='name'/>)
  }
}

export default Character
