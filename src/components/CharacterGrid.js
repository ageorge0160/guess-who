import React from 'react';
// import charactersInfo from '../src/data/charactersInfo.js'
import Character from './Character';

const charactersInfo = [
  {id: 0,
  name: "Vincent Crabbe",
  img_url: ".src/data/images/vincent_crabbe.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "green",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "slytherin"
    }
  },

  {id: 1,
  name: "Gregory Goyle",
  img_url: ".src/data/images/gregory_goyle.jpg",
  chars: {
    gender: "male",
    eyeColor: "brown",
    hairColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "slytherin"
    }
  },

  {id: 2,
  name: "Blaise Zabini",
  img_url: "/images/blaise_zabini.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "slytherin"
    }
  },

  {id: 3,
  name: "Draco Malfoy",
  img_url: "/images/theodore_nott.jpg",
  chars: {
    gender: "male",
    hairColor: "blonde",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "slytherin"
    }
  },

  {id: 4,
  name: "Daphne Greengrass",
  img_url: "/images/daphne_greengrass.jpg",
  chars: {
    gender: "female",
    hairColor: "blonde",
    eyeColor: "green",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "slytherin"
    }
  },

  {id: 5,
  name: "Pansy Parkinson",
  img_url: "/images/pansy_parkinson.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "slytherin"
    }
  },

  {id: 6,
  name: "Tracey Davis",
  img_url: "/images/tracey_davis.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "blue",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "slytherin"
    }
  },

  {id: 7,
  name: "Millicent Bulstrode",
  img_url: "/images/millicent_bulstrode.jpg",
  chars: {
    gender: "female",
    hairColor: "black",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "slytherin"
    }
  },

  {id: 8,
  name: "Micheal Corner",
  img_url: "/images/micheal_corner.jpg",
  chars: {
    gender: "male",
    hairColor: "black",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "ravenclaw"
    }
  },

  {id: 9,
  name: "Terry Boot",
  img_url: "/images/terry_boot.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "ravenclaw"
    }
  },

  {id: 10,
  name: "Anthony Goldstein",
  img_url: "/images/anthony_goldstein.jpg",
  chars: {
    gender: "male",
    hairColor: "blonde",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "ravenclaw"
    }
  },

  {id: 11,
  name: "Kevin Entwhistle",
  img_url: "/images/kevin_entwhistle.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "green",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "ravenclaw"
    }
  },

  {id: 12,
  name: "Lisa Turpin",
  img_url: "/images/lisa_turpin.jpg",
  chars: {
    gender: "female",
    hairColor: "black",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "ravenclaw"
    }
  },

  {id: 13,
  name: "Morag Macdougal",
  img_url: "/images/morag_macdougal.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "ravenclaw"
    }
  },

  {id: 14,
  name: "Mandy Brocklehurst",
  img_url: "/images/mandy_brocklehurst.jpg",
  chars: {
    gender: "female",
    hairColor: "blonde",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "ravenclaw"
    }
  },

  {id: 15,
  name: "Padma Patil",
  img_url: "/images/padma_patil.jpg",
  chars: {
    gender: "female",
    hairColor: "black",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "ravenclaw"
    }
  },

  {id: 16,
  name: "Dean Thomas",
  img_url: "/images/dean_thomas.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "gryffindor"
    }
  },

  {id: 17,
  name: "Seamus Finnigan",
  img_url: "/images/seamus_finnigan.jpg",
  chars: {
    gender: "male",
    eyeColor: "brown",
    hairColor: "blue",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "gryffindor"
    }
  },

  {id: 18,
  name: "Neville Longbottom",
  img_url: "/images/neville_longbottom.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "gryffindor"
    }
  },

  {id: 19,
  name: "Harry Potter",
  img_url: "/images/harry_potter.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "green",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "gryffindor"
    }
  },

  {id: 20,
  name: "Ron Weasley",
  img_url: "/images/ron_weasley.jpg",
  chars: {
    gender: "male",
    hairColor: "red",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "gryffindor"
    }
  },

  {id: 21,
  name: "Hermione Granger",
  img_url: "/images/hermione_granger.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "gryffindor"
    }
  },

  {id: 22,
  name: "Pavarti Patil",
  img_url: "/images/pavarti_patil.jpg",
  chars: {
    gender: "female",
    hairColor: "black",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "gryffindor"
    }
  },

  {id: 23,
  name: "Lavender Brown",
  img_url: "/images/lavender_brown.jpg",
  chars: {
    gender: "female",
    hairColor: "blonde",
    eyeColor: "blue",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "gryffindor"
    }
  },

  {id: 24,
  name: "Ernie Macmillan",
  img_url: "/images/ernie_macmillan.jpg",
  chars: {
    gender: "male",
    hairColor: "blonde",
    eyeColor: "green",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "hufflepuff"
    }
  },

  {id: 25,
  name: "Justin Finch-Fetchley",
  img_url: "/images/justin_finch_fetchley.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "hufflepuff"
    }
  },

  {id: 26,
  name: "Zacharias Smith",
  img_url: "/images/zacharias_smith.jpg",
  chars: {
    gender: "male",
    hairColor: "blonde",
    eyeColor: "brown",
    hasScarf: true,
    hasTie: false,
    hairLength: "short",
    house: "hufflepuff"
    }
  },

  {id: 27,
  name: "Wayne Hopkins",
  img_url: "/images/wayne_hopkins.jpg",
  chars: {
    gender: "male",
    hairColor: "brown",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "short",
    house: "hufflepuff"
    }
  },

  {id: 28,
  name: "Megan Jones",
  img_url: "/images/megan_jones.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "blue",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "hufflepuff"
    }
  },

  {id: 29,
  name: "Leanne Moon",
  img_url: "/images/leanne_moon.jpg",
  chars: {
    gender: "female",
    hairColor: "black",
    eyeColor: "brown",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "hufflepuff"
    }
  },

  {id: 30,
  name: "Hannah Abbott",
  img_url: "/images/hannah_abbott.jpg",
  chars: {
    gender: "female",
    hairColor: "brown",
    eyeColor: "brown",
    hasScarf: false,
    hasTie: true,
    hairLength: "long",
    house: "hufflepuff"
    }
  },

  {id: 31,
  name: "Susan Bones",
  img_url: "/images/susan_bones.jpg",
  chars: {
    gender: "female",
    hairColor: "red",
    eyeColor: "blue",
    hasScarf: true,
    hasTie: false,
    hairLength: "long",
    house: "hufflepuff"
    }
  },
]

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
              <Character />
              <td>{charactersInfo[0].name}</td>
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
